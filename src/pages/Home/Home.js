import React, { Component } from "react";
import "./Home.css";
import { Card, Image } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Card>
          <Card.Content>
            <Image
              centered
              src="https://eyepiecesofvail.com/wp-content/uploads/2021/12/POC_types_black.jpg"
            />
            <hr></hr>
            <br></br>
            <Card.Header>
              Hello,Welcome to <b>POC FOR MED SUPPLY</b>
            </Card.Header>
            <Card.Description>
              <p>
                Secure medicine transfer, and 0% chance to supply drugs
                illegally.
              </p>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
