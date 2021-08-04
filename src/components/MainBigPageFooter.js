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
    display:flex;
    justify-content:space-between;
`;

const MainBigPageFooterInnerLeftImageWrapper = styled.div`
    width:90px;
    height:203px;
    display:flex;
    align-items:center;
`;

const MainBigPageFooterInnerLeftImage = styled.img`
    width:90px;
`;

const MainBigPageFooterInnerMiddle  = styled.div`
    width:668px;
    height:203px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const MainBigPageFooterInnerMiddleFirstContents = styled.div`
    display:flex;
    width:291px;
    height:20px;
    justify-content:space-between;
    margin:0px auto 42.5px auto;
    color:#FFFFFF
`;
const MainBigPageFooterInnerMiddleFirstContent = styled.div`
`;

const MainBigPageFooterInnerMiddleSecondContents = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:19.5px;
`;

const MainBigPageFooterInnerMiddleSecondButton = styled.button`
    border:1px solid rgb(181, 181, 181);
    border-radius:15px;
    font-size:15px;
    width:145px;
    height:29px;
    background:none;
    cursor:pointer;
    color:rgb(181, 181, 181);
`;


const LinkToBcsd = styled.a`
    color:rgb(181, 181, 181);
    text-decoration:none;
`;

const LinkToKoreaTech = styled(LinkToBcsd)`
`;

const LinkToAwonuri = styled(LinkToBcsd)`
`;

const LinkToFaceBook = styled.a`
`;

const LinkToHome = styled.a`
`;

const MainBigPageFooterInnerMiddleThirdContent = styled.div`
    color:rgb(181, 181, 181);
    font-size:12px;
    text-align:center;
`;

const MainBigPageFooterInnerRightImages = styled.div`
    width:90px;
    height:203px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const MainBigPageFooterInnerRightImagesWrppaer = styled.div`    
    width:72px;
    height:33px;
`;

const MainBigPageFooterInnerRightFacebookImage = styled.img`
    width:15px;
    height:31px;
    margin-right:30px;
`;

const MainBigPageFooterInnerRightHomeImage = styled.img`
    width:27px;
    height:31px;
`;

const MainBigPageFooter = () => {
    return (
        <>
            <MainBigPageFooterWrapper>
                <MainBigPageFooterInnerWrapper>
                    <MainBigPageFooterInnerLeftImageWrapper>
                        <MainBigPageFooterInnerLeftImage src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/footer_hangang_logo.png'></MainBigPageFooterInnerLeftImage>
                    </MainBigPageFooterInnerLeftImageWrapper>
                    <MainBigPageFooterInnerMiddle>
                        <MainBigPageFooterInnerMiddleFirstContents>
                            <MainBigPageFooterInnerMiddleFirstContent>강의평</MainBigPageFooterInnerMiddleFirstContent>
                            <MainBigPageFooterInnerMiddleFirstContent>강의자료</MainBigPageFooterInnerMiddleFirstContent>
                            <MainBigPageFooterInnerMiddleFirstContent>시간표</MainBigPageFooterInnerMiddleFirstContent>
                        </MainBigPageFooterInnerMiddleFirstContents>
                        <MainBigPageFooterInnerMiddleSecondContents>
                            <MainBigPageFooterInnerMiddleSecondButton>
                                <LinkToBcsd href='https://bcsdlab.com/' target='_blank'>BCSD Lab 바로가기</LinkToBcsd>
                            </MainBigPageFooterInnerMiddleSecondButton>
                            <MainBigPageFooterInnerMiddleSecondButton>
                                <LinkToKoreaTech href='https://www.koreatech.ac.kr/kor/Main.do' target='_blank'>코리아텍 바로가기</LinkToKoreaTech>
                            </MainBigPageFooterInnerMiddleSecondButton>
                            <MainBigPageFooterInnerMiddleSecondButton>
                                <LinkToAwonuri href='https://portal.koreatech.ac.kr/login.jsp'  target='_blank'>아우누리 바로가기</LinkToAwonuri>
                            </MainBigPageFooterInnerMiddleSecondButton>
                            <MainBigPageFooterInnerMiddleSecondButton>개인정보 처리방침</MainBigPageFooterInnerMiddleSecondButton>
                        </MainBigPageFooterInnerMiddleSecondContents>
                        <MainBigPageFooterInnerMiddleThirdContent>COPYRIGHT © 2021 BCSD LAB ALL RIGHTS RESERVED.</MainBigPageFooterInnerMiddleThirdContent>
                    </MainBigPageFooterInnerMiddle>
                    <MainBigPageFooterInnerRightImages>
                        <MainBigPageFooterInnerRightImagesWrppaer>
                            <LinkToFaceBook href='https://www.facebook.com/BCSD-Lab-1727922507422214/' target='_blank'>
                                <MainBigPageFooterInnerRightFacebookImage src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/facebook_icon.png' alt='페이스북 아이콘'></MainBigPageFooterInnerRightFacebookImage>
                            </LinkToFaceBook>
                            <LinkToHome href='/'>
                                <MainBigPageFooterInnerRightHomeImage src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/home_icon.png' alt='홈 아이콘'></MainBigPageFooterInnerRightHomeImage>
                            </LinkToHome>
                        </MainBigPageFooterInnerRightImagesWrppaer>
                    </MainBigPageFooterInnerRightImages>
                </MainBigPageFooterInnerWrapper>
            </MainBigPageFooterWrapper>
        </>
    );
}

export default MainBigPageFooter;