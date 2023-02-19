import React from 'react'
import CartWidget from './CartWidget'

import { Button } from '@chakra-ui/react'

const NavBar=()=> {
  return (
<div>
    <h1>My Ecommerce</h1>
    <ul>
        <Button>cat 1</Button>
        <Button>cat 2</Button>
        <Button>cat 3</Button>
        <Button>cat 4</Button>
    </ul>
    <CartWidget/>
  

 </div>
  )
}

export default NavBar