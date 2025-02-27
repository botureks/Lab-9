function toggleProjects() {
  var projectsList = document.getElementById("projects-list");
  
  if (projectsList.style.display === "none") {
    projectsList.style.display = "block";
  } else {
    projectsList.style.display = "none";
  }
}