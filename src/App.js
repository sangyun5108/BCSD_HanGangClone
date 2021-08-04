import MainPage from "./components/MainPage";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0px;
    font-family: 'Noto Sans KR', sans-serif;
    scrollbar-width:thin;
  }
  html{
    width:100%;
  }
  body{
  }
  #root{
    min-width:574px;
    height:1850px;
    @media(min-width:575px){
      height:1500px;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <MainPage/>
    </>
  );
}

export default App;
