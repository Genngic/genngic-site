import Ambient from "./components/Ambient";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import NextTranslate from "./components/NextTranslate";
import UIGallery from "./components/UIGallery";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Notify from "./components/Notify";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Ambient />
      <Nav />
      <main>
        <Hero />
        <NextTranslate />
        <UIGallery />
        <HowItWorks />
        <About />
        <Notify />
      </main>
      <Footer />
    </>
  );
}

export default App;
