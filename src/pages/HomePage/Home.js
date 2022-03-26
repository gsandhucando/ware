import Header from '../../components/Header/header'
import YouTube from '../../components/youtube/youtube'
import PartnerLogos from '../../components/partnerLogos/partnerLogos'
import Footer from '../../components/footer/footer'
// C:\Users\Owner\Desktop\ware\src\components\Header\header.js
import './home.css';

function Home() {
  return (
    <div className="homePageContainer">
      <Header />
      <YouTube />
      <PartnerLogos />
      <Footer />
    </div>
  );
}

export default Home;
