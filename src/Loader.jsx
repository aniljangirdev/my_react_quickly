import { Fragment, useState } from "react";

function Loader() {

    const [progress, setProgress] = useState(null);

    const someCallBack = () => {
        setProgress({ loaded, total });
    };
    if (!progress) return null;

    const { loaded, total } = progress;

    return (
        <Fragment>
            <h2>{Math.floor(100 * loaded / total)}%</h2>
            <p>Loaded {loaded} out of {total}.</p>
        </Fragment>
    );
}

export default Loader;