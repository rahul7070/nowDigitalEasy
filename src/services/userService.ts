import User, { IUser } from "../models/userModel";

class UserService {
  async addUser(userDetails: IUser): Promise<IUser> {
    const user = new User(userDetails);
    return await user.save();
  }

  async getAllUsers(): Promise<IUser[]> {
    return await User.find();
  }

  async getSingleUser(userId: string): Promise<IUser | null> {
    return await User.findById(userId);
  }

  async deleteUser(userId: string): Promise<void> {
    await User.findByIdAndDelete(userId);
  }

  async updateUser(userId: string, userDetails: IUser): Promise<IUser | null> {
    return await User.findByIdAndUpdate(userId, userDetails, { new: true });
  }
}

export default new UserService();
