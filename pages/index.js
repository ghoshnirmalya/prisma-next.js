import { PrismaClient } from "@prisma/client";
import { Heading, Stack, Box } from "@chakra-ui/core";

const IndexPage = ({ posts }) => {
  return (
    <Stack spacing={4}>
      {posts.map((post) => {
        return (
          <Box key={post.id}>
            <Heading mb={4} size="md">
              {post.title}
            </Heading>
          </Box>
        );
      })}
    </Stack>
  );
};

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const posts = await prisma.post.findMany({
    include: { author: true },
  });

  return {
    props: {
      posts,
    },
  };
}

export default IndexPage;
