function log({ message, level }) {
    console.log(level.toUpperCase(), "Message:", message);
}

const Sample = () => {
    log({ message: "sample", level: "error" })
    return ('sample app');
}
export default Sample;