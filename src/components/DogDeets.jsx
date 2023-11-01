import React from 'react'
import "../index.css"


const DogDeets = ({dog, handleMorality}) => {
const{id, name,isGoodDog,image} = dog

  return (
    <>
      
        <div id="dog-info">
            <img src={image}/>
            <h2>{name}</h2>
            
            {isGoodDog ? 
                 <button onClick={()=>handleMorality(id)}>Good Dog!</button>
                 :
                 <button onClick={()=>handleMorality(id)}>Bad Dog!</button>
            
        }
           

        </div>
    </>
  )
}

export default DogDeets
