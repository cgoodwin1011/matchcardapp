import React, { Component } from "react";
import CardCard from "./components/CardCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards";
import "./App.css";

function shuffleArray(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

shuffleArray(cards);

// class Card extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {faceUp: true}
//   }
//   flipSingleCard = (id) => {
//     if (this.state.faceUp) {
//       this.setState({faceUp: false})
//     } else {
//       this.setState({faceUp: true})
//     }; 
//   }
// }

// class App extends Card {
class App extends Component {
  // Setting this.state.cards to the cards json array
  constructor(props) {
    super(props);
    this.state = {cards, firstCard: 0, secondCard: 0, viewAll: false}
  }
  // state = {
  //   cards
  // };

  removeCard = id => {
    // Filter this.state.cards for cards with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
    // console.log(cards);
  };

  // flipOneCard = (id) => {
  //   if card.id == 
  // }

  // flipAllCards = () => {
  //   // const cards = this.state.cards.filter(card => card.id !== id);
  //   if (this.state.viewAll) {
  //     this.setState({viewAll: false})
  //   } else {
  //     this.setState({viewAll: true})
  //   };
  // };

  // Map over this.state.cards and render a CardCard component for each card object
  render() {
    // console.log(this.state.cards);
    // if (this.state.viewAll === true) {
      return (
        <Wrapper>
          <Title>Playing Cards</Title>
          {
            this.state.cards.map(card => (
            <CardCard
              removeCard={this.removeCard}
              // flipCard={this.flipCard}
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
              value={card.value}
              suit={card.suit}
              back={card.back}
            />))
          }
        </Wrapper>
        )
      };
    if (this.state.viewAll === false) {
      // console.log("here we are");
      // console.log(cards[0].name);
      for (var i = 0; i < cards.length; i++) {
        console.log(cards[i].state);
        if (cards[i].id == this.state.firstCard || cards[i].id == this.state.firstCard) {

        }
      }
        return ( 
        <Wrapper>
          <Title>Playing Cards</Title>
          {
            this.state.cards.map(card => (
            <CardCard
              removeCard={this.removeCard}
              flipCard={this.flipCard}
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.back}
              value={card.value}
              suit={card.suit}
              back={card.image}
            />))
          }
        </Wrapper>
      );
    }
  }
}

export default App;
