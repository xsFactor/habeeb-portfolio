import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import SingleBlog from './SingleBlog/SingleBlog';

function Blog() {
    const { theme } = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {blogData.length > 0 && (
                <div className="blog" id="blog" style={{backgroundColor: theme.secondary}}>
                    <div className="blog--header">
                        <h1 style={{color: theme.primary}}>Blog</h1>
                    </div>
                    <div className="blog--body">
                        <div className="blog--bodyContainer">
                            {blogData.slice(0, 3).reverse().map(blog => (
                                <SingleBlog
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div>

                        {blogData.length > 3 && (
                            <div className="blog--viewAll">
                                <button
                                    className="blog--viewAllBtn"
                                    style={{ backgroundColor: theme.primary }}
                                    onClick={() => setShowModal(true)}
                                >
                                    <span className="blog--viewAllText" style={{ color: theme.secondary }}>
                                        View All
                                    </span>
                                    <span className="blog--viewAllArrow" style={{ backgroundColor: theme.secondary, color: theme.primary }}>
                                        →
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Modal */}
                    {showModal && (
                        <div className="blog--modalOverlay" onClick={() => setShowModal(false)}>
                            <div
                                className="blog--modal"
                                style={{ backgroundColor: theme.secondary }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header */}
                                <div className="blog--modalHeader">
                                    <h2 style={{ color: theme.primary }}>All Blogs</h2>
                                    <button
                                        className="blog--modalClose"
                                        style={{ backgroundColor: theme.primary, color: theme.secondary }}
                                        onClick={() => setShowModal(false)}
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Modal Body */}
                                <div className="blog--modalBody">
                                    {blogData.slice().reverse().map(blog => (
                                        <SingleBlog
                                            theme={theme}
                                            title={blog.title}
                                            desc={blog.description}
                                            date={blog.date}
                                            image={blog.image}
                                            url={blog.url}
                                            key={blog.id}
                                            id={blog.id}
                                        />
                                    ))}
                                </div>

                                {/* Modal Footer */}
                                <div className="blog--modalFooter" style={{ borderTop: `1px solid ${theme.primary30}` }}>
                                    <Link to="/blog" onClick={() => setShowModal(false)}>
                                        <button
                                            className="blog--gotoBtn"
                                            style={{ backgroundColor: theme.primary }}
                                        >
                                            <span className="blog--viewAllText" style={{ color: theme.secondary }}>
                                                Go to All Blogs
                                            </span>
                                            <span className="blog--viewAllArrow" style={{ backgroundColor: theme.secondary, color: theme.primary }}>
                                                →
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Blog