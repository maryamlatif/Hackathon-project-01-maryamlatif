// script.ts
document.addEventListener("DOMContentLoaded", () => {
  // Select the button and the section to toggle
  const toggleSkillButton = document.getElementById("toggle-skills") as HTMLButtonElement;
  const skillSection = document.getElementById("skill") as HTMLElement;

  // Check if both elements exist
  if (toggleSkillButton && skillSection) {
    // Add click event listener to the button
    toggleSkillButton.addEventListener("click", () => {
      // Toggle visibility of the skills section
      if (skillSection.style.display === "none") {
        skillSection.style.display = "block";
        toggleSkillButton.textContent = "Hide Skills";
      } else {
        skillSection.style.display = "none";
        toggleSkillButton.textContent = "Show Skills";
      }
    });
  }
});
