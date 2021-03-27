import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import fontSizes from "./fontSizes";
import Button from "./Buttons";
import sizes from "./sizes";
import Input from "./Input";
import global from "./global";
import FormLabel from "./Label";
import Heading from "./Heading";
import Checkbox from "./Checkbox";
const theme = {
  colors,
  fontSizes,
  sizes,
  styles: {
    global,
  },
  fonts: {
    html: "Suisse",
    heading: "Suisse",
    body: "Suisse",
  },

  components: {
    Button,
    Input,
    Checkbox,
    FormLabel,
    Heading,
  },
};

export default extendTheme(theme);
