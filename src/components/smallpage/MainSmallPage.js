import React from 'react';
import styled from 'styled-components';
import MainPageLectureRanking from '../MainPageLectureRanking';
import MainPageDepartmentList from '../MainPageDepartmentList';
import MainpageTimeTable from '../MainPageTimeTable';
import MainPageLectureMaterial from '../MainPageLectureMaterial';
import MainPageRecentLecture from '../MainPageRecentLectures';
import MainSmallPageFooter from './MainSmallPageFooter';

const MainSmallPageFooterWrapper = styled.footer`
    width:100%;
    position:fixed;
    bottom:0;
`;

const MainSmallPage = () => {
    return (
        <> 
            <MainPageLectureRanking/>
            <MainPageDepartmentList/>
            <MainpageTimeTable/>
            <MainPageLectureMaterial/>
            <MainPageRecentLecture/>
            <MainSmallPageFooterWrapper>
                <MainSmallPageFooter/>
            </MainSmallPageFooterWrapper>
        </>
    )
}

export default MainSmallPage;