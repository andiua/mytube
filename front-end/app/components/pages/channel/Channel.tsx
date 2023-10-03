import Layout from '@/components/layout/Layout';
import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall';
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton';
import { FC } from 'react';
import Catalog from '../home/catalog/Catalog';
import { IChannel } from './channel.interface';

const Channel: FC<IChannel> = ({ channel }) => {
	return (
		<Layout title={channel.name}>
			<div className='mb-10 w-1/3'>
				<div className='flex items-center gap-12'>
					<ChannelInfoSmall channel={channel} />
					<SubscribeButton channelIdForSubscribe={channel.id} />
				</div>
				<article className='mt-3 text-gray-500'>{channel.description}</article>
			</div>
			<Catalog newVideos={channel.videos || []} />
		</Layout>
	);
};

export default Channel;
