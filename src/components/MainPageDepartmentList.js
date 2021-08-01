import React from 'react';
import styled from 'styled-components';
import { LECTURE_RANKING_LIST } from './MainPageLectureRanking';

const DepartmentListTitle = styled.div`
    margin:15px 0px 10px 35px;
    font-weight:700;

    @media(min-width:575px){
        margin-left:135px;
    }
`

const DepartmentListsWrapper = styled.div`
    width:574px;
    padding-left:35px;
    height:115px;
    overflow:scroll;

    @media(min-width:575px){
        padding-left:0px;
        margin-left:135px;
        width:1200px;
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
    height:100px;
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
        margin: 5px 18px 0px 0px;
    }
`;

const DepartmentListContext = styled.div`
    color:white;
`;

const MainPageDepartmentList = () => {
    return(
        <>  <DepartmentListTitle>학부별 탐색</DepartmentListTitle>
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
        </>
    );
}


export default MainPageDepartmentList;