import React from 'react';
import styled from 'styled-components';

const MainPageLectureMaterialSectionWrapper = styled.section`
    width:500px;
    margin: 20px 35px;

    @media(min-width:575px){
        margin: 0px 0px 20px 35px;
        width:645px;
    }
`;

const MainPageLectureMaterialTitleWrapper = styled.div`
    font-size:16px;
    font-weight:600;
    margin-bottom:5px;
`

const MainPageLectureMaterialWrapper = styled.div`
    width:500px;
    height:300px;
    border:2px solid lightgrey;
    border-radius:15px;
    display:flex;
    justify-content:center;
    align-items:center;

    @media(min-width:575px){
        width:645px;
    }
`;

const MainPageLectureMaterialContextWrapper = styled.div`
    width:380px;
    color:grey;
`;

const MainPageLectureMaterial = () => {

    return(
        <>
            <MainPageLectureMaterialSectionWrapper>
                <MainPageLectureMaterialTitleWrapper>강의 자료</MainPageLectureMaterialTitleWrapper>
                <MainPageLectureMaterialWrapper>
                    <MainPageLectureMaterialContextWrapper>시간표를 작성하지 않았거나 업로드된 강의자료가 없습니다.</MainPageLectureMaterialContextWrapper>
                </MainPageLectureMaterialWrapper>
            </MainPageLectureMaterialSectionWrapper>
        </>
    );
}

export default MainPageLectureMaterial;