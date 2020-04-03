import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticleAction } from "../actions/index";

class ConnectedForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const { title } = this.state;
      // Forbidden words logic
        // const forbiddenWords = ['spam', 'money'];
        // const foundWord = forbiddenWords.filter(word => title.includes(word) )
        // if (foundWord) {
        //   return this.props.titleForbidden();
        // }
      // Forbidden words logic
      this.props.addArticle({ title });
      this.setState({ title: "" });
    }
    render() {
      const { title } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">SAVE</button>
        </form>
      );
    }
}

function mapDispatchToProps(dispatch) {
    return {
      // addArticle: article => { 
      //   console.log("Article ", article); 
      //   dispatch(addArticleAction(article))
      // },
      addArticle: function(article) {
        console.log("DISPATCH Form.js");
        dispatch(addArticleAction(article));
      }
    };
}

const Form = connect( null, mapDispatchToProps )(ConnectedForm);
export default Form;