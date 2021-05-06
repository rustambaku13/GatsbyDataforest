import { Link } from "gatsby";
import React from "react";

export const LinkOverlay = (props) => {
  return (
    <Link className="link-overlay" {...props}>
      {props.children}
    </Link>
  );
};
