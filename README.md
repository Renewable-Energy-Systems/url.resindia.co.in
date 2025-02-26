# RES URL Redirection

This project provides a lightweight client-side URL redirection mechanism powered by a JSON configuration file. It’s ideal for single-page applications or static sites (such as those hosted on GitHub Pages) that need dynamic URL routing without server-side rewrites.

## Table of Contents

- [Overview](#overview)
- [File Structure](#file-structure)
- [How It Works](#how-it-works)
- [Setup](#setup)
  - [Local Development](#local-development)
  - [GitHub Pages Deployment](#github-pages-deployment)
- [Authors](#authors)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Overview

When a user navigates to a URL like `https://https://renewable-energy-systems.github.io/url.resindia.co.in/res`, the JavaScript in this project extracts the last segment of the URL (e.g., `"res"`), looks it up in a JSON file (`urls.json`), and redirects the user to the corresponding target URL defined in that configuration. If no match is found, an error message is displayed.

## File Structure

.
├── index.html      # Main HTML file that loads the redirection logic.
├── 404.html        # Fallback HTML file for GitHub Pages to handle client-side routing.
├── redirect.js     # JavaScript file that parses the URL, fetches urls.json, and performs redirection.
├── urls.json       # JSON configuration mapping URL identifiers to target URLs.
├── README.md       # This file.
└── LICENSE         # License file (MIT License in this example).


## How It Works

1. **URL Extraction:**  
   The script in `redirect.js` extracts the last segment from the current URL (for example, `"res"` from `https://https://renewable-energy-systems.github.io/url.resindia.co.in/res`).

2. **Configuration Fetching:**  
   It uses the Fetch API to load `urls.json` and searches for an entry that matches the extracted segment.

3. **Redirection:**  
   If a matching entry is found, the browser is redirected to the target URL specified in the JSON configuration. If no match is found, a custom error message is shown.

## Setup

### Local Development

1. Place `index.html`, `404.html`, `redirect.js`, and `urls.json` in the same directory within your local web server’s document root.
2. Test the redirection by navigating to URLs like `http://localhost/res` or `http://localhost/res-services`.

### GitHub Pages Deployment

Since GitHub Pages does not support server-side URL rewriting:
1. Ensure your repository contains both `index.html` and `404.html` (with identical content) so that any non-existent URL will fall back to `404.html` and execute your JavaScript redirection logic.
2. Commit and push your files to the GitHub repository.
3. GitHub Pages will serve `index.html` for the root URL and `404.html` for other paths, enabling the redirection to work correctly.

## Authors

- **kiranpranay** – Initial work ([GitHub](https://github.com/kiranpranay))

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For significant modifications, open an issue first to discuss your ideas.

## Acknowledgements

- Thanks to GitHub Pages for providing an easy-to-use static hosting platform.

