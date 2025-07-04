import { User } from "./User.model"


export interface Client {

    id: string,
    full_name: string,
    phone: string,
    LoyaltyPoints: Int16Array,
    user:User

}

export interface ClientDto {
    
    full_name: string,
    phone: string,
    LoyaltyPoints: Int16Array,
    user_by_id:User

}