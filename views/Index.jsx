import React from 'react'

function Index(props) {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
    };

    const cap = (name) =>{
        //https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
        let letter = name.charAt(0).toUpperCase()
        let rem = name.slice(1)
        return letter+rem
    }
  return (
    <div style={myStyle}>
      <h1>See all the pokemon</h1>
      {
        props.pokemon.map((item)=>{
            return <h1>{cap(item.name)}</h1>
        })
      }
    </div>
  )
}

export default Index
