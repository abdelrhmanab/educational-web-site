import BlogImg1 from "../assets/images/blog/blog1.jpg"
import BlogImg2 from "../assets/images/blog/blog2.jpg"
import BlogImg3 from "../assets/images/blog/blog3.jpg"
import BlogImg4 from "../assets/images/blog/blog4.jpg"
import Avatar from "../assets/images/blog/avatar.png"

export type BlogPostType = 'image post' | 'video post' | 'text post'

export type BaseBlog = {
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

export type ImagePost = BaseBlog & {
    type: 'image post'
    body: string
    avatar: string
    img: string
    Deta: string
    views: number
    category: string
}

export type TextPost = BaseBlog & {
    type: 'text post'
}

export type VideoPost = BaseBlog & {
    type: 'video post'
}

export type BlogType = ImagePost | TextPost | VideoPost

const blogs_Data: BlogType[] = [
    {
        id: 1,
        title: "Why schools should continue to use Remote learning",
        body: "Why I say old chap that is spiffing in my flat such a fibber mufty mush, porkies barney<br/>pukka only a quid a what a load of rubbish good time.",
        writer: "Charlie Doyle",
        avatar: Avatar,
        img: BlogImg1,
        Deta: " April 18",
        views: 77,
        category: "Web Design",
        type: "image post"
    },
    {
        id: 6,
        title: "I’m thinking I’m back you want a war or youwant to just give me gun everything’s got a price rusty",
        writer: "Judith Cooper",
        type: "text post"
    },
    {
        id: 2,
        title: "Why schools should continue to use Remote learning",
        body: "Why I say old chap that is spiffing in my flat such a fibber mufty mush, porkies barney<br/>pukka only a quid a what a load of rubbish good time.",
        writer: "Charlie Doyle",
        avatar: Avatar,
        img: BlogImg2,
        Deta: " April 18",
        views: 77,
        category: "Web Design",
        type: "image post"
    },
    {
        id: 3,
        title: "Why schools should continue to use Remote learning",
        body: "Why I say old chap that is spiffing in my flat such a fibber mufty mush, porkies barney<br/>pukka only a quid a what a load of rubbish good time.",
        writer: "Charlie Doyle",
        avatar: Avatar,
        img: BlogImg3,
        Deta: " April 18",
        views: 77,
        category: "Web Design",
        type: "image post"
    },
    {
        id: 5,
        title: "I’m thinking I’m back you want a war or youwant to just give me gun everything’s got a price rusty",
        writer: "Judith Cooper",
        type: "text post"
    },
    {
        id: 4,
        title: "Why schools should continue to use Remote learning",
        body: "Why I say old chap that is spiffing in my flat such a fibber mufty mush, porkies barney<br/>pukka only a quid a what a load of rubbish good time.",
        writer: "Charlie Doyle",
        avatar: Avatar,
        img: BlogImg4,
        Deta: " April 18",
        views: 77,
        category: "Web Design",
        type: "image post"
    },


]


export const categories = [
    { id: 1, name: "Art & Design", count: 6 },
    { id: 2, name: "Exercise", count: 4 },
    { id: 3, name: "Photography", count: 8 },
    { id: 4, name: "Environmental Sciences", count: 3 },
    { id: 5, name: "Software Training", count: 5 },
    { id: 6, name: "Software Development", count: 2 },
    { id: 7, name: "Music", count: 10 },
    { id: 8, name: "Material Design", count: 2 },
    { id: 9, name: "Technology", count: 0 },
];

export const tags = [
    "Education",
    "SEO Marketing",
    "Business",
    "Solutions",
    "UX",
    "Case Study",
    "Creative",
    "Insights"
];


export const findBlog = (id: number = 1) => {

    const result = blogs_Data.find(i => i.id === id)


    return result
};


export default blogs_Data