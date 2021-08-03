import React from 'react';
import styled from 'styled-components';

const MainBigPageFooterWrapper = styled.footer`
    background-color:rgb(62, 62, 62);
    margin-top:70px;
    display:flex;
    justify-content:center;
`;

const MainBigPageFooterInnerWrapper = styled.div`
    width:1135px;
    height:203px;
`;

const MainBigPageFooterInnerImageWrapper = styled.div`
    width:90px;
    height:203px;
    display:flex;
    align-items:center;
`;

const MainBigPageFooterInnerImage = styled.img`
    width:90px;
`;

const MainBigPageFooter = () => {
    return (
        <>
            <MainBigPageFooterWrapper>
                <MainBigPageFooterInnerWrapper>
                    <MainBigPageFooterInnerImageWrapper>
                        <MainBigPageFooterInnerImage src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/footer_hangang_logo.png'></MainBigPageFooterInnerImage>
                    </MainBigPageFooterInnerImageWrapper>
                </MainBigPageFooterInnerWrapper>
            </MainBigPageFooterWrapper>
        </>
    );
}

export default MainBigPageFooter;