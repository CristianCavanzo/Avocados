import React from 'react';
import styled from 'styled-components';

const Container = styled.figure`
    width: ${(props) => props.dimensions || '32px'};
    height: ${(props) => props.dimensions || '32px'};
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Icons = (props) => {
    return (
        <Container {...props}>
            <Img src={props.imgProp} alt={props.altProp || 'Icon'} />
        </Container>
    );
};

export default Icons;
