export default function loadBalancer(chinaDownload, USDownload) {
  // Returns the result of the first promise that resolves using Promise.race
  return Promise.race([chinaDownload, USDownload]);
}
