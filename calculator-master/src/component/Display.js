import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div style={{padding: 0, width: '160px'}}>
          <a href="https://dhsoft.com.vn/Home">

          <img style={{width: '100%'}} src="
          data:image/png;base64,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
          "/>
          </a>
        </div>
        <div>{this.props.value}</div>
      </div>
    );
  }
}
