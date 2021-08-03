import React from 'react';
import styled from 'styled-components';
import { LECTURE_RANKING_LIST } from './MainPageLectureRanking';

const DepartmentSectionWrapper = styled.section`
    @media(min-width:575px){
        width:1150px;
        margin:0 auto;
    }
`;

const DepartmentListTitle = styled.h1`
    width:80px;
    font-size:16px;
    margin:15px 0px 10px 35px;
    font-weight:700;

    @media(min-width:575px){
        margin:0px;     
    }
`

const DepartmentListsWrapper = styled.div`
    width:574px;
    padding-left:30px;
    margin:0 auto;
    height:130px;
    overflow:scroll;

    @media(min-width:575px){
        width:1150px;
        height:120px;
        margin-top:10px;
        padding-left:0px;
    }
`;

const DepartmentListUlWrapper = styled.ul`
    padding-left:0px;
    display:flex;
`;

const DepartmentList = styled.li`
    list-style:none;
`;

const DepartmentListWrapper = styled.div`
    width:100px;
    height:90px;
    margin:5px;
    border-radius:10px;
    background-image:url(${props=>props.active&&props.active});
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    cursor:pointer;
    @media(min-width:575px){
        width:100px;
        margin: 0px 16.5px 0px 0px;
    }
`;

const DepartmentListContext = styled.div`
    color:white;
`;

const MainPageDepartmentList = () => {
    return(
        <>  
            <DepartmentSectionWrapper>
                <DepartmentListTitle>학부별 탐색</DepartmentListTitle>
                <DepartmentListsWrapper>
                        <DepartmentListUlWrapper>
                            {LECTURE_RANKING_LIST.map((list)=>{
                                return(
                                    <DepartmentList key={list.id+100} onClick={()=>alert(`${list.title}학부입니다`)}>
                                        <DepartmentListWrapper active={list.img}>
                                            <DepartmentListContext>{list.title}</DepartmentListContext>
                                        </DepartmentListWrapper>
                                    </DepartmentList>
                                )
                            })}
                        </DepartmentListUlWrapper>
                </DepartmentListsWrapper>
            </DepartmentSectionWrapper>
        </>
    );
}


export default MainPageDepartmentList;