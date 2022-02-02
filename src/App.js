import ScrollToTop from "./components/ScrollToTop";
import About from "./layout/About";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import PageWrapper from "./layout/PageWrapper";
import SkillsList from "./layout/SkillsList";
import Portfolio from "./layout/Portfolio";
import { useState, useEffect } from "react";
import LaodingScreen from "./layout/LaodingScreen";
import Contact from "./layout/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration : 1500});

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="App">
          <Navbar />
            <ScrollToTop />
          <Header />
          <PageWrapper>
          <About />
          <SkillsList />
          <Portfolio />
          <Contact />
          </PageWrapper>
        </div>
      ) : (
        <LaodingScreen />
      )}
    </>
  );
}

export default App;
