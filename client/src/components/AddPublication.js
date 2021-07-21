import React, { useState } from "react";
import axios from 'axios'
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';


const AddPublication = () => {
    

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setdescription] = useState("");
    const [date, setDate] = useState("");
const history = useHistory();


    const changeOnClick = e => {
        e.preventDefault();


        const publications = {
            title,author,description,date

        }

        

        const res=axios.post("http://localhost:5000/publications/addp", publications)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
            if(res.status === 400||!title||!author||!description||!date){
                window.alert("Invalid Registration")
                console.log("Invalid Registration")
               

            }else{
                window.alert("Registration Successfull")
                history.push("/")  

            }
          
            
    };
    


    return (

        <div className="regi_form">
                <div className="fi_title"><label>Faculty publication Details</label></div>

            <form   className="formContainer"    onSubmit={changeOnClick} encType="multipart/form-data" >
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text"
                        onChange={e => setTitle(e.target.value)}
                        className="form-control" id="title"  placeholder="Enter title " autocomplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author :</label>
                    <input type="text"
                        onChange={e => setAuthor(e.target.value)}
                        className="form-control" id="author"  placeholder="Enter Author Name" autocomplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <textarea type="textarea"
                        onChange={e => setdescription(e.target.value)}
                        className="form-control" id="description"  placeholder="Add Your Content"  autocomplete="off"/>
                </div>
                <div className="form-group">
                <label htmlFor="date">Date: </label>
                    <input type="date"

                    
                        onChange={e => setDate(e.target.value)}
                        className="form-control" id="date"   autocomplete="off"/>
                    {/* <label htmlFor="date">Date: </label>
                    <DatePicker dateFormat="dd/MM/yyyy"
                        selected={startDate} onChange={date=> setStartDate(date)}
                         /> */}
                </div>
                <div className="submit_div" ><button  className="submit_btn" type="submit" >Submit</button></div>

            </form>



{/* 
            <div className="container">
	<div className="row">
			<h1>contact us</h1>
	</div>
	<div className="row">
			<h4 >We'd love to hear from you!</h4>
	</div>
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input" >
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="col-xs-12">
				<div className="btn-lrg submit-btn">Send Message</div>
			</div>
	</div>
</div>
 */}







        </div>
    )
}

export default AddPublication
