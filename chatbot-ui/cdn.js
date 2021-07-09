fetch("./index3.html")
       .then((response) => response.text())
       .then((data) => {
              // Do something with your data
              document.write(data);
       });
