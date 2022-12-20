let json = [{
    "id" : "1", 
    "name"   : "Karthik",
    "number" : "9551565454",
    "mail": "karthik@gmail.com"
},
{
    "id" : "2", 
    "name"   : "balaji",
    "number" : "24654654564",
    "mail": "balaji@gmail.com"
},
{
    "id" : "3", 
    "name"   : "Dinesh",
    "number" : "42578546456",
    "mail": "dinesh@gmail.com"
}];

for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.name);
    console.log(obj.number);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.name); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].name);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);