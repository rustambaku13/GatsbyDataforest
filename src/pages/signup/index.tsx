import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as GLink, navigate } from "gatsby";
import { flowResult } from "mobx";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useAuthRedirect } from "../../helpers/useAuthOnly";
import dataforest from "../../images/LogoText.svg";
import UserStore from "../../store/UserStore";
const IndexPage = observer(() => {
  const { register, formState, handleSubmit, setError, getValues } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [accepted, setAccepted] = React.useState(false);
  useAuthRedirect({ to: "/tasks" });
  const submitHandler = (credentials) => {
    setLoading(true);
    flowResult(UserStore.signUp(credentials))
      .then(() => {
        navigate("/tasks")
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <Center p={3} bg="blueberryBlue.light" minH="100vh" minW="100%">
        <Box mx="auto" maxW="592px" w="100%" as="section">
          <Flex w="100%" align="center">
            <GLink to="/">
              <Image src={dataforest} h="48px" />
            </GLink>
            <Text
              color="romanSilver.base"
              ml="auto"
              fontWeight="medium"
              fontSize="500"
            >
              Already have an account? &nbsp;
              <GLink to="/login">
                <Link as="span" color="blueberryBlue.base">
                  Sign In
                </Link>
              </GLink>
            </Text>
          </Flex>
          <Box w="100%" bg="white" mt={6} py={10} px={[5, 5, "72px"]}>
            <Heading
              textAlign="center"
              fontSize="700"
              fontWeight="500"
              mb={10}
              color="charlestonGreen.dark"
              as="h1"
            >
              Sign Up
            </Heading>
            <VStack
              onSubmit={handleSubmit(submitHandler)}
              spacing={8}
              w="100%"
              as="form"
            >
              <HStack spacing={8}>
                <FormControl id="fname">
                  <FormLabel variant="">First Name</FormLabel>
                  <Input
                    {...register("fname", {
                      required: "First Name",
                    })}
                    placeholder="First Name"
                    required
                    size="lg"
                    type="text"
                  />
                  <Text fontSize="300" color="danger.base">
                    {formState.errors.fname?.message}
                  </Text>
                </FormControl>
                <FormControl id="lname">
                  <FormLabel variant="">Last Name</FormLabel>
                  <Input
                    {...register("lname", {
                      required: "Last Name",
                    })}
                    placeholder="Last Name"
                    required
                    size="lg"
                    type="text"
                  />
                </FormControl>
              </HStack>
              <FormControl id="email">
                <FormLabel variant="">Email address</FormLabel>
                <Input
                  {...register("email", {
                    required: "Enter your email address",
                  })}
                  required
                  size="lg"
                  type="email"
                  placeholder="Email"
                />
                <Text fontSize="300" color="danger.base">
                  {formState.errors.email?.message}
                </Text>
              </FormControl>
              <FormControl id="password">
                <FormLabel variant="">Password</FormLabel>
                <Input
                  {...register("password", {
                    required: "Enter your password",
                  })}
                  required
                  placeholder="Password"
                  size="lg"
                  type="password"
                />
                {/* <FormLabel>Password</FormLabel> */}
                <Text fontSize="300" color="danger.base">
                  {formState.errors.password?.message}
                </Text>
                <Text fontSize="300" color="danger.base">
                  {formState.errors.global?.message}
                </Text>
              </FormControl>
              <FormControl id="password">
                <FormLabel variant="">Repeat Password</FormLabel>
                <Input
                  {...register("re_password", {
                    required: "Repeat your password",
                    validate: (data) =>
                      getValues("password") == data || "Password do not match",
                  })}
                  required
                  placeholder="Password"
                  size="lg"
                  type="password"
                />
                <Text fontSize="300" color="danger.base">
                  {formState.errors.re_password?.message}
                </Text>
                <Text fontSize="300" color="danger.base">
                  {formState.errors.global?.message}
                </Text>
              </FormControl>

              <Flex w="100%">
                <Checkbox
                  onChange={(e) => {
                    setAccepted(e.target.checked);
                  }}
                  variant="dark"
                  mb="1px"
                  size="md"
                  mr={2}
                ></Checkbox>
                <Text
                  d="inline-block"
                  color="romanSilver.base"
                  fontSize="400"
                  fontWeight="500"
                >
                  I have read and accepted the{" "}
                  <GLink to="login">
                    <Text as="span" color="blueberryBlue.base">
                      Terms & Conditions
                    </Text>
                  </GLink>
                </Text>
              </Flex>
              <Button
                isDisabled={!accepted}
                mb={8}
                type="submit"
                isLoading={loading}
                size="lg"
                w="100%"
                fontWeight="500"
                variant="primaryBlueBerryBlueDark"
              >
                Sign in to Dataforest
              </Button>
            </VStack>
          </Box>
        </Box>
      </Center>
    </>
  );
});

export default IndexPage;
