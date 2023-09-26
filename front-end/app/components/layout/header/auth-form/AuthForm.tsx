import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';
import { IAuthFields } from './auth-form.interface';

import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/field/Field';
import { useActions } from '@/hooks/useActions';
import styleIcon from '../icons-right/IconsRight.module.scss';
import styles from './AuthForm.module.scss';
import { validEmail } from './auth.valid';

const AuthForm: FC = () => {
	const { isShow, ref, setIsShow } = useOutside(false);

	const [type, setType] = useState<'login' | 'register'>('login');

	const { login, register: registerAction } = useActions();

	const { isLoading } = useAuth();

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') {
			login(data);
		} else if (type === 'register') {
			registerAction(data);
		}
	};

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={styleIcon.button} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#a4a4a4' />
			</button>

			{isShow && (
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<Field
						{...register('email', {
							required: "Email - обов'язкове поле",
							pattern: {
								value: validEmail,
								message: 'Невалідний Email'
							}
						})}
						placeholder='Email'
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: "Пароль - обов'язкове поле",
							minLength: {
								value: 4,
								message: 'Мін. довжина пароля - 4 символи'
							}
						})}
						placeholder='Пароль'
						error={errors.password}
						type='password'
					/>
					<div className='mt-5 mb-1 text-center'>
						<Button onClick={() => setType('login')} disabled={isLoading}>
							Ввійти
						</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
						disabled={isLoading}
					>
						Реєстрація
					</button>
				</form>
			)}
		</div>
	);
};

export default AuthForm;
