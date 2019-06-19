import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";

const SearchResult = props => {
  return props.books.length === 0 ? (
    <div className="card">
      <div className="card-body player">
        <div className="article">
          <h3>Search Results</h3>
        </div>
      </div>
    </div>
  ) : (
    <div className="card">
      <div className="card-body player">
        <div className="article">
          <h3>Search Results</h3>
          {props.books.map((searchBook, book) => {
            return (
              <li className="search-list list-group-item" key={book}>
                <Row
                  className="SearchResult row"
                  id={searchBook.title + "Card"}
                  key={searchBook._id}
                >
                  {/* col-3 show image of the book */}
                  <Col size="2" className="bookImage">
                    <img src={searchBook.image} alt={searchBook.title} />
                  </Col>
                  <Col size="1" className="emptyCol" />
                  {/* col-9 show information of the book */}
                  <Col size="9" className="bookInfo">
                    <Row>
                      <h3 className="bookTitle">{searchBook.title}</h3>
                    </Row>
                    <Row>
                      <h4 className="bookAuthor">{searchBook.author}</h4>
                    </Row>
                    <Row>
                      <p className="bookDescription">
                        {searchBook.description}
                      </p>
                    </Row>
                  </Col>
                </Row>
                <br />
                <Row className="buttonDiv ">
                  <button
                    className="saveBook btn btn-primary hvr-ripple-out"
                    id={searchBook.id}
                    onClick={event => props.handleSavedButton(event)}
                  >
                    Save Book
                  </button>
                  <a
                    href={searchBook.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="viewBook btn btn-success hvr-ripple-out">
                      View Book
                    </button>
                  </a>
                </Row>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SearchResult;
