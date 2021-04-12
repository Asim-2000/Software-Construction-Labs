import React from 'react'
import './UserOutput.css'

const UserOutput=props=> {
  return (
      <div className="UserOutput">
          <p>UserName (Will be changed): { props.username }</p>
          <p>Random Text Here (I wont Change)</p>
      
    </div>
  )
}

export default UserOutput;
