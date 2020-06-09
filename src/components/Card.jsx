import React, { Component } from "react";

import './Card.css'

export default class Card extends Component {
   
    getColor(){
        if(this.props.blue) return 'border-primary'
        if(this.props.yellow) return 'border-warning'
        if(this.props.red) return 'border-danger'
        if(this.props.green) return 'border-secondary'
        return 'border-warning'
    }

  render() {
    return (
      <div className={`card ${this.getColor()} mb-3`}>
        <div className="card-header">
            {this.props.title}
        </div>
        <div className="card-body text-primary">
            {this.props.children}
        </div>
      </div>
    );
  }
}
