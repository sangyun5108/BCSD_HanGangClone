import React,{useState,useEffect} from 'react';
import BigPage from '../pages/BigPage';
import SmallPage from '../pages/SmallPage';
import BigHeader from '../components/bigpage/BigHeader';
import SmallHeader from '../components/smallpage/SmallHeader';

const MainPage = () => {

    let [isMobile,setIsMobile] = useState(window.matchMedia('(max-width:574px)').matches);

    useEffect(()=>{

        const checkScreenWidth = () => {
            let checkScreen = window.matchMedia('(max-width:574px)').matches;
            if(checkScreen!==isMobile){
                setIsMobile(checkScreen);
            }
        } //화면의 넓이를 확인하는 함수
        window.addEventListener('resize',checkScreenWidth);

        return () => {
            window.removeEventListener('resize',checkScreenWidth);
        } //useEffect 실행되기 전에 호출되어 기존에 EventListener를 remove해준다
    },[isMobile]);
    
    return (
    <>

        {isMobile?(
            <>
                <SmallHeader/>
                <SmallPage/>
            </>
        ):(
            <>
                <BigHeader/>
                <BigPage/>
            </>
        )}
    </>
    )
}

export default MainPage;