document.addEventListener('DOMContentLoaded', function () {
  // Extract the current URL path segments and use the last one as the id.
  var path = window.location.pathname;
  var segments = path.split('/').filter(Boolean);
  var id = segments[segments.length - 1];

  // Load the JSON configuration file.
  fetch('urls.json')
    .then(response => response.json())
    .then(data => {
      // Find the matching entry for the id.
      var match = data.find(item => item.id === id);
      if (match && match.url) {
        // Redirect if a match is found.
        window.location.href = match.url;
      } else {
        // Show a modern error UI if no valid identifier is found.
        document.getElementById('content').innerHTML = `
          <div class="container">
          <img src="logo.png" alt="Renewable Energy Systems Limited" height="120">
            <h1>Oops!</h1>
            <p>It looks like you've entered an incorrect or missing URL identifier.</p>
            <p>Please double-check the URL and try again.</p>
            <p>We’re here to help if you need assistance.</p>
            <p><strong>Renewable Energy Systems Limited</strong></p>
            <p class="tagline">Serving defence since 1998.</p>
          </div>
        `;
      }
    })
    .catch(error => {
      console.error('Error loading URL configuration:', error);
      document.getElementById('content').innerHTML = `
        <div class="container">
        <img src="logo.png" alt="Renewable Energy Systems Limited" height="120">
          <h1>Uh-oh!</h1>
          <p>We encountered an error while loading the redirection configuration.</p>
          <p>Please try again later.</p>
          <p><strong>Renewable Energy Systems Limited</strong></p>
          <p class="tagline">Serving defence since 1998.</p>
        </div>
      `;
    });
});
