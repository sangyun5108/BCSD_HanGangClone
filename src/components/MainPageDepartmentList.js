import React from 'react';
import styled from 'styled-components';
import { LECTURE_RANKING_LIST } from './MainPageLectureRanking';

const DepartmentSectionWrapper = styled.section`
    width:574px;
    @media(min-width:575px){
        width:1200px;
        margin:0 240px;
    }
`;

const DepartmentListTitle = styled.label`
    width:80px;
    margin:15px 0px 10px 35px;
    font-weight:700;

    @media(min-width:575px){
        margin:0px 0px 0px 25px;
        position:absolute;
        
    }
`

const DepartmentListsWrapper = styled.div`
    width:510px;
    margin:0 auto;
    height:130px;
    overflow:scroll;

    @media(min-width:575px){
        margin-left:8px;
        width:1200px;
        height:120px;
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
    margin:5px 5px 5px 5px;
    border-radius:10px;
    background-image:url(${props=>props.active&&props.active});
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    &:hover{
        cursor:pointer;
    }
    @media(min-width:575px){
        width:100px;
        margin: 25px 0px 0px 17px;
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