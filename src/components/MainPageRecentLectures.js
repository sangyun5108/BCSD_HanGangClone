import React from 'react';
import styled from 'styled-components';

const MainPageRecentLectureSectionWrapper = styled.section`
    width:500px;
    height:224px;
    margin:0 35px;
    @media(min-width:575px){
        width:250px;
        margin: 0px 0px 0px 0px;
        height:320px;
    }
`;

const MainPageRecentLectureTitleWrapper = styled.div`
    margin-bottom:5px;
    font-weight:700;
`;

const MainPageRecentLectureWrapper = styled.div`
    border:2px solid lightgrey;
    border-radius:15px;
    width:500px;
    height:200px;
    margin:0px 35;
    display:flex;
    justify-content:center;
    align-items:center;
    color:grey;

    @media(min-width:575px){
        width:250px;
        height:300px;
    }
`

const MainPageRecentLectureContentWrapper = styled.div`

`;

const MainPageRecentLecture = () => {
    return(
        <>
            <MainPageRecentLectureSectionWrapper>
                <MainPageRecentLectureTitleWrapper>최근 본 강의</MainPageRecentLectureTitleWrapper>
                <MainPageRecentLectureWrapper>
                    <MainPageRecentLectureContentWrapper>최근에 본 강의평이 없습니다.</MainPageRecentLectureContentWrapper>
                </MainPageRecentLectureWrapper>
            </MainPageRecentLectureSectionWrapper>
        </>
    )
}

export default MainPageRecentLecture;