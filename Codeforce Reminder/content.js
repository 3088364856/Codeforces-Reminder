// content.js
if (window.location.href.includes("https://codeforces.com/contest/")) {
  const warningMessage = document.createElement("div");
  warningMessage.innerText = "Use Map Not Unordered_map";
  warningMessage.style.position = "fixed";
  warningMessage.style.top = "10px";
  warningMessage.style.left = "10px";
  warningMessage.style.backgroundColor = "red";
  warningMessage.style.color = "white";
  warningMessage.style.padding = "20px";
  warningMessage.style.fontSize = "24px";
  document.body.appendChild(warningMessage);

  // 自动消失定时器
  setTimeout(() => {
    warningMessage.style.display = "none";
  }, 1000); // 1000 毫秒等于 1 秒
}
