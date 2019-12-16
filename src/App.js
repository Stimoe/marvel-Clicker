import React from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import heroes from "./heroes.json";
import "./App.css";
import GameWon from "./components/gameWon"


let randomHeroes = heroes

let newHighScore;
let emptyArray = []

class App extends React.Component {

  state = {
    randomHeroCards: randomHeroes,
    count: 0,
    clickedCards: [],
    highScore: 0,
    currentCard:[]

  }


  cardClicked = (id) => {

let newClickedCards=this.state.clickedCards
var same = newClickedCards.includes(id)
let currentCount=this.state.count
let currentHighScore=this.state.highScore

console.log("clicked cards ",newClickedCards);
console.log("current count ",currentCount);
console.log("current highscore ",currentHighScore);
if(same&&currentCount>currentHighScore){
console.log("same and higher");
this.setState({
  highScore:currentCount,
  count:0,
  clickedCards:[]
})
}
else if(same&&currentCount<currentHighScore){
this.setState({
  count:0,
  clickedCards:[]
})
}

else {
  currentCount+=1
  newClickedCards.push(id)
  
  
  this.setState({
  clickedCards:newClickedCards,
  count: currentCount
  })
  }
    this.handleRandom()
  }


  startOver=()=> {
    this.setState({
      count: 0,
      clickedCards: [],
      highScore: 0,
      currentCard:[]
    })
    this.handleRandom()
  }






  handleRandom = (id) => {
    const randomHeroes = heroes.slice(0)
    for (let i = 0; i < heroes.length; i++) {


      let randomNumber = Math.floor(Math.random() * (i + 1))
      let temp = randomHeroes[i]
      randomHeroes[i] = randomHeroes[randomNumber]
      randomHeroes[randomNumber] = temp
    }


    this.setState({
      randomHeroCards: randomHeroes,

    });

  }

  

  render() {
    if (this.state.count === 10) {

      return (
        <div class = "winScreen">

        <h1 class = "title">You Win</h1>

       
          <button onClick={()=>{this.startOver()}} type="button" class="btn btn-primary">
            Start over
          </button>

    </div>
      )
    }

else {
    return (

      // <Wrapper>
      <div>
        <div id="headerStuff">
          <div className="row">
            <h1 className="title">Heroes List</h1>
          </div>
          <div className="row">
            <h1 className="title">Don't click the same Hero twice</h1>
          </div>
          <div className="row">
            <h1 className="score title">Current Score {this.state.count} High Score {this.state.highScore}</h1>
          </div>
        </div>

        <div className="row theCards">
          <br></br>

          {this.state.randomHeroCards.map(hero => {
            return (<HeroCard
              key={hero.id}
              id={hero.id}
              name={hero.name}
              image={hero.image}
              occupation={hero.occupation}
              location={hero.location}
              handleClick={this.cardClicked}
            />)
          })}
        </div>


      </div>

      // </Wrapper>
    )
  }
}
}

export default App;
