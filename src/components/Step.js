import PropTypes from 'prop-types';
import styled from 'styled-components';

const Step = ({ step, active, status }) => {
    const { name, Icon } = step;
    return (
        <StepContainer className="relative flex flex-row mb-8" active={active}>
            <IconContainer className="flex justify-center items-center mr-4">
                <Icon className={`text-primary-300 rounded-full bg-white p-2 ${active ? "bg-opacity-100" : "bg-opacity-50"}`} />
            </IconContainer>
            <ContentContainer className="flex flex-col justify-center">
                <Text className={`text-sm leading-4 font-normal text-white ${active ? "text-opacity-100" : "text-opacity-50"}`}>{status}</Text>
                <Text className={`text-base leading-5 font-black text-white ${active ? "text-opacity-100" : "text-opacity-50"}`}>{name}</Text>
            </ContentContainer>
        </StepContainer>
    )
};

Step.propTypes = {
    step: PropTypes.shape({
        Icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    active: PropTypes.bool,
    status: PropTypes.oneOf(["Passed", "Checking...", "Not Started..."]).isRequired,
};

Step.defaultProps = {
    active: false,
}

export default Step;

const StepContainer = styled.div`
    &:not(:last-of-type):after {
        display: block;
        content: '';
        width: 1px;
        height: 1.5rem;
        background-color: #fff;
        opacity: 0.5;
        position: absolute;
        top: 2.5rem;
        left: 1rem;
    }
`;

const IconContainer = styled.div`
    width: 32px;
    height: 36px;
`;

const ContentContainer = styled.div`
    height: 36px;
`;

const Text = styled.span``;