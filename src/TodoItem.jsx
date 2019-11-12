import React from "react";

class TodoItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div class="todoitem">
                <span>{this.props.value}</span><br/>
                <button>수정</button>
                <button>삭제</button>
            </div>
            
        )
    }
}

export default TodoItem; 