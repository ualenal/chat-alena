import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Chat from "./Chat/Chat";
import Auth from "./Auth/Auth";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={ <Main /> }></Route>
            <Route path="/chat" element={ <Chat /> }></Route>
            <Route path="/auth" element={ <Auth /> }></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
