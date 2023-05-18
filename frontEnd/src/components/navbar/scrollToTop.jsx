import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(true);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {showScrollTopButton && (
        <KeyboardDoubleArrowUpIcon
          onClick={scrollTop}
          sx={{
            position: "fixed",
            bottom: "15px",
            right: "20px",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            border: "2px solid #333",
            bgColor: "#fff",
            color: "#333",
            cursor: "pointer"
          }}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
