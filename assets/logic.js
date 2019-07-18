
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
    console.log(train);
})
database.ref().on("child_added", function (childSnapshot) {

    var newRow = $("<tr>").append(
        $("<td>").text(childSnapshot.val().train),
        $("<td>").text(childSnapshot.val().destination),
        $("<td>").text(childSnapshot.val().frequency),
        // $("<td>").text(), //place holder for next arrival time
        // $("<td>").text(), //place holder for minutes away
    )

    $("#train-info").append(newRow);

})

//need to add logic to calculate next arrival time and minutes away
