import React,{useState} from 'react';
import MainPageSmallHeader from './MainPageSmallHeader';
import MainPageBigHeader from './MainPageBigHeader';

const MainPage = () => {

    let [isMobile,setIsMobile] = useState(false);

    const checkScreenWidth = () => {
        let checkScreen = window.matchMedia('(max-width:574px)').matches;
        if(checkScreen!==isMobile){
            setIsMobile(checkScreen);
        }
    } //화면의 넓이를 확인하는 함수
    
    return (
    <>
        {window.addEventListener('resize',checkScreenWidth)}
        {isMobile?<MainPageSmallHeader/>:<MainPageBigHeader/>}
    </>
    )
}

export default MainPage;