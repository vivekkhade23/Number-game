import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <HStack>
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