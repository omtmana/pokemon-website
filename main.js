// alert('JavaScript is working')
// we use Js to manipulate HTML
//create html consten with 

//const pokemon = ['bulbasaur', 'charmander', 'squirtle'];
const pokemonIDs = ['001', '004', '007'];

const pokemon = [
    {name: 'bulbasaur', id: '001'},
    {name: 'charmander', id: '004'},
    {name: 'squirtle', id: '007'},
]

const containerDiv = document.querySelector('#container');

 pokemon.map((element, index) => {
     console.log(element);
     let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    //  console.log('img Url', imgUrl)
   
     let div = document.createElement('div') // adding a div to house the img element
     let h3 = document.createElement('h3')
     h3.innerText = element.name //adds the name inder the picture
     div.setAttribute('class', 'pokemon-card') // setting the class of the div
     let img = document.createElement('img') // creating the img element itself
     img.src = imgUrl
     div.append(img, h3) //append the img element 
     containerDiv.append(div)
 })
 
/* loop over every single ID
create an HTML element -
 set the HTML element values
 append HTML element to the DOM

 */

 //grab img URL
 //create variable called imgUrl -- use backticks
