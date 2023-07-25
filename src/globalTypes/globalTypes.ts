export interface IRegisterUser {
    address: string;
    email: string;
    gender: string;
    name: string;
    password: string;
    phone: number;
    role: string;
    img?: string;
    confirm?:string
    photoURL?: string | undefined;
}
