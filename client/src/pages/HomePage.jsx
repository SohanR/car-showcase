import Home from "../components/Home";
import VideoBanner from "../components/VideoBanner";
import FilterSearch from "../components/FilterSearch";
import Carcategory from "../components/Carcategory";
import About from "../components/About";
import CarShowcase from "../components/CarShowcase";
import CarFeatures from "../components/CarFeatures";
import OfferCTA from "../components/OfferCTA";
import Contact from "../components/Contact";
import SuccessStory from "../components/SuccessStory";
import ImageBanner from "../components/ImageBanner";
import LoaderComponent from "./LoaderComponent";
import { useScrollToTop } from "../hooks/useScrollToTop";

const HomePage = () => {
  useScrollToTop();
  return (
    <main className="main">
      <ImageBanner />
      {/* <Home /> */}
      {/* <VideoBanner /> */}
      <FilterSearch />
      <Carcategory />
      <About />
      {/* <CarShowcase /> */}
      <CarFeatures />
      <OfferCTA />
      <SuccessStory />
      <Contact />
    </main>
  );
};

export default HomePage;
