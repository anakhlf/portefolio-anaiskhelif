import './style.css';

function Title(title){
    return (
        <div id='title'>
            <h3 id='background-title'>{title.backgroundTitle}</h3>
            <h2 id='main-title'>{title.mainTitle}</h2>
        </div>
    )
}

export default Title;