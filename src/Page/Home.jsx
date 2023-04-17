import { Box, Button, FormControl, FormLabel, HStack, Input, Radio, RadioGroup } from '@chakra-ui/react'
import React from 'react';
import style from "./style.module.css"


const Home = () => {
  return (
    <Box className={style.main}>

   <Box className={style.home}>
    <FormControl>
  <FormLabel>Player Name</FormLabel>
  <Input type='text' />

  <FormLabel as='legend' htmlFor={null}>
Choose Difficulty Level
  </FormLabel>
  <RadioGroup defaultValue='Itachi'>
    <HStack spacing='24px'>
      <Radio value='Easy'>Easy</Radio>
      <Radio value='Medium'>Medium</Radio>
      <Radio value='Hard'>Hard</Radio>
    </HStack>
  </RadioGroup>
</FormControl>
<Button>
    Play
</Button>

   </Box>
    </Box>
  )
}

export default Home