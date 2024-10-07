document.getElementById("magicButton").addEventListener("click", function() {
    const responseText = document.getElementById("responseText");
    responseText.textContent = "You clicked the magic button!";
    responseText.style.color = "#3498db";
    responseText.style.fontSize = "1.5rem";
  });
  
  // Toggle Dark Mode
  document.getElementById("darkModeToggle").addEventListener("click", function() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  
    // Change button text based on mode
    const toggleButton = document.getElementById("darkModeToggle");
    if (body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Disable Dark Mode";
    } else {
      toggleButton.textContent = "Enable Dark Mode";
    }
  });
  