import Title from "../../components/Title";
import Work from "../../components/Work";
import "./style.css"

function Gallery(){
    return(
        <section id="gallery">
            <Title backgroundTitle="Mes travaux" mainTitle="Travaux"/>
            <div className="work-gallery">
                <Work />
                <Work />
                <Work />
            </div>
        </section>
    )
}

export default Gallery