import React, {useState} from 'react'
import projectDatas from '../jsData'
import reactDatas from '../reactData'

export default function Projects() {
    const [projectNumber, setProjectNumber] = useState(1)
    const [showReact, setShowReact] = useState(false);

    const prevBtn = () => {
        const projects = document.querySelectorAll('.projects');
        if ( projectNumber === 2){
            projects[0].scrollIntoView()
            setProjectNumber(1)
        } else if (projectNumber === 3) {
            projects[1].scrollIntoView()
            setProjectNumber(2)
        } else if (projectNumber === 4) {
            projects[2].scrollIntoView()
            setProjectNumber(3)
        } else if (projectNumber === 5) {
            projects[3].scrollIntoView()
            setProjectNumber(4)
        } else if (projectNumber === 6) {
            projects[4].scrollIntoView()
            setProjectNumber(5)
        } else if (projectNumber === 7) {
            projects[5].scrollIntoView()
            setProjectNumber(6)
        } else if (projectNumber === 8) {
            projects[6].scrollIntoView()
            setProjectNumber(7)
        } else if (projectNumber === 9) {
            projects[7].scrollIntoView()
            setProjectNumber(8)
        }  else {
            setProjectNumber(9)
            projects[8].scrollIntoView()
        }
    }

    const nextBtn = () =>{
        const projects = document.querySelectorAll('.projects');
        if (projectNumber === 0 ) {
            projects[0].scrollIntoView()
            setProjectNumber(1);
        } else if (projectNumber === 1){
            projects[1].scrollIntoView()
            setProjectNumber(2);
        } else if (projectNumber === 2){
            projects[2].scrollIntoView()
            setProjectNumber(3);
        } else if (projectNumber === 3){
            projects[3].scrollIntoView()
            setProjectNumber(4);
        } else if (projectNumber === 4){
            projects[4].scrollIntoView()
            setProjectNumber(5);
        } else if (projectNumber === 5){
            projects[5].scrollIntoView()
            setProjectNumber(6);
        } else if (projectNumber === 6){
            projects[6].scrollIntoView()
            setProjectNumber(7);
        } else if (projectNumber === 7){
            projects[7].scrollIntoView()
            setProjectNumber(8);
        } else if (projectNumber === 8){
            projects[8].scrollIntoView()
            setProjectNumber(9);
        } else {
            setProjectNumber(1);
            projects[0].scrollIntoView()
        }
    }

    const reactFilterBtn = () => {
        const projects = document.querySelectorAll('.projects');
        setShowReact(true)
        setProjectNumber(1)
        projects[0].scrollIntoView()
    }

    const javaScriptFilterBtn = () => {
        const projects = document.querySelectorAll('.projects');
        setShowReact(false)
        setProjectNumber(1)
        projects[0].scrollIntoView()
    }

    const reactPrevBtn = () => {
        const projects = document.querySelectorAll('.projects');
        if ( projectNumber === 2){
            projects[0].scrollIntoView()
            setProjectNumber(1)
        } else if (projectNumber === 3) {
            projects[1].scrollIntoView()
            setProjectNumber(2)
        } else if (projectNumber === 4) {
            projects[2].scrollIntoView()
            setProjectNumber(3)
        } else {
            projects[2].scrollIntoView()
            setProjectNumber(3)
        }
    }

    const reactNextBtn = () => {
        const projects = document.querySelectorAll('.projects');
        if (projectNumber === 0 ) {
            projects[0].scrollIntoView()
            setProjectNumber(1);
        } else if (projectNumber === 1){
            projects[1].scrollIntoView()
            setProjectNumber(2);
        } else if (projectNumber === 2){
            projects[2].scrollIntoView()
            setProjectNumber(3);
        } else {
            setProjectNumber(1)
            projects[0].scrollIntoView()
        }
    }
    
    const showAllProjects = projectDatas.map((projectData)=>{
        if(projectData.type === "Javascript"){
            return (
                <div className='projects' key={projectData.id}>
                    <div className='project-picture-container'>
                        <img src={projectData.img} className="project-picture"/>
                    </div>
                    <div className='project-description-container'>
                        <div>
                            <p>Project Name:</p>
                            <h1><u>{projectData.name}</u></h1>
                            <h5>{projectData.type} / HTML / CSS</h5>
                        </div>
                        <div>
                            <p>Description: </p>
                            <h2>{projectData.description}</h2>
                        </div>
                        <div className='live-source-container'>
                        <div className='react-demo-container'>
                                <a href={projectData.live} target="_blank">DEMO<img src="https://img.icons8.com/flat-round/344/play.png"/></a>   
                                {/* <img src="https://img.icons8.com/ios-glyphs/344/github.png"/> */}
                            </div>
                            <div className='react-repo-container'>
                                <a href={projectData.repo} target="_blank">CODE<img src="https://img.icons8.com/ios-glyphs/344/github.png"/></a>
                            </div>                     
                        </div>
                    </div>
                </div>
            )
        }
    })

    const showReactProjects = reactDatas.map((reactData)=>{
        if(reactData.type === "React"){
            return (
                <div className='projects' key={reactData.id}>
                    <div className='project-picture-container'>
                        <img src={reactData.img} className="project-picture"/>
                    </div>
                    <div className='project-description-container'>
                        <div>
                            <p>Project Name:</p>
                            <h1><u>{reactData.name}</u></h1>
                            <h5>{reactData.type} / HTML / CSS</h5>
                        </div>
                        <div>
                            <p>Description: </p>
                            <h2>{reactData.description}</h2>
                        </div>
                        <div className='live-source-container'>
                            <div className='react-demo-container'>
                                <a href={reactData.live} target="_blank">DEMO<img src="https://img.icons8.com/flat-round/344/play.png"/></a>   
                                {/* <img src="https://img.icons8.com/ios-glyphs/344/github.png"/> */}
                            </div>
                            <div className='react-repo-container'>
                                <a href={reactData.repo} target="_blank">CODE<img src="https://img.icons8.com/ios-glyphs/344/github.png"/></a>
                            </div>                 
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
                <button onClick={javaScriptFilterBtn}>JavaScript</button>
                <button onClick={reactFilterBtn}>React</button>
                {/* <button>Node</button> */}
            </div>
            <div className='project-number-container'>
                <div>{showReact? <h1 Style="color:rgb(241, 94, 119)">React</h1>:<h1 Style="color: rgb(33,201,152)">JavaScript</h1>}</div>
                <h2>Project: {projectNumber} of {showReact?reactDatas.length:projectDatas.length}</h2>
            </div>
            <div className='projects-container'>
                <button className='prev-btn' onClick={showReact?reactPrevBtn:prevBtn}>&#8678;</button>
                <div className='projects-list'>
                    {showReact?showReactProjects:showProjects}
                </div>
                <button className='next-btn' onClick={showReact?reactNextBtn:nextBtn}>&#8680;</button>
            </div>
            <div>
                <p className='find-my'>Find rest of my work at <a href="https://github.com/norfkorean">GitHub</a></p>
            </div>
        </div>
    )
}