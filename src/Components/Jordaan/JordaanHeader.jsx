import React from "react";
import {Container} from "react-bootstrap";

export class JordaanHeader extends React.Component {
  render() {
    return <>
      <div className="columns-2xs col-12 col-md-6">
        <div style={{display: "flex"}}>
          <img style={{flex: 0, paddingRight: 12, height: "160px", width: "100px"}} src={`${process.env.PUBLIC_URL}/assets/img/ruggengraat.png`}/>
          <div className="offset-lg-1" style={{flex: 1}}>
            <h5 className="m-0 pt-10 text-nowrap text-jordaanText font-turnpike md:text-stupidmd lg:text-stupidlg text-stupidbig" >Jordaan</h5>
            <h5 className="text-nowrap text-jordaanText font-sans lg:text-xxlg md:text-xlg">Mensendieck &amp; Fysiotherapie</h5>
          </div>
        </div>
      </div>
      <div className="offset-lg-1 pt-4 row col-12 col-md-6">
      <address style={{fontFamily: "Aller"}}>
        <p className="text-nowrap text-jordaanText">Westerstraat 238<br/>
          1015 MT, Amsterdam<br/>
          020 - 623 5136<br/>
          info@mensendieck-fysiotherapie.nl</p>
      </address>
      </div>
    </>;
  }
}