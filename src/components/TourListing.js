import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Divider,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Center,
    Avatar,
    SimpleGrid
  } from '@chakra-ui/react';
  import nature from '../img/micheile-com-SxxstJ3ByIg-unsplash.jpg'
  import Tour from './Tour';
  import tour_data from '../data/tours.xml';
  import axios from 'axios';
  import React from 'react';
  import XMLParser from 'react-xml-parser';
  
  const TourListing = () => {
    const [tours, setTours] = React.useState([]);

    React.useEffect(() => {
      axios.get(tour_data, {
        "Content-Type": "application/xml; charset=utf-8"
     })
     .then((response) => {
        var xml = new XMLParser().parseFromString(response.data);
        setTours(xml.children)
     });
    }, []);



    return (
      <Container maxW={'7xl'}>
        <Center
          spacing={{ base: 16, md: 15 }}
          padding='2rem'
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.2}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                >
                The Landscape Arboretum
              </Text>
              <br></br>
              <Text color={'primary.800'}>
                Field Guide
              </Text>
            </Heading>
            <Text color={'gray.800'}>
              The Landscape Arboretum at Winona State University is a living classroom and laboratory for the WSU community and all those who visit campus. 
              We are committed to being a supportive environment for student and life-long learning.
              <br></br>
              <br></br>
              As part of out mission, we offer self-guided tours catered to your interests in our collections of trees and gardens. Select a tour below
               and prepare to have an adventure. At every highlighted location follow the QR code to a wealth of information on each respective tree or garden.
              <br></br>
              <br></br>
              We invite you to experience the Arboretum at your own pace, soak up the sensory experience of campus, and discover something new about the 
              unique flora of the Driftless Area in southeastern Minnesota.
            </Text>
          </Stack>
        </Center>
        <Divider />
        <Center
          alignContent={'center'}
          spacing={{ base: 16, md: 15 }}
          padding='3rem'
          direction={{ base: 'column', md: 'row' }}>
          <Heading
            lineHeight={1.2}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
            >
            Take a Tour
          </Heading>
        </Center>
        <SimpleGrid  columns={[1, 2, 3]} spacingX={'60px'} spacingY={'60px'}> 

          {tours.map((element, index) => (
              <Tour key={index} name={element.children[3].value} desc={element.children[0].value} />
          ))}
        
        
        </SimpleGrid>
      </Container>
    );
  }
  
export default TourListing;