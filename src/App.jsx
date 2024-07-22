import { Suspense, lazy } from "react";
import LoadingSpinner from "./utils/LoadingSppiner";
import Navbar from "./components/Navbar/Navbar";
import OneSection from "./components/Sections/OneSection";
import AboutSection from "./components/Sections/AboutSection";
import OurProjects from "./components/Sections/OurProjects";
import Testimonials from "./components/Sections/Testimonials";
import data from "./data.json";
const LazyHero = lazy(() => import("./components/Hero/Hero"));
const LazyFooter = lazy(() => import("./Footer/Footer"));
const LazyLastSection = lazy(() => import("./components/Sections/LastSection"));

function App() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <LazyHero />
      </Suspense>
      <OneSection />
      <AboutSection />
      <div
        style={{
          backgroundImage: `url(${data["section-two"].bg})`,
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Testimonials />
        <OurProjects />
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyLastSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyFooter />
      </Suspense>
    </main>
  );
}

export default App;
