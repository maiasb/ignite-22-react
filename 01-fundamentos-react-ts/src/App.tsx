import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Caio Maia"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium nostrum repellendus quidem perferendis facilis laudantium. A optio deleniti at commodi itaque eveniet suscipit placeat? Architecto corporis perferendis aliquid ex."
          />
          <Post
            author="Dante"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium nostrum repellendus quidem perferendis facilis laudantium. A optio deleniti at commodi itaque eveniet suscipit placeat? Architecto corporis perferendis aliquid ex."
          />
        </main>
      </div>
    </>
  )
}
