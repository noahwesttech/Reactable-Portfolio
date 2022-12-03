import "./WorkCardStyles.css"

import React from 'react'
import { ExternalLink } from 'react-external-link'

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="project 1" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <ExternalLink href="{props.website}" className="btn">Website</ExternalLink>
            <ExternalLink to="{props.github}" className="btn">Github</ExternalLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard
