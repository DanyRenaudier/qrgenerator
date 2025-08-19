const tabFormat = () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");
  const canvas = document.querySelectorAll("canvas");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));

      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");
      canvas.forEach((canvas) => {
        canvas.width = canvas.width;
      });
    });
  });
};

export { tabFormat };
