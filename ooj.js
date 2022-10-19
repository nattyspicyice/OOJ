// var names = ['ryu', 'crystal', 'mario'];

// //to sort the array
// console.log(names.sort());

// //to find the length of the array
// console.log(names.length);

// window.innerWidth

// //string type are not an object
// var name = "mario";
// var name2 = new String('ryu');

//QUESTIONS
//what is syntatic sugar? ---> more concise code (think ternary operator)


//video 2 Object Literals
// var userOne = {
//     email: 'ryu@ninjas.com',
//     name: 'Ryu',
//     login(){            //this is shorthand for functions
//         console.log(this.email, 'has logged in');        //the "this" KW refers to the THIS object
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };
// //this is an example of encapsulation ^ it is capturing everything it means to be a user

// //to access properties via dot notation
// userOne.name

// //to access properties via bracket notation
// userOne['email'];      //must be in a string inside the brackets

// //to change/update a property from outside the object using dot notation
// userOne.name = "Yoshi";

// //to change/update a property from outside the object using bracket notation
// userOne['name'] = 'mario';

// //to access a variable
// var prop = 'name'

// userOne[prop]; // output is mario

// userOne.prop; // output is undefined

// //to create/add on a property or object outside of the object
// userOne.age = 25;

//Video 3 Classes
//to create multiple objects of the same thing
// class User {    //class name is always uppercase
//     constructor(email, name){      //the constructor function is responsible for creating a new user object
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     } //constructor function is just for properties not methods
//     login(){
//         console.log(this.email, "just logged in");
//         return this;
//     } 
//     logout(){
//         console.log(this.email, "just logged out");
//         return this;
//     } 
//     updateScore(){
//         this.score++;
//         console.log(this.email, "score is now", this.score);
//         return this;
//     }    
// }

// //class inheritance 
// class Admin extends User { //uses the constructor from User Class
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }

// //to create the new users
// var userOne = new User('ryu@ninjas.com', 'Ryu'); 
// var userTwo = new User('yoshi@mariokart.com', 'Yoshi');
// var admin = new Admin("shaun@ninjas.com", "Shaun");

// //creating an array of users
// var users = [userOne, userTwo, admin];

// // the 'new' KW:
// // creates a new empty objects { }
// // sets the value of "this" to be the new empty object
// // calls the constructor method

// //method chaining
// userOne.login().updateScore().updateScore().logout();
// // userOne.login().logout(); //ERROR because this was run before the functions were defined

// //admin deleting a user
// admin.deleteUser(userOne);
// console.log(users);

//old way of emulating classes before ES6
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function (){
    this.online = true;
    console.log(this.email, "has logged in");
}
User.prototype.logout = function (){
    this.online = false;
    console.log(this.email, "has logged out");
}

//inheriting from User function
function Admin(...args){ 
    User.apply(this, args);       //this passes the constructor from the function User
    this.role = "super admin"; //this is specific to the admin 
}

//inheriting methods from the User prototype
Admin.prototype = Object.create(User.prototype);

//adding a new method to the Admin // the user will not have this method
Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};

//can only call the prototype on the function itself not the individual instances like userOne or userTwo
var userOne = new User('ryu@ninjas.com', 'Ryu'); 
var userTwo = new User('yoshi@mariokart.com', 'Yoshi');
var admin = new Admin('shaen@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];

console.log(admin);
console.log(userOne);


