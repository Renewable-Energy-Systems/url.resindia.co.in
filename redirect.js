document.addEventListener('DOMContentLoaded', function () {
    // Get the current path from the URL
    var path = window.location.pathname;
    // Split the path into segments and remove any empty strings
    var segments = path.split('/').filter(Boolean);
    // Use the last segment as the id
    var id = segments[segments.length - 1];
  
    // Load the JSON configuration file
    fetch('urls.json')
      .then(response => response.json())
      .then(data => {
        // Look for the object that matches the id
        var match = data.find(item => item.id === id);
        if (match && match.url) {
          // Redirect the browser to the corresponding URL
          window.location.href = match.url;
        } else {
          // If no matching id is found, display an error message
          document.body.innerHTML = '<p>Error 404: Page not found.</p>';
        }
      })
      .catch(error => {
        console.error('Error loading URL configuration:', error);
        document.body.innerHTML = '<p>There was an error loading the redirection configuration.</p>';
      });
  });
  