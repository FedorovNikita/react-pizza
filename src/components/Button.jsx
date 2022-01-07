import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// class Button extends React.Component {
//   render() {
//     console.log(this.props);
//     return <button className={classNames('button', {
//       'button--outline': this.props.outline
//     })}>{this.props.children}</button>
//   }
// }

const Button = ({onClick, className, outline, children}) => {
  return (
    <button
      className={classNames("button", className, {
        "button--outline": outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button;
