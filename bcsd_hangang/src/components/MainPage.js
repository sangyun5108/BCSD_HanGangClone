import React,{useState} from 'react';
import MainBigPage from './MainBigPage';
import MainSmallPage from './MainSmallPage';

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
        {isMobile?<MainSmallPage/>:<MainBigPage/>}
    </>
    )
}

export default MainPage;