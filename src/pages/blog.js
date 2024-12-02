import React, { useState } from 'react';
import '../blog.css';
import post1 from '../posts/post1';
import post2 from '../posts/post2';
import post3 from '../posts/post3';
import post4 from '../posts/post4';
import post5 from '../posts/post5';
import post6 from '../posts/post6';
import post7 from '../posts/post7';


const blogPosts = [post7, post6, post5, post4, post3, post2, post1];


const Blog = () => {
    
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setShowModal(true);
    };

    return (
        <section className="blog">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2 align="center">My Web3 Journal</h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {blogPosts.map((post, index) => (
                <div key={index} className="blog-post">
                    <p><u>{post.date}</u></p>
                    <p style={{ cursor: 'pointer' }} onClick={() => openModal(post.title, post.content)}>
                        {post.title}
                    </p>
                </div>
            ))}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h3 align="center">{modalTitle}</h3>
                        <p>{modalContent}</p>
                    </div>
                </div>
            )}
            <footer align="center" className="footer">
                <small>This Web 3.0 website is hosted on IPFS using peer-to-peer networking</small>
                <br />
                <br />
                <small>Copyright © 2022-2024 Vidhan Mangla.</small>
                <br />
                <small><a href="https://link.storjshare.io/jxwdhp75vxdnkx3zgeeovvobtbqq/jobs-material%2Fbitcoin.pdf" target="_blank" rel="noreferrer">Bitcoin Whitepaper</a> | <a href="https://link.storjshare.io/jxjrs5eyhosfwty3widjvna22a4q/jobs-material%2Fethereum.pdf" target="_blank" rel="noreferrer">Ethereum Yellowpaper</a></small>
            </footer>
        </section>
    );

}

export default Blog
