export default {
  parts: ["field", "control"],
  baseStyle: {
    control: {
      bg: "white",
      borderColor: "blueberryBlue.dark",
      borderRadius: "sm",
      _checked: {
        bg: "blueberryBlue.dark",
        borderColor: "blueberryBlue.dark",
      },
    },
  },
  sizes: {
    md: {
      control: {
        h: "18px",
        w: "18px",
      },
    },
  },
};
