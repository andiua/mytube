import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';
import { api } from '@/store/api/api';
import Image from 'next/image';
import Link from 'next/link';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import styles from './ProfileMenu.module.scss';

const ProfileMenu = () => {
	const { user } = useAuth();

	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user
	});

	const { isShow, setIsShow, ref } = useOutside(false);

	const { logout } = useActions();

	if (isLoading) return null; //can add own Loader

	return (
		<div ref={ref} className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				<Image
					src={data?.avatarPath || ''}
					alt={data?.name || ''}
					width={40}
					height={40}
					priority
				/>
				<span className={styles.name}>{data?.name}</span>
				{isShow ? <GoChevronUp /> : <GoChevronDown />}
			</button>

			{isShow && (
				<div className={styles['profile-menu']}>
					<ul>
						<li>
							<Link href={`/c/${user?.id}`}>Мій канал</Link>
						</li>
						<li>
							<Link href='/studio'>В студію</Link>
						</li>
						<li>
							<button onClick={logout}>Вихід</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default ProfileMenu;
