import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./Slideform.css";

export default class Slideform extends React.Component {
  render() {
    return (
      <div className="Slideform">
        <Pagination size="lg" className="slide" aria-label="nav formslide">
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
