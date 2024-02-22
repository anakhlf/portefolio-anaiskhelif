import "./style.css"
import Tag from "../Tag"

function Work (project) {
    return (
        <article className="work-article">
            <div className="work-title">
                <h4>{project.name}</h4>
            </div>
            <div className="div-tag">
                <Tag name="UX/UI"/>
                <Tag name="UX/UI"/>
            </div>
        </article>
        
    )
}

export default Work;