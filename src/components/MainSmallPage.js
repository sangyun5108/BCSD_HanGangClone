import React from 'react';
import MainPageSmallHeader from './MainPageSmallHeader';
import MainPageLectureRanking from './MainPageLectureRanking';
import MainPageDepartmentList from './MainPageDepartmentList';

const MainSmallPage = () => {
    return (
        <>
            <MainPageSmallHeader/>
            <MainPageLectureRanking/>
            <MainPageDepartmentList/>
        </>
    )
}

export default MainSmallPage;