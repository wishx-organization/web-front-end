import React from "react";
import AppProvider from "./provider/AppProvider";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { theme } from './style/theme'
import GlobalStyle from './style/global';
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Contact from "./pages/contact";
import ErrorPage from "./pages/404";
import FaqPage from "./pages/faq";
import MainBlog from "./pages/blog/blog-main";
import BlogCategory from "./pages/blog/blog-category";
import BlogSearchResult from "./pages/blog/blog-search-result";
import BlogSRNotFound from "./pages/blog/blogsearch-noResult";
import BlogPost from "./pages/blog/blog-post";
import SettingsPage from "./pages/settings";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import './index.css'
import MyProfile from "./pages/my-profile";
import Finally from "./pages/set-new-password";
import OtherUserProfile from "./pages/OtherUserProfile";
import Search from "./pages/search";
import Onlysearch from "./pages/search/Onlysearch";
import ProfileEdit from './pages/my-profile-edit/'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppProvider>
        <Routes>
        <Route path='/profile-edit' element={<ProfileEdit />} />
        <Route path="/only-search" element={<Onlysearch/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/other-user-profile" element={<OtherUserProfile/>} />
        <Route path="/set-new-password" element={<Finally/>} />
        <Route path="/my-profile" element={<MyProfile/>} />
          <Route path="/settings" element={<SettingsPage/>} />
          <Route path="/blog-post" element={<BlogPost/>} />
          <Route path="/blog-search-result-notfound" element={<BlogSRNotFound />} />
          <Route path="/blog-search-result" element={<BlogSearchResult/>} />
          <Route path="/blog-category" element={<BlogCategory/>} />
          <Route path="/main-blog" element={<MainBlog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route index element={<Home />} />  
          <Route path="home" element={<Home />} >
          {/* <Route path="blog" element={<Blog />} /> */}
            {/* <Route path="blog" element={}>
               <Route path="post" element={} />
            </Route> */}
          </Route>
          {/* <Route path="privacy-Policy" element={} /> */}
          {/* <Route path="profile" element={} /> */}
        </Routes>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
