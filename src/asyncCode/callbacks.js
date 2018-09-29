
export const fetchData = (callback) => {
  setTimeout(() => {
    callback('BIG')
  }, 200);
}