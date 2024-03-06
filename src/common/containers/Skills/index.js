import React from 'react';
import Skill from '../../components/Skill';
import Title from '../../components/Title';
import skillsData from '../../../assets/skillslist.js';
import "./style.css"


function Skills() {
    return (
        <section id="skills">
            <Title backgroundTitle="Mes compétences" mainTitle="Compétences"/>                
            <div className="skills-content">
                {skillsData.map((skill, index) => (
                    <Skill key={skill.id} id={skill.id} iconClass={skill.iconClass} title={skill.category} skills={skill.skillsList} />
                ))}
            </div>
        </section>
    );
}

export default Skills;