class Button extends React.Component {
  state = { counter: 1, bgColor:"red"
  };
  
  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
      bgColor: 'blue'
      
    }));
  };
  
  render() {
    return (
      
      <div>
        <button 
          onClick={this.handleClick} 
          style={{backgroundColor:this.state.bgColor}}>Button
          </button>
      </div>
    );
  }
}

class Grid extends React.Component {
  state = { counter: 1 };
  render() {
    return (
    	<div>
        <Button 
        onClick={this.handleClick}
        >
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
