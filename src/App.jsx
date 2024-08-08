import './App.css'
import ProfessionalData from './assets/components/ProfessionalData'
import EducationData from './assets/components/EducationData'
import PersonalData from './assets/components/PersonalData'
import CvPersonalForm from './assets/components/CvPersonalForm'
import { useState } from 'react'

function App() {

  const [person,setPerson] = useState({
    
    Name:"John Smith",
    Email:"johnsmith@gmail.com",
    number: "803-318-2181",
    Address: "Canada"
})


const [education,setEducation] = useState({
  Degree:"Bacholer of Computer Science",
  School:"Toronto University",
  City:"Toronto",
  Country:"Canada",
  startDate:"2018-03-07",
  endDate:"2022-03-13"
})  


const [profession,setProfession] = useState({
      Job:"Full-Stack developer",
      Company:"Google",
      staringDate:" 2022-08-07",
      endingDate:" 2024-09-13",
      Description:"At Google, I developed and maintained scalable web applications using JavaScript, React, Node.js, and Python. I designed and integrated RESTful APIs to facilitate smooth data exchange between front-end and back-end systems. Collaborating with UX/UI designers and product managers, I implemented responsive and user-friendly interfaces. I also optimized application performance and ensured robust security measures while leading code reviews and contributing to best practices for coding standards and deployment processes."
  
    
    })


  return(
   

    <div className='main-div'>

    <div className='left-div'>
    <PersonalData person={person} setPerson={setPerson}/>
    <EducationData education={education} setEducation={setEducation} />
    <ProfessionalData profession={profession}  setProfession={setProfession} />
    </div>

      <div className='right-div'>
      <CvPersonalForm person={person} education={education}  profession={profession} />
      </div>

      </div>
  
  )

}

export default App
