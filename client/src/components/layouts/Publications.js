import React from 'react'
import spinner from "../../spinner.gif"
const publications = ({ posts2 }) => {
    return (
        <>
            <div className="Pidiv">
                <div className="pi_title">Publications Section</div>

                 {!posts2.length ?( <img  src={spinner} alt ="loding ...."/>):( 
                posts2.map((publications, key) => (
                     <div className="container1" >
                <h2>Title :{publications.title}</h2>
                <p>Description :{publications.description }</p>
                <p>Author :{publications.author }</p>
                <p>Date :{publications.date }</p>
           
                </div>
                )))}
        </div>
        </>
    );
};

export default publications

// main container 

// const MainContainer = styled.div`
// margin:7rem 0 ;
// `;