import React from "react";
import {Container} from "react-bootstrap";

export class JordaanHeader extends React.Component {
  render() {
    return <Container style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
      {/*<img style={{height: "160px", width: "100px", flex: 0}} src="/assets/img/ruggengraat.png" />*/}
      <img style={{height: "160px", width: "100px", flex: 0}}
           src={`${process.env.PUBLIC_URL}/assets/img/ruggengraat.png`}/>
      <div id="logo" style={{flex: 1}}>
        <h5 className="text-nowrap text-[#333045]" style={{
          overflowWrap: "no-wrap",
          fontFamily: "Turnpike",
          fontSize: "58px",
          margin: 0,
          paddingTop: "32px"
        }}>Jordaan</h5>
        <h5 className="text-nowrap text-[#333045]"
            style={{fontFamily: "Aller", fontSize: "33.3px"}}>Mensendieck &amp; Fysiotherapie</h5>
      </div>
      <address style={{flex: 1, fontFamily: "Aller"}}>
        <p className="text-nowrap text-[#333045]">Westerstraat 238<br/>
          1015 MT, Amsterdam<br/>
          020 - 623 5136<br/>
          info@mensendieck-fysiotherapie.nl</p>
      </address>
    </Container>;
  }
}