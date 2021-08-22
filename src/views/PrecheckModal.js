import { useState } from 'react';
import styled from 'styled-components';

import Steps from '../components/Steps';
import logo from '../assets/images/logo.png';
import STEPS from '../constants/steps';
import Camera from '../components/Camera';
import Dropdown from '../components/Dropdown';
import CAMERAS from '../constants/cameras';

const PrecheckModal = () => {
    const [activeStepIndex, setActiveStepIndex] = useState(3);
    const handleStepIndexChange = index => setActiveStepIndex(index);
    const [selectedCamera, setSelectedCamera] = useState(CAMERAS[0]);

    const handleSelect = (camera) => setSelectedCamera(camera);

    return (
        <Modal className="w-300 h-156 bg-white rounded-2xl flex flex-row overflow-hidden">
            <Sidebar className="flex flex-col flex-1 justify-center items-start bg-primary-500 h-max px-12">
                <div>
                    <Logo src={logo} className="w-max" />
                </div>
                <Steps steps={STEPS} activeStepIndex={activeStepIndex} onStepIndexChange={handleStepIndexChange} />
            </Sidebar>
            <Content className="flex flex-col flex-2 h-max justify-center items-center">
                <Container className="flex flex-col w-camera">
                    <Camera />
                    <CameraSelection className="flex flex-col">
                        <Text className="justify-start font-bold text-sm mb-2">Camera</Text>
                        <Dropdown items={CAMERAS} fluid onSelect={handleSelect} selectedItem={selectedCamera} />
                        <Link className="link text-xs mt-2 text-right" href="https://google.com" target="_blank">Couldn't see myself!</Link>
                    </CameraSelection>
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
const CameraDropdown = styled.div``;
const Container = styled.div``;
const Link = styled.a``;