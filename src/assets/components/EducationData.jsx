import "../../style/Education.css"; 
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function EducationData({education,setEducation}) {


  const [isVisible,setIsVisible] = useState(true);

  const handleEducation = (e) => {
    const {name,value} = e.target;
    setEducation(education=>({...education,[name]:value}));
  }

  const handleAngle = () => {
      setIsVisible(isVisible => !isVisible);
  }

    return (
        <>
        <section className='educational-information'>
          <h1>Educational Information
              <button className="education-button" onClick={handleAngle}>
                <FontAwesomeIcon  icon={isVisible ? faAngleUp : faAngleDown}/>    
              </button>
              </h1>
             <div className="education-container" style={{display: isVisible ? 'none' : 'block'}}>

             <div className='Degree'>
            <h2>Degree</h2>
             <input className='input-degree'
              name="Degree" 
              value={education.Degree}
              type='text' 
              placeholder='Enter Degree/Field of Study'
              onChange={handleEducation}
              required
              />
          </div>

          <div className='school'>
            <h2>School</h2>
             <input className='input-school' 
             name="School"
             value={education.School} 
             type='text'
              placeholder='Enter School'
              onChange={handleEducation}
              required
              />
          </div>

          <div className='city'>
            <h2>City</h2>
             <input className='input-city'
              name="City" 
              value={education.City}
              type='text' 
              placeholder='Enter City'
              onChange={handleEducation}
              required
              />
          </div>

          <div className='country'>
            <h2>Country</h2>
             <input className='input-country' 
             name="Country"
             value={education.Country} 
             type='text' 
             placeholder='Enter Country'
             onChange={handleEducation}
             required
             />
          </div>

          <div className='school-date'>
            <h2>Start Date</h2>

             <input className='input-start-date'
              name="startDate" 
             value={education.startDate}
              type='date' 
              onChange={handleEducation}
              required
              />

             <h2>End Date</h2>
             <input className='input-end-date'
              name="endDate" 
              value={education.endDate}
              type='date' 
              onChange={handleEducation}
              required
              />
          </div>


             </div>
         
      </section>
        </>
    )
}