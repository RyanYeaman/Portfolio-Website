

const AboutMe = () => {

  return (
    <div className="about-container">
      <h1 className="about-me-title ">About Me</h1>
      <div className="about-me-content">
        <div className="skills-box">
          <div className="code-languges-container">
            <h2 className="code-languges-title">Code Languges</h2>
            <div className="code-languges-content">
              <div className="code-items">
                <img className="code-icons" src="/img/javascript.svg" alt="" />
                <img className="code-icons" src="/img/html-five2.svg" alt="" />
                <img className="code-icons" src="/img/css-3-logo.svg" alt="" />
              </div>
              <ul className="code-languges-list">
                <li className="javascript">Javascript</li>
                <li className="html">HTML</li>
                <li className="css">CSS</li>
              </ul>
            </div>
          </div>

          <div className="code-languges-container">
            <h2 className="code-languges-title">Framworks & Libraries</h2>
            <div className="code-languges-content">
              <div className="code-items">
                <img className="code-icons" src="/img/react.svg" alt="" />
              </div>
              <ul className="code-languges-list">
                <li className="javascript">React.js</li>
              </ul>
            </div>
          </div>

          <div className="code-languges-container">
            <h2 className="code-languges-title">Collaboration Tools</h2>
            <div className="code-languges-content">
              <div className="code-items">
                <img className="code-icons" src="/img/github.svg" alt="" />
                <img className="code-icons" src="/img/figma-logo.svg" alt="" />
              </div>
              <ul className="code-languges-list">
                <li className="javascript">Github</li>
                <li className="html">Figma</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="about-me-paragraph">Hello, I’m Ryan, <br />
          a front-end developer and UI designer that has a passion for developing user interfaces for web and mobile devices. My instest for web development first began in 2021 when I was decided to learn HTML/CSS. I soon realized after completing my some of the project’s in the course I was taking online, that I had a deep passion for software development so i decided to start my journey as a front-end developer.

          Since then I have decidated my time into learning & mastering different code languges, frameworks/Libraries, & collaboration tools.
        </p>
      </div>
    </div>
  )
}

export default AboutMe