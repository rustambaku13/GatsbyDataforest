import { Button } from "@chakra-ui/button";
import { Box, Center, Flex, Heading, Text, Image,HStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import * as React from "react";
import { NavbarDefault } from "../components/Navigation/Navbar";
import gears from '../images/landing-gears.png'
import cloudpink from '../images/cloud-pink-blue.png'
import blurpink from '../images/blur-pink.png'
import completetask from '../images/complete-task-and-earn.png'
import arrowright from '../images/arrow-right-1.png'
import arrowleft from '../images/arrow-left-1.png'
import arrowrightpurple from '../images/arrow-right-purple.png'
import annotationmode from '../images/annotation-mode.png'
import curvedleftarrow from '../images/arrow-left-curved.png'
import datasets from '../images/datasets-page.png'
import customDatasets from '../images/gather-custom-datasets.png'
import orangecloud from '../images/orange-cloud.svg'
import cube from '../images/cube.png'
import powerbank from '../images/powerbank.png'
import cylinder from '../images/cylinder.png'
import emphasisArrows from '../images/arrows-emphasis.png'
import toroid from '../images/toroid.png'
import { Footer } from "../components/Navigation/Footer";

const IndexPage = () => {
  return (
    <Box as='main' bg='#061120'>
      <NavbarDefault />
      <Flex py="20px" bg='transparent' maxW='container.xl' mx='auto'  as='section'>
        <Box py="120px" zIndex={1} maxW='600px' w='100%'>
            <Heading mb={4} as='h1' fontSize='hb4' color='white'>
              Single venue for all <span className='underline'>AI related</span> demands
            </Heading>
            <Heading mb={7} fontFamily='IBM' fontSize='600' fontWeight='light' color='outline.base' as='h2'>
            Access our ever growing dataforest community and find customized solutions. 
            </Heading>
            <HStack spacing={6}>
            <Button  fontFamily='IBM' bg='gold.base' fontWeight='600' color='text.black' border='none' borderRadius='12px' size="md" variant="outline" >
              Try dataforest
            </Button>
            <Button  fontFamily='IBM' bg='white' fontWeight='600' color='text.black' border='none' borderRadius='12px' size="md" variant="outline" >
              Earn money
            </Button>
            </HStack>
        </Box>
        <Image zIndex={0}  pos='absolute' maxW='686px' left='50%' transform='translateX(-50%)' top="200px" src={blurpink} alt="Ready AI models "/>
        <Image  zIndex={0} pos='absolute'  right="0px" src={gears} alt="Collect data "/>
      </Flex>
      <Flex py="60px" bg='transparent' maxW='container.xl' mx='auto'  as='section'>
          <Box pt="50px" flex={1} maxW='468px'>
              <Text color='gold.base' mb={8} fontWeight='600' fontFamily='IBM'>
                - &nbsp; HOME PAGE
              </Text>
              <Heading color='white' mb={4} fontWeight='600' fontSize='hb2'>
              Complete tasks <br/> & earn money
              </Heading>
              <Text fontFamily='IBM' fontWeight='light' fontSize='500' color='outline.dark'>
              Earn pocket money through completing daily data tasks. Upload your data once make passive income everytime your data gets requested.
              </Text>
              <Image mt={8}  ml='auto' pos='relative' left="50px" src={arrowright}/>
          </Box>
          <Box flex={1}>
            <Image ml='auto' src={completetask}/>
          </Box>
      </Flex>
      <Flex flexDir='row-reverse' py="60px" bg='transparent' maxW='container.xl' mx='auto'  as='section'>
          <Box pt="50px" flex={1} maxW='468px'>
              <Text color='persianGreen.base' mb={8} fontWeight='600' fontFamily='IBM'>
                - &nbsp; ANNOTATION MODE
              </Text>
              <Heading color='white' mb={4} fontWeight='600' fontSize='hb2'>
              Order custom AI models and solutions for your business
              </Heading>
              <Text fontFamily='IBM' fontWeight='light' fontSize='500' color='outline.dark'>
              Define you business requirements and upload your datasets. Our community of data scientists will compete for the most compelling solution for
your needs.
              </Text>
              <Image mt={8}  pos='relative' left="-50px" src={arrowleft}/>
              <Image zIndex={0}  pos='absolute' maxW='686px' transform="translate(-25%,-50%)" src={orangecloud} alt="Ready AI models "/>
          </Box>
          <Box flex={1}>
            <Image  src={annotationmode}/>
          </Box>
      </Flex>
      <Flex py="60px" bg='transparent' maxW='container.xl' mx='auto'  as='section'>
          <Box pt="50px" flex={1} maxW='468px'>
              <Text color='fashionFuchsia.base' mb={8} fontWeight='600' fontFamily='IBM'>
                - &nbsp; DATASET PAGE
              </Text>
              <Heading color='white' mb={4} fontWeight='600' fontSize='hb2'>
              Sell your datasets & earn money
              </Heading>
              <Text fontFamily='IBM' fontWeight='light' fontSize='500' color='outline.dark'>
              Dataforest offers a unique pipeline from ordering custom datasets to selling your datasets all in one place.  Explore your possibilities as a data
broker now. 
              </Text>
              <Image mt={8} ml='auto' pos='relative' left="50px" src={arrowrightpurple}/>
              <Image zIndex={0}  pos='absolute' maxW='486px' transform="translate(-25%,-40%)" src={cloudpink} alt="Ready AI models "/>
          </Box>
          <Box flex={1}>
            <Image ml='auto' src={datasets}/>
          </Box>
      </Flex>
      <Flex flexDir='row-reverse' py="60px" bg='transparent' maxW='container.xl' mx='auto'  as='section'>
          <Box pt="50px" flex={1} maxW='468px'>
              <Text color='babyBlueEyes.dark' mb={8} fontWeight='600' fontFamily='IBM'>
                - &nbsp; CUSTOM DATASETS
              </Text>
              <Heading color='white' mb={4} fontWeight='600' fontSize='hb2'>
              Gather custom datasets
              </Heading>
              <Text fontFamily='IBM' fontWeight='light' fontSize='500' color='outline.dark'>
              Inside Dataforest can share you custom dataset requirements, thus utilizing our ever-expanding crowd that is ready to deliver your labeled & annotated data.
              </Text>
              <Image mt={8} pos='relative' left="-50px" src={curvedleftarrow}/>
          </Box>
          <Box flex={1}>
            <Image  src={customDatasets}/>
          </Box>
      </Flex>
      <Image zIndex={0}  pos='absolute' maxW='486px' transform="translate(-40%,-25%)" src={cloudpink} alt="Ready AI models "/>
      <Box py="60px" bg='transparent' maxW='container.xl' mx='auto'  as='section'>
        <Heading mb={4} as='h2' fontSize='hb2' textAlign='center' color='white' fontWeight='semibold'>
          Our Services
        </Heading>
        <Heading mb={16} fontFamily="IBM" letterSpacing='2px' maxW='592px' mx='auto' as='h2' fontSize='500' textAlign='center' color='outline.dark' fontWeight='light'>
        Dataforest provides a plethora of unique <br/> features for users to benefit from. 
        </Heading>
        <Swiper freeMode={true} effect='coverflow'  slidesPerView={4} spaceBetween={1} >
          <SwiperSlide style={{overflow:"visible"}}>
          <Box  cursor='pointer' _hover={{boxShadow:"0 0px 50px 0px rgba(255,255,255,0.1)",borderRadius:"2xl"}}  transition='.2s ease-in-out' color='white' w='280px' h='224px' bg='blueberryBlue.base' p={5} borderRadius='lg'>
            <Image  src={powerbank} ml='auto' h='80px'/>
            <Text mb={1} mt={5} fontWeight='500'>
              Our Services
            </Text>
            <Text fontSize='400' letterSpacing='2px' fontFamily='IBM'>
            Dataforest provides a plethora of unique. 
            </Text>
          </Box>
          </SwiperSlide>
          <SwiperSlide >
            <Box  cursor='pointer' _hover={{boxShadow:"0 0px 50px 0px rgba(255,255,255,0.1)",borderRadius:"2xl"}}  transition='.2s ease-in-out' color='white' w='280px' h='224px' bg='fashionFuchsia.dark' p={5} borderRadius='lg'>
              <Image  src={cube} ml='auto' h='80px'/>
              <Text mb={1} mt={5} fontWeight='500'>
              Recommendation systems
              </Text>
              <Text fontSize='400' letterSpacing='2px' fontFamily='IBM'>
              Dataforest provides a plethora of unique. 
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide >
            <Box  cursor='pointer' _hover={{boxShadow:"0 0px 50px 0px rgba(255,255,255,0.1)",borderRadius:"2xl"}}  transition='.2s ease-in-out' color='white' w='280px' h='224px' bg='gold.dark' p={5} borderRadius='lg'>
              <Image  src={cylinder} ml='auto' h='80px'/>
              <Text mb={1} mt={5} fontWeight='500'>
                Crowd Counting
              </Text>
              <Text fontSize='400' letterSpacing='2px' fontFamily='IBM'>
              Dataforest provides a plethora of unique. 
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide >
            <Box  cursor='pointer' _hover={{boxShadow:"0 0px 50px 0px rgba(255,255,255,0.1)",borderRadius:"2xl"}}  transition='.2s ease-in-out' color='white' w='280px' h='224px' bg='frenchMuave.dark' p={5} borderRadius='lg'>
              <Image  src={toroid} ml='auto' h='80px'/>
              <Text mb={1} mt={5} fontWeight='500'>
              Autonomous Vehicles
              </Text>
              <Text fontSize='400' letterSpacing='2px' fontFamily='IBM'>
              Dataforest provides a plethora of unique. 
              </Text>
            </Box>
          </SwiperSlide>

        </Swiper>
      </Box>
      <Box mt="120px" overflow='hidden' py="200px" pos='relative' bg='transparent' maxW='container.xl' mx='auto'  as='section'>
        <Image pointerEvents='none' pos='absolute' src={emphasisArrows} top='-20px' left='40px' w='100%'/>
        <Image pointerEvents='none' pos='absolute' src={cloudpink} w='400px' left="50%" top='50%' transform="translate(-50%,-50%)"/>
        <Box maxW='container.md' mx='auto'>
        <Heading color='white' fontWeight='semibold' textAlign='center' fontSize='hb2'>
        Your one stop shop for AI greatness!
        </Heading>
        <Text fontWeight='ligh' letterSpacing='2px' mt={4} mb={6} textAlign='center' fontFamily='IBM' color='outline.base' fontSize='500'>
        Our aim is to build a single marketplace for data scientists to outsource their most erroneous tasks to the crowd.  
        </Text>
        <HStack justifyContent='center' spacing={6}>
            <Button  fontFamily='IBM' bg='gold.base' fontWeight='600' color='text.black' border='none' borderRadius='12px' size="md" variant="outline" >
              Try dataforest
            </Button>
            <Button  fontFamily='IBM' bg='white' fontWeight='600' color='text.black' border='none' borderRadius='12px' size="md" variant="outline" >
              Earn money
            </Button>
            </HStack>
        </Box>
      </Box>
      <Footer/>

    </Box>
  );
};

export default IndexPage;
