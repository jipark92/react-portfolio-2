import React from 'react'

export default function Projects() {
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
                <div>project display</div>
            </div>
        </div>
    )
}