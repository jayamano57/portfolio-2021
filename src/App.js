import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Landing from "./sections/landing/landing";
import Projects from "./sections/projects/projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
