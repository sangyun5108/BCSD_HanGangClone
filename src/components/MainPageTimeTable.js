import React from 'react'
import styled from 'styled-components';

const TimeTableSectionWrapper = styled.section`
    width:100%;
    margin: 0 auto;
    margin-top:10px;

    @media(min-width:575px){
        width:370px;
    }
`;
const TimeTableTitleWrapper = styled.h1`
    width:95%;
    margin: 0px auto;
    font-size:16px;
    font-weight:700;
    margin-bottom:10px;
    @media(min-width:575px){
        width:75px;
        margin:0px;
        margin-bottom:5px;
    }
`;
const TimeTableWrapper = styled.div`
    width:95%;
    height:300px;
    margin: 0 auto;
    border:1px solid rgb(238, 238, 238);
    border-radius:15px;
    display:flex;
    justify-content:center;
    align-items:center;
    
    @media(min-width:575px){
        width:360px;
    }
`;

const TimeTableUl = styled.ul`
    width:100%;
    height:304px;
    padding-left:0px;
`;

const TimeTableList = styled.li`
    list-style:none;
    border-bottom:${props=>props.active?'':'1px solid rgb(238, 238, 238)'};
    padding-left:20px;
    display:flex;
    justify-content:space-between;
`;

const TimeTableListLeftContents = styled.div`
    height:75px;
    width:200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const TimeTableListLeftContentTitle = styled.div`
    font-weight:700;
    font-size:14px;
    @media(min-width:575px){
        font-size:14px;
    }
`;

const TimeTableListLeftContentProfessor = styled.div`
    font-size:12px;
    color:#999999;
    @media(min-width:575px){
        font-size:12px;
    }
`;

const TimeTableListRightContents = styled.div`
    width:100px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const TimeTableListRightButton = styled.button`
    width:60px;
    height:28px;
    border:none;
    font-size:12px;
    border-radius:15px;
    background-color:${props=>props.active?'':'#238bfe'};
    color:${props=>props.active?'':'#ffffff'};
    cursor:pointer;
    @media(min-width:575px){
        width:60px;
        font-size:12px;
    }
`;

const TIMETABLE_LIST = [
    {name:'사랑의 역사',professor:'김사랑',evaluate:'평가완료',rating:3.2,id:'사랑의 역사'},
    {name:'하트의 역사',professor:'박사랑',evaluate:'평가하기',rating:3.2,id:'하트의 역사'},
    {name:'사랑의 역사',professor:'김사랑',evaluate:'평가하기',rating:3.2,id:'사랑의 역사2'},
    {name:'사랑의 역사',professor:'김사랑',evaluate:'평가하기',rating:3.2,id:'사랑의 역사3'}
]

const MainPageTimeTable = () => {
    return(
        <>
            <TimeTableSectionWrapper>
                <TimeTableTitleWrapper>내 시간표</TimeTableTitleWrapper>
                <TimeTableWrapper>
                    <TimeTableUl>
                        {TIMETABLE_LIST.map((list,index)=>{
                            return(
                                <TimeTableList key={list.id} active={index===3}>
                                    <TimeTableListLeftContents>
                                        <TimeTableListLeftContentTitle>{list.name}</TimeTableListLeftContentTitle>
                                        <TimeTableListLeftContentProfessor>{list.professor}</TimeTableListLeftContentProfessor>
                                    </TimeTableListLeftContents>
                                    <TimeTableListRightContents>
                                        <TimeTableListRightButton active={list.evaluate==='평가완료'}>{list.evaluate}</TimeTableListRightButton>
                                    </TimeTableListRightContents>
                                </TimeTableList>
                            )
                        })}
                    </TimeTableUl>
                </TimeTableWrapper>
            </TimeTableSectionWrapper>
        </>
    );
}

export default MainPageTimeTable;