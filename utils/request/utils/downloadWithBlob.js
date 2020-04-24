

module.exports = function downloadWithBlob({ filename, blob }) {
  const oLink = document.createElement("a");
  oLink.style.display = "none";
  oLink.href = window.URL.createObjectURL(blob);
  oLink.setAttribute("download", filename);
  document.body.appendChild(oLink);
  oLink.click();
  window.URL.revokeObjectURL(oLink.href);
  document.body.removeChild(oLink);
};