import React from 'react';
import Display from './Display';
import Navbar from './Navbar';
import Error from './Error';
const Home = () => {
  return (
    <>
     <Navbar/>
     <Error/>
      <Display/>
    </>
  )
}

export default Home;
