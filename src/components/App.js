// create your App component here
import { useState, useEffect } from "react";

const App = () => {
    const [src, setSrc] = useState(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => setSrc(data.message));
    }, []);

    if (!src) {
        return <p>Loading...</p>;
    }
    return <img src={src} alt="A Random Dog" />;
};
export default App;
