import React from 'react'

const UserInput=(props)=> {
  return (
      <div>
          
          <input
              type="text"
              onChange={props.changed}
              current={props.currentName}
          ></input>
      
    </div>
  )
}

export default UserInput;