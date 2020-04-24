/**
 * Newsletter Modal
 */

/**
 * WordPress dependencies
 */
import { Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import TemplatePicker from './screens/template-picker';
import APIKeys from './screens/api-keys';
import './style.scss';

export default ( { hasKeys, onInsertTemplate, onSetupStatus, templates } ) => {
	return (
		<Modal
			className="newspack-newsletters-modal__frame"
			isDismissible={ false }
			overlayClassName="newspack-newsletters-modal__screen-overlay"
			shouldCloseOnClickOutside={ false }
			shouldCloseOnEsc={ false }
			title={
				hasKeys
					? __( 'Select a layout for your newsletter', 'newspack-newsletters' )
					: __( 'Configure the newsletters', 'newspack-newsletters' )
			}
		>
			{ hasKeys ? (
				<TemplatePicker templates={ templates } onInsertTemplate={ onInsertTemplate } />
			) : (
				<APIKeys onSetupStatus={ onSetupStatus } />
			) }
		</Modal>
	);
};
