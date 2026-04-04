"use client";

export function MadridButton() {
  const handleClick = () => {
    const overlay = document.createElement("div");
    overlay.style.cssText =
      "position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.4);backdrop-filter:blur(5px);opacity:0;transition:opacity 0.3s ease-in-out;z-index:9998;";
    document.body.appendChild(overlay);

    const container = document.createElement("div");
    container.style.cssText =
      "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0.9);display:flex;flex-direction:column;align-items:center;opacity:0;transition:opacity 0.3s ease-in-out,transform 0.4s ease-in-out;z-index:9999;";

    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg";
    img.alt = "Real Madrid logo";
    img.style.width = "120px";

    const text = document.createElement("span");
    text.textContent = "¡Hala Madrid!";
    text.style.cssText =
      "color:white;font-size:1.5rem;font-weight:600;margin-top:12px;text-shadow:0 2px 6px rgba(0,0,0,0.5);";

    container.appendChild(img);
    container.appendChild(text);
    document.body.appendChild(container);

    requestAnimationFrame(() => {
      overlay.style.opacity = "1";
      container.style.opacity = "1";
      container.style.transform = "translate(-50%,-50%) scale(1)";
    });

    setTimeout(() => {
      overlay.style.opacity = "0";
      container.style.opacity = "0";
      container.style.transform = "translate(-50%,-50%) scale(0.8)";
      setTimeout(() => {
        overlay.remove();
        container.remove();
      }, 500);
    }, 1500);
  };

  return (
    <button
      onClick={handleClick}
      className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium cursor-pointer"
    >
      <strong>¡Hala Madrid Y Nada Más!</strong>
    </button>
  );
}
