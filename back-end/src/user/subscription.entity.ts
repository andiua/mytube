import { Entity, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { VideoEntity } from 'src/video/video.entity';
import { Base } from 'src/utils/base';
import { UserEntity } from './user.entity';

@Entity('Subscription')
export class SubscriptionEntity extends Base {
	@ManyToOne(() => UserEntity, (user) => user.subscriptions)
	@JoinColumn({ name: 'from_user_id' })
	fromUser: UserEntity; //юзер, який підписується

	@ManyToOne(() => UserEntity, (user) => user.subscriptions)
	@JoinColumn({ name: 'to_user_id' })
	toUser: UserEntity; //на кого підписуємось
}
