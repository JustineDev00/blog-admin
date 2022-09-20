
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseScreen from './Screens/BaseScreen';
import AccountScreen from './Screens/AccountScreen';
import ArticleScreen from './Screens/ArticleScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import TagScreen from './Screens/TagScreen';
import ThemeScreen from './Screens/ThemeScreen';
import TagDetailScreen from './Screens/TagDetailScreen';
import ArticleDetailScreen from './Screens/ArticleDetailScreen';
import ThemeDetailScreen from './Screens/ThemeDetailScreen';
import AccountDetailScreen from './Screens/AccountDetailScreen';


function App() {
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   fetch('http://blog.api')
  //     .then(response => response.text())
  //     .then(content => setText(content));

  // }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseScreen/>}>  {/* Si "/" dans l'URL, le contenu de basescreen s'affiche (soit navbar + footer + outlet == l'un des six composants enfants si-dessous selon l'URL*/}
            <Route index element={<HomeScreen/>} />    
            <Route path="/login" element={<LoginScreen/>} />
            <Route path="/accounts" element={<AccountScreen/>} />
            <Route path="/appuser/:id" element={<AccountDetailScreen/>} />
            <Route path="/articles" element={<ArticleScreen/>} />
            <Route path="/article/:id" element={<ArticleDetailScreen/>} />
            <Route path="/tags" element={<TagScreen/>} />
            <Route path="/tag/:id" element={<TagDetailScreen/>} />
            <Route path="/themes" element={<ThemeScreen/>} />
            <Route path = '/theme/:id' element={<ThemeDetailScreen/>}/>
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
