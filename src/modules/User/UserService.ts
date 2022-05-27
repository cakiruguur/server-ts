import { Service } from "../Service";
import User, { IUser } from './UserModel'

class UserService extends Service<IUser>{
    constructor() {
        super(User)
    }

    login(body: object, user: IUser){
        
    }
}

export default new UserService()