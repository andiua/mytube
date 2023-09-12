import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(4, {
		message: 'Не менше 4 символів'
	})
	@IsString()
	password: string
}