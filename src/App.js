import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import {createGlobalStyle} from 'styled-components';
import { LECENT_LECTURES } from "./components/MainPageRecentLectures";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing:border-box;
  }
  html{
    width:100%;
    height:100%;
  }
  body{
  }
  #root{
    min-width:360px;
    @media(min-width:575px){
      height:1500px;
    }
  }
`;

function App() {
  useEffect(()=>{
    localStorage.setItem('최근 본 강의',JSON.stringify(LECENT_LECTURES));
  },[]);
  return (
    <>
      <GlobalStyle/>
      <MainPage/>
    </>
  );
}

export default App;
