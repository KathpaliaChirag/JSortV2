import React from 'react';
import './Base.css';
import Opbar from './Opbar';
import Visuals from './Visuals';
import Footer from './Footer'
function Home() {
  return (
    <div className="home">
       <Opbar />
       <Visuals />
       <Footer />
   </div>
  )
}

export default Home;