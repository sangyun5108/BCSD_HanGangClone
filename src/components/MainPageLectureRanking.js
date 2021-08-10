import React,{useState} from 'react';
import styled from 'styled-components';
import { useGetLecturesQuery } from '../API/getGoodReviewLecturesAPI';

const LectureRankingSectionWrapper = styled.section`
    width:100%;
    margin:0 auto;

    @media(min-width:575px){
        width:500px;
        height:420px;
`;

const LectureRankingTitle = styled.h1`
    width:90%;
    margin:0 auto;
    font-size:16px;
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
    width:90%;
    height:436px;
    margin:0 auto;
    border:1px solid rgb(238, 238, 238);
    border-radius:15px;
    @media(min-width:575px){
        width:482px;
        height:385px;
        margin-left:0px;
    }
`
const LectureRankingListTitleWrapper = styled.div`
    overflow:scroll;
    height:58px;
    font-weight:700;
    @media(min-width:575px){
        width:480px;
        height:50px;
        display:flex;
        justify-content:center;
    }
`

const LectureRankingListTitleUlWrapper = styled.ul`
    width:200%;
    border-radius:12px 12px 0px 0px;
    border-bottom:1px solid rgb(238,238,238);
    height:55px;
    display:flex;
    padding-left:0px;
    @media(min-width:575px){
        width:480px;
        height:50px;
    }
`;

const LectureRankingListTitle = styled.li`
    width:20%;
    list-style:none;
    text-align:center;
    border-bottom:${props=>props.active?'2px solid rgb(255, 171, 46)':''};
    margin-right:${props=>props.order===9?'20px':'30px'};
    margin-left:${props=>props.order===0?'20px':''};

    display:flex;
    justify-content:center;
    align-items:center;
    color:${props=>props.active?'#238bfe':'rgb(153, 153, 153)'};
    @media(min-width:575px){
        width:40px;
        height:50px;
        margin:0px 4px 0px 4px;
    }
`;

const LectureRankingListTitleContext = styled.div`
    cursor:pointer;
    margin-bottom:${props=>props.active?'-2px':''};
    font-size:15px;
    @media(min-width:575px){
        width:40px;
        font-size:12px;
    }
`;

const LectureRankingListUlWrapper = styled.ul`
    padding-left:0px;
`;

const LectureRankingListWrapper = styled.div`
    border-top:${props=>props.active===0?'':'1px solid rgb(238, 238, 238)'};
    display:flex;
    @media(min-width:575px){
        height:66px;
    }
`;

const LectureRankingList = styled.li`
    width:100%;
    list-style:none;
    @media(min-width:575px){
        width:482px;
    }
`;

const LectureRankingListOrderWrapper = styled.div`
    width:15%;
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
    width:70%;
    display:flex;
    font-size:14px;
    flex-direction:column;
    justify-content:center;
    @media(min-width:575px){

    }
`;
const LectureRankingListRatingWrapper = styled.div`
    width:15%;
    font-size:18px;
    height:75px;
    display:flex;
    align-items:center;
    justify-content:center;

    @media(min-width:575px){
        font-size:17px;
        height:65px;
    }
`;
const LectureRankingListNameWrapper = styled.div`
    margin-bottom:5px;
    @media(min-width:575px){
        width:250px;
        font-size:15px;     
    }
`;
const LectureRankingListProfessorWrapper = styled.div`
    font-size:12px;
    color:rgb(153, 153, 153);
    @media(min-width:575px){
        width:180px;
        color:black;
        font-size:13px;
    }
`;

export const LECTURE_RANKING_LIST = [
    {title:'교양',title_long:'교양학부',id:10,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/culture.png'},
    {title:'HRD',title_long:'HRD학과',id:9,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/hrd.png'},
    {title:'기계',title_long:'기계공학부',id:1,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/machine.png'},
    {title:'메카',title_long:'메카트로닉스공학부',id:3,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/mecha.png'},
    {title:'산경',title_long:'산업경영학부',id:7,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/industrial.png'},
    {title:'에신화',title_long:'에너지신소재화학 공학부',id:6,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/energe.png'},
    {title:'컴공',title_long:'컴퓨터공학부',id:2,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/computer.png'},
    {title:'융합',title_long:'융합학과',id:8,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/fusion.png'},
    {title:'전전통',title_long:'전기전자통신공학부',id:4,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/electrocity.png'},
    {title:'디・건',title_long:'디자인 건축공학부',id:5,img:'https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/major/design.png'}
]

const MainPageLectureRanking = () => {

    const [selectedTitle,setSelectedTitle]=useState({title:'교양',departmentId:10});
    const { data, error, isLoading} = useGetLecturesQuery(selectedTitle.departmentId);

    const onClickTitle = (e) => {
        setSelectedTitle({title:e.target.innerText,departmentId:e.target.id});
    }

    return(
        <>  
            <LectureRankingSectionWrapper>
                <LectureRankingTitle>강의랭킹</LectureRankingTitle>
                <LectureRankingWrapper>
                    <LectureRankingListTitleWrapper>
                        <LectureRankingListTitleUlWrapper>
                            {LECTURE_RANKING_LIST.map((list,index)=>{
                                return(
                                    <LectureRankingListTitle order={index} key={list.id} active={selectedTitle.title===list.title}>
                                        <LectureRankingListTitleContext active={selectedTitle.title===list.title} onClick={(e)=>onClickTitle(e)} id={list.id}>{list.title}</LectureRankingListTitleContext>
                                    </LectureRankingListTitle>
                                );
                            })}
                        </LectureRankingListTitleUlWrapper>
                    </LectureRankingListTitleWrapper>
                    <LectureRankingListUlWrapper>
                        {error?(<>Error</>)
                        :isLoading?(<></>)
                        :data?(data.result).map((list,index)=>{
                            return(
                                <LectureRankingList key={list.id}>
                                    <LectureRankingListWrapper active={index}>
                                        <LectureRankingListOrderWrapper>{index+1}</LectureRankingListOrderWrapper>
                                        <LectureRankingListContentWrapper>
                                            <LectureRankingListNameWrapper>{list.name}</LectureRankingListNameWrapper>
                                            <LectureRankingListProfessorWrapper>{list.professor}</LectureRankingListProfessorWrapper>
                                        </LectureRankingListContentWrapper>
                                        <LectureRankingListRatingWrapper>{Number.isInteger(list.total_rating)?`${list.total_rating}.0`:list.total_rating.toFixed(1)}</LectureRankingListRatingWrapper>
                                    </LectureRankingListWrapper>
                                </LectureRankingList>
                            )
                        }):null}
                    </LectureRankingListUlWrapper>
                </LectureRankingWrapper>
            </LectureRankingSectionWrapper>
        </>
    )
}

export default MainPageLectureRanking;