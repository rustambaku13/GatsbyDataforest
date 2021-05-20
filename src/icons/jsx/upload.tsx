import { Icon } from "@chakra-ui/react";
import * as React from "react";
export const UploadIcon = (props) => (
  <Icon d="flex" viewBox="0 0 10 14" {...props}>
    <path
      d="M.5 12.666h8.998a.5.5 0 01.068.996l-.068.004H.5a.5.5 0 01-.068-.995l.068-.005h8.998H.5zm.695-8.807L4.527.53a.667.667 0 01.88-.056l.063.055 3.335 3.331a.667.667 0 01-.88.999l-.062-.056-2.197-2.194V11a.667.667 0 01-.59.662L5 11.666a.667.667 0 01-.662-.589L4.333 11V2.607L2.138 4.802a.667.667 0 01-.88.056l-.063-.056a.667.667 0 01-.055-.88l.055-.063L4.527.53l-3.332 3.33z"
      fill="#fff"
    />
  </Icon>
);
export const DownloadIcon = (props) => (
  <UploadIcon transform="rotate(180deg)" />
);
