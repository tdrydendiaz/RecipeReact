import React from 'react';
import '../App.css';

function SearchBar(props)  {

  return (
    <div >
        <input placeholder="Search..." onChange={props.passedFunction}></input>
        

    </div>
  );

}

export default SearchBar;