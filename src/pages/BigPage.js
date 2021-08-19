import React from 'react';
import LectureRanking from '../components/shared/LectureRanking';
import styled from 'styled-components';
import Department from '../components/shared/Department';
import TimeTable from '../components/shared/TimeTable';
import LectureMaterial from '../components/shared/LectureMaterial';
import RecentLecture from '../components/shared/RecentLectures';
import BigFooter from '../components/bigpage/BigFooter';
import MIN_WIDTH from '../static/minwidth';

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

    @media(${MIN_WIDTH}){
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
                <Department/>
                <MainSections>
                    <LectureRanking/>
                    <ExceptLectureRanking>
                        <LectureMaterial/>
                        <TimeTableRecentLecture>
                            <TimeTable/>
                            <RecentLecture/>
                        </TimeTableRecentLecture>
                    </ExceptLectureRanking>
                </MainSections>
                <BigFooter/>
            </MainPage>
        </>
    );
}

export default MainBigPage;