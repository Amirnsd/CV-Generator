import { useState } from "react";
import '../../style/Professional.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
 

function ProfessionalData({profession,setProfession}) {

  const [isVisible,setIsVisible] = useState(true);

  function handleProfession(e){
    const {name,value} = e.target;
    
    setProfession((prevProfession)=>({...prevProfession,[name]:value}))
  }


  const handleAngle = () =>{
    setIsVisible((isVisible) => !isVisible);
  }

    return(
        <>
           <section className='professional-information'>
          <h1>Professional Information
          <button className="professional-button" onClick={handleAngle}>
            <FontAwesomeIcon icon={isVisible ? faAngleUp : faAngleDown} />
          </button>
          </h1>
          
           <div className="professional-container" style={{ display: isVisible ? 'none' : 'block'}} >

          <div className='job'>
            <h2>Job Title</h2>
             <input className='input-job'
              name="Job"
              value={profession.Job}
              type='text'
               placeholder='Enter Job Title' 
               onChange={handleProfession}
               required/>
          </div>

          <div className='company'>
            <h2>Company</h2>
             <input className='input-company'  
            name="Company"
            value={profession.Company}
             type='text' 
             placeholder='Enter Company' 
             onChange={handleProfession}
             required/>
          </div>

          <div className='job-date'>
            <h2>Start Date</h2>
             <input className='input-job-start-date'
              name="staringDate"
              value={profession.startingDate}
              type='date'
              onChange={handleProfession}
               required/>

             <h2>End Date</h2>
             <input className='input-job-end-date'
              name="endingDate"
              value={profession.endingDate}
              type='date' 
              onChange={ handleProfession}
              required/>
          </div>

          <div className='description'>
            <h2>Description</h2>
             <textarea className='input-description'
             name="Description" 
             value={profession.Description}
             type='text'
              placeholder='Enter Description'
              onChange={handleProfession}
               required/>
           </div>
    
          </div>
      </section>
        </>
    )
}

export default ProfessionalData;