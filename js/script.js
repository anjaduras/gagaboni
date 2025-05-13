function updateTime() {
    const now = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };  // Displaying date as DD/MM/YYYY
    document.getElementById("time").innerText = now.toLocaleDateString(undefined, options) + " " + now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit'});
}
setInterval(updateTime, 1000);
  
  // Design

  document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".grid .startbutton");
  
    buttons.forEach(button => {
      button.addEventListener("mouseover", function () {
        this.style.transform = "translateY(-5px)";
        this.style.transition = "transform 0.2s ease-in-out";
      });
  
      button.addEventListener("mouseout", function () {
        this.style.transform = "translateY(0)";
      });
    });
  });

  // Last updated

  const lastModified = new Date(document.lastModified);
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    document.getElementById("last-updated").textContent =
      "Last updated on " +
      lastModified.toLocaleDateString(undefined, options);

  // coded by Anna Duras, 03-2025