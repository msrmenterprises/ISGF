import React from "react";
import Slider from './Slider';
import WhatsNew from './WhatsNew';
import IndustryNews from './IndustryNews';
import Achievements from './Achievements';
import Reports from './Reports';
import Members from './Members';
const Home = () => {
  return (
    <>
      <Slider />
      <WhatsNew />
      <IndustryNews />
      <Achievements />
      <Reports />
      <Members />
    </>
  );
};

export default Home;
