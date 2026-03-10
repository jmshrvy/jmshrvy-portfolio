import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.getElementById("content-section");
    if (container) {
      container.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}