import React, { useState } from "react";

export default function Shortener() {
  const [url, setUrl] = useState("");
  const [shortLink, setShortLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!url.trim()) {
      setError("Please enter a valid URL");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await res.json();
      if (data.ok) {
        setShortLink(data.result.full_short_link);
      } else {
        setError("Failed to shorten URL");
      }
    } catch {
      setError("Error connecting to API");
    }
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortLink);
    alert("Link copied!");
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Shorten your link</h2>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter a URL"
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button onClick={handleShorten} disabled={loading} style={{ marginLeft: "1rem" }}>
        {loading ? "Shortening..." : "Shorten"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {shortLink && (
        <div style={{ marginTop: "1rem" }}>
          <a href={shortLink} target="_blank" rel="noreferrer">
            {shortLink}
          </a>
          <button onClick={copyToClipboard} style={{ marginLeft: "1rem" }}>
            Copy
          </button>
        </div>
      )}
    </div>
  );
}
