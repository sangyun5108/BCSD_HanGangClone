import React from 'react';
import styled from 'styled-components';

const SmallHeaderWrapper = styled.header`
    height:100px;
    position:relative;
`;

const HanGangImageWrapper = styled.div`
    width:170px;
    height:auto;
    padding:none;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    bottom:20px;
`;

const HanGangImage = styled.img`
    width:100px;
    height:auto;
`;

const MainPageSmallHeader = () => {
    return (
        <>
            <SmallHeaderWrapper>
                <HanGangImageWrapper>
                    <HanGangImage src="https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/logo.svg"/>
                </HanGangImageWrapper>
            </SmallHeaderWrapper>
        </>
    );
}

export default MainPageSmallHeader;