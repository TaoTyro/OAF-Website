import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Scroll detection (same logic)
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP enter / exit animation
  useEffect(() => {
    if (!buttonRef.current) return;

    if (isVisible) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
          pointerEvents: "auto",
        }
      );
    } else {
      gsap.to(buttonRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.25,
        ease: "power3.in",
        pointerEvents: "none",
      });
    }
  }, [isVisible]);

  // Scroll to top (GSAP smooth control)
  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6
        flex items-center justify-center
        h-12 w-12
        rounded-full
        bg-blue-600 text-white
        shadow-lg
        opacity-0 pointer-events-none
      "
      onMouseEnter={() =>
        gsap.to(buttonRef.current, { scale: 1.1, duration: 0.15 })
      }
      onMouseLeave={() =>
        gsap.to(buttonRef.current, { scale: 1, duration: 0.15 })
      }
      onMouseDown={() =>
        gsap.to(buttonRef.current, { scale: 0.95, duration: 0.1 })
      }
      onMouseUp={() =>
        gsap.to(buttonRef.current, { scale: 1.1, duration: 0.1 })
      }
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTopButton;
