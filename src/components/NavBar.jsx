import React from 'react'
import CartWidget from './CartWidget'

import { Button, MenuButton, Menu , MenuItem , MenuList , Flex , Box , Heading , ButtonGroup ,  Spacer, WrapItem, Avatar } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div className='NavBar' >

      <Flex minWidth='max-content' alignItems='center'  gap='10'>
        <Box p='2'  gap='4'>

          <Heading margin='3' size='md'> <WrapItem>
            <Avatar  size='xl' name='Christian Nwamba' src='https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/304862827_486884266778571_2952797331268083083_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mBynfPQbnScAX8RzmCp&_nc_ht=scontent.faep24-1.fna&oh=00_AfAcVJ7mjdJxBzn6BMuzE2VpWs78vmpDh-ExX7-e8wei6w&oe=63F48DA6' />{' '}
          </WrapItem></Heading>
        </Box>
        <Spacer />
        <ButtonGroup >
          <Menu>
            <MenuButton as={Button} >
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem>Categtia 1</MenuItem>
              <MenuItem>Categoria 2</MenuItem>
              <MenuItem>Cateroria 3</MenuItem>
              <MenuItem>Categorira 4</MenuItem>

            </MenuList>
          </Menu>
          
        </ButtonGroup>
        <Button margin='5' colorScheme='teal'  > <CartWidget /></Button>
      </Flex>



    </div>
  )
}

export default NavBar