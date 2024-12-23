const countdown = () => {
    const endDate = new Date("2024-12-25T23:59:59").getTime(); // Fecha límite
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
  
    const updateCountdown = () => {
      const now = new Date().getTime();
      const remaining = endDate - now;
  
      if (remaining > 0) {
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
  
        daysEl.textContent = days.toString().padStart(2, "0");
        hoursEl.textContent = hours.toString().padStart(2, "0");
        minutesEl.textContent = minutes.toString().padStart(2, "0");
        secondsEl.textContent = seconds.toString().padStart(2, "0");
      } else {
        clearInterval(timer);
        document.getElementById("countdown-timer").textContent = "¡La preventa ha finalizado!";
      }
    };
  
    const timer = setInterval(updateCountdown, 1000);
  };
  
  document.addEventListener("DOMContentLoaded", countdown);
  