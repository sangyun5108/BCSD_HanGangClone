import React from 'react';
import styled from 'styled-components';

const BigHeaderWrapper = styled.header`
    height:80px;
    width:100%;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid lightgrey;
`;

const BigHeaderLeftContents = styled.nav`
    width:1100px;
    height:80px;
    display:flex;
    margin-left:120px;
`;

const BigHeaderRightContents = styled.nav`
    display:flex;
    width:300px;
`;

const HanGangImgWrapper = styled.div`
    width:80px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:50px;
`;

const HanGangImg = styled.img`
`;

const HomeButtonWrapper = styled(HanGangImgWrapper)`
    border-bottom:1px solid #238bfe
`;

const HomeButton = styled.a`
    width:100%;
    text-align:center;
    text-decoration:none;
    font-size:17px;
    color:#238bfe;
`;

const LectureReviewWrapper = styled(HanGangImgWrapper)`
`;
const LectureReview = styled(HomeButton)`
`;
const LectureMaterialWrapper = styled(HanGangImgWrapper)`
`;
const LectureMaterial = styled(HomeButton)`
`;
const TimeTableWrapper = styled(HanGangImgWrapper)`
`;
const TimeTable = styled(HomeButton)`
`;
const LoginWrapper = styled(HanGangImgWrapper)`
`;
const Login = styled(HomeButton)`
`;
const SignUpWrapper = styled(HanGangImgWrapper)`
`;
const SignUp = styled(HomeButton)`
`;
const NoMeaningWrapper = styled(HanGangImgWrapper)`
    width:350px;
    height:80px;
`;

const MainPageBigHeader = () => {
    return(
        <>
            <BigHeaderWrapper>
                <BigHeaderLeftContents>
                    <HanGangImgWrapper>
                        <HanGangImg src="https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/logo.svg"></HanGangImg>
                    </HanGangImgWrapper>
                    <HomeButtonWrapper>
                        <HomeButton href='http://www.localhost:3000'>홈</HomeButton>
                    </HomeButtonWrapper>
                    <LectureReviewWrapper>
                        <LectureReview href='http://www.localhost:3000'>강의평</LectureReview>
                    </LectureReviewWrapper>
                    <LectureMaterialWrapper>
                        <LectureMaterial href='http://www.localhost:3000'>강의자료</LectureMaterial>
                    </LectureMaterialWrapper>
                    <TimeTableWrapper>
                        <TimeTable href='http://www.localhost:3000'>시간표</TimeTable>
                    </TimeTableWrapper>
                    <NoMeaningWrapper></NoMeaningWrapper>
                </BigHeaderLeftContents>
                <BigHeaderRightContents>
                    <LoginWrapper>
                        <Login href='http://www.localhost:3000'>로그인</Login>
                    </LoginWrapper>
                    <SignUpWrapper>
                            <SignUp href='http://www.localhost:3000'>회원가입</SignUp>
                    </SignUpWrapper>
                </BigHeaderRightContents>
            </BigHeaderWrapper>
        </>
    );
}

export default MainPageBigHeader;