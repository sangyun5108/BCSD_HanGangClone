import React from 'react';
import styled from 'styled-components';

const LectureMaterialSection = styled.section`
    width:100%;
    margin:0 auto;
    margin-top:10px;
    @media(min-width:575px){
        width:650px;
        margin:0px;
    }
`;

const LectureMaterialTitle = styled.h1`
    width:90%;
    margin:0 auto;
    font-size:16px;
    font-weight:600;
    margin-bottom:5px;
    @media(min-width:575px){
        width:75px;
        margin:0px 0px 5px 0px;
    }
`

const LectureMaterialWrapper = styled.div`
    width:90%;
    margin: 0 auto;
    font-size:14px;
    height:300px;
    border:1px solid rgb(238, 238, 238);
    border-radius:15px;
    display:flex;
    justify-content:center;
    align-items:center;

    @media(min-width:575px){
        width:650px;
    }
`;

const LectureMaterialContent= styled.div`
    color:grey;
    width:345px;
    text-align:center;
`;

const LectureMaterial = () => {

    return(
        <>
            <LectureMaterialSection>
                <LectureMaterialTitle>강의 자료</LectureMaterialTitle>
                <LectureMaterialWrapper>
                    <LectureMaterialContent>시간표를 작성하지 않았거나 업로드된 강의자료가 없습니다.</LectureMaterialContent>
                </LectureMaterialWrapper>
            </LectureMaterialSection>
        </>
    );
}

export default LectureMaterial;