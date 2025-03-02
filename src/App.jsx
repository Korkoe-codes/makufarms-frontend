import { Header, About, Hero, Footer, Progress } from './components';
import { useScroll } from 'framer-motion'; // Corrected import for Framer Motion
import { useEffect, useState } from 'react';

function App() {
  const { scrollY } = useScroll(); // Tracks scroll position
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Logic to show/hide the button based on scroll position
  useEffect(() => {
    const updateVisibility = () => {
      // Assume Hero section height is roughly the viewport height (adjust as needed)
      const heroHeight = window.innerHeight;
      setShowBackToTop(scrollY.get() > heroHeight);
    };

    // Subscribe to scroll updates
    const unsubscribe = scrollY.onChange(updateVisibility);
    return () => unsubscribe(); // Cleanup on unmount
  }, [scrollY]);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-hidden flex flex-col relative">
      {/* Uncomment if you want to include Header */}
      {/* <div className="w-full">
        <Header />
      </div> */}

      <div className="h-full w-full">
        <Hero />
      </div>

      <div className="lg:mx-auto lg:px-28 px-14 w-full">
        <About />
      </div>

      <div className="lg:mx-auto w-full">
        <Progress />
      </div>

      {/* <div className="lg:mx-auto xl:px-20 px-5 lg:px-10 w-full">
        <ContactUs />
      </div> */}

      <div className="lg:mx-auto w-full">
        <Footer />
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-1 lg:bottom-10 lg:right-10  bg-[#F9A635] lg:bg-[#E9DED3] lg:w-16 lg:h-16 w-10 h-10 lg:p-3 rounded-full shadow-lg text-xl lg:text-3xl text-black hover:bg-[#F9A635] transition-all duration-300 ease-in-out z-50"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;