import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
// import { User } from "src/modules/users/entities/user.entity"; // <-- Ya no es necesaria

export class LoginAutothDto { // <-- CORRECCIÓN: Se elimina 'implements User'

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @MinLength(6)
    @MaxLength(25)
    @IsNotEmpty()
    password: string;
}