import React from "react";
import propTypes from "prop-types"

class Card extends React.Component{

    render(){
        return <>
        <div className="card">
            <section className="cardTitle">{this.props.card.title}</section>
            <section className="cardPrice">{this.props.card.price}</section>
            <section className="borderLine"></section>
            <section className="cardFeatures">
            <ul> 
            {this.props.card.features.map((features, index) => (
              <li key={index} className={features.present ? "present" : "disabled"}>
                {features.present ? "✓" : "𐄂"} {features.feature}
              </li>
            ))}
          </ul>
                </section>
            <section className="footer"><button className="button"> BUTTON</button></section>
        </div>
        </>
    }
}

Card.propTypes = {
    card: propTypes.shape({
        title:propTypes.string,
        price:propTypes.string,
        features:propTypes.string
    })
}

export default Card