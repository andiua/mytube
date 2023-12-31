import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Patch,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/auth.decorator';
import { CurrentUser } from './user.decorator';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') id: number) {
		return this.userService.byId(id);
	}

	@Get('by-id/:id')
	async getUser(@Param('id') id: string) {
		return this.userService.byId(+id);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async updateUser(@Param('id') id: string, @Body() dto: UserDto) {
		return this.userService.updateProfile(+id, dto);
	}

	@HttpCode(200)
	@Patch('subscribe/:userId')
	@Auth()
	async subscribeToUser(
		@CurrentUser('id') id: number,
		@Param('userId') userId: string,
	) {
		return this.userService.subscribe(id, +userId);
	}

	@Get()
	async getUsers() {
		return this.userService.getAll();
	}
}
