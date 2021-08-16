import React from 'react'
import styled from 'styled-components';

const TimeTableSection = styled.section`
    width:100%;
    margin: 0 auto;
    margin-top:10px;

    @media(min-width:575px){
        width:370px;
    }
`;
const TimeTableTitle = styled.h1`
    width:90%;
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
    width:90%;
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

const TimeTableLists = styled.ul`
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

const LeftContents = styled.div`
    height:75px;
    width:200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const LeftContentTitle = styled.div`
    font-weight:700;
    font-size:16px;
    @media(min-width:575px){
        font-size:14px;
    }
`;

const LeftContentProfessor = styled.div`
    font-size:14px;
    color:#999999;
    @media(min-width:575px){
        font-size:12px;
    }
`;

const RightContents = styled.div`
    width:100px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const EvaluateButton = styled.button`
    width:60px;
    height:28px;
    border:none;
    font-size:13px;
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

const TimeTable = () => {
    return(
        <>
            <TimeTableSection>
                <TimeTableTitle>내 시간표</TimeTableTitle>
                <TimeTableWrapper>
                    <TimeTableLists>
                        {TIMETABLE_LIST.map((list,index)=>{
                            return(
                                <TimeTableList key={list.id} active={index===3}>
                                    <LeftContents>
                                        <LeftContentTitle>{list.name}</LeftContentTitle>
                                        <LeftContentProfessor>{list.professor}</LeftContentProfessor>
                                    </LeftContents>
                                    <RightContents>
                                        <EvaluateButton active={list.evaluate==='평가완료'}>{list.evaluate}</EvaluateButton>
                                    </RightContents>
                                </TimeTableList>
                            )
                        })}
                    </TimeTableLists>
                </TimeTableWrapper>
            </TimeTableSection>
        </>
    );
}

export default TimeTable;