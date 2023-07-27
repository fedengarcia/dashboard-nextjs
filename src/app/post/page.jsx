import Link from 'next/link';
import {LikeButton} from '../../components/LikeButton/LikeButton'
const fetchPosts = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
    .catch(err => err)
}

export default async function PostPage() {
  const posts = await fetchPosts();

  return (
    <>
      {posts.slice(0,30).map(post => (
        <article key={post.id} style={{display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
          <Link href='/post/[id]' as={`/post/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
          </Link>
          <LikeButton id={post.id}/>
        </article>
      ))}
    </>        
  )
}

