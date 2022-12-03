import "./WorkCardStyles.css"
import React from 'react'
import pro1 from "../assets/project1.png"
import pro2 from "../assets/project2.png"
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
            <img src={pro1} alt="project 1" />
            <h2 className="project-title">Dose of Dopamine</h2>
            <div className="pro-details">
                <p>A website where you can vote for your favorite of 2 pets and see a record of all your favorites!</p>
                <div className="pro-btns">
                    <NavLink to="https://noahwesttech.github.io/We-Deserve-Arrays-Project-1/" className="btn">Website</NavLink>
                    <NavLink to="https://noahwesttech.github.io/We-Deserve-Arrays-Project-1/" className="btn">Github</NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
