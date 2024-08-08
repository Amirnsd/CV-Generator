import "../../style/CvForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function CvPersonalForm ({person,education,profession}){

    return (
        <>
        <div className='header-form'>

           <div className="personal-form">
            <h1>{person.Name}</h1>
           </div>

           <div className="contact-info">
            <h2><FontAwesomeIcon style={{color:"#fff",marginRight :'10px' }} icon={faEnvelope}/> {person.Email}</h2>
            <h2><FontAwesomeIcon style={{color:"#fff",marginRight :'10px' }} icon={faPhone} /> {person.number}</h2> 
            <h2><FontAwesomeIcon style={{color:"#fff",marginRight :'10px' }} icon={faHouse} />{person.Address}</h2>
           </div>

           </div>

           <div className="education-section">
            <h1>Education</h1>
        </div>

        <div className="education-details">
            <div className="education-header">
                <h2 className="education-degree">{education.Degree}</h2>
                <h2 className="education-dates">{education.startDate} to {education.endDate}</h2>
            </div>
            <div className="education-location">
                <h2>{education.School}, {education.City}, {education.Country}</h2>
            </div>
        </div>


            <div className="profession-info-container">
                <h1>Profession</h1>
            </div>
            
            <div  className="profession-info">
                <div className="profession-header">
                    <div className="job-name">
                        <h2>{profession.Job}</h2>
                        <h2>{profession.Company}</h2>
                    </div>
                    <div className="job-date">
                        <h2>{profession.startingDate} to {profession.endingDate}</h2>
                    </div>
                </div>
                <div className="job-description">
                    <p>{profession.Description}</p>
                </div>

            </div>

        
        </>
    )
}