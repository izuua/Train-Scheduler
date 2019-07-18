
// var firebaseConfig = {
//     apiKey: "AIzaSyCBqNaNIbkiYBdnuPX6OhudWh-iI9agn44",
//     authDomain: "click-button-b99e3.firebaseapp.com",
//     databaseURL: "https://click-button-b99e3.firebaseio.com",
//     projectId: "click-button-b99e3",
//     storageBucket: "click-button-b99e3.appspot.com",
//     messagingSenderId: "802368359274",
//     appId: "1:802368359274:web:47acc2a51872d368"
// };
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();
// $(".btn").on("click", function (event) {
//     event.preventDefault();
//     var employee = {
//         name: $("#input-name").val().trim(),
//         role: $("#input-role").val().trim(),
//         startDate: $("#input-start-date").val().trim(),
//         rate: $("#input-rate").val().trim(),
//     }
//     database.ref().push(employee);
//     console.log(employee);
// })
// database.ref().on("child_added", function (childSnapshot) {
//     var tr = $("<tr>");
//     tr.html("<th scope ='row'>" + childSnapshot.val().name + "</th>" + "<td>" + childSnapshot.val().role + "</td>" + "<td>" + childSnapshot.val().startDate + "</td>" + "<td>" + (moment(childSnapshot.val().startDate).diff(moment(), "months") * -1) + "</td>" + "<td>" + childSnapshot.val().rate + "</td>" + "<td>" + ((moment(childSnapshot.val().startDate).diff(moment(), "months") *-1)*childSnapshot.val().rate) + "</td>");
//     $("#employee-info").append(tr);
//     console.log(tr)
// })