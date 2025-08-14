import { useState } from "react";
import "../styles/LinkShortener.css";

export default function LinkShortener() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([
    {
      original: "https://www.frontendmentor.io",
      short: "https://reLink/k4lKyk",
      copied: false
    },
    {
      original: "https://twitter.com/frontendmentor",
      short: "https://reLink/gxOXp9",
      copied: true
    },
    {
      original: "https://www.linkedin.com/company/frontend-mentor",
      short: "https://reLink/gob3X9",
      copied: false
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError("Please add a link");
      return;
    }
    
    setLoading(true);
    try {
      // API call would go here
      const newLink = {
        original: url,
        short: `https://reLink/${Math.random().toString(36).substring(2, 8)}`,
        copied: false
      };
      setLinks([newLink, ...links]);
      setUrl("");
      setError("");
    } catch (err) {
      setError("Failed to shorten link");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (index) => {
    navigator.clipboard.writeText(links[index].short);
    const updatedLinks = links.map((link, i) => ({
      ...link,
      copied: i === index
    }));
    setLinks(updatedLinks);
  };

  return (
    <div className="link-shortener-container">
      <h1>Shorten a link here...</h1>
      
      <form onSubmit={handleSubmit} className="shorten-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Shorten at: Please add a link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Shortening..." : "Shorten"}
        </button>
      </form>

      <div className="links-list">
        {links.map((link, index) => (
          <div key={index} className="link-card">
            <p className="original-url">{link.original}</p>
            <div className="short-url-group">
              <a href={link.short} className="short-url">{link.short}</a>
              <button
                onClick={() => handleCopy(index)}
                className={link.copied ? "copied" : ""}
              >
                {link.copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}