import styled, { keyframes } from "styled-components";

const loaderContainerAnimation = keyframes`
    100% { transform: rotate(360deg); }
`;

const loaderDotAnimation = keyframes`
    80%, 100% { transform: rotate(360deg); }
`;

const loaderDotAnimationBefore = keyframes`
    50% {
        transform: scale(0.4); 
    } 100%, 0% {
        transform: scale(1.0); 
    } 
`;

const LoaderContainer = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    animation-name: ${loaderContainerAnimation};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: both;
    margin: 200px auto;

`;

const LoaderDot = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0; 
    animation-name: ${loaderDotAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;

    &:before {
        content: '';
        display: block;
        width: 25%;
        height: 25%;
        background-color: #fff;
        border-radius: 100%;
        animation-name: ${loaderDotAnimationBefore};
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-fill-mode: both;
    }

    &:nth-child(1) { animation-delay: -1.1s; }
    &:nth-child(2) { animation-delay: -1.0s; }
    &:nth-child(3) { animation-delay: -0.9s; }
    &:nth-child(4) { animation-delay: -0.8s; }
    &:nth-child(5) { animation-delay: -0.7s; }
    &:nth-child(6) { animation-delay: -0.6s; }
    &:nth-child(1):before { animation-delay: -1.1s; }
    &:nth-child(2):before { animation-delay: -1.0s; }
    &:nth-child(3):before { animation-delay: -0.9s; }
    &:nth-child(4):before { animation-delay: -0.8s; }
    &:nth-child(5):before { animation-delay: -0.7s; }
    &:nth-child(6):before { animation-delay: -0.6s; }
`;

export {
    LoaderContainer,
    LoaderDot
}