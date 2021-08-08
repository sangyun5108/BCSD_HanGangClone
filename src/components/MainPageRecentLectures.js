import React,{useEffect,useState} from 'react';
import styled from 'styled-components';

const MainPageRecentLectureSection = styled.section`
    width:100%;
    margin:10px auto;
    @media(min-width:575px){
        margin: 10px 0px 0px 35px;
        width:254px;
    }
`;

const MainPageRecentLectureTitleWrapper = styled.div`
    width:95%;
    margin:0 auto;
    margin-bottom:5px;
    font-weight:700;

    @media(min-width:575px){
        width:100px;
        margin:0px;
        margin-bottom:5px;
    }
`;

const MainPageRecentLectureWrapper = styled.div`
    border:1px solid rgb(238, 238, 238);
    border-radius:15px;
    width:95%;
    margin:0 auto;
    height:400px;
    color:grey;

    @media(min-width:575px){
        width:250px;
        height:300px;
    }
`

const MainPageRecentLectureContentUl = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-left:0px;
`;

const MainPageRecentLectureContentLi = styled.li`
    width:100%;
    list-style:none;
    height:80px;
    display:flex;
    justify-content:space-between;
    border-bottom:${props=>props.active?'none':'1px solid rgb(238, 238, 238)'};
    @media(min-width:575px){
        width:254px;
        height:59px;
    }
`;
const MainPageRecentLectureContentLeft = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:200px;
    margin-left:20px;
`;
const MainPageRecentLectureContentLeftTitle = styled.div`
    font-size:16px;
    font-weight:700;
    color:black;
    @media(min-width:575px){
        font-size:14px;
    }
`;
const MainPageRecentLectureContentLeftProfessor =styled.div`
    font-size:14px;
    @media(min-width:575px){
        font-size:12px;
    }
`;
const MainPageRecentLectureContentRight = styled.div`
    width:30px;
    display:flex;
    align-items:center;
    margin-right:20px;
`;
const MainPageRecentLectureContentRightContentRating = styled.div`
    font-size:20px;
    color:black;
    @media(min-width:575px){
        font-size:15px;
    }
`;

const getItem = JSON.parse(localStorage.getItem('최근 본 강의'));

export const LECENT_LECTURES = [
    {name:'사랑의역사',professor:'김사랑',rating:'3.2',id:'사랑의역사김사랑'},
    {name:'하트의역사',professor:'박사랑',rating:'3.2',id:'하트의역사박사랑'},
    {name:'사랑의 히스토리',professor:'김하트',rating:'3.2',id:'사랑의히스토리김하트1'},
    {name:'사랑의 히스토리',professor:'김하트',rating:'3.2',id:'사랑의역사김하트2'},
    {name:'사랑의 히스토리',professor:'김하트',rating:'3.2',id:'사랑의역사김하트3'}
]

const MainPageRecentLecture = () => {

    const [recentLectures,setRecentLectures] = useState([]);

    useEffect(()=>{
        setRecentLectures(getItem?getItem:[]);
    },[])

    return(
        <>
            <MainPageRecentLectureSection>
                <MainPageRecentLectureTitleWrapper>최근 본 강의</MainPageRecentLectureTitleWrapper>
                <MainPageRecentLectureWrapper>
                    <MainPageRecentLectureContentUl>
                        {recentLectures.map((list,index)=>{
                            return(
                                <MainPageRecentLectureContentLi active={index===4} key={list.id}>
                                    <MainPageRecentLectureContentLeft>
                                        <MainPageRecentLectureContentLeftTitle>{list.name}</MainPageRecentLectureContentLeftTitle>
                                        <MainPageRecentLectureContentLeftProfessor>{list.professor}</MainPageRecentLectureContentLeftProfessor>
                                    </MainPageRecentLectureContentLeft>
                                    <MainPageRecentLectureContentRight>
                                        <MainPageRecentLectureContentRightContentRating>{list.rating}</MainPageRecentLectureContentRightContentRating>
                                    </MainPageRecentLectureContentRight>
                                </MainPageRecentLectureContentLi>
                            )
                        })}
                    </MainPageRecentLectureContentUl>
                </MainPageRecentLectureWrapper>
            </MainPageRecentLectureSection>
        </>
    )
}

export default MainPageRecentLecture;