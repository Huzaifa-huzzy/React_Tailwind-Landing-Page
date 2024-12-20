import Grid from './Grid/Grid';
import Footer from './Footer/Footer';
import Featured from './Featured/Featured';
import PricingPlan from './Pricing/PricingPlan';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';
import Team from './Team/Team';
import Stats from './Stats/Stats';

function App() {
  return (
    <>
     <Header/>
     <Grid/>
     <Featured/>
     <PricingPlan/>
     <Reviews/>
     <Team/>
     <Stats/>
     <Footer/>
    </>
  );
}

export default App;
