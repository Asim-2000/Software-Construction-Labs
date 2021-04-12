import React from 'react'


const UserInput = props => {
  
  const inputStyles = {
    border: '2px solid blue',
  }
  const labelStyles = {
    fontWeight: 'bold',
  }
  return (
    <div>
    
      <label style={ labelStyles}>User Input Here: </label>
          <input
        type="text"
        style={inputStyles}
              onChange={props.changed}
              current={props.currentName}
          ></input>
      
    </div>
  )
}

export default UserInput;