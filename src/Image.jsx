import { useMemo } from "react";

function Image({ index, title }) {

    // define local function

    const id = useMemo(() => `image-${Math.floor(Math.random() * 1000000)}`, []);

    const getImageSource = () => `//picsum.photos/id/${index}/150/150/`;


    return (
        <figure style={{ margin: "5px" }} id={id}>
            <img
                src={getImageSource()}
                alt={title}>
            </img>
            <figcaption>
                <h3>Species: {title}</h3>
            </figcaption>
        </figure>
    );
}

export default Image;