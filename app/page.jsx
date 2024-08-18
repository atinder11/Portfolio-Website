import About from "@/components/About";
import Cta from "@/components/Cta";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "./projects/page";
import Contact from "./contact/page";


export default function Home() {
  return <main>

  <Hero/>
  <About/>
  <Services/>
  <Cta/>
  
  <Contact/>
  
 
  </main>;
}
