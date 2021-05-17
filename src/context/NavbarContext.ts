import React from "react";
type NavbarTypes = "landing" | "tasks";
export const NavigationContext = React.createContext<{
  page:NavbarTypes
}>({
  page: "landing",
  
});
