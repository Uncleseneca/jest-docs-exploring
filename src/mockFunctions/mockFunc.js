export const forEach = (list, callback) => {
  for (let i = 0; i < list.length; i++) {
    callback(list[i]);
  }
};
