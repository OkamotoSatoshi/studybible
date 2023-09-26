import '../styles/globals.css'
import  "/styles/core.css"
import '/public/css/icons.css' ;


import Layout from '../layout'
import { useEffect, useState } from 'react'



export default function App({ Component, pageProps }) {
  
  return(<>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>) 
}
