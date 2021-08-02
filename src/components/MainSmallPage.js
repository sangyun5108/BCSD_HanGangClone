import React from 'react';
import MainPageLectureRanking from './MainPageLectureRanking';
import MainPageDepartmentList from './MainPageDepartmentList';
import MainpageTimeTable from './MainPageTimeTable';
import MainPageLectureMaterial from './MainPageLectureMaterial';
import MainPageRecentLecture from './MainPageRecentLectures';

const MainSmallPage = () => {
    return (
        <>
            <MainPageLectureRanking/>
            <MainPageDepartmentList/>
            <MainpageTimeTable/>
            <MainPageLectureMaterial/>
            <MainPageRecentLecture/>
        </>
    )
}

export default MainSmallPage;