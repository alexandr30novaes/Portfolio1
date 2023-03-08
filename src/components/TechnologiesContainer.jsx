import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiSass,
  } from "react-icons/di";

  import { 
    SiTypescript,
    SiBootstrap,
    SiGithub,
    SiGit,
    SiMongodb,

  } from "react-icons/si";

  import "../styles/components/technologiescontainer.sass";

  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "typerscript", name: "TyperScript", icon: <SiTypescript /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "bootstrap", name: "Bootstrap", icon: <SiBootstrap /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "mongodb", name: "Mongodb", icon: <SiMongodb /> },
    { id: "github", name: "GitHub", icon: <SiGithub /> },
    { id: "git", name: "Git", icon: <SiGit /> },

  ];


const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
          <h2>Technologies</h2>
          <div className="technologies-grid">
            {technologies.map((tech) => (
              <div className="technology-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="technology-info">
                  <h3>{tech.name}</h3>
                  <p>Conhecimento avançado. </p>
                </div>
              </div>
            ))}
          </div>
        </section>
    );
};

export default TechnologiesContainer;