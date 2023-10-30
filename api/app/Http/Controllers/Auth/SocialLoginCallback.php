<?php

namespace App\Http\Controllers\Auth;

use App\Support\URL;
use Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Session\Store as Session;
use Illuminate\Support\Arr;
use Laravel\Socialite\Contracts\Factory as Socialite;

class SocialLoginCallback extends Controller
{
    /** @var Socialite */
    protected $socialite;

    /** @var Session */
    protected $session;

    /** @var Cookie */
    protected $idToken;

    /** @var \App\Components\Tracking\Utm */

    public function __construct(Socialite $socialite, Session $session)
    {
        $this->socialite = $socialite;
        $this->session = $session;
    }

    public function commonCallback(Request $request, string $provider)
    {
        $identity = $this->socialite->driver($provider)->stateless()->user();

        return !$request->user()
            ? $this->connectAccount($request->user(), $provider, $identity)
            : $this->login($request->user(), $provider, $identity, $request);
    }

    protected function connectAccount($user, $provider, $identity)
    {
        $user = $this->getExistingUser($identity);

        if ($user) {
            Auth::loginUsingId($user->id);

            return redirect()->to(config('app.url'));
        }

        $user = $this->createUser($provider, $identity);

        Auth::loginUsingId($user->id);
        return redirect()->to(config('app.url'));
    }

    protected function getExistingUser($identity)
    {
        return User::where('email', $identity->getEmail())->first();
    }

    protected function login($user, $provider, $identity, $request)
    {
        $linkedUser = $this->getLinkedUser($provider, $identity);

        Auth::loginUsingId($linkedUser->id);

        return redirect()->to(config('app.url'));
    }

    protected function createUser($provider, $identity)
    {
        return User::create([
            'provider' => $provider,
            'provider_id' => $identity->getId(),
            'email' => $identity->getEmail(),
            'username' => explode('@', $identity->getEmail())[0],
            'avatar' => $identity->getAvatar(),
            'name' => $identity->name,
        ]);
    }

    protected function getLinkedUser($provider, $identity)
    {
        return User::where([
            'provider' => $provider,
            'provider_id' => (string) $identity->getId(),
        ])->first();
    }
}
