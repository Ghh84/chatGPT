let onboardData = {
    name: "John Doe",
    email: "johndoe@example.com",
    position: "Software Engineer"
  };
  
  fetch("https://www.example.com/api/onboard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(onboardData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // handle success
    })
    .catch(error => {
      console.error(error);
      // handle error
    });
  