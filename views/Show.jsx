import React,{useEffect, useState} from 'react'

function Show(props) {
    const [url,setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
    const [pok,setPok] = useState(null)
    
    const getPokemon = async () => {
        const dat = await axios.get(url);
        //   console.log(dat.data);
        let items =  await dat.data;
        console.log(items)
        setPok(items)
    };

    useEffect(()=>{
        getPokemon()
    },[])

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
        height: '500px'
    };

  return (
    <div style={myStyle}>
      <h1>Gotta catchem all</h1>
      <h1>{cap(props.pokemon.name)}</h1>
      <img style={imgStyle} src={props.pokemon.img+'.jpg'} alt="" />
      <br/>
      <a style={aStyle} href="/pokemon">Back </a>
    </div>
  )
}

export default Show
