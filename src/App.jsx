import React from 'react';
import TodoItem from './TodoItem';
import './Todo.scss'

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        items:[],
        value: ""
      };
  }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  }

  onChange = e => {
    this.setState({value: e.target.value});
  }

  render(){
      return (
        <div>
          <h1>TODO-LIST</h1>
          <input type="text" onChange={this.onChange}/>
          <button onClick={this.onClickAdd}>추가</button>
          {this.state.items.map((value, idx) => (
            <TodoItem key={idx} value={value}/>
          ))}
        </div>
      )
  }
}

export default App;
