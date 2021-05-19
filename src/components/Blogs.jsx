/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'

import '../styles/blogs.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectsearchInput, setBlogData } from '../features/userSlice';

const Blogs = () => {

    const searchInput = useSelector(selectsearchInput);
    const blogURL = `https://gnews.io/api/v4/search?q=${searchInput}&token=e7be3a68388390ddf50ad4d8c4def953`

    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(blogURL)
            .then((resp) => {
                dispatch(setBlogData(resp.data))
                setBlogs(resp.data)
                setLoading(false)
            })
            .catch((error) => console.log(error))
     }, [searchInput]);

    return (
        <div className="blog__page">
            <h1 className="blog__page__header">Blogs</h1>
            {loading ? <h1 className="loading">Loading ... </h1> : ""}
            <div className="blogs">
                {blogs?.articles?.map((blog) => (
                    <a className="blog" target="_blank" rel="noreferrer" href={blog.url}>
                        <img src={blog.image} alt="blog-title"  />
                        <div>
                            <h3 className="sourceName">
                                <span>{blog.source.name}</span>
                                <p>{blog.publishedAt}</p>
                            </h3>
                            <h1>{blog.title}</h1>
                            <p>{blog.desciption}</p>
                        </div>
                    </a>
                ))}

                {blogs?.totalArticles === 0 && (
                    <h1 className="no__blogs">
                        No blogs Available 😞.
                         Try searching something else to get the news. 
                    </h1>
                )}
            </div>
        </div>
    )
}

export default Blogs
