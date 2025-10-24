import { useEffect } from "react";

export default function useLockBodyScroll() {
  useEffect(() => {
    const scrollY = window.scrollY;

    // Lock the body position
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // Cleanup — restore scroll position and styles
    return () => {
      const scrollYStored = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollYStored || "0") * -1);
    };
  }, []);
}