var first_name = document.getElementById('first_name');
var last_name = document.getElementById('last_name');
var icon_telephone = document.getElementById('icon_telephone');
var age = document.getElementById('age');
var from = document.getElementById('from');
var to = document.getElementById('to');
var submit = document.getElementById('submit');
var stud = document.getElementById('stud');
var x;
var gen = document.getElementById('gender');
var firebaseStudRef = firebase.database().ref().child("i");

firebaseStudRef.on('value',function(datasnapshot){
	stud.innerText = datasnapshot.val();
	x = stud.innerText;
});

function submitClick() {
x++;
var firebaseRef = firebase.database().ref();
var fname = first_name.value;
var lname = last_name.value;
var tel = icon_telephone.value;
var ag = age.value;
var fro = from.value;
var t = to.value;
var g = gen.value;
firebaseRef.child("i").set(x);
firebaseRef.child("user "+x).child("first name").set(fname);
firebaseRef.child("user "+x).child("last name").set(lname);
firebaseRef.child("user "+x).child("contact").set(tel);
firebaseRef.child("user "+x).child("age").set(ag);
firebaseRef.child("user "+x).child("start date").set(fro);
firebaseRef.child("user "+x).child("end date").set(t);
firebaseRef.child("user "+x).child("gender").set(g);

}