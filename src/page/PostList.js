import React, { useState, useEffect, useRef, useUrlState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import BlogPost from '../components/BlogPost';
import Container from '../components/Container';
import Footer from '../components/Footer'

// 笔记列表
function PostList(props) {

    document.title = props.title

    useEffect(()=>{
        // console.log('scrollTo(0, 0)');
        window.scrollTo(0, 0);

    })


    return <div>

        <Nav />
        <BlogPost />
        <Footer />

    </div>


}

export default PostList;