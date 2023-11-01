import React, { useState } from 'react'

const Filter = ({filter, handleFilter}) => {
    

  return (
    <>
      <button onClick={handleFilter} id="good-dog-filter">Filter good dogs: {filter? "OFF":"ON"}</button>
    </>
  )
}

export default Filter
