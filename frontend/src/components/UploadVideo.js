import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../actions/posts'

export class UploadVideo extends Component {

    state = {
        title: '',
        clip: null,
        thumbnail: null
    }

    static propTypes = {
        addPost : PropTypes.func.isRequired
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    fileChangeHandler = e => {
        this.setState({
            clip: e.target.files[0]
        })
    }

    imageChangeHandler = e => {
        this.setState({
            thumbnail: e.target.files[0]
        })
    }

    uploadHandler = e => {
        
        e.preventDefault();

        const formData = new FormData();
        formData.append('clip', this.state.clip, this.state.clip.name)
        formData.append('thumbnail',this.state.thumbnail,this.state.thumbnail.name)
        formData.append('title', this.state.title)

        this.props.addPost(formData);

    }

    render() {
        return (
            <div className="col-md-5 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Upload Video</h2>
                    <form onSubmit={this.uploadHandler}>
                        <div className="form-group">
                            <label>Title</label>
                            <input  type="text"
                                    className="form-control"
                                    name="title" 
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                        </div>
                        <div className="form-group">
                            <label>Select File</label>
                            <input  type="file"
                                    className="form-control" 
                                    name="clip" 
                                    onChange={this.fileChangeHandler}
                                />
                        </div>
                        <div className="form-group">
                            <label>Select Thumbnail</label>
                            <input  type="file"
                                    className="form-control" 
                                    name="thumbnail" 
                                    onChange={this.imageChangeHandler}
                                />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Upload</button>
                        </div>                        
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { addPost }
)(UploadVideo);
