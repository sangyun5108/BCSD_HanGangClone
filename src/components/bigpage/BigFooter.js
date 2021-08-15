import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    background-color:rgb(62, 62, 62);
    margin-top:70px;
    display:flex;
    justify-content:center;
`;

const Inner = styled.div`
    width:1135px;
    height:203px;
    display:flex;
    justify-content:space-between;
`;

const InnerLeft= styled.div`
    width:90px;
    height:203px;
    display:flex;
    align-items:center;
`;

const InnerLeftImage = styled.img`
    width:90px;
`;

const InnerMiddle  = styled.div`
    width:668px;
    height:203px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const FirstLineContents = styled.div`
    display:flex;
    width:291px;
    height:20px;
    justify-content:space-between;
    margin:0px auto 42.5px auto;
    color:#FFFFFF
`;
const FirstLineContent = styled.div`
`;

const SecondLineButtons = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:19.5px;
`;

const SecondLineButton = styled.button`
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

const ThirdLineContent = styled.div`
    color:rgb(181, 181, 181);
    font-size:12px;
    text-align:center;
`;

const InnerRightIcons = styled.div`
    width:90px;
    height:203px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const IconsWrapper = styled.div`    
    width:72px;
    height:33px;
`;

const FacebookIcon = styled.img`
    width:15px;
    height:31px;
    margin-right:30px;
`;

const HomeIcon = styled.img`
    width:27px;
    height:31px;
`;

const BigFooter = () => {
    return (
        <>
            <Footer>
                <Inner>
                    <InnerLeft>
                        <InnerLeftImage src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/footer_hangang_logo.png'/>
                    </InnerLeft>
                    <InnerMiddle>
                        <FirstLineContents>
                            <FirstLineContent>강의평</FirstLineContent>
                            <FirstLineContent>강의자료</FirstLineContent>
                            <FirstLineContent>시간표</FirstLineContent>
                        </FirstLineContents>
                        <SecondLineButtons>
                            <SecondLineButton>
                                <LinkToBcsd href='https://bcsdlab.com/' target='_blank'>BCSD Lab 바로가기</LinkToBcsd>
                            </SecondLineButton>
                            <SecondLineButton>
                                <LinkToKoreaTech href='https://www.koreatech.ac.kr/kor/Main.do' target='_blank'>코리아텍 바로가기</LinkToKoreaTech>
                            </SecondLineButton>
                            <SecondLineButton>
                                <LinkToAwonuri href='https://portal.koreatech.ac.kr/login.jsp'  target='_blank'>아우누리 바로가기</LinkToAwonuri>
                            </SecondLineButton>
                            <SecondLineButton>개인정보 처리방침</SecondLineButton>
                        </SecondLineButtons>
                        <ThirdLineContent>COPYRIGHT © 2021 BCSD LAB ALL RIGHTS RESERVED.</ThirdLineContent>
                    </InnerMiddle>
                    <InnerRightIcons>
                        <IconsWrapper>
                            <LinkToFaceBook href='https://www.facebook.com/BCSD-Lab-1727922507422214/' target='_blank'>
                                <FacebookIcon src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/facebook_icon.png' alt='페이스북 아이콘'/>
                            </LinkToFaceBook>
                            <LinkToHome href='/'>
                                <HomeIcon src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/home_icon.png' alt='홈 아이콘'/>
                            </LinkToHome>
                        </IconsWrapper>
                    </InnerRightIcons>
                </Inner>
            </Footer>
        </>
    );
}

export default BigFooter;