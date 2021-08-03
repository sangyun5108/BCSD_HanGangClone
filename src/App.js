import MainPage from "./components/MainPage";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0px;
  }
  html{
    width:100%;
  }
  body{
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
