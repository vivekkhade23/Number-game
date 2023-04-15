import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Page/Home'
import Play from '../Page/Play'
import Leaderboard from '../Page/Leaderboard'

const AllRoutes = () => {
  return (
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/play' element={<Play/>}/>
<Route path='/leaderboard' element={<Leaderboard/>}/>

</Routes> 
 )
}

export default AllRoutes