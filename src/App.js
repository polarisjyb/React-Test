import logo from './logo.svg';
import './App.css';

/*
function 키워드를 사용하여 컴포넌트를 만듦
이러한 컴포넌트를 함수 컴포넌트라고 부른다.
프로젝트에서 컴포넌트를 렌더링하면 함수에서 반환하고 있는 내용을 나타낸다.
함수에서 반환하는 내용을 보면 마치 HTML을 작성한 것 같지만, 이 코드는 HTML이 아니다.
그렇다고 문자열 템플릿도 아니다. 이런 코드는 JSX 라고 부른다.

JSX는 리액트로 프로젝트를 개발할 때 사용되므로 공식적인 자바스크립트 문법이 아니다.
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
