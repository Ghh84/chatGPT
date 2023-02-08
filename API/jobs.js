fetch("https://www.example.com/onboard/jobs")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then(text => {
    console.log(text);
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
