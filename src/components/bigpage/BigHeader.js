import React,{useState} from 'react';
import styled from 'styled-components';

const Header = styled.header`
    border-bottom:1px solid rgb(238, 238, 238);
`;

const HeaderContents = styled.nav`
    height:80px;
    width:1150px;;
    display:flex;
    justify-content:space-between;
    margin:0 auto;
`;

const LeftContents = styled.div`
    display:flex;
    height:80px;
    justify-content:center;
    align-items:center;
    position:relative;
`;

const LeftContentLists = styled.ul`
    display:flex;
    height:80px;
    justify-content:center;
    align-items:center;
`;

const LeftContentList = styled.li`
    height:80px;
    list-style:none;
    border-bottom:${props=>props.active?'2px solid rgb(35, 139, 254)':''};
`;

const RightContents = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:145px;
    color:rgb(35, 139, 254);
`;

const HomeLink = styled.a`
    width:120px;
    height:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

const HomeImage = styled.img`
`;

const LeftContentBox = styled.div`
    width:107px;
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:rgb(35, 139, 254);
`;

const ContentText = styled.div`
    height:20px;
    cursor:pointer;
`;

const RightContentLink= styled.a`
    cursor:pointer;
`;

const BoundaryLine=styled.div`
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

const BigHeader = () => {

    const [isSelected,setIsSelected] = useState('홈');
    
    const onClickTitle = (e) => {
        setIsSelected(e.target.innerText);
    }


    return(
        <>
            <Header>
                <HeaderContents>
                    <LeftContents>
                        <HomeLink href="http://localhost:3000/">
                            <HomeImage src='https://hangang-storage.s3.ap-northeast-2.amazonaws.com/assets/img/indexpage/logo.svg'/>
                        </HomeLink>
                        <LeftContentLists>
                        {LEFT_CONTENTS.map((list)=>{
                            return(
                                <LeftContentList key={list.id} active={isSelected===list.name}>
                                    <LeftContentBox>
                                        <ContentText onClick={(e)=>onClickTitle(e)}>{list.name}</ContentText>
                                    </LeftContentBox>
                                </LeftContentList>
                            )
                        })}
                        </LeftContentLists>
                    </LeftContents>
                    <RightContents>
                        <RightContentLink>로그인</RightContentLink>
                        <BoundaryLine></BoundaryLine>
                        <RightContentLink>회원가입</RightContentLink>
                    </RightContents>
                </HeaderContents>
            </Header>
        </>
    );
}

export default BigHeader;