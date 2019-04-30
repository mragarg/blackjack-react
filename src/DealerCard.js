import React from 'react'

export class DealerCard extends React.Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
        cardArray : ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
      }
    }
    
  
  
  
    render() {
        return (
        <div>
            <h1> Dealer Cards: </h1>
            <button>Draw Dealer Cards</button>
        </div>
        )
    }

    _selectCard = (myArray) => {
        let rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;
    }

    _convertCard = (card) => {

        let cardValue = {
            'A' : 11,
            'J' : 10,
            'Q' : 10,
            'K' : 10
        }

        return cardValue[card];
    }
}

export default DealerCard
