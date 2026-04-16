
import { useParams } from 'react-router-dom'
import { findBlog } from '../../data/blog_Data'
import Page404 from '../404'
import HeroSecBlog from '../../features/blog/HeroSecBlog'
import BlogSideBar from '../../features/blog/BlogSideBar'
import SingleBlogMainPart from '../../features/blog/SingleBlogMainPart'

function SingleBlog() {

    const { id } = useParams<{ id?: string }>()

    const blog = id ? findBlog(+id) : undefined
    // console.log(blog);


    if (!blog) {
        return (
            <Page404 />
        )
    }

    return (
        <div className='w-full'>
            <HeroSecBlog blog={blog} />
            <div className='bg-slate-50/30 w-full m-auto px-2  flex flex-col items-center lg:px-10 py-2 lg:py-28  gap-12'>

                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <SingleBlogMainPart blog={blog} />
                    <BlogSideBar />
                </div>


            </div>
        </div>
    )
}

export default SingleBlog