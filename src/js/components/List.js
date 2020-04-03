import React from "react";
import { connect } from "react-redux";

const ConnectedList = ({ articles, errorMessage }) => (
  <div>
    {errorMessage ? <p>{errorMessage}</p> : ''}
    <ul>
      {articles.map((el, i) => (
        <li key={i}>{el.title}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => {
    console.log("mapStateToProps List.js", state);
    return { 
      articles: state.articles,
      errorMessage: state.errorMessage
    };
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;