import "./App.css";
import Home from "./components/Home";
import SectionWrapper from "./components/ui/SectionWrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SectionWrapper>
        <Home />
      </SectionWrapper>
      <Footer />
    </>
  );
}

export default App;
