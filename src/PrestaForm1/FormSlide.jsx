import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./FormSlide.css";

export default class FormSlide extends React.Component {
  render() {
    return (
      <div className="FormSlide">
        <Pagination size="lg" className="slide" aria-label="Page slide">
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
