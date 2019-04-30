import React from 'react';
import './App.css';

import DealCard from './DealCard';
import CardValue from './CardValue';
import WhoWon from './WhoWon';
import Hit from './Hit';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      dealerCard : [],
      playerCard : [],
      dealerTotal: 0,
      playerTotal: 0,
      hitme : false,
      updateTotal: false,
    }
  }
  
  render() {
    return (
      <div className="text-center">
      <h1> BLACKJACK </h1>
        <DealCard text="Deal Dealer Cards" functionSet={this._setDealerCard} />
        {this.state.dealerCard.length === 2 ? 
          <CardValue whoTotal={this.state.dealerTotal} cardSet={this.state.dealerCard}/> : null
        }
        
        

        <DealCard text="Deal Player Cards" functionSet={this._setPlayerCard}/>
        {this.state.playerCard.length >= 2 ? 
          <CardValue whoTotal={this.state.playerTotal} cardSet={this.state.playerCard}/> : null
        }
        
        

        {this.state.hitme ? 
          <Hit playerDeck={this.state.playerCard} functionSet={this._setAddPlayerDeck}/> : null
        }

        


        {this.state.playerTotal > 0 ? 
          <WhoWon dealer={this.state.dealerTotal} player={this.state.playerTotal}/> : null
        }

          


      </div>
      )
  }
  
  _setDealerCard = (dealerCard) => {
    this.setState({
      dealerCard
    }, () => {
      this._calculateDealerTotal()
    })
  }

  _setPlayerCard = (playerCard) => {
    this.setState({
      playerCard,
      hitme: true
    }, () => {
      this._calculatePlayerTotal();
    })
  }

  _setDealerTotal = (dealerTotal) => {
    this.setState({
      dealerTotal
    })
  }

  _setPlayerTotal = (playerTotal) => {
    this.setState({
      playerTotal
    })
  }

  _setAddPlayerDeck = (playerCard) => {
    console.log("HIT ME")
    console.log(playerCard)
    this.setState({
      playerCard,
      updateTotal: true
    }, () => {
      this._calculatePlayerTotal();
    })
  }

  _calculateDealerTotal = () => {
    let calcTotal = 0;
    let cardValue = {
        'A' : 11,
        'J' : 10,
        'Q' : 10,
        'K' : 10
      };

    this.state.dealerCard.map(num => {
        if(Object.keys(cardValue).includes(num)){
            calcTotal += cardValue[num]
        }
        else {
            calcTotal += num
        }
    })

    this.setState({
        dealerTotal: calcTotal 
    })        
  }

  _calculatePlayerTotal = () => {
    let calcTotal = 0;
    let cardValue = {
        'A' : 11,
        'J' : 10,
        'Q' : 10,
        'K' : 10
      };

    this.state.playerCard.map(num => {
        if(Object.keys(cardValue).includes(num)){
            calcTotal += cardValue[num]
        }
        else {
            calcTotal += num
        }
    })

    this.setState({
        playerTotal: calcTotal 
    }) 
  }


}

export default App;
