import React from "react";
import classNames from "classnames";

// class Button extends React.Component {
//   render() {
//     console.log(this.props);
//     return <button className={classNames('button', {
//       'button--outline': this.props.outline
//     })}>{this.props.children}</button>
//   }
// }

const Button = ({className, outline, onClickTs, children}) => {
  return (
    <button
      className={classNames("button", className, {
        "button--outline": outline,
      })}
      onClick={(e) => onClickTs(e)}
    >
      {children}
    </button>
  );
}

export default Button;
