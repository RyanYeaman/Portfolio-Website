import React from 'react'  

const HomeContent = (props) => {

    let currentPage = props.getCurrentPage(props.activePage, props.aboutMePage)
    console.log(currentPage)

    return (

        <>
            <div className={`homepage-circle-background ${ currentPage ? "homepage-circle-background-close" : ""}`}></div>
            <img className={`ryan-img ${props.pageToggled ? "ryan-img-close" : ""}`} src='./img/ryan.png' alt="" />
            <p className={`homepage-introduction ${props.pageToggled ? "homepage-introduction-close" : ""}`}>Web Developer with a profound passion for<br /> writing <b>code</b> & <b>design</b>.</p>
            <div className={`header-fullname ${props.pageToggled ? "header-fullname-close" : ""}`}>Ryan Yeaman</div>
            <div className={`header-skill ${props.pageToggled ? "header-skill-close" : ""}`}><b>Web Developer</b><br />Front-End Developer</div>
        </>
    )
}

export default HomeContent