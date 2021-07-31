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

const WifiBatteryTimeOuterWrapper = styled.div`
    width:200px;
    height:50px;
    position:absolute;
    right:0px;
`;

const WifiBatteryTimeInnerWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    margin:5px 10px 0px 0px;
`

const WifiWrapper = styled.div`
    margin-left:7px;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const WifiImage = styled.i`
    font-size:20px;
`;
const BatteryWrapper = styled(WifiWrapper)`
`;
const BatteryImage = styled(WifiImage)`
`;
const TimeWrapeer = styled(WifiWrapper)`
    font-size:20px;
    font-weight:bold;
`;
const Time = styled.div`
`;

const MainPageSmallHeader = () => {
    return (
        <>
            <SmallHeaderWrapper>
                <HanGangImageWrapper>
                    <HanGangImage src="https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/logo.svg"></HanGangImage>
                </HanGangImageWrapper>
                <WifiBatteryTimeOuterWrapper>
                    <WifiBatteryTimeInnerWrapper>
                        <WifiWrapper>
                            <WifiImage className="fas fa-wifi"></WifiImage>
                        </WifiWrapper>
                        <BatteryWrapper>
                            <BatteryImage className="fas fa-battery-full"></BatteryImage>
                        </BatteryWrapper>
                        <TimeWrapeer>
                            <Time>12:30</Time>
                        </TimeWrapeer>
                    </WifiBatteryTimeInnerWrapper>
                </WifiBatteryTimeOuterWrapper>
            </SmallHeaderWrapper>
        </>
    );
}

export default MainPageSmallHeader;