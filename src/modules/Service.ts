import { Model } from "mongoose";
import { IService } from "./IService";

export abstract class Service<T> implements IService {
    constructor(protected model: Model<T>){}
    
    update(data: object): void {
        throw new Error("Method not implemented.");
    }
    insert<U>(data: U): Promise<T> {
        return this.model.create<U>(data)
    }
    list() {
        return this.model.find({})
    }
    find(): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }

}