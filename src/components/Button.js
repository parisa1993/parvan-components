import React from "react";
import "../styles/index.css";

export default class Button extends React.Component {

  render() {
    const {
      type,
      chidren,
      className,
      ...other
    } = this.props;

    
    let classes = type === undefined ? 'contained' : type;
    classes += className !== undefined ? ' ' + className : ''; 

    return (
      <button className={classes} {...other}>
        { this.props.children }
      </button>
    )
  }
}
