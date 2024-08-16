import React, { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      
      <FoodDisplay category={category}/>
      <AppDownload/>
    </>
  )
}

export default Home
