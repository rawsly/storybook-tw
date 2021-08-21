import PropTypes from 'prop-types';
import styled from 'styled-components';

const Step = ({ step }) => {
    const { name, Icon } = step;
    return (
        <StepContainer className="relative flex flex-row mb-8">
            <IconContainer className="flex justify-center items-center mr-4">
                <Icon className="text-primary-300 rounded-full bg-white bg-opacity-50 p-2" />
            </IconContainer>
            <ContentContainer className="flex flex-col">
                <span className="text-sm leading-3 font-normal text-white text-opacity-50">Passed</span>
                <span className="text-base leading-4 font-black text-white text-opacity-50">{name}</span>
            </ContentContainer>
        </StepContainer>
    )
};

Step.propTypes = {
    step: PropTypes.shape({
        Icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Step;

const StepContainer = styled.div`
    &:not(:last-of-type):after {
        display: block;
        content: '';
        width: 1px;
        height: 1.5rem;
        background-color: #fff;
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