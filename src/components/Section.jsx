import data from "../assets/data/data.json";

const Section = () => {
    return (
        <>
        {data.map((elem, index) =>
            <div key={index} className="category">
              <h2 className="title">{elem.category}</h2>
              <div className="movies">
                {elem.images.map((image, imgIndex) =>
                  <img className="img-movies" key={imgIndex} src={image} alt={`Image Film ${imgIndex}`} />
                )}
              </div>
            </div>
        )}
        </>
    )
}

export default Section;