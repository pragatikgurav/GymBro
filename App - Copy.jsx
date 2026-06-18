import Form from "./Form"
import Read from "./Form/Services/Read"
import HeroSection from "./HeroSection"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './DashBoard/Home'
import Signup from "./Form/Signup"

import Membership from "./DashBoard/Membership"
// import TrainerCard from "./DashBoard/Trainers/TrainerCard"
import Trainer from "./DashBoard/Trainers/Trainer"
import Program from './DashBoard/Programs'
import Reviews from './DashBoard/Reviews'
import BMICalculator from "./DashBoard/BmiCal/BMICalculator"
import AboutUs from './DashBoard/AboutUs'
import PageNotFound from './PageNotFound'
import ContactUs from "./DashBoard/ContactUs"
function App() {
 

  return (
    <BrowserRouter>
         
      <Routes>
         <Route exact path="/" element={<HeroSection/>}/>
         <Route exact path="/form" element={<Form/>}/>
         <Route exact path="/form/table" element={<Read/>}/>
         <Route exact path="/form/signup" element={<Signup/>}/>
         <Route exact path="/dashboard" element={<Home/>}/>
         
         <Route exact path="/dashboard/membership" element={<Membership/>}/>
         <Route exact path="/dashboard/trainers" element={<Trainer/>}/>
         <Route exact path="/dashboard/program" element={<Program/>}/>
         <Route exact path="/dashboard/review" element={<Reviews/>}/>
         <Route exact path="/dashboard/bmi" element={<BMICalculator/>}/>
         <Route exact path="/dashboard/about" element={<AboutUs/>}/>
         <Route exact path="/dashboard/contact" element={<ContactUs/>}/>
         <Route exact path="*" element={<PageNotFound/>}/>
        
       </Routes>

    </BrowserRouter>

    
  )
}

export default App
