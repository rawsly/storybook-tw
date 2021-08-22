import { useState } from "react";
import styled from "styled-components";

import cameraBg from '../assets/images/camera-bg.png';
import { Reflect } from "./icons";

const Camera = () => {
  const [flipped, setFlipped] = useState(false);
  const flipImage = () => setFlipped(prevFlipped => !prevFlipped);

  return (
    <div className="relative mb-6">
      <CameraContainer className={`w-camera h-camera rounded-xl bg-primary-500 transform ${flipped ? "scale-x-100" : "scale-x-reverse-100"}`} src={cameraBg} />
      <ReflectContainer className="absolute top-4 right-4 p-2 flex justify-center items-center bg-white bg-opacity-20 cursor-pointer" onClick={flipImage}>
        <Reflect />
      </ReflectContainer>
    </div>
  )

};

export default Camera;

const CameraContainer = styled.img``;
const ReflectContainer = styled.div``;