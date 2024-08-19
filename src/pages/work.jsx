import React from 'react'
import Footer from '../components/footer';
import Website from '../components/website';

const Work = ({setactive}) => {
  return (
    <>
    <Website/>
    <Footer setactive={setactive}/>
    </>
  )
}

export default Work;