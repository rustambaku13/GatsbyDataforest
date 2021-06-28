import React from 'react'
import {Box,Flex,Text,SimpleGrid,Heading,Image, chakra, HStack} from '@chakra-ui/react'
import dataforest from "../../../images/WhiteLogoText.svg";
import { Link } from 'gatsby';
import facebook from "../../../icons/facebook.svg";
import link from "../../../icons/link.svg";
import mail from "../../../icons/mail.svg";
import twitter from "../../../icons/twitter.svg";
export const Footer = chakra(({className})=>{

return <Box pt="80px" as='footer' mt="120px" w='100%' className={className} >
    <SimpleGrid maxW='container.xl' mx='auto' columns={6}>
        <Box gridColumn="1 / span 2">
            <Image pos='relative' top='-20px' h="56px" alt='Dataforest' src={dataforest} />
            <Text mt={4} fontFamily='IBM' color='outline.dark' fontSize='500'  fontWeight='light' letterSpacing='2px'>
            Your single venue for all AI related demands.
            </Text>
        </Box>
        <Box>
            <Text mb={4} fontWeight='500' color='white'>
                Quick links
            </Text>
            <Box sx={{">li":{marginBottom:4, _hover:{textDecoration:"underline",color:"white"}}}} letterSpacing='2px' fontWeight='light' fontFamily='IBM' listStyleType='none' color='outline.dark' as='ul'>
                <Box  as='li'>
                    <Link to='/tasks'>Tasks</Link>
                </Box>
                <Box as='li'>
                    <Link to='/tasks'>Datasets</Link>
                </Box>
                <Box as='li'>
                    <Link to='/tasks'>Competitions</Link>
                </Box>
                <Box as='li'>
                    <Link to='/tasks'>Discussions</Link>
                </Box>
            </Box>
        </Box>
        <Box>
            <Text mb={4} fontWeight='500' color='white'>
                Product
            </Text>
            <Box sx={{">li":{marginBottom:4, _hover:{textDecoration:"underline",color:"white"}}}} letterSpacing='2px' fontWeight='light' fontFamily='IBM' listStyleType='none' color='outline.dark' as='ul'>
                <Box  as='li'>
                    <Link to='/tasks'>How to gather</Link>
                </Box>
                <Box as='li'>
                    <Link to='/tasks'>How to earn</Link>
                </Box>
                <Box as='li'>
                    <Link to='/tasks'>How to label</Link>
                </Box>
                <Box as='li'>
                    <Link to='/tasks'>Support</Link>
                </Box>
            </Box>
        </Box>
        <Box>
            <Text mb={4} fontWeight='500' color='white'>
                Contact
            </Text>
            <Box lineHeight='230%' letterSpacing='2px' fontWeight='light' fontFamily='IBM' listStyleType='none' color='outline.dark' as='ul'>
               Hasan Aliyev 42, <br/> Baku Azerbaijan <br/> +994 50 5920268
            </Box>
        </Box>
        <Box>
            <Text mb={4} fontWeight='500' color='white'>
                Follow Us
            </Text>
            <Box lineHeight='230%' letterSpacing='2px' fontWeight='light' fontFamily='IBM' listStyleType='none' color='outline.dark' as='ul'>
            <HStack color='white' mt={1} spacing={3}>
              <Image src={facebook} />
              <Image src={twitter} />
              <Image src={mail} />
              <Image src={link} />
            </HStack>
            </Box>
        </Box>
    </SimpleGrid>
    <Flex maxW='container.xl' mx='auto' mt="60px">
        <Text fontWeight='light' color='white' letterSpacing='2px' fontSize='400' fontFamily='IBM'>
        © Copyright 2021 Dataforest. All rights reserved.
        </Text>
        <Box ml='auto' sx={{">li":{marginBottom:4,display:"inline-block",mr:4,_hover:{textDecoration:"underline",color:"white"}}}} fontSize='400' letterSpacing='2px' fontWeight='light' fontFamily='IBM' listStyleType='none' color='outline.dark' as='ul'>
        <Box  as='li'>
                    <Link to='/tasks'>Cookie policy</Link>
                </Box>
                <Box as='li'>
                    <Link to='/tasks'>Privacy policy</Link>
                </Box>
                <Box as='li'>
                    <Link to='/tasks'>Terms of use</Link>
                </Box>
        </Box>
    </Flex>
</Box>



})