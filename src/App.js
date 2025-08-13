import "./App.css";
import JlgHeroSection from "./JlgHeroSection";
import Services from "./Services";
import ChooseUs from "./ChooseUs";
import Serve from "./Serve";
import Locations from "./Locations";
import Quote from "./Quote";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <JlgHeroSection />
      <Services />
      <ChooseUs />
      <Serve />
      <Locations />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
