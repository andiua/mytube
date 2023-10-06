import { FC } from 'react';
import { ITogglePublic } from './toggle-public.interface';
import styles from './TogglePublic.module.scss';
import { Switch } from '@headlessui/react';
import cn from 'classnames';

const TogglePublic: FC<ITogglePublic> = ({ clickHandler, isEnabled }) => {
	return (
		<div className={styles.wrapper}>
			<Switch
				checked={isEnabled}
				onChange={clickHandler}
				className={cn(styles.switch, {
					'bg-primary bg-opacity-80': isEnabled,
					'bg-gray-200': !isEnabled
				})}
			>
				<span
					className={cn(styles.point, {
						'translate-x-6': isEnabled,
						'translate-x-1': !isEnabled
					})}
				/>
			</Switch>
			<span className='text-white ' onClick={clickHandler}>
				Публічне відео
			</span>
		</div>
	);
};

export default TogglePublic;
