import React, { useState } from "react"; 
import './App.css'
import API from "./api";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/shorten", { longUrl });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div  className="center">
      <h2 style={{marginLeft:"80px"}}>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          style={{ padding: "5px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "5px 10px", marginLeft: "10px" }}>
          Shorten
        </button>
      </form>

      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
