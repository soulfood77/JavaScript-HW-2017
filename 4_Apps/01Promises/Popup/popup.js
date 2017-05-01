(function() {
    const pop = document.getElementById("pop"),
        newLocation = "https://telerikacademy.com/";

    pop.innerHTML = "You will be redirected to " + newLocation;

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Waiting...");
            resolve();
        }, 5000);
    });


    promise.then(function() {
        location.href = newLocation;
    });
    // console.log("Done");
}());