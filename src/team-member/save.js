import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const blockProps = useBlockProps.save( {
		className: 'my-random-classname',
	} );
	return (
		<div { ...blockProps }>
			<RichText.Content tagName="h4" value={ props.attributes.name } />
			<RichText.Content tagName="p" value={ props.attributes.bio } />
		</div>
	);
}
