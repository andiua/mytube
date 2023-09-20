import { NextPageAuth } from '@/providers/private-route.interface';
import React from 'react';

const StudioPage: NextPageAuth = () => {
	return <div>StudioPage</div>;
};

StudioPage.isOnlyUser = true;

export default StudioPage;
