"use client";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTopButton = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={trigger}>
      <IconButton
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
        sx={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          bgcolor: "primary.light",
          color: "primary.contrastText",
          opacity: 0.7,
          width: "45px",
          height: "45px",
          boxShadow: 3,
          zIndex: 1100,
          "&:hover": {
            bgcolor: "primary.main",
            opacity: 1,
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Fade>
  );
};

export default BackToTopButton;
