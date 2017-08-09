import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  characterCount = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.characterCount}
        />
        <p><b>{this.props.maxChars - this.state.value.length}</b> character(s) remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
