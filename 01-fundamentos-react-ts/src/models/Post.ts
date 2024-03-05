import { IAuthor } from './Author'

export interface IPostContent {
  type: 'paragraph' | 'link'
  content: string
}

export interface IPost {
  id: number
  author: IAuthor
  postContent: IPostContent[]
  publishedAt: Date
}
