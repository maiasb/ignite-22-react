import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Caio Maia"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium nostrum repellendus quidem perferendis facilis laudantium. A optio deleniti at commodi itaque eveniet suscipit placeat? Architecto corporis perferendis aliquid ex."
      />
      <Post
        author="Dante"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium nostrum repellendus quidem perferendis facilis laudantium. A optio deleniti at commodi itaque eveniet suscipit placeat? Architecto corporis perferendis aliquid ex."
      />
    </>
  )
}
