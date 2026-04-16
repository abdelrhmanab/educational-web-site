import Icon from "../../../assets/images/blog/,,,.png"

type BlogPostType = 'image post' | 'video post' | 'text post'

type BlogType = {
  id: number
  title: string
  writer: string
  type: BlogPostType

  body?: string
  avatar?: string
  img?: string
  Deta?: string
  views?: number
  category?: string
}
type Props = {
    i: BlogType
}


const TextCard = ({ i }:Props) => {
    return (
        <div key={i.id} className="w-full bg-blue-600 pl-1 shadow-lg rounded-2xl ">
            <div className="w-full relative bg-white  rounded-2xl px-8 py-20 flex flex-col justify-center  gap-5">
                <h3 className='text-3xl'>{i.title}</h3>
                <p className='text-xl flex items-center gap-2'><span className="bg-gray-600 w-5 h-0.5"></span> {i.writer}</p>
                <img className='right-8 bottom-0 absolute' src={Icon} alt="" />
            </div>
        </div>
    )
}

export default TextCard