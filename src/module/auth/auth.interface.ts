export type IUser = {
    name: string,
    email: string, 
    password: string,
    role: IRole,
    created_At: Date,
    updated_At: Date
    
}

const role = ["contributor","maintainer"]
type IRole = typeof role[number]