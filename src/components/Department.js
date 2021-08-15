import React from 'react';
import styled from 'styled-components';
import { DEPARTMENT_LIST } from '../static/departmentList';

const DepartmentSection = styled.section`
    width:100%;
    padding:0px 15px 0px 15px;
    @media(min-width:575px){
        width:1150px;
        margin:0 auto;
    }
`;

const DepartmentListTitle = styled.h1`
    width:90%;
    font-size:16px;
    margin:15px auto 10px auto;
    font-weight:700;

    @media(min-width:575px){
        margin:0px;     
    }
`

const DepartmentListsWrapper = styled.div`
    overflow:auto;
    -ms-overflow-style:none;
    scrollbar-width:none; 
    ::-webkit-scrollbar {
        display:none;
    }

    @media(min-width:575px){
        width:1166.5px;
        height:100px;
        margin-top:10px;
        padding-left:0px;
    }
`;

const DepartmentLists = styled.ul`
    padding-left:0px;
    padding-right:5px;
    display:flex;
`;

const DepartmentList = styled.li`
    list-style:none;
`;

const DepartmentListWrapper = styled.div`
    width:100px;
    height:87px;
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
        margin:0px 16.5px 0px 0px;
    }
`;

const DepartmentListContent = styled.div`
    color:white;
    width:67px;
    text-align:center;
    font-size:12px;
    margin-bottom:5px;
`;

const Department = () => {
    return(
        <>  
            <DepartmentSection>
                <DepartmentListTitle>학부별 탐색</DepartmentListTitle>
                <DepartmentListsWrapper>
                        <DepartmentLists>
                            {DEPARTMENT_LIST.map((list,index)=>{
                                return(
                                    <DepartmentList key={list.id+100} onClick={()=>alert(`${list.title}학부입니다`)}>
                                        <DepartmentListWrapper active={list.img}>
                                            <DepartmentListContent active={index} className={list.title}>{list.title_long}</DepartmentListContent>
                                        </DepartmentListWrapper>
                                    </DepartmentList>
                                )
                            })}
                        </DepartmentLists>
                </DepartmentListsWrapper>
            </DepartmentSection>
        </>
    );
}


export default Department;