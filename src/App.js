import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainMenu from './components/MainMenu/mainMenu';
import FooterMain from './components/FooterMain/footerMain';
import Home from './Pages/Home'
import Fabrics from './Pages/Fabrics'
import BuildMyShade from './Pages/BuildMyShade'
import RollerShades from './Pages/RollerShades'
import DualRollerShades from './Pages/DualRollerShades'
import DoubleRollerShades from './Pages/DoubleRollerShades'
import Gallery from './Pages/Gallery'
import Lookbook from './Pages/Lookbook'
import Installation from './Pages/Installation'
import Warranty from './Pages/Warranty'
import ChildSafety from './Pages/ChildSafety'
import Videos from './Pages/Videos'
import Motorization from './Pages/Motorization'
import FinishingTouches from './Pages/FinishingTouches'
import WhyLuxout from './Pages/WhyLuxout'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import ShippingHandling from './Pages/ShippingHandling'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import NotFound from './Pages/NotFound'


function App() {
  return (
    <Router>
      <header>
        <MainMenu />
      </header> 
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/fabrics" component={Fabrics}></Route>
        <Route path="/build-my-shade" component={BuildMyShade}></Route>
        <Route path="/roller-shades" component={RollerShades}></Route>
        <Route path="/dual-roller-shade" component={DualRollerShades}></Route>
        <Route path="/double-roller-shade" component={DoubleRollerShades}></Route>
        <Route path="/gallery" component={Gallery}></Route>
        <Route path="/lookbook" component={Lookbook}></Route>
        <Route path="/installation" component={Installation}></Route>
        <Route path="/warrany" component={Warranty}></Route>
        <Route path="/child-safety" component={ChildSafety}></Route>
        <Route path="/videos" component={Videos}></Route>
        <Route path="/motorization" component={Motorization}></Route>
        <Route path="/finishing-touches" component={FinishingTouches}></Route>
        <Route path="/why-luxout" component={WhyLuxout}></Route>
        <Route path="/contact-us" component={ContactUs}></Route>
        <Route path="/about-us" component={AboutUs}></Route>
        <Route path="/shipiing-handling" component={ShippingHandling}></Route>
        <Route path="/privacy-policy" component={PrivacyPolicy}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <footer>
        <FooterMain />
      </footer>
  </Router>
);
}

export default App;
