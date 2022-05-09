const db = new Map();

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
    return Promise.resolve(this);
  }
}

User.findOne = async (email) => {
  return db.get(email);
};

module.exports = User;
