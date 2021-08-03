import React from 'react';
import MainPageLectureRanking from './MainPageLectureRanking';
import styled from 'styled-components';
import MainPageDepartmentList from './MainPageDepartmentList';
import MainPageTimeTable from './MainPageTimeTable';
import MainPageLectureMaterial from './MainPageLectureMaterial';
import MainPageRecentLecture from './MainPageRecentLectures';

const MainBigPageWrapper = styled.main`
`;

const MainBigPageBannerWrapper = styled.section`
    width:1150px;
    height:320px;
    display:flex;
    padding-top:35px;
    justify-content:space-between;
    align-items:flex-end;
    margin: 0px auto;
`;
const MainBigPageBannerImage = styled.img`
`;
const MainBigPageBannerContext = styled.div`
    height:75px;
    margin-bottom:10px;
`;

const MainBigPageBannerContextQuestion = styled.h1`
    margin-bottom:10px;
    font-size:18px;
`;
const MainBigPageBannerContextAnswer = styled.h1`
    font-size:36px;
    font-weight:600;
`;

const MainBigPageSectionsWrapper = styled.section`
    width:1150px;
    margin:0 auto;
    display:flex;
    justify-content:center;
`;

const MainBigPageSectionsRightSectionWrapper = styled.section`
    width:650px;
    height:690px;
    display:flex;
    flex-direction:column;
`;

const MainBigPageSectionsRightSectionBottomWrapper = styled.section`
    display:flex;
`;

const MainBigPage = () => {
    return(
        <>
            <MainBigPageWrapper>
                <MainBigPageBannerWrapper>
                    <MainBigPageBannerContext>
                        <MainBigPageBannerContextQuestion>솔직한 강의평을 원한다면?</MainBigPageBannerContextQuestion>
                        <MainBigPageBannerContextAnswer>가자, 한강으로!</MainBigPageBannerContextAnswer>
                    </MainBigPageBannerContext>
                    <MainBigPageBannerImage src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/represent.svg'></MainBigPageBannerImage>
                </MainBigPageBannerWrapper>
                <MainPageDepartmentList/>
                <MainBigPageSectionsWrapper>
                    <MainPageLectureRanking/>
                    <MainBigPageSectionsRightSectionWrapper>
                        <MainPageLectureMaterial/>
                        <MainBigPageSectionsRightSectionBottomWrapper>
                            <MainPageTimeTable/>
                            <MainPageRecentLecture/>
                        </MainBigPageSectionsRightSectionBottomWrapper>
                    </MainBigPageSectionsRightSectionWrapper>
                </MainBigPageSectionsWrapper>
            </MainBigPageWrapper>
        </>
    );
}

export default MainBigPage;