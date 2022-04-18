import React, {useState} from 'react'
import projectDatas from '../data'

export default function Projects() {

    const [projectNumber, setProjectNumber] = useState(0)

    const nextBtn = () =>{
        const projects = document.querySelectorAll('.projects');
        if (projectNumber === 0 ) {
            projects[1].scrollIntoView()
            setProjectNumber(1);
        } else if (projectNumber === 1){
            projects[2].scrollIntoView()
            setProjectNumber(2);
        } else if (projectNumber === 2){
            projects[3].scrollIntoView()
            setProjectNumber(3);
        } else if (projectNumber === 3){
            projects[4].scrollIntoView()
            setProjectNumber(4);
        } else if (projectNumber === 4){
            projects[5].scrollIntoView()
            setProjectNumber(5);
        } else if (projectNumber === 5){
            projects[6].scrollIntoView()
            setProjectNumber(6);
        } else if (projectNumber === 6){
            projects[7].scrollIntoView()
            setProjectNumber(7);
        } else if (projectNumber === 7){
            projects[8].scrollIntoView()
            setProjectNumber(8);
        } else if (projectNumber === 8){
            projects[9].scrollIntoView()
            setProjectNumber(9);
        }

    }
    
    


    const showAllProjects = projectDatas.map((projectData)=>{
        if(projectData.type === "Javascript" || projectData.type === "React"){
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
            <h2>Javascript</h2>
            <div className='projects-container'>
                <button className='prev-btn'>&#8678;</button>
                <div className='projects-list'>
                    {showProjects}
                </div>
                <button className='next-btn' onClick={nextBtn}>&#8680;</button>
            </div>
            <div>
                <h3>Page Number: {projectNumber} of {projectDatas.length}</h3>
            </div>

        </div>
    )
}