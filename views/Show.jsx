import React from 'react'

function Show(props) {
    const cap = (name) =>{
        //https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
        let letter = name.charAt(0).toUpperCase()
        let rem = name.slice(1)
        return letter+rem
    }
    
    const aStyle = {
        fontSize: '20px',
        margin: '10px'
    };

    const imgStyle = {
        height: '500px'
    };

  return (
    <div>
      <h1>Gotta catchem all</h1>
      <h1>{cap(props.pokemon.name)}</h1>
      <img style={imgStyle} src={props.pokemon.img+'.jpg'} alt="" />
      <br/>
      <a style={aStyle} href="/pokemon">Back </a>
    </div>
  )
}

export default Show
