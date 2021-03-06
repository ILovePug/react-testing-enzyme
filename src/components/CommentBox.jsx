import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
class CommentBox extends Component{

    state ={
        comment: '' 
    }

    onCommentChange = (evt)=>{
        this.setState({comment: evt.target.value})
    }
    onSubmit = (evt)=>{
        evt.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment:''})
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.onCommentChange} value={this.state.comment}  />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comment</button>
            </div>

        )
    }
}

export default connect(null, {...actions})(CommentBox)
