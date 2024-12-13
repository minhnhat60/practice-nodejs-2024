const User = require("../models/User.model");
// [GET] /users
module.exports.getUser = async (req, h) => {
  try {
    const find = {
      deleted: false
    }
    const users = await User.find(find);
    return h.response(users).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}


// [POST] /users/create
module.exports.createUser = async (request, h) => {
  try {
    const user = new User(request.payload);
    const savedUser = await user.save();
    return h.response(savedUser).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
};

// [PUT] /users/update/{id}
module.exports.updateUser = async (request, h) => {
  try {
    const { id } = request.params;
    const updates = request.payload;
    
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true
    });

    if (!updatedUser) {
      return h.response({ message: "Lỗi" }).code(400);
    }

    return h.response(updatedUser).code(200);

  } catch (error) {
    return h.response(error).code(500);
  }
};

// [PATCH] /users/delete/{id}
module.exports.deleteUser = async (request, h) => {
  try {
    const { id } = request.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { deleted: true },
      { new: true }
    )
    
    if(!updatedUser) {
      return h.response({ message: "Lỗi!!!"}).code(400);
    }

    return h.response({ message: "Cập nhật thành công!", user: updatedUser }).code(200);

  } catch (error) {
    return h.response(error).code(500);
  }
};