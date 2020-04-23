import { PrismaClient } from "@prisma/client";

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany({
    include: { posts: true },
  });

  const posts = await prisma.post.findMany({
    include: { author: true },
  });

  return {
    props: {
      users,
      posts,
    },
  };
}

export default ({ users, posts }) => (
  <>
    {users.map((user) => (
      <div key={user.id}>{user.name}</div>
    ))}
    {posts.map((post) => (
      <div key={post.id}>{post.title}</div>
    ))}
  </>
);
