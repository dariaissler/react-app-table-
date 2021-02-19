import { useState } from "react";
import React from 'react';


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

const [value, setValue] = useState('')

const valueChangeHandler = (event) => {
    setValue(event.target.value)
}

    return (
        <div className="input-group mb-3 mt-3">
  <div className="input-group-prepend">
    <button 
    className="btn btn-outline-secondary"
    onClick={() => props.onSearch(value)}
    >Search</button>
  </div>
  <input 
  type="text" 
  className="form-control" 
  value={value}
  onChange={valueChangeHandler}
  />
</div>

    )
}