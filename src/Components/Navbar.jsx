import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./style.module.css"

const Navbar = () => {
  return (
    <HStack className={style.Navbar}>
        <Link to="/">
            Home
        </Link>
        <Link to="/leaderboard">
            LeaderBoard
        </Link>
    </HStack>
  )
}

export default Navbar