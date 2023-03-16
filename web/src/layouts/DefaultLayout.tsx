import Navbar from './components/NavBar';
import Container from '@mui/material/Container';
import Footer from './components/Footer';

export default function Layout({ children }) {
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