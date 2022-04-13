const { db } = require("./server/db/models");
const {User} = require('./server/db/models')

const users = [{
  username:'Clong',
  password:'stuff'
},]

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(users.map(user => {
      return User.create(user)
    }))
    // seed your database here!
  } catch (err) {
    console.log((err));
  }
};


module.exports = seed;


if (require.main === module) {
  seed()
    .then(() => {
      console.log(("Seeding success!"));

    })
    .catch(err => {
      console.error(("Oh noes! Something went wrong!"));
      console.error(err);

    });
}
