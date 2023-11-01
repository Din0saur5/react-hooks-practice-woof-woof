import React, { useEffect, useState } from "react";
import DogDeets from "./DogDeets";
import Filter from "./Filter";

function App() {
    //becasue it's a small data set going to use state to hold the obj array
  const [dogs, setDogs] = useState([])
  const [dog, setDog] = useState([])
  const [filter, setFilter] = useState(false)

  useEffect(()=>{
    fetchDogs()
    setDog(dogs[0])
  },[])


  const fetchDogs = () => {
    fetch('http://localhost:3001/pups')
    .then(resp=>resp.json())
    .then(data=>
      setDogs(data))
  }
  

  const handleMorality = (id) => {
    let morality
    let updatedDogs = dogs.map(dog=>{ 
      if(dog.id===id){
       morality = (dog.isGoodDog)
       dog.isGoodDog = (!morality)
         
      }
      return dog
    })
    
    fetch(`http://localhost:3001/pups/${id}`,{
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({isGoodDog: !morality})
    })
    .then(resp=>resp.json())
    .then((data)=>{
    console.log(data)
      setDogs(updatedDogs)})
  }
  let displayDogs = filter ? 
    (dogs.filter(dog=>dog.isGoodDog))
    :
    dogs

  const handleFilter = () => {
      setFilter(!filter)
      
    }
  
  
  

  return (
    <div className="App">
      <div id="filter-div">
        <Filter filter={filter} handleFilter={handleFilter}/>
      </div>
      <div id="dog-bar">
        {displayDogs.map((dog)=>{
          return <span onClick={()=>{setDog(dog)}}>{dog.name}</span>
        })}
      </div>
      <div id="dog-summary-container">
      <h1>DOGGO:</h1>
        <DogDeets dog={dog} handleMorality={handleMorality}/>
      </div>
    </div>
  );
}

export default App;
