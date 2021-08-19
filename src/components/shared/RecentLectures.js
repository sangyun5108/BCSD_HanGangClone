import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import MIN_WIDTH from '../../static/minwidth';

const RecentLectureSection = styled.section`
    width:100%;
    margin:10px auto;
    @media(${MIN_WIDTH}){
        margin: 10px 0px 0px 35px;
        width:254px;
    }
`;

const RecentLectureTitle = styled.div`
    width:90%;
    margin:0 auto;
    margin-bottom:5px;
    font-weight:700;

    @media(${MIN_WIDTH}){
        width:100px;
        margin:0px;
        margin-bottom:5px;
    }
`;

const RecentLectureWrapper = styled.div`
    border:1px solid rgb(238, 238, 238);
    border-radius:15px;
    width:90%;
    margin:0 auto;
    height:400px;
    color:grey;

    @media(${MIN_WIDTH}){
        width:250px;
        height:300px;
    }
`

const RecentLectureContents= styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-left:0px;
`;

const RecentLectureContent = styled.li`
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
const LeftContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:200px;
    margin-left:20px;
`;
const LeftContentTitle = styled.div`
    font-size:16px;
    font-weight:700;
    color:black;
    @media(${MIN_WIDTH}){
        font-size:14px;
    }
`;
const LeftContentProfessor =styled.div`
    font-size:14px;
    @media(${MIN_WIDTH}){
        font-size:12px;
    }
`;
const RightContent = styled.div`
    width:30px;
    display:flex;
    align-items:center;
    margin-right:20px;
`;
const RightContentRating = styled.div`
    font-size:20px;
    color:black;
    @media(${MIN_WIDTH}){
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

const RecentLecture = () => {

    const [recentLectures,setRecentLectures] = useState([]);

    useEffect(()=>{
        setRecentLectures(getItem??[]);
    },[])

    return(
        <>
            <RecentLectureSection>
                <RecentLectureTitle>최근 본 강의</RecentLectureTitle>
                <RecentLectureWrapper>
                    <RecentLectureContents>
                        {recentLectures.map((list,index)=>{
                            return(
                                <RecentLectureContent active={index===4} key={list.id}>
                                    <LeftContent>
                                        <LeftContentTitle>{list.name}</LeftContentTitle>
                                        <LeftContentProfessor>{list.professor}</LeftContentProfessor>
                                    </LeftContent>
                                    <RightContent>
                                        <RightContentRating>{list.rating}</RightContentRating>
                                    </RightContent>
                                </RecentLectureContent>
                            )
                        })}
                    </RecentLectureContents>
                </RecentLectureWrapper>
            </RecentLectureSection>
        </>
    )
}

export default RecentLecture;