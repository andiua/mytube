import Channel from '@/components/pages/channel/Channel';
import { IChannel } from '@/components/pages/channel/channel.interface';
import { UserService } from '@/services/user.service';
import { IUser } from '@/types/user.interface';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const ChannelPage: NextPage<IChannel> = ({ channel }) => {
	return <Channel channel={channel} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		// реалізовували через аксіос
		const { data: users } = await UserService.getAll();
		const paths = users.map((user) => ({
			params: {
				id: String(user.id)
			}
		}));

		return {
			paths,
			fallback: 'blocking'
		};
	} catch (error) {
		return {
			paths: [],
			fallback: false
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		// реалізовували через аксіос
		const { data: channel } = await UserService.getUser(Number(params?.id));

		return {
			props: {
				channel
			} as IChannel
		};
	} catch (error) {
		return {
			props: {
				channel: {} as IUser
			} as IChannel
		};
	}
};

export default ChannelPage;
