import { IComment, ICommentDto } from '@/types/comments.interface';
import { api } from './api';

export const commentApi = api.injectEndpoints({
	endpoints: (builder) => ({
		createComment: builder.mutation<IComment, ICommentDto>({
			query: (body) => ({
				url: `comment`,
				method: 'POST',
				body
			}),
			invalidatesTags: (result, error, {videoId}) => [{ type: 'Video', id: videoId }]
		})
	})
});

export const {useCreateCommentMutation} = commentApi