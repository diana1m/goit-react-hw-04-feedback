import PropTypes from 'prop-types';
import { Button, Wrapper } from './FeedbackOptions.styled';
const smile = ["😀", "😐", "😡"]
export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
        <Wrapper>
            {options.map((option, index) => {
                return <Button onClick={()=> onLeaveFeedback(option)} key={index}>{`${option.toUpperCase()} ${smile[index]}`}</Button>
            })}

            {/* <Button onClick={onClickGood}>Good 😀</Button>
            <Button onClick={onClickNeutral}>Neutral 😐</Button>
            <Button onClick={onClickBad}>Bad 😡</Button> */}
        </Wrapper>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
