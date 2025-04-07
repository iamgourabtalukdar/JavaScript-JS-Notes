function myPromise() {
  const resolveBtn = document.getElementById("resolve-btn");
  const rejectBtn = document.getElementById("reject-btn");

  return new Promise((resolve, reject) => {
    resolveBtn.addEventListener("click", () => {
      resolve({
        status: true,
        message: "how are you",
      });
    });
    rejectBtn.addEventListener("click", () => {
      reject("Hello");
    });
  });
}
