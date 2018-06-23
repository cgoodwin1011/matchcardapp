import React, { Component } from "react";
import CardCard from "./components/CardCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Explanation from "./components/Explanation";
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

// class App extends Card {
class App extends Component {
  // Setting this.state.cards to the cards json array
  constructor(props) {
    super(props);
    this.state = {cards, firstCard: 0, firstCardValue: 0, viewAll: false}
  }

  removeCard = id => {
    console.log("removing card ", id);
    // Filter this.state.cards for cards with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id != id);
    
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
    // console.log(cards);
  };

  remove2Cards = (id1, id2) => {
    console.log("removing cards ", id1, id2);
    // Filter this.state.cards for cards with an id not equal to the id being removed

    const cards = this.state.cards.filter(card => (card.id != id1 && card.id != id2));
    // const cards = this.state.cards.filter(card => (card.id != id1 && card.id != id2));
    console.log(cards);
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
    // console.log(cards);
  };

  matchCard = (id, value) => {
    console.log("clicked card is ", id, "and its value is", value)
    // console.log("secondCard is", this.state.secondCard);
    if (this.state.firstCard == 0) {
      this.state.firstCard.setState(id);
      this.state.firstCardValue.setState(value);
    } else if (this.state.firstCard == id) {
      // do nothing
      return
    } else {
      if (value == this.state.firstCardValue) {
        // console.log("the value of the first card is ", this.state.firstCardValue)
        // console.log("the value of the second card is ", value)
        console.log("first card is id ", this.state.firstCard);
        console.log("second card is id ", id);
        this.remove2Cards(this.state.firstCard, id);
        // this.removeCard(id);
        // this.removeCard(this.state.firstCard);
        // console.log("cards are ", this.state.cards);
      }
      this.state.firstCard.setState(0);
      this.state.firstCardValue.setState(0);
    }
    // console.log("firstCard is", this.state.firstCard);

  }

  // Map over this.state.cards and render a CardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Title>Matching Cards</Title>
        <Explanation>Click on two cards of the same value <br/>(e.g., a Jack of Diamonds and a Jack of Hearts)<br/> and they disappear.<br/><i>Surpisingly Soothing!</i></Explanation>
        {
          this.state.cards.map(card => (
          <CardCard
            removeCard={this.removeCard}
            matchCard={this.matchCard}
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
    }
  }

export default App;
