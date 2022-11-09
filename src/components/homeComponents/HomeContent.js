import React from 'react'  

const HomeContent = (props) => {

    return (

        <div className={`home-content-container ${props.currentPage === "home" ? "" : "home-content-container-unactive"}`}>
            <div className={`homepage-circle-background ${ props.currentPage === "home" ? "" : "homepage-circle-background-close"}`}></div>
            <img className={`ryan-img ${ props.currentPage === "home" ? "" : "ryan-img-close"}`} src='./img/ryan.png' alt="" />
            <p className={`homepage-introduction ${ props.currentPage === "home" ? "" : "homepage-introduction-close"}`}>Web Developer with a profound passion for<br /> writing <b>code</b> & <b>design</b>.</p>
            <div className={`header-fullname ${ props.currentPage === "home" ? "" : "header-fullname-close"}`}>Ryan Yeaman</div>
            <div className={`header-skill ${ props.currentPage === "home" ? "" : "header-skill-close"}`}><b>Web Developer</b><br />Front-End Developer</div>
        </div >
    )
}

export default HomeContent