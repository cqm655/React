import React from "react";

class ClassCounter extends React.Component {

    // mereu apelam un constructor la inceputul clasei
    constructor(props){
        super (props)
        // toate variabilele se creaza frim .this - acest state, in el punem toate variabilele
        this.state = {
            count: 5,
        };
    }

   decrement() {
       this.setState({count: this.state.count - 1});
   }


    render() {
        return (
            <div className="class-comp">
                   <h2>Counter</h2>
                   <small>{this.state.count}</small>
                   <br />
                   <button onClick={() => {this.setState({count: this.state.count + 1})}}>+</button>
                   <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default ClassCounter;