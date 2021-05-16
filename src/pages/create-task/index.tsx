import React, { useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Input,
  Select,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { AddTaskSideBar } from "../../components/Navigation/AddTaskSideBar";
import { TopBar } from "../../components/Navigation/TopBar";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { TagInput } from "../../components/Form/TagInput";
import { ChevronRightIcon } from "../../icons/jsx/chevrondown";
import { CrossIcon } from "../../icons/jsx/cross";
import { LabelInput } from "../../components/Form/Labelnput";
import { navigate } from "gatsby-link";
import { createTask } from "../../api/tasks";
import { useAnonRedirect } from "../../helpers/useAuthOnly";
import { observer } from "mobx-react-lite";

const FIELDS = [
  ["task_type", "title", "description", "tags"],
  ["shape_x", "shape_y", "extension", "image_type"],
  ["labels"],
  undefined,
];

const PaymentForm = () => {
  const { register, getValues, formState, watch } = useFormContext();
  const [asap, setAsap] = useState(false);
  const quantity = watch("quantity");
  const price = watch("price");
  let inputForm = null;
  const perDatumPrice = quantity / price;
  const calculatePPD = () => {
    alert("sa");
    const [quantity, price] = getValues(["quantity", "price"]);
    console.log(quantity, price);
  };
  if (asap) {
    inputForm = (
      <FormControl mb={6} id="price_per_datum">
        <FormLabel variant="">Price (per datum)</FormLabel>
        <Input
          {...register("price_per_datum", {
            required: "Enter Price per datum",
            shouldUnregister: true,
          })}
          rows={7}
          size="lg"
          placeholder="Price per datum"
        />{" "}
        <Text fontSize="300" color="danger.base">
          {formState.errors.price_per_datum?.message}
        </Text>
      </FormControl>
    );
  } else {
    inputForm = (
      <>
        <FormControl id="quantity" mb={4}>
          <Input
            {...register("quantity", {
              required: "Enter quantity of data",
              shouldUnregister: true,
            })}
            size="lg"
            placeholder="Quantity"
          />
          <Text fontSize="300" color="danger.base">
            {formState.errors.quantity?.message}
          </Text>
        </FormControl>
        <FormControl id="price" mb={6}>
          <Input
            onChange={calculatePPD}
            {...register("price", {
              required: "Enter the desired price for the data",
              shouldUnregister: true,
            })}
            size="lg"
            placeholder="Price for task"
          />
          <Text fontSize="300" color="danger.base">
            {formState.errors.price?.message}
          </Text>
        </FormControl>
        <Text
          mt={6}
          as="label"
          fontSize="400"
          variant="secondary"
          htmlFor="price_per_datum"
        >
          Price (per datum)
        </Text>
        <Text
          color="persianGreen.base"
          fontSize="600"
          fontWeight="500"
          variant="secondary"
          id="price_per_datum"
        >
          ${" "}
          {isNaN(perDatumPrice) || !isFinite(perDatumPrice)
            ? 0
            : perDatumPrice.toFixed(2)}
        </Text>
      </>
    );
  }

  return (
    <Box>
      <FormControl mb={4}>
        <Checkbox
          isChecked={!asap}
          onChange={(e) => {
            setAsap(!e.target.checked);
          }}
          fontSize="500"
          mr={3}
          icon={
            <Box
              bg="babyBlueEyes.dark"
              h="1em"
              w="1em"
              borderRadius="50%"
            ></Box>
          }
          variant="circle"
        >
          Exact Quantity
        </Checkbox>
        <Checkbox
          onChange={(e) => {
            setAsap(e.target.checked);
          }}
          isChecked={asap}
          fontSize="500"
          icon={
            <Box
              bg="babyBlueEyes.dark"
              h="1em"
              w="1em"
              borderRadius="50%"
            ></Box>
          }
          variant="circle"
        >
          As much as possible
        </Checkbox>
      </FormControl>
      {inputForm}
    </Box>
  );
};

const CreateTaskPage = observer(() => {
  const [index, setIndex] = useState(0);
  const methods = useForm();
  const [loading, setLoading] = useState(false);
  const { register, trigger, handleSubmit, getValues, formState } = methods;
  useAnonRedirect({ to: "/login" });
  const previous = (e) => {
    e.preventDefault();
    setIndex((index) => index - 1);
  };
  const next = async (e) => {
    e.preventDefault();
    const result = await trigger(FIELDS[index]);
    if (result && index < FIELDS.length - 1) {
      setIndex((index) => index + 1);
      return;
    }
    if (formState.isValid) {
      //Handle Submit
      handleSubmit(onSubmit)();
      return;
    }
  };
  const onSubmit = (data) => {
    setLoading(true);
    createTask(data)
      .then((e) => {
        navigate("/tasks");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <AddTaskSideBar index={index} />
      <Flex>
        <VStack alignItems="flex-start" ml="264px" w="100%" minH="100vh">
          <TopBar />
          <FormProvider {...methods}>
            <VStack
              onSubmit={handleSubmit(onSubmit)}
              alignItems="flex-start"
              w="100%"
              h="100%"
              as="form"
            >
              <Box px={18} py={10} w="100%" maxW="650px" h="100%">
                <Tabs index={index}>
                  <TabPanels>
                    <TabPanel p={0}>
                      <Heading
                        mb={10}
                        fontSize="700"
                        fontWeight="500"
                        color="black"
                      >
                        Basic Details
                      </Heading>
                      <FormControl mb={6}>
                        <Select
                          {...register("task_type", {
                            required: "Select Task type",
                          })}
                          size="lg"
                          variant="outline"
                          placeholder="Task type"
                        >
                          <option value="option1">Image Data</option>
                          <option value="option2">Video Data</option>
                          <option value="option3">Text Data</option>
                        </Select>
                        <Text fontSize="300" color="danger.base">
                          {formState.errors.task_type?.message}
                        </Text>
                      </FormControl>
                      <FormControl id="title" mb={6}>
                        <FormLabel variant="">Task Title</FormLabel>
                        <Input
                          {...register("title", {
                            required: "Specify task title",
                          })}
                          size="lg"
                          placeholder="Enter Task Title..."
                        />

                        <Text fontSize="300" color="danger.base">
                          {formState.errors.title?.message}
                        </Text>
                      </FormControl>
                      <FormControl mb={6} id="description">
                        <FormLabel variant="">Task Description</FormLabel>
                        <Textarea
                          {...register("description", {
                            required: "Specify task description",
                          })}
                          rows={7}
                          size="lg"
                          placeholder="Enter Task Description..."
                        />{" "}
                        <Text fontSize="300" color="danger.base">
                          {formState.errors.description?.message}
                        </Text>
                      </FormControl>
                      <FormControl mb={6} id="tags">
                        <FormLabel variant="">Add Tags</FormLabel>
                        <TagInput>
                          <TagInput.Input
                            mb={4}
                            placeholder="i.e. Cats"
                            size="lg"
                          />
                          <TagInput.Tags />
                          <Text fontSize="300" color="danger.base">
                            {formState.errors.tags?.message}
                          </Text>
                        </TagInput>
                      </FormControl>
                    </TabPanel>
                    <TabPanel p={0}>
                      <Heading
                        mb={10}
                        fontSize="700"
                        fontWeight="500"
                        color="black"
                      >
                        Technical Details
                      </Heading>
                      <HStack mb={8}>
                        <FormControl id="shape_x">
                          <Input
                            {...register("shape_x", {
                              required: "Set Height",
                            })}
                            size="lg"
                            placeholder="Width of the image"
                          />
                          <Text fontSize="300" color="danger.base">
                            {formState.errors.shape_x?.message}
                          </Text>
                        </FormControl>
                        <CrossIcon color="romanSilver.base" fontSize="200" />
                        <FormControl id="shape_y">
                          <Input
                            {...register("shape_y", {
                              required: "Set height",
                            })}
                            size="lg"
                            placeholder="Height of the image"
                          />
                          <Text fontSize="300" color="danger.base">
                            {formState.errors.shape_y?.message}
                          </Text>
                        </FormControl>
                      </HStack>
                      <FormControl id="extension" mb={8}>
                        <Select
                          {...register("extension", {
                            required: "Select File Extension",
                          })}
                          size="lg"
                          variant="outline"
                          placeholder="File Extension"
                        >
                          <option value="jpeg">JPEG</option>
                          <option value="png">PNG</option>
                        </Select>
                        <Text fontSize="300" color="danger.base">
                          {formState.errors.extension?.message}
                        </Text>
                      </FormControl>
                      <FormControl id="image_type" mb={8}>
                        <Select
                          {...register("image_type", {
                            required: "Select Image Type",
                          })}
                          size="lg"
                          variant="outline"
                          placeholder="Image Type"
                        >
                          <option value="rgb">RGB</option>
                          <option value="grayscale">Grayscale</option>
                          <option value="blackandwhite">BLack & White</option>
                        </Select>
                        <Text fontSize="300" color="danger.base">
                          {formState.errors.image_type?.message}
                        </Text>
                      </FormControl>
                    </TabPanel>
                    <TabPanel p={0}>
                      <Heading
                        mb={10}
                        fontSize="700"
                        fontWeight="500"
                        color="black"
                      >
                        Labels
                      </Heading>

                      <LabelInput>
                        <LabelInput.Displayer
                          mb={6}
                          w="100%"
                          minH="250px"
                          borderColor="outline.base"
                          bg="white"
                          borderWidth="1px"
                          borderRadius="base"
                        />
                        <Text fontSize="300" color="danger.base">
                          {formState.errors.labels?.message}
                        </Text>
                        <LabelInput.Input />
                        <LabelInput.AddNewAnnotation />
                        <LabelInput.AddNewLabel />
                      </LabelInput>
                    </TabPanel>
                    <TabPanel p={0}>
                      <Heading
                        mb={10}
                        fontSize="700"
                        fontWeight="500"
                        color="black"
                      >
                        Payment
                      </Heading>
                      <PaymentForm />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
              <Box
                w="100%"
                h="80px"
                py="20px"
                borderTopWidth="1px"
                borderColor="outline.base"
              >
                <Flex px={18} maxW="650px">
                  <Button
                    onClick={() => {
                      navigate(-1);
                    }}
                    variant="babyBlue"
                    size="sm"
                  >
                    Close task
                  </Button>
                  <Box ml="auto">
                    <Button
                      type="button"
                      onClick={previous}
                      variant="outline"
                      size="sm"
                    >
                      Previous Step
                    </Button>
                    <Button
                      onClick={next}
                      isLoading={loading}
                      type="submit"
                      variant="babyBlue"
                      size="sm"
                      ml="4"
                    >
                      Next <ChevronRightIcon fontSize="200" ml="2" />
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </FormProvider>{" "}
        </VStack>
      </Flex>
    </>
  );
});

export default CreateTaskPage;
