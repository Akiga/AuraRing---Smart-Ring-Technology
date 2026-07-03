import { lazy, Suspense } from "react";

import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";


// Lazy load sections
const Hero = lazy(() => import("../components/Hero"));
const Features = lazy(() => import("../components/Features"));
const Specs = lazy(() => import("../components/Specs"));
const Gallery = lazy(() => import("../components/Gallery"));
const Subscribe = lazy(() => import("../components/Newsletter"));
const Footer = lazy(() => import("../components/Footer"));


const Home = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Suspense
          fallback={
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center" >
              Loading...
            </div>
          }>
          <Hero />
          <Features />
          <Specs />
          <Gallery />
          <Subscribe />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
export default Home;