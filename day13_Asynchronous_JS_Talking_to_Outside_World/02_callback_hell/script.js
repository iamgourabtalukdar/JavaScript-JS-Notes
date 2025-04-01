// const d = makeRequest("https://jsonplaceholder.typicode.com/posts/");

// makeRequest("https://jsonplaceholder.typicode.com/posts/", function (res) {
//   console.log(res);
// });

makeRequest("https://jsonplaceholder.typicode.com/posts/", function (res) {
  console.log("Request 1 => all posts");
  console.log(res);

  makeRequest(
    `https://jsonplaceholder.typicode.com/posts/${res[0].id}`,
    function (res2) {
      console.log("Request 2 => single post");
      console.log(res2);

      makeRequest("https://jsonplaceholder.typicode.com/comments", (res3) => {
        console.log("Request 3 => comments");
        console.log(res3);

        makeRequest("https://jsonplaceholder.typicode.com/albums", (res4) => {
          console.log("Request 4 => albums");
          console.log(res4);

          makeRequest(
            `https://jsonplaceholder.typicode.com/users/${res4[60].userId}`,
            (res5) => {
              console.log("Request 5 => single user");
              console.log(res5);
            }
          );
        });
      });
    }
  );
});
