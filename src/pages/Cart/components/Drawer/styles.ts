import { styled } from "../../../../config/stitches.config";

export const Container = styled("div", {
  top: 0,
  position: "fixed",
  right: 0,
  height: "100%",
  transition: "transform .25s",
  zIndex: 1,
  background: "#000",
  overflow: "hidden",
  width: "540px",

  variants: {
    closed: {
      true: {
        transform: "translateX(540px)",
      }
    }
  },

  header: {
    padding: "2rem 0 1.5rem",
    height: "100px",
    display: "flex",
    justifyContent: "flex-end",

    "> button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50px",
      fontSize: "2rem",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      color: "white",
      height: "50px",
    }
  }
});

export const Form = styled("form", {
  display: "flex",
  padding: "0 1.5rem",
  width: "540px",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "80%",

  ".inputs": {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 16,

    "button": {
      background: "transparent",
      color: "#FFF",
      border: 0,
      width: "100%",
      textAlign: "left",
      cursor: "pointer",
      padding: "1rem .75rem",
      borderRadius: 8,
      fontSize: "1rem"
    }
  },

  "> button": {
    color: "$green700",
  }
});
