import { useAuth } from '@/hooks/useAuth';
import { useGetProfileQuery } from '@/store/api/api';
import React from 'react';

const ProfileMenu = () => {
	const { user } = useAuth();

	const { data, isLoading } = useGetProfileQuery(null, {
		skip: !user
	});

	if (isLoading) return null; //can add own Loader

	return <div>{data?.name}</div>;
};

export default ProfileMenu;
