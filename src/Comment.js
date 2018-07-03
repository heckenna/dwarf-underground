import React, {Component} from 'react';

class Box extends Component {
    render () {

        return (
            <form> 
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

class Comment extends Component {
    constructor() {
        super();

        this.state = {
            visible: false,
        }
    }

    toggle = () => {
        // let unvisible = !this.state.visible;
        // this.setState({
        //     visible: unvisible
        // })
        
        // if(this.state.visible) {
            return(
            <form> 
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            )
        // }
    }

    

    render() {
        return (
            <a className="article-link" onClick={this.toggle}>
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
            {/* <form> 
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form> */}
            <Box />
          </a>
        )
    }
}

export default Comment;