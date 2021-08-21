import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { DesktopComputerIcon, DocumentTextIcon, FlagIcon, HeartIcon, ShieldCheckIcon, VideoCameraIcon } from '@heroicons/react/outline';

import Steps from '../components/Steps';
import logo from '../assets/images/logo.png';

const PrecheckModal = () => {
    const [activeStepIndex, setActiveStepIndex] = useState(0);    
    
    const handleStepIndexChange = index => setActiveStepIndex(index);
    
    const steps = [
        {
            Icon: DesktopComputerIcon,
            name: 'Browser Check',
        },
        {
            Icon: DocumentTextIcon,
            name: 'Privacy Policy'
        },
        {
            Icon: HeartIcon,
            name: 'System Check'
        },
        {
            Icon: VideoCameraIcon,
            name: 'Equipment Check'
        },
        {
            Icon: ShieldCheckIcon,
            name: 'Verification'
        },
        {
            Icon: FlagIcon,
            name: 'Start Test'
        }
    ];
    return (
        <Modal className="w-300 h-156 bg-white rounded-2xl flex flex-row overflow-hidden">
            <Sidebar className="flex flex-col flex-1 justify-center items-start bg-primary-500 h-max px-12">
                <div>
                    <Logo src={logo} className="w-max" />
                </div>
                <Steps steps={steps} activeStepIndex={activeStepIndex} onStepIndexChange={handleStepIndexChange} />
            </Sidebar>
            <Content className="flex flex-col flex-2 h-max" />
        </Modal>
    )
};

PrecheckModal.propTypes = {

};

PrecheckModal.defaultProps = {

};

export default PrecheckModal;

const Modal = styled.div``;
const Sidebar = styled.section``;
const Content = styled.section``;
const Logo = styled.img``