document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load data.json");
      }
      return response.json();
    })
    .then(data => {
      // 1. Status Cards
      const statusContainer = document.getElementById("status-cards");

      data.statusCards.forEach(card => {
        const col = document.createElement("div");
        col.className = "col-6 col-md-3";
        col.innerHTML = `
          <div class="status-card">
            <span>${card.title}</span>
            <h2 class="display-6">${card.value}</h2>
          </div>
        `;
        statusContainer.appendChild(col);
      });

      // 2. Ticket Rows
      const ticketContainer = document.getElementById("ticket-rows");

      data.tickets.forEach((ticket, index) => {
        const row = document.createElement("div");
        row.className = "ticket-row d-flex justify-content-between align-items-center p-2";
        if (index < data.tickets.length - 1) {
          row.classList.add("border-bottom");
        }
        row.innerHTML = `
          <span>${ticket.title}</span><strong>${ticket.count}</strong>
        `;
        ticketContainer.appendChild(row);
      });
    })
    .catch(error => {
      console.error("Error loading data:", error);
    });
});
