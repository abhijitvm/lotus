import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import OurStory from "./pages/OurStory";
import Activities from "./pages/Activities";
import AlcoholAddiction from "./pages/AlcholoAddiction";
import Collaboration from "./pages/Collaboration";
import Contact from "./pages/Contact";
import DayAtLotus from "./pages/DayAtLotus";
import Detoxification from "./pages/Detoxification";
import DrugAddiction from "./pages/DrugAddiction";
import SchoolOfTherapy from "./pages/SchoolOfTherapy";
import GamblingAddiction from "./pages/GamblingAddiction";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import LotusPetals from "./pages/LotusPetals";
import OtherAddiction from "./pages/OtherAddiction";
import OurProgram from "./pages/OurProgram";
import OurTreatment from "./pages/OurTreatment";
import Relapse from "./pages/Relapse";
import TheLotusDifference from "./pages/TheLotusDifference";
import TobaccoAddiction from "./pages/TobaccoAddiction";
import WellnessCentre from "./pages/WellnessCentre";


function App() {
    return  <Routes> 
        <Route path ="/" element = {<Home />} />
        <Route path ="/ourstory" element = {<OurStory />} />     
        <Route path ="/activities" element = {<Activities />} /> 
        <Route path ="/alcoholaddiction" element = {<AlcoholAddiction />} /> 
        <Route path ="/collaboration" element = {<Collaboration/>} /> 
        <Route path ="/contact" element = {<Contact/>} /> 
        <Route path ="/dayatlotus" element = {<DayAtLotus/>} /> 
        <Route path ="/detoxification" element = {<Detoxification/>} /> 
        <Route path ="/drugaddiction" element = {<DrugAddiction/>} /> 
        <Route path ="/schooloftherapy" element = {<SchoolOfTherapy/>} /> 
        <Route path ="/gamblingaddiction" element = {<GamblingAddiction/>} />
        <Route path ="/facilities" element = {<Facilities/>} />
        <Route path ="/gallery" element = {<Gallery/>} /> 
        <Route path ="/lotuspetals" element = {<LotusPetals/>} /> 
        <Route path ="/otheraddiction" element = {<OtherAddiction/>} /> 
        <Route path ="/ourprogram" element = {<OurProgram/>} /> 
        <Route path ="/ourtreatment" element = {<OurTreatment/>} /> 
        <Route path ="/relapse" element = {<Relapse/>} /> 
        <Route path ="/thelotusdifference" element = {<TheLotusDifference/>} />
        <Route path ="/tobaccoaddiction" element = {<TobaccoAddiction/>} />
        <Route path ="/wellnesscentre" element = {<WellnessCentre/>} />
    </Routes>
}

export default App;
