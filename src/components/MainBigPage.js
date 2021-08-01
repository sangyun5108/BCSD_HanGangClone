import React from 'react';
import MainPageBigHeader from './MainPageBigHeader';
import MainPageLectureRanking from './MainPageLectureRanking';
import styled from 'styled-components';
import MainPageDepartmentList from './MainPageDepartmentList';

const GoHangangImgAndContextWrapper = styled.div`
    width:1150px;
    height:320px;
    display:flex;
    padding-top:35px;
    justify-content:space-between;
    margin:0px 145px 0px 145px;
`;
const GoHangangImg = styled.img`
`;
const GoHangangContext = styled.div`
    height:75px;
    padding-top:200px;
`;
const GoHangangContextQuestion = styled.div`
    margin-bottom:10px;
    font-size:18px;
`;
const GoHangangContextAnswer = styled.div`
    font-size:40px;
    font-weight:600;
`;

const MainBigPage = () => {
    return(
        <>
            <MainPageBigHeader/>
            <GoHangangImgAndContextWrapper>
                <GoHangangContext>
                    <GoHangangContextQuestion>솔직한 강의평을 원한다면?</GoHangangContextQuestion>
                    <GoHangangContextAnswer>가자, 한강으로!</GoHangangContextAnswer>
                </GoHangangContext>
                <GoHangangImg src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/represent.svg'></GoHangangImg>
            </GoHangangImgAndContextWrapper>
            <MainPageDepartmentList/>
            <MainPageLectureRanking/>
        </>
    );
}

export default MainBigPage;