import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <About />
      </main>

      <Footer />
    </>
  );
}

export default App;