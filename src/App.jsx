
import React from 'react'

import './App.css'
import { useState, useEffect } from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <><ChakraProvider>
      <div className='container'>
      


        <section className='nav-bar'>
          <NavBar />
        </section>


     
      <div className='body'>
        <section className='item-list-container'>
          <ItemListContainer gretting={<iframe width="560" height="315" src="https://www.youtube.com/embed/0EntM7hqzAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>} />
        </section>
      </div>
      </div>
    </ChakraProvider>
    </>
  )
}

export default App