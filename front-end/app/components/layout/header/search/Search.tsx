import VideoItem from '@/components/ui/video-item/VideoItem';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './Search.module.scss';
import { useSearch } from './useSearch';

const Search = () => {
	const { data, handlerSearch, isSuccess, searchTerm } = useSearch();

	return (
		<div className={styles.search_top}>
			<label>
				<input
					type='text'
					placeholder='Пошук відео'
					value={searchTerm}
					onChange={handlerSearch}
				/>
				<AiOutlineSearch />
			</label>

			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map((video) => (
							<VideoItem isSmall item={video} key={video.id} />
						))
					) : (
						<div className='text-white'>Відео не знайдено</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Search;
