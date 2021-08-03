import React from 'react'
import styled from 'styled-components';

const TimeTableSectionWrapper = styled.section`
    width:500px;
    margin: 0 auto;
    margin-top:10px;

    @media(min-width:575px){
        width:370px;
    }
`;
const TimeTableTitleWrapper = styled.h1`
    width:60px;
    font-size:16px;
    font-weight:700;
    margin-bottom:10px;
    @media(min-width:575px){
        margin-bottom:5px;
    }
`;
const TimeTableWrapper = styled.div`
    width:500px;
    height:300px;
    border:2px solid lightgrey;
    border-radius:15px;
    display:flex;
    justify-content:center;
    align-items:center;
    
    @media(min-width:575px){
        width:360px;
    }
`;
const TimeTableContextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:200px;
    color:grey;
`;
const TimeTableMainContext = styled.div`
`;
const TimeTableContextButton = styled.button`
    width:120px;
    height:30px;
    margin-top:5px;
    border-radius:15px;
    border:none;
    cursor:pointer;
`;


const MainPageTimeTable = () => {
    return(
        <>
            <TimeTableSectionWrapper>
                <TimeTableTitleWrapper>내 시간표</TimeTableTitleWrapper>
                <TimeTableWrapper>
                    <TimeTableContextWrapper>
                        <TimeTableMainContext>아직 작성한 시간표가 없습니다.</TimeTableMainContext>
                        <TimeTableContextButton onClick={()=>alert('작성 불가능합니다')}>작성하러 가기</TimeTableContextButton>
                    </TimeTableContextWrapper>
                </TimeTableWrapper>
            </TimeTableSectionWrapper>
        </>
    );
}

export default MainPageTimeTable;