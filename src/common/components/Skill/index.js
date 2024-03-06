import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import "./style.css"

function Skill({ id, iconClass, title, skills }) {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView && !isVisible) {
            setIsVisible(true);
        }
    }, [inView, isVisible]);

    return (
        <div className={`skill-card ${isVisible ? 'animate' : ''}`} ref={ref} id={id}>
            <div className="skill-logo">
                <i className={`fa-solid ${iconClass} icon`}></i>
            </div>
            <div className="skill-details">
                <h3 className="title">{title}</h3>
                <ul className="skill-list"> {/* Remplace la div par un ul */}
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li> 
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Skill;