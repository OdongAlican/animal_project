import React from 'react'
import ScrollToTop from "react-scroll-to-top";
 
function Scroller() {
  return (
    <div>
      <ScrollToTop smooth style={{
          background: 'blue',
          padding: "5px",
          outline: "none"
      }} />
    </div>
  );
}

export default Scroller