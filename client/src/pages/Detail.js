import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Detail extends Component {
    state = {
        blog: {}
    };

    componentDidMount() {
        API.getBlog(this.props.match.params.id).then(res => this.setState({
            blog: res.data
        })).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>{this.state.blog.title} by {this.state.blog.author}</h1>
                <article>
                    <h2>Post</h2>
                    <p>{this.state.blog.post}</p>
                </article>
                <Link to="/">Back</Link>
            </div>
        );
    }
}

export default Detail;