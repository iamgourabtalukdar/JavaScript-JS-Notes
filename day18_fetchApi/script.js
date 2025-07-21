fetch(
  "http://api.weatherapi.com/v1/current.json?key=4d5689b3d6f64bccaf1145422252107&q=krishnanagar"
)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    // code
  })
  .catch((error) => {
    console.log(error);
  });
