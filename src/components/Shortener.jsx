import { useState } from "react";
import "../styles/Shortener.css";

export default function Shortener() {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleShorten = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError("Please add a link");
      return;
    }
    
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setShortened(`https://reLink/${Math.random().toString(36).substring(2, 8)}`);
      setError("");
    } catch {
      setError("Failed to shorten link");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortened);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="shortener-component">
      <h2>Shorten your link</h2>
      <form onSubmit={handleShorten}>
        <input
          type="text"
          placeholder="Enter a URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Shortening..." : "Shorten"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {shortened && (
        <div className="result">
          <a href={shortened} target="_blank" rel="noopener noreferrer">
            {shortened}
          </a>
          <button onClick={handleCopy} className={copied ? "copied" : ""}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}