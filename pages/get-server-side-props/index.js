import { PrismaClient } from "@prisma/client";
import { Heading, Stack, Box, Link } from "@chakra-ui/core";
import _Link from "next/link";

const IndexPage = ({ posts }) => {
  return (
    <Stack spacing={4}>
      {posts.map((post) => {
        return (
          <Box key={post.id}>
            <_Link
              href="/get-server-side-props/[postId]"
              as={`/get-server-side-props/${post.id}`}
            >
              <Link>
                <Heading mb={4} size="md">
                  {post.title}
                </Heading>
              </Link>
            </_Link>
          </Box>
        );
      })}
    </Stack>
  );
};

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const posts = await prisma.post.findMany();

  return {
    props: {
      posts,
    },
  };
}

export default IndexPage;
