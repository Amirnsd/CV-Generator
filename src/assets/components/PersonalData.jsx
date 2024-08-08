import '../../style/PersonalData.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function PersonalData({person,setPerson}) {


    const [isVisible, setIsVisible] = useState(true);
    
     const handleChange = (e) =>{
         const {name,value} = e.target;
        setPerson(person => ({ ...person, [name]: value }))
        
     }

    const handleAngle = () => {
      setIsVisible(prevState => !prevState);
  };

    console.log(person);

    return(
        <>
        <section className='personal-information ' >
        <h1>Personal Information 
              <button className='information-button' onClick={handleAngle}>
                <FontAwesomeIcon icon={isVisible ? faAngleUp : faAngleDown}/>
              </button>
              </h1>

            <div className="information" style = {{display: isVisible ? 'none' : 'block'}}>
          
          
          <div className='fullname'>
            <h2>Full Name</h2>
             <input className='input-name' 
             type='text'
             name="Name"
             value={person.Name}   
             placeholder='Enter your full name'
             onChange={handleChange} 
             required />
          </div>

          <div className='email'>
            <h2>Email</h2>
             <input className='input-email'
              value={person.Email} 
              name="Email" 
              type='email'
               placeholder='Email'
               onChange={handleChange} 
               required />
          </div>

          <div className='phone-number'>
            <h2>Number</h2>
             <input className='input-number'
              value={person.number} 
              name="number" 
              type='text'
               placeholder='Number'
               onChange={handleChange} 
               required/>
          </div>

          <div className='Address'>
            <h2>Address</h2>
             <input className='input-address' 
             value={person.Address} 
             name="Address" 
             type='text'  
             placeholder='Address' 
             onChange={handleChange} 
             />
           </div>

          </div>     
      </section>

        </>
    )
};

