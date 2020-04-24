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
              href="/get-static-props/[postId]"
              as={`/get-static-props/${post.id}`}
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

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const posts = await prisma.post.findMany();

  return {
    props: {
      posts,
    },
  };
}

export default IndexPage;
