import React from 'react'
import CartWidget from './CartWidget'

import { Button, MenuButton, Menu , MenuItem , MenuList , Flex , Box , Heading , ButtonGroup ,  Spacer, WrapItem, Avatar } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div className='NavBar' >

      <Flex minWidth='max-content' alignItems='center'  gap='2' flexDirection= 'road'>
        <Box p='2'  gap='4'>
        
          <Heading margin='3' size='md'> <WrapItem>
          
            <Avatar  size='xl' name='Christian Nwamba' src='https://ih1.redbubble.net/image.2506143099.5578/st,small,507x507-pad,600x600,f8f8f8.jpg' />{' '}
            
         </WrapItem></Heading>
        </Box>
        <Box p='8'>
    <Heading size='xl'><h1>Kamogawa Boxing Store</h1></Heading>
  </Box>
        <Spacer />
        <ButtonGroup >
          <Menu>
            <MenuButton as={Button} >
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem>Guantes</MenuItem>
              <MenuItem>Tibiales</MenuItem>
              <MenuItem>Kits</MenuItem>
              <MenuItem>Indumentaria</MenuItem>

            </MenuList>
          </Menu>
          
        </ButtonGroup>
        <Button margin='5' colorScheme='teal'  > <CartWidget /></Button>
      </Flex>



    </div>
  )
}

export default NavBar