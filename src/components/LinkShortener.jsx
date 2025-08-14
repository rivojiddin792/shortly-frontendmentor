import { useState } from "react";

export default function LinkShortener() {
  const [input, setInput] = useState("");
  const [shortLinks, setShortLinks] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleShorten = async () => {
    if (!input.trim()) return;
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
      const data = await res.json();
      if (data.ok) {
        setShortLinks([
          ...shortLinks,
          {
            original: input,
            short: data.result.full_short_link,
          },
        ]);
        setInput("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopy = (link, index) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="link-shortener">
      <div className="input-area">
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleShorten}>Shorten It!</button>
      </div>

      <div className="links-list">
        {shortLinks.map((link, index) => (
          <div key={index} className="link-item">
            <span className="original">{link.original}</span>
            <span className="short">{link.short}</span>
            <button
              onClick={() => handleCopy(link.short, index)}
              className={copiedIndex === index ? "copied" : ""}
            >
              {copiedIndex === index ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
