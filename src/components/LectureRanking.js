import React,{useState} from 'react';
import styled from 'styled-components';
import { useGetLecturesQuery } from '../API/getGoodReviewLecturesAPI';
import { DEPARTMENT_LIST } from '../static/departmentList';

const LectureRankingSection = styled.section`
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
    overflow:auto;
    -ms-overflow-style:none;
    scrollbar-width:none; 
    ::-webkit-scrollbar {
        display:none;
    }
    height:58px;
    font-weight:700;
    @media(min-width:575px){
        width:480px;
        height:50px;
        display:flex;
        justify-content:center;
    }
`

const LectureRankingListsTitle = styled.ul`
    width:200%;
    border-radius:12px 12px 0px 0px;
    border-bottom:1px solid rgb(238,238,238);
    height:55px;
    display:flex;
    justify-content:center;
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
    margin-right:${props=>props.order===9?'20px':'15px'};
    margin-left:${props=>props.order===0?'20px':''};

    display:flex;
    justify-content:center;
    align-items:center;
    color:${props=>props.active?'#238bfe':'rgb(153, 153, 153)'};
    @media(min-width:575px){
        width:38px;
        height:50px;
        margin:0px 4px 0px 4px;
    }
`;

const TitleContent = styled.div`
    width:100%;
    cursor:pointer;
    margin-bottom:${props=>props.active?'-2px':''};
    @media(min-width:575px){
        width:40px;
        font-size:12px;
    }
`;

const LectureRankingLists = styled.ul`
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

const ListOrder = styled.div`
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
const ListContent = styled.div`
    width:70%;
    display:flex;
    font-size:14px;
    flex-direction:column;
    justify-content:center;
    @media(min-width:575px){

    }
`;
const ListRating = styled.div`
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
const ListName = styled.div`
    margin-bottom:5px;
    @media(min-width:575px){
        width:250px;
        font-size:15px;     
    }
`;
const ListProfessor = styled.div`
    font-size:12px;
    color:rgb(153, 153, 153);
    @media(min-width:575px){
        width:180px;
        color:black;
        font-size:13px;
    }
`;

const LectureRanking = () => {

    const [selectedTitle,setSelectedTitle]=useState({title:'교양',departmentId:10});
    const { data, error, isLoading} = useGetLecturesQuery(selectedTitle.departmentId);

    const onClickTitle = (e) => {
        setSelectedTitle({title:e.target.innerText,departmentId:e.target.id});
    }

    return(
        <>  
            <LectureRankingSection>
                <LectureRankingTitle>강의랭킹</LectureRankingTitle>
                <LectureRankingWrapper>
                    <LectureRankingListTitleWrapper>
                        <LectureRankingListsTitle>
                            {DEPARTMENT_LIST.map((list,index)=>{
                                return(
                                    <LectureRankingListTitle order={index} key={list.id} active={selectedTitle.title===list.title}>
                                        <TitleContent active={selectedTitle.title===list.title} onClick={(e)=>onClickTitle(e)} id={list.id}>{list.title}</TitleContent>
                                    </LectureRankingListTitle>
                                );
                            })}
                        </LectureRankingListsTitle>
                    </LectureRankingListTitleWrapper>
                    <LectureRankingLists>
                        {error?(<>Error</>)
                        :isLoading?(<></>)
                        :data?(data.result).map((list,index)=>{
                            return(
                                <LectureRankingList key={list.id}>
                                    <LectureRankingListWrapper active={index}>
                                        <ListOrder>{index+1}</ListOrder>
                                        <ListContent>
                                            <ListName>{list.name}</ListName>
                                            <ListProfessor>{list.professor}</ListProfessor>
                                        </ListContent>
                                        <ListRating>{Number.isInteger(list.total_rating)?`${list.total_rating}.0`:list.total_rating.toFixed(1)}</ListRating>
                                    </LectureRankingListWrapper>
                                </LectureRankingList>
                            )
                        }):null}
                    </LectureRankingLists>
                </LectureRankingWrapper>
            </LectureRankingSection>
        </>
    )
}

export default LectureRanking;