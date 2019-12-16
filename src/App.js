import React from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import heroes from "./heroes.json";
import "./App.css";



let randomHeroes=heroes

let newHighScore;
let emptyArray=[]

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

          if(this.state.count>this.state.highScore){

            newHighScore=this.state.count
            this.setState({
              clickedCards:newClickedCards,
              count: newCount
            })
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
      const randomHeroes = heroes.slice(0)
      for (let i = 0; i < heroes.length; i++) {
       
       
        let randomNumber = Math.floor(Math.random() * (i + 1))
        let temp= randomHeroes[i]
        randomHeroes[i] = randomHeroes[randomNumber]
        randomHeroes[randomNumber] = temp
      }


      this.setState({
        randomHeroCards:randomHeroes,
        count: this.state.count + 1
      });
      
    }

    same = (props)=>{
      // let newHighScore=this.state.count
      if(this.state.count>this.state.highScore){
      newHighScore=this.state.count
      emptyArray=[]
      // oldClickedCards=this.state.clickedCards
      this.setState({
        highScore:newHighScore,
        clickedCards:emptyArray
      })

      }

      this.changeScores()

    }
    changeScores = ()=>{
      this.setState({
        count: 0,
        clickedCards:[],
        highScore: newHighScore
      });

     

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
