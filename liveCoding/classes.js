class User {
  constructor(userName, userEmail) {
    //console.log(userName, userEmail);
    this.name = userName;
    this.email = userEmail;
  }

  render() {
    return (
      "The user name is: " + this.name + ". And the user email: " + this.email
    );
  }
}

const testUser = new User("Max", "max@yahoo.com");

// read
console.log(testUser.render());
//#################################
/**
 function(userName,userEmail){
     let name = userName
     let email = userEmail
 }
 */
