import React from "react";
import "../styles/index.css";

export default class Button extends React.Component {
  static propTypes = {
    //types
    type: React.PropTypes.string, //'contained', 'outlined', 'text'
    //extensions
    children: React.PropTypes.node,
    className: React.PropTypes.string
  }

  render() {
    const {
      type,
      chidren,
      className,
      ...other
    } = this.props;

    
    let classes = type === undefined ? 'contained' : type;
    classes += className !== '' ? ',' + className : ''; 

    return (
      <button className={classes} {...other}>
        { this.props.children }
      </button>
    )
  }
}
