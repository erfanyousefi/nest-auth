import {IsEmail, IsMobilePhone, IsString, Length} from "class-validator";
import {ConfirmedPassword} from "src/common/decorators/password.decorator";

export class SignupDto {
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;
  @IsMobilePhone(
    "fa-IR",
    {},
    {message: "your phonbe number format is incorrect"}
  )
  mobile: string;
  @IsString()
  @IsEmail({}, {message: "your email format is incorrect"})
  email: string;
  @IsString()
  @Length(6, 20, {message: "your password is incorrect"})
  password: string;
  @IsString()
  @ConfirmedPassword("password")
  confirm_password: string;
}

export class LoginDto {
  @IsString()
  @IsEmail({}, {message: "your email format is incorrect"})
  email: string;
  @IsString()
  @Length(6, 20, {message: "your password is incorrect"})
  password: string;
}
