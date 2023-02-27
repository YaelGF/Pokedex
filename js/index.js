buton=document.getElementById('button')
buton.addEventListener('click',()=>{
  caja=document.getElementById('caja').value
  //let img=document.getElementById('img')
  p=document.getElementById('info')
  pokemones=new XMLHttpRequest()
  pokemones.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja}`)
  pokemones.send()
  pokemones.onreadystatechange=function () {
    if(this.readyState==4 && this.status==200){
      datoPokemon=JSON.parse( this.responseText)
      console.log(datoPokemon)
      img.setAttribute("src",datoPokemon.sprites.front_default)
      imgs.setAttribute("src",datoPokemon.sprites.front_shiny)
      info.setAttribute("value",datoPokemon.name.toUpperCase())
    }
  }
})