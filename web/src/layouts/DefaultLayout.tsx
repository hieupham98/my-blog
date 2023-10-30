import Navbar from './components/NavBar';
import Container from '@mui/material/Container';
import Footer from './components/Footer';
import { WithAuthSync } from '../middleware/auth';

const Layout =  ({ children }) => {
  return (
    <>
        <Navbar />
        <div className="main-body">
              {children}
        </div>
        <Footer />
    </>
  )
}

export default WithAuthSync(Layout, 'user');

