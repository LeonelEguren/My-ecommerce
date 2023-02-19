
import React from 'react'

import './App.css'
import { useState, useEffect } from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <><ChakraProvider>
      <div className='Body'>

        <section className='nav-bar'>
          <NavBar />
        </section>
        <section className='item-list-container'>
          <ItemListContainer gretting={"Bienvenidos a mi Ecommerce"} />
        </section>

      </div>
    </ChakraProvider>
    </>
  )
}

export default App