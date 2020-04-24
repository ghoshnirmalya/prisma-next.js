import { PrismaClient } from "@prisma/client";
import { Heading, Box } from "@chakra-ui/core";

const IndexPage = ({ post }) => {
  return (
    <Box key={post.id}>
      <Heading mb={4} size="md">
        {post.title}
      </Heading>
    </Box>
  );
};

export async function getStaticProps(ctx) {
  const prisma = new PrismaClient();

  const post = await prisma.post.findOne({
    where: {
      id: parseInt(ctx.params.postId),
    },
  });

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: "1" } }, { params: { postId: "2" } }],
    fallback: false,
  };
}

export default IndexPage;
