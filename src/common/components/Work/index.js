import "./style.css"
import Tag from "../Tag"
import React, { useState } from 'react';

function Work({ project, onClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const handleOnClick = () => {
        if (onClick) {
            onClick(project);
        }
    };

    return (
        <article
            className="work-article"
            onClick={handleOnClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="work-title" style={{ backgroundImage: `url(${project.image})` }}>
                <div className={`title-overlay ${isHovered ? 'show' : ''}`}>
                    <h4>{project.name}</h4>
                    <p>{project.date}</p>
                </div>
            </div>
            <div className="div-tag">
                {project.tags.map((tag, index) => (
                    <Tag key={index} name={tag} />
                ))}
            </div>
        </article>
    );
}

export default Work;