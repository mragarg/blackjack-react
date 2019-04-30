import React from 'react'

export class DealCard extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        cardArray : ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
        cardDealt : []
      }
    }
    

  render() {
    return (
      <div>
          <button onClick={this._selectCard}>{this.props.text}</button>
      </div>
    )
  }
  

  _selectCard = (props) => {
    let rand = this.state.cardArray[Math.floor(Math.random() * this.state.cardArray.length)];
    let rand1 = this.state.cardArray[Math.floor(Math.random() * this.state.cardArray.length)];
    this.setState({
        cardDealt: [...this.state.cardDealt, rand, rand1]
    })
    this.props.functionSet(this.state.cardDealt);
    }

    
}

export default DealCard
