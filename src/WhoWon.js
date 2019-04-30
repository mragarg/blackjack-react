import React from 'react'

export class WhoWon extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         winner : ""
      }
    }
    

    render() {
        return (
        <div>
            <p>{this.state.winner}</p>
        </div>
        )
    }

    componentDidMount() {
        this._whoWon();
    }

    _whoWon = (props) => {
        console.log("TEST");
        let whoIsKing ="";
        let dealerTotal = this.props.dealer;
        let playerTotal = this.props.player;

        if(playerTotal > 21){
            whoIsKing = "Dealer"
        }else if(dealerTotal > 21){
            whoIsKing = "Player"
        }else if(playerTotal === dealerTotal){
            whoIsKing = "Push"
        }else if(dealerTotal > playerTotal){
            whoIsKing = "Dealer"
        }else{
            whoIsKing = "Player"
        }

        this.setState({
            winner: whoIsKing
        })
    }


}

export default WhoWon
