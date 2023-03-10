import PropTypes from 'prop-types';
import { Box } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) =>{
    return(
        <Box>
            <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
            </div>
            <div>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
            </div>
        </Box>
    )
} 

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}