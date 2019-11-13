import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../actions/posts';


export class Posts extends Component {

    static propTypes = {
        posts: PropTypes.array.isRequired,
        getPosts: PropTypes.func.isRequired
    }


    componentDidMount(){
        this.props.getPosts();
    }


    render() {
        return (
            <Fragment>
                <div className="card-columns" style={cardDeckStyling}>
                    { this.props.posts.map( post => (
                        <div className="card bg-secondary" key={post.id}>
                            <div className="card-body">
                                <h4 className="card-title">
                                    {post.title}
                                </h4>
                                <img src={post.thumbnail} height="200" width="250" />
                            </div>
                        </div>
                    ))}                    
                </div>
            </Fragment>
        )
    }
}

const cardDeckStyling = {
    marginTop : 50
}


const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(
    mapStateToProps,
    { getPosts }
)(Posts);
