const db = new Map();
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
    this.id = `${db.size + 1}`;
    this.isSubscribe = isSubscribe;

    db.set(this.id, this);
    fs.readFile('./temporally-db.json', 'utf8', function (err, data) {
      let obj = JSON.parse(data);
      console.log(obj);
      //obj.push(this);
      let strNotes = JSON.stringify(obj);
      fs.writeFile('./temporally-db.json', strNotes, function (err) {
        if (err) return console.log(err);
        console.log('Note added');
      });
    });
    // fs.writeFileSync('../temporally-db.json', JSON.stringify(this), (err) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    //   console.log('OOOOKKKK');
    // });
    // console.log(JSON.stringify(this));
    return Promise.resolve(this);
  }
}

User.findOne = async (email) => {
  return db.get(email);
};

module.exports = User;
