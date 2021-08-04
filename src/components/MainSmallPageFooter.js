import React,{useState} from 'react';
import styled from 'styled-components';

const MainSmallPageFooterContents = styled.div` 
    border:1px solid #FFFFFF;
    width:574px;
    height:90px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#FFFFFF;
`;

const MainSmallPageFooterContent = styled.div`
    width:110px;
    height:90px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-top:${props=>props.active?'2px solid #238bfe':''};
    color:${props=>props.active?"#238bfe":"grey"};
`;

const MainSmallPageFooterContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const MainSmallPageFooterImage = styled.img`
    width:30px;
    height:auto;
    cursor:pointer;
`;

const MainSmallPageFooterText = styled.div`
    font-size:16px;
    font-weight:700;
    cursor:pointer;
`;

const LIST_NAME = [
    {name:'홈',id:'home',path:'images/home.png',pathBlue:'images/home-blue.png'},
    {name:'강의평',id:'lecture',path:'images/clipboard-check.png',pathBlue:'images/clipboard-check-blue.png'},
    {name:'강의자료',id:'materials',path:'images/document-text.png',pathBlue:'images/document-text-blue.png'},
    {name:'시간표',id:'timetable',path:'images/template.png',pathBlue:'images/template-blue.png'},
    {name:'마이페이지',id:'mypage',path:'images/user.png',pathBlue:'images/user-blue.png'}
];

const MainSmallPageFooter = () => {

    const [isSelected, setIsSelected] = useState('홈');

    const onClickTitle = (e) => {
        console.log('click');
        setIsSelected(e.target.parentNode.id);
    }
    
    return(
        <>
                <MainSmallPageFooterContents>
                    {LIST_NAME.map((list)=>{
                        return(
                                <MainSmallPageFooterContent active={list.id===isSelected} key={list.id}>
                                    <MainSmallPageFooterContentWrapper onClick={(e)=>onClickTitle(e)} id={list.id}>
                                        <MainSmallPageFooterImage active={list.id===isSelected} src={list.id===isSelected?list.pathBlue:list.path} className={list.class}/>
                                        <MainSmallPageFooterText>{list.name}</MainSmallPageFooterText>
                                    </MainSmallPageFooterContentWrapper>
                                </MainSmallPageFooterContent>
                        )
                    })}
                </MainSmallPageFooterContents>
        </>
    );  
}

export default MainSmallPageFooter;