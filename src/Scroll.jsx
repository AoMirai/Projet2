import React from "react";
import { ScrollTo } from "react-scroll-to";
 
export default class MyComponent extends Component {
    myRef = React.createRef();
   
    render() {
      return (
        <>
          <ScrollTo>
            {({ scrollTo }) => (
              <a onClick={() => scrollTo({ ref: this.myRef, x: 20, y: 500 })}>Scroll to Bottom</a>
            )}
          </ScrollTo>
   
          <div ref={this.myRef}>
            My Element
          </div>
        </>
      );
    }
  }
