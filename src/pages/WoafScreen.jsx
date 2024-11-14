import { useEffect, useState } from "react";

export const WoafScreen = () => {
  const [url, setUrl] = useState("");

  const getWoaf = () => {
    fetch("https://random.dog/woof.json").then((response) => {
      response.json().then((data) => {
        setUrl(data.url);
      });
    });
  };

  useEffect(() => {
    getWoaf();
  }, []);

  return (
    <div>
      <h1>Woaf Screen</h1>
      <button onClick={getWoaf}>refresh</button>
      {url.includes("mp4") ? (
        <video src={url} autoPlay loop muted />
      ) : (
        <img
          src={url}
          alt="dog"
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
      )}
    </div>
  );
};

export default WoafScreen;
