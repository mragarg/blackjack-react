import React from 'react'

export class CardValue extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
          total: 0
      }
    }
    
    render() {
        return (
            <div>
            <h3>
            {this.props.whoIs} Cards:
            </h3>
            {this.props.cardSet.map(num => <p> {num} </p>)}
            <h3>
                Total:
            </h3>
            {this.state.total}
        </div>
        )
    }

    componentDidMount() {
        this._convertCards();
    }

    _convertCards = (props) => {
        let calcTotal = 0;
        let cardValue = {
            'A' : 11,
            'J' : 10,
            'Q' : 10,
            'K' : 10
          };

        this.props.cardSet.map(num => {
            if(Object.keys(cardValue).includes(num)){
                calcTotal += cardValue[num]
            }
            else {
                calcTotal += num
            }
        })

        this.props.functionSet(calcTotal);

        this.setState({
            total: calcTotal
        })        
    }
}

export default CardValue
