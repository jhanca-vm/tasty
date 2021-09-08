/**
 * Get data from an API route
 * @param {*} route API route
 */
export default function fetcher(route) {
  return fetch(route).then(res => res.json())
}
