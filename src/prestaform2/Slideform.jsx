import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./Slideform.css";

export default class Slideform extends React.Component {
  render() {
    return (
      <div className="Slideform">
        <Pagination size="lg" className="slide" aria-label="nav formslide">
          <PaginationItem>
            <PaginationLink className="slide1" href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="slide2" href="#">
              2
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}
