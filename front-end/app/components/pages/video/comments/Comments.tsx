import { useAuth } from '@/hooks/useAuth';
import { IComment } from '@/types/comments.interface';
import { FC } from 'react';
import AddComment from './AddComment';
import CommentItem from './CommentItem';
import styles from './Comments.module.scss';

interface ICommentComponent {
	comments: IComment[];
	videoId: number;
}

const Comments: FC<ICommentComponent> = ({ comments, videoId }) => {
	const { user } = useAuth();

	return (
		<div className={styles.comments}>
			<h2>Коментарі</h2>
			<div className={styles.line} />
			{comments.length ? (
				<div className={styles.grid}>
					{comments.map((com) => (
						<CommentItem comment={com} key={com.id} />
					))}
				</div>
			) : (
				<p>Коментарі відсутні</p>
			)}
			<div className={styles.bottomForm}>
				{user && <AddComment videoId={videoId} />}
			</div>
		</div>
	);
};

export default Comments;
