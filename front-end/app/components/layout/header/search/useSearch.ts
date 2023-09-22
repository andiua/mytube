import { useDebounce } from '@/hooks/useDebounce';
import { videoApi } from '@/store/api/video.api';
import { ChangeEvent, useState } from 'react';

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debounceSearch = useDebounce(searchTerm, 500);

	const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const {data, isSuccess} = videoApi.useGetVideosBySearchTermQuery(debounceSearch, {
		skip: !debounceSearch,
		selectFromResult: ({data, ...rest}) => ({
			data: data?.slice(0, 4),
			...rest
		})
	});

	return {
		handlerSearch, isSuccess, data, searchTerm
	}
};
