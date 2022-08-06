const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
userSchema
  .virtual(`fullName`)
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (fullName) {
    const names = fullName.split(" ");
    this.first = names[0];
    this.last = names[1];
  });
// TODO: Create a getter for the virtual that returns the full name of the user (first + last)

// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
