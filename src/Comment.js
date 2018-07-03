import React, {Component} from 'react';

class Box extends Component {
    render () {

        if(this.props.element){
            return (
                <form> 
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            )
        }   else {return(<p></p>)}
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
        let unvisible = !this.state.visible;
        this.setState({
            visible: unvisible
        })
        
        // // if(this.state.visible) {
        //     return(
        //     <form> 
        //         <label>
        //             Name:
        //             <input type="text" name="name" />
        //         </label>
        //         <input type="submit" value="Submit" />
        //     </form>
        //     )
        // // }
    }

    

    render() {
        return (
            <a className="article-link" >
            <i className="fa fa-comments-o" onClick={this.toggle}></i>
            <span className="article-link-text">Comments</span>
            {/* <form> 
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form> */}
            <Box element={this.state.visible} />
          </a>
        )
    }
}

export default Comment;