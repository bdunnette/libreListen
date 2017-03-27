var fs = require('fs');
var path = require('path');
var firebase = require('firebase-admin');
var rj = require('request-json');
var librivox = rj.createClient('https://librivox.org/api/feed/');

var serviceAccount = require(path.join(__dirname, 'credentials.json'));

console.log(serviceAccount);

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://" + serviceAccount.project_id + ".firebaseio.com"
})

var db = firebase.database();
var worksRef = db.ref("works");
var sectionsRef = db.ref("sections");

librivox.get('audiobooks?format=json', function(err, res, body) {
  body.books.forEach(function(book) {
    worksRef.child(book.id).update(book);
    librivox.get('audiotracks?project_id=' + book.id + '&format=json', function(err, res, body) {
      body.sections.forEach(function(section) {
        section.work = book.id;
        sectionsRef.child(section.id).update(section);
      })
    })
  })
});
