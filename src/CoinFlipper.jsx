import React, { Component } from "react";
// import Coin from './Coin';
import Coin from "./Coin.jsx";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      donuyor: false,
      totalCount:0,
      turaCount:0,
      yaziCount:0
    };
  }
  handleClick = () => {
    const {yaziCount,turaCount,totalCount}=this.state;

    this.setState({totalCount:totalCount+1});
    console.log(totalCount);
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    this.setState({ donuyor: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.

    const randomNum=Math.random();
    // console.log(randomNum);
    randomNum>0.5? this.setState({side:"yazi",yaziCount:yaziCount+1}):this.setState({side:"tura",turaCount:turaCount+1});
    setTimeout(() => this.setState({ donuyor: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.totalCount} </strong>
          atıştan
          <strong> {this.state.turaCount} </strong>ü tura
          <strong> {this.state.yaziCount} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
