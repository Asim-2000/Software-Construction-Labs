import React from 'react'
import './UserOutput.css'

const UserOutput=props=> {
  return (
      <div className="UserOutput">
          <p>UserName:{ props.username }</p>
          <p>Random Text Part 2</p>
      
    </div>
  )
}

export default UserOutput;
