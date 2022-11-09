import React from 'react'

const projectContent = (props) => {
    return (
        <>
            <div className={`${props.name}-project`}>
                <div className={`${props.name}-content`}>
                    <h4 className={`project-${props.name}`}>Project #{props.name === 'alderwood' ? '1' : props.name === 'sams-resin' ? '2' : props.name === 'colony' ? '3' : 'error'}</h4>
                    <p className={`${props.name}-summary`}>{props.name === 'alderwood' ? 'This is a website I made for my old construction company that I used to own a couple of summers ago. This website was a full React.js project.' : props.name === 'sams-resin' ? 'This is a website I made for my girlfriend so she could sell her custom resin art. In this project, I used the local storage to pass data through different pages to simulate adding items to a cart.' : props.name === 'colony' ? 'This is a “concept website” that I created about a construction company that sells custom-built homes on the planet Mars. In this project, I show my skills with Node.js and Sendgrid to send templates emails to users trying to inquire about homes they are interested in buying.' : 'error'}</p>
                    <a className={`${props.name}-link`} href='https://alderwood-digging-crew.web.app/'>Visit Website</a>
                </div>
                <div className={`${props.name}-display`}>
                    <h2 className={`${props.name}-title`}>{props.name === 'alderwood' ? 'Alderwood Digging Crew' : props.name === 'sams-resin' ? 'Sams Resin Shop' : props.name === 'colony' ? 'Colony R' : "error"}</h2>
                    <img className={`${props.name}-project-image`} src={`img/${props.name === "sams-ressin" ? "sams-resin" : props.name}-project.jpeg`} alt='' />
                </div>
            </div>
        </>
    )
}

export default projectContent