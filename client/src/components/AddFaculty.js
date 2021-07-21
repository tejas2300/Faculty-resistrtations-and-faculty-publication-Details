import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { registerLocale } from 'react-datepicker';
const AddFaculty = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [aoi,setAoi]=useState("");
    const [edu,setEdu]=useState("");
    const [designation,setDesignation]=useState("");
    const [locationOfChamer,setLocation]=useState("");

    const history=useHistory();
const changeOnClick = e =>{
    e.preventDefault();


    const faculties={
        name ,
        email,
        phone,
        aoi,
        edu,
        designation,
        locationOfChamer
    }

   const res1 =axios.post("http://localhost:5000/faculties/add",faculties)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err));
    if(res1.status===400||!name||!email||!phone||!designation||!locationOfChamer||!aoi||!edu){
        window.alert("Invalid Registration")

    }else{
        window.alert("Registration successfull")
        history.push("/")  

    }

};


    return (
        <div className="regi_form">
                    <div className="fi_title"><label>Faculty Registration</label></div>

            <form className="formContainer" onSubmit={changeOnClick} encType="multipart/form-data">
         
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    onChange={e=>setName(e.target.value)}
                    className="form-control" id="name" aria-describedby="name" placeholder="Enter faculty name" autocomplete="off" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    onChange={e=>setEmail(e.target.value)}
                    className="form-control" id="email" aria-describedby="email" placeholder="Enter email"  autocomplete="off"/>
                   
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" 
                    onChange={e=>setPhone(e.target.value)} 
                     className="form-control" id="phone" aria-describedby="phone" placeholder="Enter phone "autocomplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="aoi">Area Of Interest </label>
                    <input type="text" 
                    onChange={e=>setAoi(e.target.value)} 
                     className="form-control" id="aoi" aria-describedby="aoi" placeholder="Enter area of interest  "autocomplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="edu">Education</label>
                    <input type="text" 
                    onChange={e=>setEdu(e.target.value)} 
                     className="form-control" id="edu" aria-describedby="edu" placeholder="Enter education "autocomplete="off" />
                </div>

                <div className="form-group">
                    <label htmlFor="designation">Designation</label>
                    <input type="text" 
                    onChange={e=>setDesignation(e.target.value)}
                    className="form-control" id="designation"aria-describedby="designation"  placeholder="Enter designation "autocomplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location of Chamber </label>
                    <input type="text" 
                    onChange={e=>setLocation(e.target.value)}
                    className="form-control" id="location" aria-describedby="location" placeholder="Enter the location of chamber " autocomplete="off"/>
                </div>
             
                <button  type="submit" className="submit_btn">Submit</button>
            </form>

        </div>
    )
}

export default AddFaculty
