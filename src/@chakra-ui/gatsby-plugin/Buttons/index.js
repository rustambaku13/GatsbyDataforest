export default {
  baseStyle: {
    borderRadius: "base",
    fontWeight: "regular",
  },
  sizes: {
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
    primaryBlueBerryBlueBase: {
      color: "white",
      bg: "blueberryBlue.base",
      border: "none",
      _hover: {
        bg: "blueberryBlue.dark",
      },
    },
    outline_md: {
      bg: "white",
      color: "text.dark",
      borderColor: "outline.medium",
      borderWidth: "0.5px",
      _hover: {
        bg: "charlestonGreen.light",
      },
    },
    black: {
      bg: "black",
      color: "white",
      border: "none",
      _hover: {
        bg: "blackAlpha.800",
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "md",
    variant: "primaryBlueBerryBlue",
  },
};
