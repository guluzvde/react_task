import './Card.css'
import React, { Component } from 'react'


export default class Card extends Component {
    constructor(props){
        super(props);
    }
  render () {
  return(
 
        <div id="card">
            <div className="img">
                <img src={this.props.src} alt="" />
            </div>
            <div className="desc">
                <h3>{this.props.title}</h3>
                <h6>{this.props.desc}</h6>
            </div>
        </div>

  )
  }
}
