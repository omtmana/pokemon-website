// alert('JavaScript is working')
// we use Js to manipulate HTML
//create html consten with 

//const pokemon = ['bulbasaur', 'charmander', 'squirtle'];
const pokemonIDs = ['001', '004', '007'];
const pokemon = [
    {name: 'Bulbasaur', id: '001'},
    {name: 'Charmander', id: '004'},
    {name: 'Squirtle', id: '007'},
]

const containerDiv = document.querySelector('#container');
const newBtn = document.querySelector('#new-pokemon-btn');

newBtn.addEventListener('click', () => {
   let num =  prompt('ENTER A POKEMON NUMBER')
   console.log('Number entered' , num)
})

 pokemon.map((element, index) => {
     console.log(element);
     
     let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
     let div = document.createElement('div') // adding a div to house the img element
     let h3 = document.createElement('h3')
     
     h3.innerText = element.name //adds the name inder the picture
     div.setAttribute('class', 'pokemon-card') // setting the class of the div
     
     let img = document.createElement('img') // creating the img element itself
     let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${element.name.toLowerCase()}.mp3`
     let audio = document.createElement('audio')
     let source = document.createElement('source')
     
     source.setAttribute('src', audioUrl)
     source.setAttribute('type', 'audio/mpeg')
     audio.append(source)

     div.addEventListener('click', () => {
         console.log('audio', audioUrl)
         audio.play()
     })
     
     img.src = imgUrl
     div.append(img, h3, audio) //append the img element 
     containerDiv.append(div)
 })
 
/* loop over every single ID
create an HTML element -
 set the HTML element values
 append HTML element to the DOM

 */

 //grab img URL
 //create variable called imgUrl -- use backticks
