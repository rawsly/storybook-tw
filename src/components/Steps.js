import PropTypes from 'prop-types';
import styled from 'styled-components';
import Step from './Step';

const Steps = ({ steps, activeStepIndex }) => {
    const getStatus = (stepIndex) => {
        if (stepIndex === activeStepIndex) {
            return "Checking...";
        }

        if (stepIndex > activeStepIndex) {
            return "Not Started...";
        }

        return "Passed";
    }
    return (
        <StepContainer className="flex flex-col justify-start mt-18">
            {steps.map((step, index) => (
                <Step step={step} active={index === activeStepIndex} status={getStatus(index)} />
            ))}
        </StepContainer>

    )
};

Steps.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({
        Icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    activeStepIndex: PropTypes.number.isRequired
};


export default Steps;

const StepContainer = styled.div``
