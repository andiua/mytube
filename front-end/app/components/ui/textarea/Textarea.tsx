import { FC, forwardRef } from 'react';
import styles from './Field.module.scss';
import { ITextarea } from './textarea.interface';

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
	({ error, style, ...rest }, ref) => {
		return (
			<div className={styles.editor} style={style}>
				<textarea ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

Textarea.displayName = 'Textarea';

export default Textarea;
