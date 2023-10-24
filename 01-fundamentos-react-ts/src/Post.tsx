interface PostProps {
  author?: string
  content?: string
}

export function Post({ author, content }: PostProps) {
  return (
    <>
      <div>
        <strong>Autor:</strong>
        <p>{author}</p>
      </div>
      <div>
        <strong>Conteúdo:</strong>
        <p>{content}</p>
      </div>
    </>
  )
}
