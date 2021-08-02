import MainPage from "./components/MainPage";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0px;
  }
  html{
    height:1500px;
  }
  body{
    height:100%;
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
