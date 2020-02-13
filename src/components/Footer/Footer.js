import React from 'react';

const Footer = (props) => {
  return (
    <div>Footer is in {props.match.params.lang}</div>
  )
}

export default Footer;