import React from 'react';
import '../styles/portfolioBtn.css'
function PortfolioBtn(props) {
  return <button className="portfolio-btn" >{props.children}</button>;
}

export default PortfolioBtn;
