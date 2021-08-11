import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const baseColor = 10;
  const hexValue = `#${hexColor}`

  useEffect(() => {
    let timeout = setInterval(() => {
      setAlert(false); 
    }, 1500);
    return () => clearInterval(timeout);
  }, [alert]);

  return <article
      className={`color ${index > baseColor && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})`}}
      onClick={() => {
        navigator.clipboard.writeText(hexColor)
        .then(() => setAlert(true));
      }}
    >
    <p className="percent-value">
      {weight}%
    </p>
    <p className="color-value">
      {hexValue}
    </p>
    <p>{alert && <span className="alert">copied to clipboard</span>}</p>
  </article>
}

export default SingleColor
