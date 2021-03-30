export default {
  baseStyle: {},
  variants: {
    line: {
      tablist: {
        borderColor: "transparent",
        button: {
          color: "outline.base",
          fontSize: "500",
          fontWeight: 500,
          _focus: {
            boxShadow: "none",
          },
          _selected: {
            color: "babyBlueEyes.dark",
            borderColor: "babyBlueEyes.dark",
          },
          pl: "0px",
          pr: 10,
          mr: 4,
          pb: 4,
        },
      },
    },
  },

  defaultProps: { variant: "line" },
};
