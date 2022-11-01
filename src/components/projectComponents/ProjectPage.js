import React from 'react'

const ProjectPage = () => {
    return (
        <section className='project-container'>
            <h1 className='project-title'>My Projects</h1>
            <div className='project-content'>
                <div className='alderwood-project'>
                    <div className='alderwood-content'>
                        <h4 className='project-1'>Project #1</h4>
                        <p className='alderwood-summary'>This is a website I made for my old construction company that I used to own a couple of summers ago. This website was a full React.js project.</p>
                        <a className='alderwood-link' href='https://alderwood-digging-crew.web.app/'>Visit Website</a>
                    </div>
                    <div className='alderwood-display'>
                        <h2 className='alderwood-title'>Alderwood Digging Crew</h2>
                        <img className='alderwood-project-image' src='img/alderwood-project.jpeg' alt='' />
                    </div>
                </div>

                <div className='sams-resin-project'>
                    <div className='sams-summary'>

                    </div>
                    <div className='sams-display'>

                    </div>
                </div>

                <div className='colony-project'>
                    <div className='colony-summery'>

                    </div>
                    <div className='colony-display'>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectPage