import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <React.Fragment style={newStyle}>
        <h1>About</h1>
        <p>Version 1.0.0</p>
    </React.Fragment>
  )
}

const newStyle = {
    padding: '10px'
}

export default About;