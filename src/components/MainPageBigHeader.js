import React,{useState} from 'react';
import styled from 'styled-components';

const BigHeaderHeaderWrapper = styled.header`
    border-bottom:1px solid rgb(238, 238, 238);
`;

const BigHeaderWrapper = styled.nav`
    height:82px;
    width:1150px;;
    display:flex;
    justify-content:space-between;
    margin:0 auto;
`;

const BigHeaderLeftContents = styled.div`
    display:flex;
    height:82px;
    justify-content:center;
    align-items:center;
`;

const BigHeaderLeftContentsUl = styled.ul`
    display:flex;
    height:80px;
    justify-content:center;
    align-items:center;
`;

const BigHeaderLeftContentLi = styled.li`
    height:80px;
    list-style:none;
`;

const BigHeaderRightContents = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:145px;
    color:rgb(35, 139, 254);
`;

const BigHeaderLeftContentImageWrapper = styled.div`
    width:120px;
    height:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

const BigHeaderLeftContentImage = styled.img`
`;

const BigHeaderLeftContent = styled.div`
    width:107px;
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:rgb(35, 139, 254);
    border-bottom:${props=>props.active?'2px solid rgb(35, 139, 254)':''};
`;

const BigHeaderLeftContentText = styled.div`
    height:20px;
    cursor:pointer;
`;

const BigHeaderRightContent= styled.a`
    cursor:pointer;
`;

const BigHeaderRightContentBoundary=styled.div`
    width:2px;
    height:15px;
    background-color:#DADADA;
`;

const LEFT_CONTENTS = [
    {name:'홈',id:'홈'},
    {name:'강의평',id:'강의평'},
    {name:'강의자료',id:'강의자료'},
    {name:'시간표',id:'시간표'}
]

const MainPageBigHeader = () => {

    const [isSelected,setIsSelected] = useState('홈');
    
    const onClickTitle = (e) => {
        setIsSelected(e.target.innerText);
    }


    return(
        <>
            <BigHeaderHeaderWrapper>
                <BigHeaderWrapper>
                    <BigHeaderLeftContents>
                        <BigHeaderLeftContentImageWrapper>
                            <BigHeaderLeftContentImage src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/logo.svg'/>
                        </BigHeaderLeftContentImageWrapper>
                        <BigHeaderLeftContentsUl>
                        {LEFT_CONTENTS.map((list)=>{
                            return(
                                <BigHeaderLeftContentLi key={list.id}>
                                    <BigHeaderLeftContent active={isSelected===list.name}>
                                        <BigHeaderLeftContentText onClick={(e)=>onClickTitle(e)}>{list.name}</BigHeaderLeftContentText>
                                    </BigHeaderLeftContent>
                                </BigHeaderLeftContentLi>
                            )
                        })}
                        </BigHeaderLeftContentsUl>
                    </BigHeaderLeftContents>
                    <BigHeaderRightContents>
                        <BigHeaderRightContent>로그인</BigHeaderRightContent>
                        <BigHeaderRightContentBoundary></BigHeaderRightContentBoundary>
                        <BigHeaderRightContent>회원가입</BigHeaderRightContent>
                    </BigHeaderRightContents>
                </BigHeaderWrapper>
            </BigHeaderHeaderWrapper>
        </>
    );
}

export default MainPageBigHeader;