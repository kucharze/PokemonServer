import React from 'react'

function Index(props) {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#00A0A0',
        display: 'flex',
        flexDirection: 'column'
    };

    const aStyle = {
        fontSize: '20px',
        margin: '10px'
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
        props.pokemon.map((item,i)=>{
            return <a style={aStyle} href={`/pokemon/${i}`} key={i}>{cap(item.name)}</a>
        })
      }
    </div>
  )
}

export default Index
