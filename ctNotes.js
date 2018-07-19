function CheckAnswer(myList,answers) {
	if (myList.length=== answers ) {
      greeting = "Good day";
      myList.sort();
      answers.sort();
      _.isEqual([myList], [answers]) ;
      
	}
  return <h1>Hello, {props.name}</h1>;
}

class Question extends React.Component {
              state = { quest: "what is life?"};

              handleClick = () => {
                this.setState((prevState) => ({

                }));
              };

              render() {
                return (

                  <div>
                    <h1
                      >{this.state.quest}
                    </h1>
                  </div>
                );
              }
}

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
                      style={{backgroundColor:this.state.bgColor}}
                      >{this.state.counter}
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
      	<Question>
        </Question>
  
  			<div id = "grid-container">	
        	<div class="action-container">	
            <Button >
            </Button>
          </div>
          <div class="action-container">	
            <Button >
            </Button>
          </div>
          <div class="action-container">	
            <Button >
            </Button>
          </div>
          <div class="action-container">	
            <Button >
            </Button>
          </div>
          
        </div>
        
      </div>
    );
  }
}


ReactDOM.render(<Grid />, mountNode);
