import Button from "./components/Button/Button.jsx";
import Card from "./components/Card/Card.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Infos from "./components/Infos/Infos.jsx";
import UserGreetings from "./components/UserGreetings/UserGreetings.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx"
import Languages from "./components/AboutMe/Languages.jsx";
import UpDateH1 from "./components/UpDateH1/UpDateH1.jsx";
// import ColorPicker from "./components/ColorPicker/ColorPicker.jsx";
// import MyComponent from "./components/MyComponent/MyComponent.jsx";
// import Counter from "./components/Counter/Counter.jsx";



function App() {
  //way of displaying array of items vedi Languages.jsx
  const favCountries = [{id: 1, name: "Japan"}, {id: 2, name: "USA"}, {id: 3, name: "Korea"}];

  const visitedCountries = [{id: 1, name: "Italy"}, {id: 2, name: "Morocco"}, {id:3 , name: "Turkey"}, {id: 4, name: "Saudi-Arabia"}];




  //Render
  return (
    <>
  <UpDateH1/>
  <Header/>
  <UserGreetings isLoggedIn={true} username="Zahra Ana" />
  <Card/>
  <Button/>
  <Infos name="Zahra" age={31} isStudent={true}/>
  {/* <Infos/> */}
  <AboutMe items={favCountries} category="My favorite Countries"/>
  <AboutMe items={visitedCountries} category="The Countries i visited"/>
  <Languages/>
  {/* <Counter/> */}
  {/* <MyComponent/> */}
  {/* <ColorPicker/> */}
  <Footer/>
    </>
  )
}

export default App
