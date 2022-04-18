import React, {useState} from 'react'
import projectDatas from '../data'

export default function Projects() {

    const projectList = document.querySelectorAll('.projects')
    console.log(projectList)
    // projectList[0].scrollIntoView()

    const showAllProjects = projectDatas.map((projectData)=>{
        if(projectData.type === "javascript" || projectData.type === "react"){
            return (
                <div className='projects' key={projectData.id}>
                    <div className='project-picture-container'>
                        <img src={projectData.img} className="project-picture"/>
                    </div>
                    <div className='project-description-container'>
                        <div>
                            <p>Project Name:</p>
                            <h1>{projectData.name}</h1>
                        </div>
                        <div>
                            <p>Description: </p>
                            <h2>{projectData.description}</h2>
                        </div>
                        <div>
                            <p>Language: </p>
                            <h3>{projectData.type}</h3>
                        </div>
                        <div>
                            <p>Demo: </p>
                            <h3>{projectData.live}</h3>
                        </div>
                        <div>
                            <p>Source: </p>
                            <h3>{projectData.repo}</h3>
                        </div>
                    </div>
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