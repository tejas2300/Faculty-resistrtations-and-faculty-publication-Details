import React,{useState,useEffect} from "react"
import {Route} from 'react-router-dom'
import axios from 'axios'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Faculties from "./components/layouts/Faculties";
import Publications from "./components/layouts/Publications";
import Home from "./components/layouts/Home";
import AddFaculty from "./components/AddFaculty";
import AddPublication from "./components/AddPublication";
import AboutUs from "./components/layouts/AboutUs";



function App() {
  const [posts,setposts]=useState([]);
  const [posts2,setposts2]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/faculties")
    .then(res => setposts(res.data))
    .catch(error=>console.log(error));
  })
  useEffect(()=>{
    axios.get("http://localhost:5000/publications")
    .then(res => setposts2(res.data))
    .catch(error=>console.log(error));
  })
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <Route exact path="/">
     
      <Home/>
    </Route>
    <Route  path='/faculties' render={()=><Faculties posts={posts}/>}/>
    <Route  path="/add-faculty" component={AddFaculty}/>
    <Route  path='/publications' render={()=><Publications posts2={posts2}/>}/>
    <Route  path="/add-publication" component={AddPublication}/>
    <Route  path="/about" component={AboutUs}/>
     <Footer/>
     {/* <Route  path='/faculties' render={()=><Faculties posts={posts}/>}/> */}
    </div>
  );
}

export default App;
