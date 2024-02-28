import {IsMobilePhone, IsString, Length} from "class-validator";

export class SendOtpDto {
  @IsMobilePhone("fa-IR", {}, {message: "mobile number is invalid"})
  mobile: string;
}

export class CheckOtpDto {
  @IsMobilePhone("fa-IR", {}, {message: "mobile number is invalid"})
  mobile: string;
  @IsString()
  @Length(5, 5, {message: "incorrect code"})
  code: string;
}
