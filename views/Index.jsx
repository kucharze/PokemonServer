import React from 'react'

function Index(props) {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
    };
  return (
    <div style={myStyle}>
      <h1>See all the pokemon</h1>
      {
        props.pokemon.map((item)=>{
            return <h1>{item.name}</h1>
        })
      }
    </div>
  )
}

export default Index
