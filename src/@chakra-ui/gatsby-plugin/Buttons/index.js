export default {
  baseStyle: {
    borderRadius: "base",
    fontWeight: "regular",
    _focus: {
      boxShadow: "unset",
    },
  },
  sizes: {
    sm: {
      h: "40px",
      fontSize: "500",
      fontWeight: "500",
      px: "1rem",
    },
    md: {
      h: "48px",
      px: "1rem",
    },
    lg: {
      h: "56px",
      px: "1.25rem",
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primaryBlueBerryBlueDark: {
      color: "white",
      bg: "blueberryBlue.dark",
      border: "none",
      _hover: {
        bg: "blueberryBlue.base",
      },
    },

    outline: {
      bg: "white",
      color: "text.dark",
      borderColor: "outline.medium",
      borderWidth: "0.5px",
      _hover: {
        bg: "white",
        borderColor: "text.dark",
      },
    },
    sideMenu: {
      fontSize: "500",
      w: "100%",
      color: "romanSilver.base",
      textAlign: "left",
      justifyContent: "unset",
      _hover: { bg: "babyBlueEyes.light", color: "babyBlueEyes.dark" },
      borderRadius: "base",
      pl: 4,
    },
    persianGreen: {
      bg: "persianGreen.base",
      color: "white",
      _hover: {
        bg: "persianGreen.dark",
      },
    },
    black: {
      bg: "black",
      color: "white",
      border: "none",
      _hover: {
        bg: "charlestonGreen.dark",
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};
