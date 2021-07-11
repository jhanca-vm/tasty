export default function getProtocol(url) {
  return url.split('://')[0]
}
