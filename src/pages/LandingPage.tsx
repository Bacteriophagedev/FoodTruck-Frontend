import { LandingNavbar } from "../components/landingpage/navbarlanding/Navbarlanding";
import { HeroFrame } from "../components/landingpage/hero/Hero";
import { Products } from "../components/landingpage/products/Products";
import { Restaurants } from "../components/landingpage/Restaurants/Restaurants";
import { Services } from "../components/landingpage/servicescomp/Services";
import Footer from "../components/landingpage/footer/Footer";

function LandingPage() {
  return (
    <div className="main-container">
      <LandingNavbar />
      <HeroFrame />
      <Services />
      <Restaurants />
      <Products />
      <Footer />
    </div>
  );
}

export default LandingPage;
