import "./style.css"

function Tag (tag){
    return (
        <article className="tag">
            <h5>
                {tag.name}
            </h5>
        </article>
    )
}

export default Tag;