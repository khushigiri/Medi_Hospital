import "./About.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import OurStory from "../../components/About/OurStory/OurStory";
import VisionMission from "../../components/About/VisionMission/VisionMission";
import CoreValues from "../../components/About/CoreValues/CoreValues";
import Journey from "../../components/About/Journey/Journey";

function About() {
  return (
    <>
      <Navbar />
      <OurStory />
      <VisionMission />
      <CoreValues />
      <Journey />
      <Footer />
    </>
  );
}

export default About;