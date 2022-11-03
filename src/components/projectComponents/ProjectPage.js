import ProjectContent from "./ProjectContent"

const ProjectPage = (props) => {
    return (
        <section className={`project-container ${ props.currentPage === 'projects' ? 'project-container-active' : '' }`}>
            <h1 className='project-title'>My Projects</h1>
            <div className='project-content'>
                <ProjectContent name='alderwood' />
                <ProjectContent name='sams-resin' />
                <ProjectContent name='colony' />
            </div>
        </section>
    )
}

export default ProjectPage