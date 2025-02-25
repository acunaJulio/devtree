export  type User ={
    name: string;
    email: string;
    handle: string;
    password: string;
    password_confirmation: string;
}

export type RegisterForm =  Pick<User, 'name' | 'email' | 'handle' > & {
    password: string;
    password_confirmation: string;

}