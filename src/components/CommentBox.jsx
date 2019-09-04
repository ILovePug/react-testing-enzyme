import React,{Component} from 'react'

class CommentBox extends Component{

    state ={
        comment: '' 
    }

    onCommentChange = (evt)=>{
        this.setState({comment: evt.target.value})
    }
    onSubmit = (evt)=>{
        evt.preventDefault();

        this.setState({comment:''})
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.onCommentChange} value={this.state.comment}  />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default CommentBox
