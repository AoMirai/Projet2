import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./FormSlide.css";

export default class FormSlide extends React.Component {
  render() {
    return (
      <div className="FormSlide">
        <Pagination size="lg" className="slide" aria-label="Page slide">
          <PaginationItem>
            <Link to="/newpresta/1" className="link">
              <PaginationLink className="slide1">1</PaginationLink>
            </Link>
          </PaginationItem>
          <PaginationItem>
            <Link to="/newpresta/2" className="link">
              <PaginationLink className="slide2">2</PaginationLink>
            </Link>
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}
