import Link from 'next/link';

const fetchPosts = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
    .catch(err => err)
}

export default async function DashboardPage() {
      const posts = await fetchPosts();

      return (
            <h3 style={{textAlign:'center'}}>
                  Utilize la barra de navegacion de arriba para cambiar entre diferentes tipos de dashboard
            </h3>
      )
}
  
  