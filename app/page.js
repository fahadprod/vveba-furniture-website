import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroHeader from "@/components/hero-header";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Products from "@/components/products";


export default function Home() {
  return (
    <div className="container">
      <Navbar/>
      <HeroHeader/>
      <Products/>
      <Pricing/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}
