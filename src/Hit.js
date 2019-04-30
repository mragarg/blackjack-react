import React, { Component } from 'react'

export class Hit extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        cardArray : ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
        cardDealt : this.props.playerDeck
      }
    }

    render() {
        

        return (
        <div>
            <button onClick={this._addCard}>Hit Me!</button>
        </div>
        )
    }

    componentDidMount() {
        this.setState({
            cardDealt: this.props.playerDeck
        })
    }

    _addCard = (props) => {
        let rand = this.state.cardArray[Math.floor(Math.random() * this.state.cardArray.length)];
        this.setState({
            cardDealt: [...this.state.cardDealt, rand]
        },() => {
            this.props.functionSet(this.state.cardDealt);
        })
    }

}

export default Hit
