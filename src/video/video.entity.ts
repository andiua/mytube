import { CommentEntity } from 'src/comment/comment.entity';
import { SubscriptionEntity } from 'src/user/subscription.entity';
import { UserEntity } from 'src/user/user.entity';
import { Base } from 'src/utils/base';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity('Video')
export class VideoEntity extends Base {
	@Column({ default: '' })
	name: string;

	@Column({ default: false, name: 'is_public' })
	isPublic: boolean;

	@Column({ default: 0 })
	views?: number;

	@Column({ default: 0 })
	likes?: number;

	@Column({ default: 0 })
	duration: number;

	@Column({ default: 0, name: 'video_path' })
	videoPath: string;

	@Column({ default: 0, name: 'tabnail_path' })
	thumbnailPath: string;

	@ManyToOne(() => UserEntity, (user) => user.videos)
	@JoinColumn({ name: 'user_id' })
	user: UserEntity;

	@OneToMany(() => CommentEntity, (comments) => comments.video)
	@JoinColumn({ name: 'user_id' })
	comments: CommentEntity[];
}
