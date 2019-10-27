import React from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import heroes from "./heroes.json";
import "./App.css";
// import { setupMaster } from "cluster";
// score=0
console.log("heroes ",heroes);


let randomHeroes=heroes
// let randomHeroCards=[]
let newHighScore;
let emptyArray=[]
// let count=0
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
        let newCount=-1
        let newClickedCards=[]
          console.log("same");
          if(this.state.count>this.state.highScore){
            console.log("count ",this.state.count);
            newHighScore=this.state.count
            this.state.clickedCards=newClickedCards
            this.state.count=newCount
            alert("You clicked the same Card!!")
            this.setState({
              highScore:newHighScore,
              count: newCount,
              clickedCards:newClickedCards
            })

          }
          // this.same()
          
        } 
      }
      newId=this.state.clickedCards
      newId.push(id)
      this.setState({
        clickedCards:newId
      });
console.log("clicked cards in state ",this.state.clickedCards);
      const randomHeroes = heroes.slice(0)
      for (let i = 0; i < heroes.length; i++) {
       
       
        let randomNumber = Math.floor(Math.random() * (i + 1))
        let temp= randomHeroes[i]
        randomHeroes[i] = randomHeroes[randomNumber]
        randomHeroes[randomNumber] = temp
      }
      console.log("randomized ",randomHeroes);
      // randomHeroCards.push(randomHeroes)

      this.setState({
        randomHeroCards:randomHeroes,
        count: this.state.count + 1
      });
      
    }

    same = (props)=>{
  console.log("props ",props);
  
      // let newHighScore=this.state.count
      if(this.state.count>this.state.highScore){
      console.log("count ",this.state.count);
      newHighScore=this.state.count
      emptyArray=[]
      // oldClickedCards=this.state.clickedCards
      this.setState({
        highScore:newHighScore,
        clickedCards:emptyArray
      })
      // newHighScore=this.state.count
      //   this.handleRandom()
      }

      this.changeScores()
      console.log("the new high score? ",newHighScore);
      //  console.log("new array ",oldClickedCards);
      // let newCount=0;
    }
    changeScores = ()=>{
      this.setState({
        count: 0,
        clickedCards:[],
        highScore: newHighScore
      });
      console.log("example ", this.state);
      console.log("new High Score!! ",this.state.highScore);
      console.log("new count!! ",this.state.count);
      console.log("new clicked Cards!! ",this.state.clickedCards);
     
// this.setState({
//   count:0
// })
   }


  render() {
    return (

      <Wrapper>
     
          <div id="headerStuff">
          <div className="row">
        <h1 className="title">Heroes List</h1>
        </div>
        <div className="row">
        <h1 className="title">Don't click the same Hero twice</h1>
        </div>
        <div className="row">
        <h1 className="Score">Current Score {this.state.count}</h1>
        </div>
        <div className="row">
        <h1 className="HighScore">High Score {this.state.highScore}</h1>
        </div>
        </div>
    
      <div className="row theCards">
        <br></br>
        {/* <div id="thecards"> */}
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
          </div>
          {/* {/* </div> */}
        
          
          
      </Wrapper>
    )
  };
}

export default App;
