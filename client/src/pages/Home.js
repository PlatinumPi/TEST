import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import { FormBtn } from "../components/Form";

class Home extends Component {
    state = {
        blogs: [],
        title: "",
        author: "",
        post: ""
    };

    componentDidMount() {
        this.loadBlogs();
    };

    loadBlogs = () => {
        API.getBlogs()
            .then(res =>
                this.setState({ blogs: res.data, title: "", author: "", post: "" })
            )
            .catch(err => console.log(err));
    };

    deleteBlog = id => {
        API.deleteBlog(id)
            .then(res => this.loadBlogs())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBlog({
                title: this.state.title,
                author: this.state.author,
                post: this.state.post
            })
                .then(res => this.loadBlogs())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                            <a className="navbar-brand page-scroll" href="#header"><i className="fa fa-book" /> Blogmania</a> </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#about" className="page-scroll">About</a></li>
                                <li><a href="#register" className="page-scroll">Register</a></li>
                                <li><a href="#pricing" className="page-scroll">New Post</a></li>
                                <li><a href="#contact" className="page-scroll">Contact</a></li>

                            </ul>


                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                    {/* /.container-fluid */}
                </nav>
                {/* Header */}
                <header id="header">
                    <div className="intro">
                        <div className="overlay">
                            <div className="container">
                                <div className="row">
                                    <div className="intro-text">
                                        <h1>Blogmania</h1>
                                        <p>Be You | Be the Best</p>
                                        <a href="#about" className="btn btn-custom btn-lg page-scroll">Get Started</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* About Section */}
                <div id="about">
                    <div className="container">
                        <div className="section-title text-center center">
                            <h2>About Us</h2>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive thumbnail" alt="" /> </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="about-text">
                                    <h3>What is Blogmania?</h3>
                                    <p>Blogmania is an open platform application utilizing React, allowing users to create their own custom content without a hassle no matter what they're into.</p>
                                    <p>Here are some of the technologies we have to offer that are implemented into your sites:</p>
                                    <div className="list-style">
                                        <div className="col-lg-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>React Core</li>
                                                <li>Passport Security</li>
                                                <li>UglifyJS2 Code Efficiency</li>
                                                <li>Full User Customization</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>Node.js</li>
                                                <li>JQuery</li>
                                                <li>Bootstrap</li>
                                                <li>MongoDB</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Register Section */}
                <div id="register" className="text-center page-scroll">
                    <div className="container">
                        <div className="section-title center">
                            <h2 className="h2-secondary">Register Here</h2>
                            <hr />
                            <p className="p-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <form name="sentMessage" id="contactForm" noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" id="password" className="form-control" placeholder="Password" required="required" />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" id="password" className="form-control" placeholder="Re-Enter Password" required="required" />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div id="register-button" />
                                <button type="submit" className="btn btn-custom btn-lg col-lg-12">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="pricing" className="text-center">
                    <div className="container">
                        <div className="section-title center">
                            <h2>New Post</h2>
                            <hr />
                            <p>Create a new blog post here!</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    {this.state.blogs.length ? (
                                        <List>
                                            {this.state.blogs.map(blog => (
                                                <ListItem key={blog._id}>
                                                    <Link to={"/blogs/" + blog._id}>
                                                        <strong>
                                                            {blog.title} by {blog.author}
                                                        </strong>
                                                    </Link>
                                                    <DeleteBtn onClick={() => this.deleteBlog(blog._id)} />
                                                </ListItem>

                                            ))}
                                        </List>
                                    ) : (
                                            <h3>No Blog Posts</h3>
                                        )}
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <form name="sentMessage" id="contactForm" noValidate>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input value={this.state.title} onChange={this.handleInputChange} name="title" type="text" id="name" className="form-control" placeholder="Title" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input value={this.state.author} onChange={this.handleInputChange} name="author" type="text" id="name" className="form-control" placeholder="Author" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea value={this.state.post} onChange={this.handleInputChange} name="post" id="message" className="form-control" rows={6} placeholder="Blog post goes here" required defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="col-md-12">
                                        <div id="success" />
                                        <button onClick={this.handleFormSubmit} type="submit" className="btn btn-custom btn-lg">Post!
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Contact Section */}
                <div id="contact" className="text-center">
                    <div className="container">
                        <div className="section-title center">
                            <h2 className="h2-secondary">Contact Us</h2>
                            <hr />
                            <p className="p-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <form name="sentMessage" id="contactForm" noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" className="form-control" rows={4} placeholder="Message" required defaultValue={""} />
                                    <p className="help-block text-danger" />
                                </div>
                                <div id="success" />
                                <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
                            </form>
                            <div className="social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                    <li><a href="#"><i className="fa fa-youtube" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="container text-center">
                        <div className="fnav">
                            <p>Copyright © 2019 Designed by Chandler Paulk and Matt Pitner</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;