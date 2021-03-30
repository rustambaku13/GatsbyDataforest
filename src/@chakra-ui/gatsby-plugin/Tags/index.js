export default {
  variants: {
    "dataforest-tag": {
      container: {
        border: "none",
        whiteSpace: "nowrap",
        fontWeight: 400,
        color: "babyBlueEyes.dark",
        bg: "babyBlueEyes.light",
        _hover: {
          bg: "babyBlueEyes.light",
        },
      },
      label: {
        color: "babyBlueEyes.dark",
        fontWeight: "400",
      },
    },
    "dataforest-button": {
      container: {
        border: "1px solid",
        borderColor: "babyBlueEyes.base",
        whiteSpace: "nowrap",
        cursor: "pointer",
        fontWeight: 400,
        color: "babyBlueEyes.dark",
        _hover: {
          bg: "babyBlueEyes.light",
        },
      },
      label: {
        color: "babyBlueEyes.dark",
        fontWeight: "400",
      },
    },
  },
  sizes: {
    md: {
      container: {
        px: 3,
        py: 1,
        fontSize: 300,
        borderRadius: "base",
      },
    },
    lg: {
      container: {
        px: 3,
        py: 2,
        fontSize: 500,
        borderRadius: "base",
      },
    },
  },
  defaultProps: {
    variant: "dataforest-button",
    size: "lg",
  },
};
