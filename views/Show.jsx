import React,{useEffect, useState} from 'react'
import pokemon from '../models/pokemon';

function Show(props) {

    const cap = (name) =>{
        //https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
        let letter = name.charAt(0).toUpperCase()
        let rem = name.slice(1)
        return letter+rem
    }

    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#00A0A0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };
    
    const aStyle = {
        fontSize: '20px',
        margin: '10px'
    };

    const imgStyle = {
        height: '500px',
        margin: '10px'
    };
//props.pokemon.sprites.front_default
  return (
    <div style={myStyle}>
        <div>
            <h1>Gotta catchem all</h1>
                <h1>{cap(props.pokemon.name)}</h1>
                <img style={imgStyle} src={props.pokemon.img+".jpg"} alt="" />
                <br/>
                <a style={aStyle} href={`/pokemon/${props.pokemon._id}/edit`}>Change this pokemon</a>
                <form action={`/pokemon/${props.pokemon._id}?_method=DELETE`} 
                    method="POST">
                        <input type="submit" value="DELETE THIS POKEMON"/>
                    </form>
                    <br/>
                <a style={aStyle} href="/pokemon">Back </a>
        </div> 
    </div>
  )
}

export default Show
