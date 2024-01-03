function formatBytes(bytes) {
  if (bytes < 1024) {
    return bytes + " bytes";
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }
}
function getPayloadWeight(payload) {
  const payloadString = JSON.stringify(payload);
  const payloadSizeInBytes = new Blob([payloadString]).size;
  return payloadSizeInBytes;
}
module.exports = {
  formatBytes,
  getPayloadWeight,
};
