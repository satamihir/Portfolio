import './App.css';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro'
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
