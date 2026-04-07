/**
 * 부모 컴포넌트 : 최상위 컴포넌트
 */
// import './App.css'
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // let name = "홍길동";
  // let age = 20;
  // let numbers = [1,2,3,4,5];
  // let fruits = {
  //   name : "apple",
  //   emoji : "🍎"
  // }

  return (  
    <> 
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}
