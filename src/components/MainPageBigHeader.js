import React from 'react';
import styled from 'styled-components';

const BigHeaderHeaderWrapper = styled.header`
    border-bottom:1px solid lightgrey;
`;

const BigHeaderWrapper = styled.div`
    height:80px;
    width:1150px;;
    display:flex;
    justify-content:space-between;
    margin:0 265px;
`;

const BigHeaderLeftContents = styled.nav`
    width:550px;
    height:80px;
    display:flex;
`;

const BigHeaderRightContents = styled.nav`
    display:flex;
    width:200px;
`;

const BigHeaderLeftContentImageWrapper = styled.div`
    width:80px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:40px;
`;

const HanGangImg = styled.img`
`;

const HomeButtonWrapper = styled(BigHeaderLeftContentImageWrapper)`
    border-bottom:1px solid #238bfe
`;

const HomeButton = styled.a`
    width:100%;
    text-align:center;
    text-decoration:none;
    font-size:17px;
    color:#238bfe;
`;

const LectureReviewWrapper = styled(BigHeaderLeftContentImageWrapper)`
`;
const LectureReview = styled(HomeButton)`
`;
const LectureMaterialWrapper = styled(BigHeaderLeftContentImageWrapper)`
`;
const LectureMaterial = styled(HomeButton)`
`;
const TimeTableWrapper = styled(BigHeaderLeftContentImageWrapper)`
`;
const TimeTable = styled(HomeButton)`
`;
const LoginWrapper = styled(BigHeaderLeftContentImageWrapper)`
    margin:0px 0px 0px 30px;
`;
const Login = styled(HomeButton)`
`;
const SignUpWrapper = styled(BigHeaderLeftContentImageWrapper)`
    margin:0px 0px 0px 30px;
`;
const SignUp = styled(HomeButton)`
`;
const MainPageBigHeader = () => {
    return(
        <>
            <BigHeaderHeaderWrapper>
                <BigHeaderWrapper>
                    <BigHeaderLeftContents>
                        <BigHeaderLeftContentImageWrapper>
                            <HanGangImg src="https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/logo.svg"></HanGangImg>
                        </BigHeaderLeftContentImageWrapper>
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
            </BigHeaderHeaderWrapper>
        </>
    );
}

export default MainPageBigHeader;