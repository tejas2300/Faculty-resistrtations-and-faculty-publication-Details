import React from 'react'
// import abimg from  '../../aboutimg.jpg'
import styled from "styled-components"


const AboutUs = () => {
    return (
        <div className="aboutUs">
            <h1 >About Us </h1>
            <AboutContainer className="aboutImg" >

            </AboutContainer>
            <div className="about_content">
            Sanjay Ghodawat University (Formerly called Sanjay Ghodawat Group of Institutions) is the only Private (Self
            Financed) University.Its uniqueness lies in the world class academic culture for innovative teaching –
            learning practices with an emphasis on research and innovation. The University has roped in the best of
            academic professionals and experts in the teaching field and provides a world class supportive
            infrastructure for the purpose. By taking all the thoughts we are come up with "Faculty Publication And
            Details".<br/><br/>
            Our teaching,non-teaching staff having some unique ideas so they are presenting here so Students for
            Undergraduate, Post Graduate and PhD level can opt for degrees in Liberal Arts can grab this thoughts and
            apply these in rural life.<br/><br/>
            To upgrade the students and expose them in upcoming situation,we provideing the thoughts of our staff
            whatever they experienced in their life,so by taking their experience student can make their goals and can
            fly over the world.<br/><br/>
            A small step in the right direction can go a long way to make the right impact on lives and society around.
            Sanjay Ghodawat University is such a step that is already creating ripples of positive effect in the
            academic world. Indeed with Sanjay Ghodawat University the maxim is true, “Empowering Lives Globally”.
            </div>


        </div>
    )
}

export default AboutUs



const AboutContainer = styled.header`


    background: url(../../images/aboutimg.jpg) no-repeat center/cover;
    height : 25rem;
    width:37.5rem;
    margin: auto;


    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;


`;