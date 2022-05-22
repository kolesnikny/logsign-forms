const fs = require('fs');

class User {
  constructor({
    firstName,
    lastName,
    displayName,
    email,
    password,
    role,
    isSubscribe,
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = displayName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.id = `${new Date().getMilliseconds()}`;
    this.isSubscribe = isSubscribe;

    fs.readFile('./db/temporallydb.json', 'utf8', (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      let usersArray = JSON.parse(data);
      usersArray.push(this);
      fs.writeFile(
        './db/temporallydb.json',
        JSON.stringify(usersArray),
        (err) => {
          if (err) return err;
        }
      );
    });

    return Promise.resolve(this);
  }
}

User.findOne = async (inputdata) => {
  const user = fs.readFile('./db/temporallydb.json', 'utf8', (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    const logedUser = JSON.parse(data).filter((user) => {
      return (
        user.email === inputdata.email && user.password === inputdata.password
      );
    });

    return logedUser.length === 1
      ? JSON.stringify(logedUser[0])
      : 'No correctly pair  email/password';
  });
  return Promise.resolve(user);
};

module.exports = User;
