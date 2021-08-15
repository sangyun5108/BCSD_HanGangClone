import React from 'react';
import styled from 'styled-components';
import LectureRanking from '../components/LectureRanking';
import Department from '../components/Department';
import TimeTable from '../components/TimeTable';
import LectureMaterial from '../components/LectureMaterial';
import RecentLecture from '../components/RecentLectures';
import SmallFooter from '../components/smallpage/SmallFooter';

const FooterWrapper = styled.footer`
    width:100%;
    position:fixed;
    bottom:0;
`;

const MainSmallPage = () => {
    return (
        <> 
            <LectureRanking/>
            <Department/>
            <TimeTable/>
            <LectureMaterial/>
            <RecentLecture/>
            <FooterWrapper>
                <SmallFooter/>
            </FooterWrapper>
        </>
    )
}

export default MainSmallPage;