// alert('JavaScript is working')
// we use Js to manipulate HTML
//create html consten with 

const pokemon = ['charmander', 'bulbasaur', 'squirtle'];
const pokemonIDs = ['001', '004', '007'];

/* loop over every single ID 
create an HTML element - 
 set the HTML element values
 append HTML element to the DOM

 */

 //grab img URL
 //create variable called imgUrl -- use backticks 
//
 pokemonIDs.map((id) => {
     let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
     console.log('img Url', imgUrl)
     let img = document.createElement('img')
     img.src = imgUrl
     img.setAttribute('heigh', '100px')
     img.setAttribute('width', '100px')
     document.body.append(img)
 })
 