const controllers = require("../controllers/user.controller");


module.exports = [
  {
    method: "GET",
    path: "/users",
    handler: controllers.getUser
  },
  {
    method: 'POST',
    path: '/users/create',
    handler: controllers.createUser
  },
  {
    method: 'PUT',
    path: '/users/update/{id}',
    handler: controllers.updateUser
  },
  {
    method: 'PATCH',
    path: '/users/delete/{id}',
    handler: controllers.deleteUser
  },
]