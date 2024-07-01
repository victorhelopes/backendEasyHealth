export interface IProfessional{
    name: string,
    lastName: string,
    email: string,
    password:string,
    telephone: string
    isActive: boolean,
    gender: 'F' | 'M' | 'other'
}