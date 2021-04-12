import React from 'react';

const character = (props) => {

    const styles = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign:'center',

    }

    return (
      <div style={styles} onClick={props.clicked}>
        {props.char}
      </div>
    );
  
    
};

export default character;