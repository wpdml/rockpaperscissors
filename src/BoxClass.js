import React, { Component } from "react";

class Box extends Component {
  render() {
    const { title, item, result } = this.props;
    
    let borderColor;
    if (result === "Win") {
      borderColor = "green";
    } else if (result === "Lose") {
      borderColor = "red";
    } else if (result === "Tie") {
      borderColor = "black";
    }

    return (
      <div className="box" style={{ borderColor: borderColor }}>
        <h1>{title}</h1>
        {item ? (
          <>
            <img src={item.img} alt={item.name} className="item-img" />
            <h2>{result}</h2>
          </>
        ) : null}
      </div>
    );
  }
}

export default Box;
