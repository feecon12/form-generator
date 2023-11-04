import React, { useState } from 'react'

const Text = (props) => {
  const [input, setInput] = useState('');

  const validateInput = (input) =>{
    if(input.trim() === ''){
      return <div>Input can't be empty</div>
    }
    if(input.trim().length < 3){
      return <div>Input should be atleast 3 characters long</div>
    }
    return ''
  }

  const [error, setError] = useState('');

  const handleInputChange = (e) =>{
    setInput(e.target.value);
    setError(validateInput(e.target.value));
  }
  return (
    <div>
      <label>Text: </label> <input type='text' value={input} placeholder="Name" onChange={handleInputChange}/>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Text