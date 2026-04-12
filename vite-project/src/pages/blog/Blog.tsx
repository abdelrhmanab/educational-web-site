import React from 'react'
import BgLinkPages from '../../components/bgLinkPages'
import SectionContainar from '../../features/SectionContainar'
import MainPartBlog from '../../features/blog/MainPartBlog'
import BlogSideBar from '../../features/blog/BlogSideBar'

const BlogPage = () => {
    return (
        <div className='w-full'>
            <BgLinkPages title='Blog' />
            <div className='bg-slate-50/30 w-full m-auto px-2  flex flex-col items-center lg:px-10 py-2 lg:py-28  gap-12'>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <MainPartBlog />
                    <BlogSideBar />
                </div>


            </div>

        </div>
    )
}

export default BlogPage