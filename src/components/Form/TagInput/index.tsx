import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { propNames } from "@chakra-ui/styled-system";
import { Tag } from "@chakra-ui/tag";
import React, { useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { CrossIcon } from "../../../icons/jsx/cross";

const TagsContext = React.createContext({
  tags: [],
  addTag: null,
  removeTag: null,
});
/**
 * Creates a context, Input to capture new Tags and a Tag displayer. Automatically adds for the form context if avaialbe
 * @param param0
 * @returns
 */
const TagInput = ({ children }) => {
  const [tags, setTags] = useState([]);
  const { register, setValue } = useFormContext();

  const removeTag = (e) => {
    e.preventDefault();
    const tag = e.currentTarget.dataset.tag;
    const newTags = tags.filter((item) => item != tag);
    setTags(newTags);
    setValue("tags", newTags, { shouldValidate: true });
  };
  const addTag = (value) => {
    const newTags = [...tags, value];
    setTags(newTags);
    setValue("tags", newTags, { shouldValidate: true });
  };
  return (
    <TagsContext.Provider value={{ tags, addTag, removeTag }}>
      <fieldset>
        <input
          type="hidden"
          {...register("tags", { required: "Tags are required", minLength: 1 })}
        />
        {children}
      </fieldset>
    </TagsContext.Provider>
  );
};

TagInput.Input = (props) => {
  const context = useContext(TagsContext);
  const handleKeyPress = (event) => {
    if (event.keyCode != 13) return;
    event.preventDefault();
    const value = event?.target?.value || "";
    if (value.length) {
      context.addTag(value);
      event.target.value = "";
    }
  };
  return <Input onKeyDown={handleKeyPress} {...props} />;
};

TagInput.Tags = (props) => {
  const context = useContext(TagsContext);

  return (
    <>
      {context.tags.map((tag) => (
        <Tag mr={2} mb={2}>
          {tag}{" "}
          <Button
            type="button"
            h="auto"
            minH="unset"
            minW="unset"
            fontSize="200"
            data-tag={tag}
            onClick={context.removeTag}
            ml={2}
            variant="unstyled"
          >
            <CrossIcon />
          </Button>
        </Tag>
      ))}
    </>
  );
};
export { TagInput };
