import { useState } from 'react'
import { pt } from 'date-fns/locale/pt'
import { format, formatDistanceToNow } from 'date-fns'
import { IComment } from '../../models/Comment'
import { IPostContent } from '../../models/Post'

interface UsePostProps {
  publishedAt: Date
  postContent: IPostContent[]
}

export function UsePost({ publishedAt, postContent }: UsePostProps) {
  const [comments, setComments] = useState<null | IComment[]>(null)
  const [newComment, setNewComment] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: pt,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: pt,
    addSuffix: true,
  })

  const paragraphs = postContent.filter((content) => {
    return content.type === 'paragraph'
  })
  const links = postContent.filter((content) => {
    return content.type === 'link'
  })

  function handleAddNewComment(newComment: string) {
    setComments((state) => [
      ...(state || []),
      {
        id: (comments && comments.length + 1) || 1,
        content: newComment,
      },
    ])
    setNewComment('')
  }

  function handleDeleteComment(commentId: number) {
    setComments((state) => {
      const updatedComments = (state || []).filter(
        (comment) => comment.id !== commentId,
      )
      return updatedComments
    })
  }

  return {
    publishedDateFormatted,
    publishedDateRelativeToNow,
    paragraphs,
    links,
    newComment,
    comments,
    setNewComment,
    handleAddNewComment,
    handleDeleteComment,
  }
}
