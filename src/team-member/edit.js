import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __(
				'team-memberbers – hello from the editor! YES!',
				'boilerplate'
			) }
		</p>
	);
}
