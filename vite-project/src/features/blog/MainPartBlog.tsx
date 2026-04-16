import blogs_Data from '../../data/blog_Data'


import ImageCard from './cards/ImageCard';
import TextCard from './cards/TextCard';


const MainPartBlog = () => {
    return (
        <div className="lg:col-span-8 flex flex-col gap-20 p-5">

            {blogs_Data.map(i => {
                if (i.type === "image post") {
                    return (
                        <ImageCard key={i.id} i={i} />
                    )
                }

                if (i.type === "text post") {
                    return (
                        <TextCard key={i.id} i={i} />
                    )
                }
            })}

        </div>
    )
}

export default MainPartBlog