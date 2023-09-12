import {
	Controller,
	UsePipes,
	ValidationPipe,
	HttpCode,
	Body,
	Post,

} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CurrentUser } from 'src/user/user.decorator';
import { CommentDto } from './comment.dto';
import { Auth } from 'src/auth/auth.decorator';

@Controller('comment')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async createComment(@CurrentUser('id') id: string, @Body() dto: CommentDto) {
		return this.commentService.create(+id, dto);
	}
}
