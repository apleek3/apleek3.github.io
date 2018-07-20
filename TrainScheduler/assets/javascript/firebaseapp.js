$(document).ready(function () {
    console.log("Ready!");//lets me know jQuery is G2G
    // Initialize Firebase
    // This is the code we copied and pasted from our app page
    var config = {
      apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
      authDomain: "whateveryouwantdemo1.firebaseapp.com",
      databaseURL: "https://whateveryouwantdemo1.firebaseio.com",
      storageBucket: "whateveryouwantdemo1.appspot.com"
    };
  
    firebase.initializeApp(config);
  
    // VARIABLES
    // --------------------------------------------------------------------------------
  
    // Get a reference to the database service
    var database = firebase.database();
  
  
    // Capture Button Click
    $("#form-submit").on("click", function (event) {
      event.preventDefault();
      var trainName = "";
      var destinationName = "";
      var trainTime = 0;
      var frequency = 0;
      var arrivalMinutes = 0;
  
      // Grabbed values from text boxes
      trainName = $("#trainName").val().trim();
      destinationName = $("#destinationName").val().trim();
      trainTime = $("#trainTime").val().trim();
      frequency = $("#frequency").val().trim();
      arrivalMinutes = moment(trainTime).fromNow();
  
      // Code for handling the push
      database.ref().push({
        train: trainName,
        destination: destinationName,
        time: trainTime,
        frequency: frequency,
        arrival: arrivalMinutes,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
  
    });
  
    // Firebase watcher .on("child_added"
    database.ref().on("child_added", function (snapshot) {
      // storing the snapshot.val() in a variable for convenience
      var trainName = snapshot.val().train;
      var destinationName = snapshot.val().destination;
      var trainTime = snapshot.val().time;
      var frequency = snapshot.val().frequency;
      var arrivalMinutes = snapshot.val().arrival;
  
      var nextTrainTime = moment(trainTime, "HH:mm").subtract(1, "years");
      var timeDifference = moment().diff(moment(nextTrainTime), "minutes");
      var remainingTime = timeDifference % frequency;
      var minutesRemaining = frequency - remainingTime;
      var nextTrainTimeInMinutes = moment().add(minutesRemaining, "minutes");
  
  
      // Console.logging the last user's data
      console.log(trainName);
      console.log(destinationName);
      console.log(trainTime);
      console.log(frequency);
      console.log(arrivalMinutes);
      console.log(timeDifference); // difference between the time
      console.log(remainingTime);  // time apart (remainder)
      console.log(minutesRemaining);// minutes until next train
  
      // first Time (pushed back 1 year to make sure it comes before current time)
      //console.log(nextTrainTimeInMinutes);
      // next Train
      //console.log("ARRIVAL TIME: " + moment(nextTrainTimeInMinutes).format("hh:mm"s);
  
      // add items to the table
      $("#trainTable").append(
        " <tr><th class='trainItems' id='tableFrequency'> every   " + snapshot.val().frequency +
        "   mins" + "</th><td class='trainItems' id='tableTrainName'> " + snapshot.val().train +
        " </td><td class='trainItems' id='tableDestination'> " + snapshot.val().destination +
        " </td><td class='trainItems' id='tableTime'> " + snapshot.val().time + "   hours" +
        " </td><td class='trainItems' id='arrivalMinutes'>" + minutesRemaining + " minutes @  " + moment(nextTrainTimeInMinutes).format("HHmm") + " hours </td></tr>");
  
  
      // Change the HTML to reflect
      $("#trainName").text(snapshot.val().trainName);
      $("destinationName").text(snapshot.val().destinationName);
      $("#trainTime").text(snapshot.val().trainTime);
      $("#frequency").text(snapshot.val().frequency);
  
      // Handle the errors
    }, function (errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
  
  });
  
  