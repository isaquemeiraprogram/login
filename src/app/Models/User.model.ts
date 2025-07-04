import { Role } from "./Role.model"


export interface User {

    id: string,
    email: string,
    password: string,
    role: Role,
    is_active: boolean
}

export interface UserDto {
    
    email: string,
    password: string,
    role: Role,
    is_active: boolean

}