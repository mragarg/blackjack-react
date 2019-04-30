import React from 'react';
import './App.css';

import DealCard from './DealCard';
import CardValue from './CardValue';
import WhoWon from './WhoWon';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      dealerCard : [],
      playerCard : [],
      dealerTotal: 0,
      playerTotal: 0
    }
  }
  
  render() {
    return (
      <div className="">
        <DealCard text="Deal Dealer Cards" functionSet={this._setDealerCard} />
        {this.state.dealerCard.length === 2 ? 
          <CardValue whoIs="Dealer" cardSet={this.state.dealerCard} functionSet={this._setDealerTotal}/> : null
        }
        
        

        <DealCard text="Deal Player Cards" functionSet={this._setPlayerCard}/>
        {this.state.playerCard.length === 2 ? 
          <CardValue whoIs="Player" cardSet={this.state.playerCard} functionSet={this._setPlayerTotal}/> : null
        }
        
        {
        this.state.playerTotal > 0 ? <WhoWon dealer={this.state.dealerTotal} player={this.state.playerTotal}/> : null
        }

          


      </div>
      )
  }
  
  _setDealerCard = (dealerCard) => {
    this.setState({
      dealerCard
    })
  }

  _setPlayerCard = (playerCard) => {
    this.setState({
      playerCard
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


}

export default App;
