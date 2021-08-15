import React from 'react';
import MainPageLectureRanking from '../components/MainPageLectureRanking';
import styled from 'styled-components';
import MainPageDepartmentList from '../components/MainPageDepartmentList';
import MainPageTimeTable from '../components/MainPageTimeTable';
import MainPageLectureMaterial from '../components/MainPageLectureMaterial';
import MainPageRecentLecture from '../components/MainPageRecentLectures';
import MainBigPageFooter from '../components/bigpage/Footer';

const MainPage = styled.main`
`;

const Banner = styled.section`
    width:1150px;
    height:320px;
    display:flex;
    padding-top:35px;
    justify-content:space-between;
    align-items:flex-end;
    margin: 0px auto;
`;
const BannerImage = styled.img`
`;
const BannerContent = styled.div`
    height:85px;
    margin-bottom:20px;
`;

const BannerContentQuestion = styled.h1`
    margin-bottom:10px;
    font-size:18px;
`;
const BannerContentAnswer = styled.h1`
    font-size:36px;
    font-weight:600;
`;

const MainSections = styled.section`
    width:1150px;
    margin:0px auto;
    display:flex;
    justify-content:center;

    @media(min-width:575px){
        margin-top:10px;
    }
`;

const ExceptLectureRanking = styled.section`
    width:650px;
    height:690px;
    display:flex;
    flex-direction:column;
`;

const TimeTableRecentLecture = styled.section`
    display:flex;
`;

const MainBigPage = () => {
    return(
        <>
            <MainPage>
                <Banner>
                    <BannerContent>
                        <BannerContentQuestion>솔직한 강의평을 원한다면?</BannerContentQuestion>
                        <BannerContentAnswer>가자, 한강으로!</BannerContentAnswer>
                    </BannerContent>
                    <BannerImage src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/represent.svg'/>
                </Banner>
                <MainPageDepartmentList/>
                <MainSections>
                    <MainPageLectureRanking/>
                    <ExceptLectureRanking>
                        <MainPageLectureMaterial/>
                        <TimeTableRecentLecture>
                            <MainPageTimeTable/>
                            <MainPageRecentLecture/>
                        </TimeTableRecentLecture>
                    </ExceptLectureRanking>
                </MainSections>
                <MainBigPageFooter/>
            </MainPage>
        </>
    );
}

export default MainBigPage;