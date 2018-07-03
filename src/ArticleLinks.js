import React, {Component} from 'react';
import Comment from './Comment';

class ArticleLinks extends Component{
    render() {
        return(
            <div className="article-links">
          <Comment />
          <a className="article-link" href="#">
            <i className="fa fa-share"></i>
            <span className="article-link-text">Share Post</span>
          </a>
        </div>
        )
    }
}

export default ArticleLinks;