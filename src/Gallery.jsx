import Image from "./Image";

function Gallery() {
    return (
        <section style={{ display: "flex" }}>
            <Image index='1003' title='Deer' />
            <Image index='1020' title='Bear' />
            <Image index='1024' title='Vulture' />
            <Image index='1084' title='Walrus' />
        </section>
    );
}

export default Gallery;