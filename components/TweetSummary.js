import {FormField} from '@sanity/base/components';
import {TextArea, Button, Stack, Text, Card, useToast} from '@sanity/ui';
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent';
import {useId} from '@reach/auto-id';
import {LaunchIcon} from '@sanity/icons';

const TweetSummary = React.forwardRef((props, ref) => {
	const {type, value, readOnly, placeholder, markers, presence, compareValue, onFocus, onBlur, onChange} = props;

	const inputId = useId();
	// For the toast notification
	const toast = useToast();

	//checks the max length of the validation rule
	const MaxValue = type.validation[0]._rules.filter((rule) => rule.flag == 'max')[0].constraint;

	const handleChange = React.useCallback(
		(event) => {
			const inputValue = event.currentTarget.value;
			onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
		},
		[onChange]
	);

	//take value of input and put it in a new twitter tweet when button clicked.
	const handleClick = (event) => {
		const summary = props.value;
		if (summary === undefined || summary === '') {
			toast.push({
				status: 'Warning',
				title: 'Must contain a summary for the Tweet!',
			});
			return;
		} else {
			const twitterUrl = `https://twitter.com/intent/tweet?text=${summary}`;
			window.open(twitterUrl, '_blank');
		}
	};

	return (
		<Stack space={1}>
			<FormField
				description={type.description}
				title={type.title}
				__unstable_markers={markers}
				__unstable_presence={presence}
				compareValue={compareValue}
				inputId={inputId}></FormField>
		</Stack>
	);
});

export default TweetSummary;
