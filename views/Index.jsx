import React from 'react'

function Index(props) {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#00A0A0',
        display: 'flex',
        flexDirection: 'column'
    };
    const boxStyle = {
        color: '#f00000',
        backgroundColor: '#00A0A0',
        display: 'flex',
        flexDirection: 'column'
    };

    const aStyle = {
        fontSize: '30px',
        margin: '15px'
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
      <a href='/pokemon/new'>Add a new pokemon</a>
      {
        props.pokemon.map((item,i)=>{
            return <div style={boxStyle} key={i}>
              <a style={aStyle} href={`/pokemon/${item.id}`} >{cap(item.name)}</a>
              </div>
        })
      }
    </div>
  )
}

export default Index
