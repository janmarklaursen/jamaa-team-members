import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( props ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<RichText
				tagName="h4" // The tag here is the element output and editable in the admin
				value={ props.attributes.name } // Any existing content, either from the database or an attribute default
				allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
				onChange={ ( name ) => props.setAttributes( { name } ) } // Store updated content as a block attribute
				placeholder={ __( 'Memeber Name' ) } // Display this text before any content has been added by the user
			/>
			<RichText
				tagName="p" // The tag here is the element output and editable in the admin
				value={ props.attributes.bio } // Any existing content, either from the database or an attribute default
				allowedFormats={ [] } // Allow the content to be made bold or italic, but do not allow other formatting options
				onChange={ ( bio ) => props.setAttributes( { bio } ) } // Store updated content as a block attribute
				placeholder={ __( 'Member Bio' ) } // Display this text before any content has been added by the user
			/>
		</div>
	);
}
