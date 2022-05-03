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
  } from '@chakra-ui/react';
import { animations } from 'framer-motion';
  import nature from '../img/micheile-com-SxxstJ3ByIg-unsplash.jpg'

 
const Tour = (props) => {
    return (
      <Center py={6}>
        
        <Box 
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'dark-lg'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
          _hover = {{ boxSize: '105%' , borderColor: 'primary.700', borderWidth: '3px'}}>

          <Box
            h={'relative'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'100%'}>
            <Image
              src={nature}
              layout={'fill'}
            />
          </Box>
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              
            </Text>
            <center>
              <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
              >
              Tree tour #
            </Heading>
            </center>
           
           
            <Text color={'gray.500'} >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum.
            </Text>
          </Stack>
         
        </Box>
       
      </Center>
    );
  }

  export default Tour;