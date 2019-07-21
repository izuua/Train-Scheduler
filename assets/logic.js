var firebaseConfig = {
    apiKey: "AIzaSyCBqNaNIbkiYBdnuPX6OhudWh-iI9agn44",
    authDomain: "click-button-b99e3.firebaseapp.com",
    databaseURL: "https://click-button-b99e3.firebaseio.com",
    projectId: "click-button-b99e3",
    storageBucket: "click-button-b99e3.appspot.com",
    messagingSenderId: "802368359274",
    appId: "1:802368359274:web:47acc2a51872d368"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

$(".btn").on("click", function (event) {
    event.preventDefault();
    var train = {
        train: $("#input-train").val().trim(),
        destination: $("#input-destination").val().trim(),
        time: $("#input-time").val().trim(),
        frequency: $("#input-frequency").val().trim(),
    }
    database.ref().push(train);
})
database.ref().on("child_added", function (childSnapshot) {

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(childSnapshot.val().time, "HH:mm").subtract(1, "years");

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

    // Time apart (remainder)
    var tRemainder = diffTime % childSnapshot.val().frequency;

    // Minute Until Train
    var tMinutesTillTrain = childSnapshot.val().frequency - tRemainder;

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");


    var newRow = $("<tr>").append(
        $("<td>").text(childSnapshot.val().train),
        $("<td>").text(childSnapshot.val().destination),
        $("<td>").text(childSnapshot.val().time),
        $("<td>").text(childSnapshot.val().frequency),
        $("<td>").text(moment(nextTrain).format("hh:mm")),
        $("<td>").text(tMinutesTillTrain),
    )

    $("#train-info").append(newRow);

})

