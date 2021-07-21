import React from 'react'
import '../../App.css';
import fac_reg from '../../fac-register.png'
import fac_info from '../../fac_info.png'
import fac_pub from '../../fac_pub.gif'
import fac_pub_reg from '../../fpr.png'


const Home = () => {
    return (
        <div className="home">

            <a href="/faculties">  <div className="section" style={{ background: "rgb(245, 33, 33)" }} >
                <div className="fr_section" > <label className="headsection">Faculty Information
               </label>
                    <label className="description">Get the information about each and every teaching and non-teaching staff, heigher authorities etc.</label>
                </div>
                <div style={{}} > <img className="img_fi" src={fac_info} /></div>

            </div>
            </a>

            <a href="/add-faculty"><div className="section" id="fac_regist" style={{ background: "rgb(211, 152, 24)" }} >
                <div className="fr_section" > <label className="headsection">Faculty Registration
               </label>
                    <label className="description">To share details with Sanjay Ghodawat university, faculties can register here.</label>
                </div>
                <div style={{}} > <img className="img_fr" src={fac_reg} /></div>
            </div>

            </a>

            <a href="/publications"><div className="section" style={{ background: "rgb(58, 49, 138)" }} >
                <div className="fr_section" > <label className="headsection">Faculty Publication Details
               </label>
                    <label className="description">Get the information about researches, generals and articles published by faculties.</label>
                </div>
                <div style={{}} > <img className="img_pb" src={fac_pub} /></div>
            </div>
            </a>

            <a href="/add-publication">  <div className="section" style={{ background: "rgb(245, 33, 33)" }} >
                <div className="fp_section" > <label className="headsection">Faculty Publication Registration
               </label>
                    <label className="description">To share details about your publication with Sanjay Ghodawat university, faculties can register here for publication.</label>
                </div>
                <div style={{}} > <img className="img_fi" src={fac_pub_reg} /></div>

            </div>
            </a>
        </div>
    )
}

export default Home

