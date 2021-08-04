import React,{useState} from 'react';
import styled from 'styled-components';
import useGetLectures from '../customHooks/useGetLectures';

const LectureRankingSectionWrapper = styled.section`
    width:500px;
    height:530px;
    margin:0 auto;

    @media(min-width:575px){
        height:420px;
`;

const LectureRankingTitle = styled.h1`
    width:75px;
    text-align:center;
    font-size:18px;
    font-weight:800;
    margin-bottom:10px;
    @media(min-width:575px){
     width:75px;
     margin: 0px 0px 5px 0px;
     font-weight:700; 
     font-size:16px;
    }
`;

const LectureRankingWrapper = styled.div`
    border:2px solid rgb(238, 238, 238);
    border-radius:15px;
    width:500px;
    height:490px;
    @media(min-width:575px){
        width:480px;
        height:392px;
        margin-left:0px;
    }
`
const LectureRankingListTitleWrapper = styled.div`
    overflow:scroll;
    height:62px;
    font-weight:700;
    border-bottom:1px solid rgb(238, 238, 238);
    @media(min-width:575px){
        height:51px;
        display:flex;
        justify-content:center;
    }
`

const LectureRankingListTitleUlWrapper = styled.ul`
    border-radius:12px 12px 0px 0px;
    width:700px;
    display:flex;
    padding-left:0px;
    @media(min-width:575px){
        width:450px;
    }
`;

const LectureRankingListTitle = styled.li`
    list-style:none;
    text-align:center;
    height:60px;
    border-bottom:${props=>props.active?'2px solid rgb(255, 171, 46)':''};
    display:flex;
    justify-content:center;
    align-items:center;
    color:${props=>props.active?'#238bfe':'rgb(153, 153, 153)'};
    @media(min-width:575px){
        width:45px;
        height:50px;
    }
`;

const LectureRankingListTitleContext = styled.div`
    cursor:pointer;
    font-size:16px;
    width:80px;
    @media(min-width:575px){
        width:40px;
        font-size:13px;
    }
`;

const LectureRankingListUlWrapper = styled.ul`
    padding-left:0px;
`;

const LectureRankingListWrapper = styled.div`
    height:80px;
    margin-bottom:5px;
    border-top:1px solid lightgrey;
    display:flex;
    @media(min-width:575px){
        height:62px;
    }
`;

const LectureRankingList = styled.li`
    width:100%;
    list-style:none;
`;

const LectureRankingListOrderWrapper = styled.div`
    width:50px;
    font-size:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    @media(min-width:575px){
        color:#238bfe;
        font-size:18px;
        font-weight:600;
        width:60px;   
    }
`;
const LectureRankingListContentWrapper = styled.div`
    width:250px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-top:10px;

`;
const LectureRankingListRatingWrapper = styled.div`
    width:30px;
    font-size:20px;
    margin:3px 0px 0px 150px;
    height:75px;
    display:flex;
    align-items:center;

    @media(min-width:575px){
        margin:1px 0px 0px 100px;
        height:65px;
    }
`;
const LectureRankingListNameWrapper = styled.div`
    margin-bottom:5px;
    width:250px;
    @media(min-width:575px){
        font-size:15px;     
    }
`;
const LectureRankingListProfessorWrapper = styled.div`
    width:180px;
    font-size:15px;
    color:rgb(153, 153, 153);
    @media(min-width:575px){
        color:black;
        font-size:13px;
    }
`;

export const LECTURE_RANKING_LIST = [
    {title:'교양',id:0,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/culture.png'},
    {title:'HRD',id:1,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/hrd.png'},
    {title:'기계',id:5,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/machine.png'},
    {title:'메카',id:6,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/mecha.png'},
    {title:'산경',id:4,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/industrial.png'},
    {title:'에신화',id:3,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/energe.png'},
    {title:'컴공',id:2,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/computer.png'},
    {title:'융합',id:7,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/fusion.png'},
    {title:'전전통',id:8,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/electrocity.png'},
    {title:'디ㆍ건',id:9,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/design.png'}
]

const MainPageLectureRanking = () => {

    const lectureRankingDataList = useGetLectures();
    const [selectedTitle,setSelectedTitle]=useState();
    const [selectedLectureList,setselectedLectureList] = useState([]);
    const onClickTitle = (e) => {

        const selectedLists = lectureRankingDataList[e.target.id].result
        .map((list)=>{
            return {
                title:e.target.innerText,
                name:list.name,
                professor:list.professor,
                rating:list.total_rating,
                id:list.id
            }
        })
        setselectedLectureList(selectedLists);
        setSelectedTitle(e.target.innerText);
    }

    return(
        <>
            <LectureRankingSectionWrapper>
                <LectureRankingTitle>강의랭킹</LectureRankingTitle>
                <LectureRankingWrapper>
                    <LectureRankingListTitleWrapper>
                        <LectureRankingListTitleUlWrapper>
                            {LECTURE_RANKING_LIST.map((list)=>{
                                return(
                                    <LectureRankingListTitle key={list.id} active={selectedTitle===list.title}>
                                        <LectureRankingListTitleContext onClick={(e)=>onClickTitle(e)} id={list.id}>{list.title}</LectureRankingListTitleContext>
                                    </LectureRankingListTitle>
                                );
                            })}
                        </LectureRankingListTitleUlWrapper>
                    </LectureRankingListTitleWrapper>
                    <LectureRankingListUlWrapper>
                        {selectedLectureList.map((list,index)=>{
                            return(
                                <LectureRankingList key={list.id}>
                                    <LectureRankingListWrapper>
                                        <LectureRankingListOrderWrapper>{'0'+(index+1)}</LectureRankingListOrderWrapper>
                                        <LectureRankingListContentWrapper>
                                            <LectureRankingListNameWrapper>{list.name}</LectureRankingListNameWrapper>
                                            <LectureRankingListProfessorWrapper>{list.professor}</LectureRankingListProfessorWrapper>
                                        </LectureRankingListContentWrapper>
                                        <LectureRankingListRatingWrapper>{Number.isInteger(list.rating)?`${list.rating}.0`:list.rating.toFixed(1)}</LectureRankingListRatingWrapper>
                                    </LectureRankingListWrapper>
                                </LectureRankingList>
                            )
                        })}
                    </LectureRankingListUlWrapper>
                </LectureRankingWrapper>
            </LectureRankingSectionWrapper>
        </>
    )
}

export default MainPageLectureRanking;