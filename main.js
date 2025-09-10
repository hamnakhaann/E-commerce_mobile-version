// Countdown timer (set your deal end date here)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 4); // Example: 4 days from now

function updateTimer() {
  const now = new Date().getTime();
  const distance = endDate.getTime() - now;

  if (distance < 0) {
    document.getElementById("dealTimer").innerHTML = "<p>Offer expired</p>";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

// Sidebar controls
const menuBtn = document.getElementById("openSidebar"); 
const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("sidebarOverlay");
const closeBtn = document.getElementById("closeSidebar"); 

// open sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
  overlay.classList.add("active");
});

// close sidebar with X
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
});

// close sidebar by clicking overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
});
