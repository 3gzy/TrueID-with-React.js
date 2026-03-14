import Header from "../components/Header";
import Hero from "../components/Hero";
import RunningLine from "../components/RunningLine";
import InfoCards from "../components/InfoCards";
import EasySteps from "../components/EasySteps";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div style={{ backgroundColor: "#222222", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <RunningLine />
      <InfoCards />
      <EasySteps />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default Home;