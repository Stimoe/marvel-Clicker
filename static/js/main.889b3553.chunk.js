(this.webpackJsonpclicker3=this.webpackJsonpclicker3||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Wolverine","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/1/14487/6972121-wolverine.jpg","occupation":"SuperHero","location":"Earth"},{"id":2,"name":"Spiderman","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/8/80103/6197311-c6d76a022f2dcf57c29e2ef87a3c7d47.jpg","occupation":"Newspaper photographer","location":"Earth"},{"id":3,"name":"Thor","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/10/100647/6436253-thor2.jpg","occupation":"Superhero","location":"Earth"},{"id":4,"name":"Iron Man","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/4956367-invim2015001-maleevvar-d8a38.jpg","occupation":"Superhero","location":"Earth"},{"id":5,"name":"Hulk","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/14/140903/4127149-11.jpg","occupation":"Scientist","location":"Earth"},{"id":6,"name":"Captain America","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7025229-rco022_1564570505.jpg","occupation":"Superhero","location":"Earth"},{"id":7,"name":"Dare Devil","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/6/68065/6335305-5934933145-DYb8d.jpg","occupation":"Attorney","location":"Earth"},{"id":8,"name":"The Punisher","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/11125/111253019/6465266-punisher_vol_12_1_textless.jpg","occupation":"Superhero","location":"Earth"},{"id":9,"name":"Deadpool","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/4943681-dpool2015007-cov-bec9c.jpg","occupation":"Super Hero","location":"Earth"},{"id":10,"name":"Silver Surfer","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/3627093-tumblr_mwhlifyyfk1spk5yeo1_1280.jpg","occupation":"Superhero","location":"Earth"},{"id":11,"name":"Gambit","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/11126/111269625/6182822-gc.jpg","occupation":"Superhero","location":"Earth"},{"id":12,"name":"Cyclops","image":"https://comicvine1.cbsistatic.com/uploads/scale_small/1/14487/6966021-cyclops.jpg","occupation":"Super Hero","location":"Earth"}]')},,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),o=t.n(c),n=t(3),i=t.n(n),s=t(4),l=t(5),r=t(7),m=t(6),d=t(8);t(14);var u=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{onClick:function(){e.handleClick(e.id)},alt:e.name,src:e.image})),o.a.createElement("div",{className:"content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Name:")," ",e.name))))};t(15);var h=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)},p=t(1);t(16);console.log("heroes ",p);var g,v=p,E=[],S=function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,o=new Array(c),n=0;n<c;n++)o[n]=arguments[n];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={randomHeroCards:v,count:0,clickedCards:[],highScore:0},t.handleRandom=function(e){for(var a=[],c=0;c<t.state.clickedCards.length;c++)if(t.state.clickedCards[c]===e){var o=[];console.log("same"),t.state.count>t.state.highScore&&(console.log("count ",t.state.count),g=t.state.count,t.state.clickedCards=o,t.state.count=-1,alert("You clicked the same Card!!"),t.setState({highScore:g,count:-1,clickedCards:o}))}(a=t.state.clickedCards).push(e),t.setState({clickedCards:a}),console.log("clicked cards in state ",t.state.clickedCards);for(var n=p.slice(0),i=0;i<p.length;i++){var s=Math.floor(Math.random()*(i+1)),l=n[i];n[i]=n[s],n[s]=l}console.log("randomized ",n),t.setState({randomHeroCards:n,count:t.state.count+1})},t.same=function(e){console.log("props ",e),t.state.count>t.state.highScore&&(console.log("count ",t.state.count),g=t.state.count,E=[],t.setState({highScore:g,clickedCards:E})),t.changeScores(),console.log("the new high score? ",g)},t.changeScores=function(){t.setState({count:0,clickedCards:[],highScore:g}),console.log("example ",t.state),console.log("new High Score!! ",t.state.highScore),console.log("new count!! ",t.state.count),console.log("new clicked Cards!! ",t.state.clickedCards)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(h,null,o.a.createElement("div",{id:"headerStuff"},o.a.createElement("div",{className:"row"},o.a.createElement("h1",{className:"title"},"Heroes List")),o.a.createElement("div",{className:"row"},o.a.createElement("h1",{className:"title"},"Don't click the same Hero twice")),o.a.createElement("div",{className:"row"},o.a.createElement("h1",{className:"Score"},"Current Score ",this.state.count)),o.a.createElement("div",{className:"row"},o.a.createElement("h1",{className:"HighScore"},"High Score ",this.state.highScore))),o.a.createElement("div",{className:"row theCards"},o.a.createElement("br",null),this.state.randomHeroCards.map((function(a){return o.a.createElement(u,{key:a.id,id:a.id,name:a.name,image:a.image,occupation:a.occupation,location:a.location,handleClick:e.handleRandom})}))))}}]),a}(o.a.Component);t(17);i.a.render(o.a.createElement(S,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.889b3553.chunk.js.map