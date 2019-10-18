import React, { useState } from "react";


export default function SearchForm(props) {
  
  const onChangeHandler = (e) =>{
    props.setQuery(e.target.value)
  } 

  return (
    <div>
      <form>
        <input type="text" onChange={onChangeHandler} placeholder="Search By Name" />
      </form>
    </div>
  );
}