import React from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import heroes from "./heroes.json";
import "./App.css";
// import { setupMaster } from "cluster";
// score=0
console.log("heroes ",heroes);


  let randomHeroes=heroes
  
  class App extends React.Component {
    
    state ={
      randomHeroCards:randomHeroes,
      count: 0,
      clickedCards: [],
      highScore: 0
    }
    handleRandom = (id)=>{    
      let newId=[]
      for (let k = 0; k < this.state.clickedCards.length; k++) {
        if (this.state.clickedCards[k]===id) {
          console.log("same");
          this.same()
          
        } 
      }
      newId=this.state.clickedCards
      newId.push(id)
      this.setState({
        clickedCards:newId
      });
console.log("clicked cards in state ",this.state.clickedCards);
let randomHeroCards=[]
      const randomHeroes = heroes.slice(0)
      for (let i = 0; i < heroes.length; i++) {
       
       
        let randomNumber = Math.floor(Math.random() * (i + 1))
        let temp= randomHeroes[i]
        randomHeroes[i] = randomHeroes[randomNumber]
        randomHeroes[randomNumber] = temp
      }
      console.log("randomized ",randomHeroes);
      randomHeroCards.push(randomHeroes)
      this.setState({
        randomHeroCards:randomHeroes,
        count: this.state.count + 1
      });
    }

   same = ()=>{
    let newHighScore=this.state.count
     if(this.state.count>this.state.highScore){
       newHighScore=this.state.count
      this.setState({
        highScore:newHighScore
      })
      console.log("new High Score!! ",this.state.highScore);
      
     }
this.setState({
  count:0
})
   }


  render() {
    return (

      <Wrapper>
        <h1 className="title">Heroes List</h1>
        <h1 className="Score">Current Score {this.state.count}</h1>
        {this.state.randomHeroCards.map(hero=>{
          return(<HeroCard
            key={hero.id}
            id={hero.id}
            name={hero.name}
            image={hero.image}
            occupation={hero.occupation}
            location={hero.location}
            handleClick={this.handleRandom}
          />)
        })}
      </Wrapper>
    )
  };
}

export default App;
