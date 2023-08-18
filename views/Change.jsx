import React from 'react'

function Change(props) {
  return (
    <div>
        <h1>Change this pokemon</h1>
      <form action={`/pokemon/${props.pokemon._id}?_method=PUT`} method='POST'>
       Pokemon: <input type='text' name='pokemon' defaultValue={props.pokemon.name}/><br/>
       <input type='submit' value={'Submit new pokemon'}/>
      </form>
    </div>
  )
}

export default Change
