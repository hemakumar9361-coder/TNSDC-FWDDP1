
    document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // prevent page reload

      let formData = new FormData(this);

      // Example: log values
      console.log("Form Data:");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      // If you want to send JSON (excluding file):
      let jsonData = {
        name: formData.get("name"),
        age: formData.get("age"),
        gender: formData.get("gender"),
        email: formData.get("email"),
        address: formData.get("address")
      };

      fetch("https://example.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
      })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong.");
      });
    });
    function showbutton() {
            alert("Hello Java Script..!")
        }
