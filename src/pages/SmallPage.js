import React from 'react';
import styled from 'styled-components';
import LectureRanking from '../components/shared/LectureRanking';
import Department from '../components/shared/Department';
import TimeTable from '../components/shared/TimeTable';
import LectureMaterial from '../components/shared/LectureMaterial';
import RecentLecture from '../components/shared/RecentLectures';
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