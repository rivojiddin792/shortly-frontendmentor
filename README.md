Shortly – URL Shortening Landing Page 🚀

A responsive landing page that integrates with a URL shortening API, built as part of a Frontend Mentor challenge. Enables users to shorten any valid URL, view a history of shortened links persistently, and copy results with one click—all styled with modern UI/UX best practices.

Demo

Live site: https://shortly-challange.netlify.app

Features

Responsive design: Seamlessly adapts to mobile, tablet, and desktop layouts.

URL shortening: Users input a URL and receive a shortened version via a public API.

History tracking: Shortened links are saved in local storage and persist on page reloads.

Copy to clipboard: Click a button to copy the short link; button label toggles to "Copied!" for user feedback.

Form validation: Empty or invalid inputs trigger error messages beneath the input field.

Built With

HTML5 & CSS3 (with modern layout techniques like flexbox and grid)

JavaScript (ES6+)

Public URL Shortening API (e.g., CleanURI, Bitly, or similar)

Getting Started

To run this project locally:

git clone <https://github.com/rivojiddin792/shortly-frontendmentor.git>
cd shortly-landing-page
npm install
npm start


Open http://localhost:3000 (or another port if specified) in your browser.

Usage Instructions

Enter a valid URL in the input field.

Click Shorten It!

View the shortened URL in the results section below.

Click Copy to copy the link to your clipboard.

Shortened URLs are stored and displayed even after closing or reloading the site.

What I Learned

Integrating with a third-party API using fetch() and handling JSON responses.

Persisting data with localStorage for client-side history.

Managing UI state (loading, error, copied feedback) with vanilla JS.

Rendering dynamic content with templates in the DOM.

Accessibility and responsive layout best practices.

Roadmap / Future Enhancements

✅ Copy-to-clipboard feedback ("Copied!" button state)

✅ Persistent history with removal option for each entry

🔲 URL validation with regex or external library

🔲 Integrate with custom domains or third-party APIs (Bitly, Rebrandly)

🔲 UI improvements: better error handling, animated transitions

🔲 End-to-end testing (e.g., with Cypress)

Author

<Rivojiddin, Bahtiyor, Ibrohim>
Frontend developer building clean, interactive, and user-friendly interfaces.

GitHub: @rivojiddin792

License

This project is open-source and available under the MIT License. Feel free to reuse and modify — credit appreciated!

Contribution Guidelines

Fork this repository.

Create your feature branch: git checkout -b feature/awesome-feature

Commit changes: git commit -m 'Add awesome feature'

Push to the branch: git push origin feature/awesome-feature

Open a Pull Request—feedback is welcome!

Acknowledgments

Frontend Mentor for the challenge spec and design assets.

Public URL Shortening API (e.g., CleanURI).

CSS Tricks and MDN for tutorials on responsive layout and clipboard interactions.
