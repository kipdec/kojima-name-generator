import React, { useState } from 'react'

const Results = props => {
  const hasMan = useState(props.hasMan)
  const hasBig = useState(props.hasBig)
  const hasOld = useState(props.hasOld)
  const hasCondition = useState(props.hasCondition)
  const hasClone = useState(props.hasClone)
  const hasKojima = useState(props.hasKojima)
  const hasBody = useState(props.hasBody)

  return(
    <h1>Your Kojima Name:</h1>
  )
}