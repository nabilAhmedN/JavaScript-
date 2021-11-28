
// FIXME: Array
var ary = [10, 20, 30, 40, 50];
document.write(ary)
var ary = [10, 20, 30, 40, 50];
for(var a = 0; a<= 4; a++){
    document.write(ary[a] + "<br>");
}


// FIXME:Arrays Method - II
var ary = new Array(3); //TODO: array ar pore "()" ar vitore amra akt valu dity parbo. ai jagay joto value dibo future re se toto ta value sote korty parbe.
ary[0] = 10;
ary[1] = "nabil";
ary[2] = "ahmed";
ary[3] = 10;
ary[4] = "nahid";
ary[5] = true;
ary[6] = null;
for(var a = 0; a<= 10; a++){
    document.write(ary[a] + "<br>");
}    

// TODO: user teke input nyar jonno
var ary = new Array(4); //TODO: akhane 4 thakay input o 4 ta nibe
for(var b = 0; b <4; b++){
    ary[b] = prompt("Enter the value: ");
}
for(var a = 0; a<= 5; a++){
document.write(ary[a] + "<br>");
}    

// FIXME:Multidimensional Arrays 
var ary = [
    ["Nabil", 22, "Male", "B.Sc"],
    ["Aysha", 20, "Female", "B.A"],
    ["Nahid", 23, "Male", "BSC"],
    ["Keya", 21, "Female", "BA"]
];
document.write("<table border = '1px' cellspacing='0'>");
for(var a = 0; a < 4; a++){
    document.write("<tr>");
    for(var b = 0; b < 4; b++){
        document.write("<td>" + ary[a][b] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

// TODO: akhane .length diy joto gulo input nity cai, nity parbo.
var ary = [
    ["Nabil", 22, "Male", "B.Sc"],
    ["Aysha", 20, "Female", "B.A"],
    ["Nahid", 23, "Male", "BSC"],
    ["Keya", 21, "Female", "BA"],
    ["Keya", 21, "Female", "BA"]
];
document.write("<table border = '1px' cellspacing='0'>");
for(var a = 0; a < ary.length; a++){
    document.write("<tr>");
    for(var b = 0; b < ary[a].length; b++){
        document.write("<td>" + ary[a][b] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

// FIXME: modify array
var a = ["Nabil", "22", "Male"]
a[0] = "Nahid";
document.write(a);

// FIXME: delete array
var a = ["Nabil", "22", "Male", "DIU"]
delete a [3];
document.write(a);

// FIXME: sort array
var a = ["Nabil", "22", "Male", "DIU"]
a.sort();
document.write(a);

// FIXME: sort array
var a = ["DIU","Male",22,"Nabil"]
a.reverse();
document.write(a);

// FIXME: pop array
var a = ["DIU","Male",22,"Nabil"]
a.pop(); //TODO: pop shob somoy last array ta delete kore
document.write(a);

// FIXME: push array
var a = ["Nabil", "22", "Male"]
a.push("DIU"); //TODO: push shob somoy last array tay add kore
document.write(a);

// FIXME: shift array
var a = ["Nabil", "22", "Male","DIU"]
a.shift(); //TODO: shift shob somoy 1st array tay delete kore
document.write(a);

// FIXME: unshift array
var a = ["22", "Male","DIU"]
a.unshift("Nabil"); //TODO: unshift shob somoy 1st array tay add kore
document.write(a);

// FIXME: concat array
var a = ["Nabil","22", "Male","DIU"]
var b = ["Keya", "20", "Female", "DIU"]
var c = a.concat(b);
document.write(c);

// FIXME: concat array
var a = ["Nabil","22", "Male","DIU"]
var b = ["Keya", "20", "Female", "DIU"]
var c = a.join(" "); // TODO: array r alada alada value ke ak sate kore akta value te niy ase. "Join" ar pore "("")" bracket ar inadvertent comar vitore je kono sgin dity parbo.
document.write(c);

// FIXME: slice() array
var a = ["Nabil", "Ahmed", "Nahid", "Rafi", "Arman", "Miraz"];
document.write(a + "<br><br>");
// TODO:slice(start, end of previous). slice diy array r je kono jayga teke value cut kora jay.
var b = a.slice(1, 4);
document.write(b + "<br><br>");
 
// FIXME: splice() array method
var a = ["Nabil", "Ahmed", "Nahid","Miraz"];
document.write(a + "<br><br>");
// TODO: splice(index, howmany, "new value", delete). "2" ar pore "0" diy delete bujay.
a.splice(2,0, "Rafi", "Arman");
document.write(a + "<br><br>");
// TODO: 1st je number dya thakbe, se number teke index suru hobe. 2nd number diy bujay, setar por teke index suru hobe and ar por teke shob delete hoy jabe.
a.splice(2, 2, "Rafi", "Arman");
document.write(a + "<br><br>");


// FIXME: indexOf array method
var a = ["Nabil", "Ahmed", "Nahid","Miraz", "Nahid", "Arman"];
document.write(a + "<br><br>");
// TODO: indexOf("Search item", Start). aita 1st a teke search kora suru korbe. "nahid" diy bujay ki search korbo. r ar pore jodi kono number thake tahole se jaga teke search kora suru hobe. EX: ai jaga "3" ace jar mane "3" no index teke "Nahid" nam ta "3" no index ar por teke searh kora suru kobe.
var b = a.indexOf("Nahid", 3);
document.write(b);

// FIXME: lastIndexOf array method
var a = ["Nabil", "Ahmed", "Nahid","Miraz", "Nahid", "Arman"];
document.write(a + "<br><br>");
// TODO: lastIndexOf(Search item", Start). aita ses a teke search kora suru korbe. ar baki kaj gulo "indexOf"  ar moto
var b = a.lastIndexOf("Nahid",3);
document.write(b);

// FIXME: includes() array method
var a = ["Nabil", "Ahmed", "Nahid","Miraz", "rafi", "Arman"];
document.write(a + "<br><br>");
// TODO: includes("Search item")."includes()" diy array ar moddy kono item search kore dekbe oi item ta oi array te ace ki na. item array te thakle true hobe. ar na thakle false.
var b = a.includes("keya");
document.write(b);

// FIXME: some array method
var ages = [10, 13, 18, 20];
document.write(ages + "<br><br>");
var b = ages.some(checkAdult); // TODO:cheaks if any of the elemets in array pass a test. ai array moddy akta test pass korly shob guloi ture return korbe.
document.write(b + "<br><br>");
function checkAdult(age){
    return age >= 18;
}

// FIXME: every array method
var ages = [10, 13, 18, 20];
document.write(ages + "<br><br>");
var b = ages.every(checkAdult); // TODO:array r moddy shob gulo value pass korle true hobe. ar na hole false hobe. 
document.write(b + "<br><br>");
function checkAdult(age){
    return age >= 18;
}

// FIXME: find array method
var ages = [10, 13, 18, 20];
document.write(ages + "<br><br>");
// TODO: find() method returns the valus of the first element in an array that pass a text. ai jagay array r 1 st teke test number ta khuja suru korbe. jake boro ba shoman pabe take print kore dibe. ar pore jodi kono boro value thake ta hole seta print korbe na.
var b = ages.find(checkAdult);
document.write(b + "<br><br>");
function checkAdult(age){
    return age >= 18;
}

// FIXME: findIndex array method
var ages = [10, 13, 18, 20];
document.write(ages + "<br><br>");
// TODO: findINnex() method returns the index of the first element in an array that pass a text. aitar kaj pura ta "find()" ar motoi but ai jaga suru index value ta print korbe.
var b = ages.findIndex(checkAdult);
document.write(b + "<br><br>");
function checkAdult(age){
    return age >= 18;
}

// FIXME: filter array method
var ages = [10, 23, 8, 20, 12, 21];
document.write(ages + "<br><br>");
// TODO: filter() method creates an array filled with ll array elements that pass the test. aita onk ta "find()" ar motoi sudu ai jaga test cheak korbe jar saty mile jabe take alada akta array te store kore felbe.
var b = ages.filter(checkAdult);
document.write(b + "<br><br>");
function checkAdult(age){
    return age >= 18;
}

// FIXME: toString() array method
var a = ["Nabil", "Ahmed", "Nahid", "MIraz"]
// TODO: the toString() method converts an array into a string and returns the result. ar aita akbar sting hoy gele aitay ar array r kono function kaj kore na.
a.toString();
document.write(a);

// FIXME: fill() array method
var a = ["Nabil", "Rafi", "Arman", "MIraz"]
document.write(a + "<br><br>");
// TODO: the fill() method fills all the elements in an array with a static valus.
a.fill("Nahid");
document.write(a);

// FIXME: forEach loop 
var a = ["Nabil", "Rafi", "Arman", "Miraz"];
a.forEach(function(name, index){
    document.write(index + " : " + name + "<br>"); // TODO: forEach loop diy proti ta value por por print kora jay. ati dy value r index o print kora jay.
});

// FIXME: object
var a = {
    fname : "Nabil",
    lname : "Ahmed",
    age : 22,
    email : "nabil15-12761@diu.edu.bd"
}
console.log(a);
// TODO: or
// var a = {
    fname : "Nabil",
    lname : "Ahmed",
    age : 22,
    email : "nabil15-12761@diu.edu.bd",
    favAnime: ['Naruto', 'Death Note', 'erased'],
    salary : function(){
        return 2500;
    },
    fullname : function(){
        return this.fname+ " " + this.lname; // TODO: "this" mane hosce "this" variable "a" object hoy ace. ai khane "this" ta "a" ar jonno use hosce.
        // TODO: object ar vitor jodi amra kono function run korty cai tahole "fullname" ba "salary" aita holo akta object ar function.
    }
}
console.log(a);

// FIXME: object method - 2
var preson = new Object();
preson.fname = "Nabil";
preson.mname = "Ahmed";
preson.age = 22;
console.log(preson);

// FIXME: Array of Object
var person = [
    {name : "Nabil", age : 22},
    {name : "Ahmed", age : 21},
    {name : "Nahid", age : 20},
];
console.log(person);

// FIXME: For in Loop
var obj = {
    fname : "Nabil",
    lname : "Ahmed",
    age : 22,
    email : "nabil15-12761@diu.edu.bd"
};
// TODO: ai khane "for loop" ta object ar value gulo aksaty print korty onk help kore. akhane obj ar vitor joto gulo value ace se gulo ke "key" vitor store korbe and "key" ta shob value print kore dibe.
for(var key in obj){
    document.write(key + " : " + obj[key] + "<br>"); // TODO: "key" ta property print kore and "obj" ta value print kore.
}

// FIXME: cloneNode
var target = document.getElementById("list1").children[0];
var copyElement = target.cloneNode(true);
console.log(copyElement);
document.getElementById("list2").appendChild(copyElement);

// FIXME: hasAttribute
var target = document.getElementById("test");
// TODO: akta attribute ar upor nirvor kore dekhbe ar kono attribute ace ki na.
var find = target.hasAttribute("class");
console.log(find);

// FIXME: hasChildNodes
var target = document.getElementById("test");
// TODO: akta attribute moddy jodi kono child thake thaole seta true return korbe.
var find = target.hasChildNodes("class");
console.log(find);

// FIXME: isEqualNode
// TODO: "isEqualNode" dui ta nodeType, nodeName, nodeValue, childNodes ai shob gula jodi same hoy tahole return korbe true ar na hole false.
var target1 = document.getElementById("list-1").firstElementChild;
var target2 = document.getElementById("list-2").children[1];
var equal = target1.isEqualNode(target2);
console.log(equal);
