import React from 'react'
import styled from "styled-components"
// import banner from "../../banner1.jpg"

const Header = () => {
    return (

        <MainContainer>
          
            <h1>Welcome ! <br/> Faculty Registration and Faculty Publication Details</h1>
            
        </MainContainer>
    )
}

export default Header


//Main container 
const MainContainer = styled.header`


    background: url(../../images/banner1.jpg) no-repeat center/cover;
    height : 25rem;
    // filter: brightness(50%);

h1{
    tranform: translate(-50%,-50%);
    color:#fff;
    padding:10px;
    


    position:absolute ;
    text-align: justify;
    font-family:Lato;
    font-size:50px;
    top : 30%;
    border-radius: 25px;
    left 17%;
}
`;

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => props.primary ? "palevioletred" : "white"};
//   color: ${props => props.primary ? "white" : "palevioletred"};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;