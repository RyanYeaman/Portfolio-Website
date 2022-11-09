import React from 'react'

const HirePage = (props) => {
    return (
        <section className={`hire-container ${props.currentPage === "hire" ? "hire-container-active" : ""}`}>
            <div className='hire-header'>
                <h1 className={`hire-title ${props.currentPage === "hire" ? "hire-title-active" : ""}`}>Hire Me</h1>
                <h3 className={`hire-introduction ${props.currentPage === "hire" ? "hire-introduction-active" : ""}`}>Do you need help building your project? Get in contact with me so we can discuss how I can help you with your project!</h3>
            </div>
            <div className={`contact-box ${props.currentPage === "hire" ? "contact-box-active" : ""}`}>
                <h2 className='contact-box-title'>Contact Me</h2>
                <p className='phone'><b>Phone:</b> 416-660-1875</p>
                <p className='email'><b>E-mail:</b> ryan.yeaman@icloud.com</p>
                <p className='contact-box-summary'>Any questions? Get in touch, I respond within 24 hours</p>
            </div>
        </section>
    )
}

export default HirePage