document.addEventListener("DOMContentLoaded", function () {
    const toggleSkillButton = document.getElementById("toggleSkill") 
    const skillSection = document.getElementById("skill") 

    if (toggleSkillButton && skillSection) {
        toggleSkillButton.addEventListener("click", function () {
            if (skillSection.style.display === "none") {
                skillSection.style.display = "block";
                toggleSkillButton.textContent = "Hide Skill";
            } else {
                skillSection.style.display = "none";
                toggleSkillButton.textContent = "Show Skill";
            }
        });
    }
});
