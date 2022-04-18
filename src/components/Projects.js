import React, {useState} from 'react'
import projectDatas from '../data'

export default function Projects() {

    const showAllProjects = projectDatas.map((projectData)=>{
        if(projectData.type === "javascript" || projectData.type === "react"){
            return (
                <div className='projects'>
                    <p>{projectData.name}</p>
                </div>
            )
        }
    })

    const [showProjects, setShowProjects] = useState(showAllProjects)


    return (
        <div className='skills-container'>
            <div className='langauge-title'>
                <h2>Programming Languages</h2>
            </div>
            <div className='filter-bar'>
                <button>ALL</button>
                <button>JavaScript</button>
                <button>React</button>
                {/* <button>Node</button> */}
            </div>
            <div className='projects-container'>
                {showProjects}
            </div>
        </div>
    )
}