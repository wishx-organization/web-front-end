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
import './index.css'
import MyProfile from "./pages/my-profile";
import Finally from "./pages/set-new-password";
import OtherUserProfile from "./pages/OtherUserProfile";
import Search from "./pages/search";
import Onlysearch from "./pages/search/Onlysearch";
import ProfileEdit from './pages/my-profile-edit/'
import WishList from "./pages/wishes-list";
import Wish_pages_second from "./pages/wish-pagess/indexsecond";
import Wish_pages from "./pages/wish-pagess";
import Wish_pages_four from './pages/wish-pagess/indexfour'
import Wish_pages_three from './pages/wish-pagess/indexthree'
import Created_Success_Wish from "./pages/creating-success-wish";
import Created_Wish from "./pages/creating-wish";
import Editing_Wish from "./pages/editing-wish";
import Rating from "./pages/rating";
import Calendar from "./pages/calendar";
import Payment from "./pages/payment";
import Messages from "./pages/messages";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppProvider>
        <Routes>
        <Route path="/messages" element={<Messages />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/wish-edit" element={<Editing_Wish />} />
        <Route path="/creating-wish" element={<Created_Wish />} />
        <Route path="/creating-wish-success" element={<Created_Success_Wish />} />
        <Route path="/other-user-wish-complete" element={<Wish_pages_second/>} />
        <Route path='/my-wish-complete' element={<Wish_pages_four/>}/>
        <Route path='/my-wish' element={<Wish_pages_three/>}/>
        <Route path="/other-user-wish" element={<Wish_pages />} />
        <Route path="/wish-list" element={<WishList/>} />
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
