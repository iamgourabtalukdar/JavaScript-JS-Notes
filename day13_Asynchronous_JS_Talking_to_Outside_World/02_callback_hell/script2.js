function makeRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.send();

  xhr.addEventListener("load", () => {
    const data = JSON.parse(xhr.response);
    callback(data);
  });
}
