import React from 'react'


const HeroButton = (props) => {
  return (
    <div>
        <button className={props.className}>{props.name} <span>{props.icons}</span> </button>
    </div>
  )
}

export default HeroButton;