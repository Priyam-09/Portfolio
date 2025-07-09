import React from "react";
import {FontAwesome, FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3Alt, faReact, faJs} from '@fortawesome/free-brands-svg-icons';

function Skills() {
    const skills = [
        {name : "HTML",level: 90, icon: faHtml5},
        {name : "CSS",level: 80, icon: faCss3Alt},
        {name : "JavaScript",level: 75, icon: faJs},
        {name : "React",level: 65, icon: faReact},
    ];
    return(
        <section id ="skills" className="skills-sec p-4">
            <div className="container">
                <h2 className="s">My Skills<br /><br /></h2>
                <div className="row">
                 {skills.map((skill,index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="d-flex justify-content-between mb-1">
                                <span><FontAwesomeIcon icon={skill.icon} style={{color:"rgb(201, 231, 70)"}} /> {skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                                    <div className="progress" style={{ height:'7px'}}>
                                        <div 
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{ width: `${skill.level}%`}}
                                        aria-valuerow={skill.level}
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                        </div>
                                    </div>
                        
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;