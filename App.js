import "./App.css";
import React from "react";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Main from "./components/Main/Main";
import Music from "./components/Music/Music";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Messages from "./components/Messages/Messages";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="gridWrapper">
                <Header />
                <Nav />
                <Routes>
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/news" element={<News headline="Head" />} />
                    <Route path="/music" element={<Music yourMusic="Muse" />} />
                </Routes>
                {/* <Footer /> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
