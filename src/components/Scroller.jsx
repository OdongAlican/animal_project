import React from 'react'
import ScrollToTop from "react-scroll-to-top";
 
function Scroller() {
  return (
    <div>
      <ScrollToTop color="white" smooth style={{
          background: '#F56726',
          padding: "5px",
          outline: "none",
      }} />
    </div>
  );
}

export default Scroller