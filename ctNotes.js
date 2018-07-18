class Button extends React.Component {
  state = { counter: 1, bgColor:"red"
  };
  
  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
      backgroundColor: 'blue'
      
    }));
  };
  
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.counter}
        {this.state.backgroundColor}
      </button>
    );
  }
}

class Grid extends React.Component {
  state = { counter: 1 };
  render() {
    return (
    	<div>
        <Button onClick={this.handleClick}>
          {this.state.counter}
        </Button>
        <Button onClick={this.handleClick}>
          {this.state.counter}
        </Button>
        <Button onClick={this.handleClick}>
          {this.state.counter}
        </Button>
      </div>
    );
  }
}


ReactDOM.render(<Grid />, mountNode);
