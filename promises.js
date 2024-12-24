function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve('"Data fetched successfully ..');
      } else {
        reject("error fetching data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => console.log("data fetched nicely ..", data))
  .catch((error) => console.log("error to fetch data", error));
