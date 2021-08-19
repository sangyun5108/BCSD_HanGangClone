import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    height:100px;
    position:relative;
`;

const LogoWrapper = styled.div`
    width:170px;
    height:auto;
    padding:none;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    bottom:20px;
`;

const Logo = styled.img`
    width:100px;
    height:auto;
`;

const SmallHeader = () => {
    return (
        <>
            <Header>
                <LogoWrapper>
                    <Logo src="https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/logo.svg"/>
                </LogoWrapper>
            </Header>
        </>
    );
}

export default SmallHeader;