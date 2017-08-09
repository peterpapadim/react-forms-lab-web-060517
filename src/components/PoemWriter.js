import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ""
    };
  }

  handlePoem = (event) => {
    this.setState({
      poem: event.target.value
    })
  }


  validatePoem = () => {
    let rows = this.state.poem.split("\n").map(row => row.trim())
    if(rows.length === 3 && rows[0].split(" ").length === 5 && rows[1].split(" ").length === 3 && rows[2].split(" ").length === 5){
      return true
    }
  }

  render() {

    return (
      <div>

        <textarea
          rows="3"
          cols="60"
          value = {this.state.poem}
          onChange={this.handlePoem}
        />

        <div id="poem-validation-error" style={{color: 'red'}}>
          {!this.validatePoem() ? "This poem is not written in the right structure!" : ""}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
