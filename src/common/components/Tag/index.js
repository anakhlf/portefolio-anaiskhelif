import "./style.css"

function Tag (tag){
    return (
        <article className="tag">
            <p>
                {tag.name}
            </p>
        </article>
    )
}

export default Tag;