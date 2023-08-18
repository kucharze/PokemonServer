import React from 'react'

function New() {
  return (
    <div>
        <h1>Add a new pokemon</h1>
      <form action='/pokemon' method='POST'>
       Pokemon: <input type='text' name='pokemon'/><br/>
       <input type='submit' value={'Submit new pokemon'}/>
      </form>
    </div>
  )
}

export default New
