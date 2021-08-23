import { useState } from 'react';
import styled from 'styled-components';

import { Dropdown, Camera, Button, Steps } from '../components';

import logo from '../assets/images/logo.png';

import STEPS from '../constants/steps';
import CAMERAS from '../constants/cameras';
import { XIcon } from '@heroicons/react/outline';

const PrecheckModal = () => {
    const [showModal, setShowModal] = useState(true);
    const [activeStepIndex, setActiveStepIndex] = useState(3);
    const handleStepIndexChange = index => setActiveStepIndex(index);
    const [selectedCamera, setSelectedCamera] = useState(CAMERAS[0]);

    const handleSelect = (camera) => setSelectedCamera(camera);

    return (
        <Modal className={`w-300 h-156 bg-white rounded-2xl flex flex-row overflow-hidden relative ${showModal ? 'animate-slide-top' : 'animate-slide-bottom'}`}>
            <CloseButton onClick={() => setShowModal(false)} className="p-2 bg-white-soft rounded-full absolute top-8 right-8">
                <XIcon className="w-4 h-4 text-primary" />
            </CloseButton>
            <Sidebar className="flex flex-col flex-1 justify-center items-start bg-primary-500 h-max px-12">
                <div>
                    <Logo src={logo} className="w-max" />
                </div>
                <Steps steps={STEPS} activeStepIndex={activeStepIndex} onStepIndexChange={handleStepIndexChange} />
            </Sidebar>
            <Content className="flex flex-col flex-2 h-max justify-center items-center">
                <Container className="flex flex-col w-camera justify-center items-center flex-grow">
                    <Camera />
                    <CameraSelection className="flex flex-col w-max mb-19">
                        <Text className="justify-start font-bold text-sm mb-2">Camera</Text>
                        <Dropdown items={CAMERAS} fluid onSelect={handleSelect} selectedItem={selectedCamera} />
                        <Link className="link text-xs mt-2 text-right" href="https://google.com" target="_blank">Couldn't see myself!</Link>
                    </CameraSelection>
                    <Button onClick={() => console.log("Test")} type="primary">I can see myself</Button>
                </Container>
            </Content>
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
const Text = styled.p``;
const CameraSelection = styled.div``;
const Container = styled.div``;
const Link = styled.a``;
const CloseButton = styled.button``;