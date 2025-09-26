const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  count++;

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Show greeting
  const greetingDiv = document.getElementById("greeting");
  greetingDiv.textContent = `🎉 Welcome, ${name} from ${teamName}!`;
  greetingDiv.style.display = "block";

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100);
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = `${percentage}%`;

  // Update attendance tracker
  const attendeeCountSpan = document.getElementById("attendeeCount");
  attendeeCountSpan.textContent = count;

  form.reset();
});
