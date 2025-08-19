const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // sacar el "active" a todos
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // activar el tab clickeado
        tab.classList.add("active");
        document.getElementById(tab.dataset.target).classList.add("active");
      });
    });