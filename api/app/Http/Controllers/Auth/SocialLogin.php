<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Laravel\Socialite\Contracts\Factory as Socialite;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class SocialLogin extends Controller
{
    /** @var Socialite */
    protected $socialite;

    /** @var Session */
    protected $session;

    public function __construct(Socialite $socialite, Session $session)
    {
        $this->socialite = $socialite;
        $this->session = $session;
    }

    /**
     * Redirect to social provider
     *
     * @param Request $request
     * @param  string $provider
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, string $provider)
    {
        $driver = $this->getDriver($provider);
        $this->session->put('social_login:query', $request->query->all());

        return $driver->with(['prompt' => 'select_account'])->redirect();
    }

    public function logout()
    {
        Auth::logout();

        return redirect()->to(config('app.url').'/login');
    }

    /**
     * @param  string $provider
     * @return \Laravel\Socialite\Contracts\Provider
     */
    protected function getDriver(string $provider)
    {
        if (!$this->isSupportedProvider($provider)) {
            throw new NotFoundHttpException('Unsupported provider');
        }

        return $this->socialite->driver($provider)->stateless();
    }

    /**
     * @param string $provider
     * @return bool
     */
    protected function isSupportedProvider(string $provider)
    {
        return in_array($provider, ['google', 'facebook', 'github']);
    }
}
