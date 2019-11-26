import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getPost } from '../actions/posts';

export class Renderer extends Component {

    static propTypes = {
        post: PropTypes.object.isRequired,
        getPost: PropTypes.func.isRequired
    }



    componentDidMount(){
       const {id} = this.props.match.params
       
        this.props.getPost(id);
       
    }


    render() {
        return (
            <div>
                <video src = {`http://localhost:8000${this.props.post.clip}`} height="700" width="800" controls />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    post: state.renderer
})

export default connect(
    mapStateToProps,
    {getPost}
)(Renderer)
