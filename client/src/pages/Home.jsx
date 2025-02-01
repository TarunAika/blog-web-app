import React from 'react';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Content from '../components/Content';
import UserMap from '../components/UserMap';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar sideElements={true} />
      <Intro />
      <Content />
      <UserMap />
      <Footer />
    </div>
  )
}
 
export default Home