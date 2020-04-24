import { Box, Link, Stack } from "@chakra-ui/core";
import _Link from "next/link";

const Navbar = () => {
  return (
    <Box bg="purple.800" w="100%" color="white">
      <Box maxW="4xl" mx="auto" p={8}>
        <Stack spacing={4} isInline>
          <Box>
            <_Link href="/">
              <Link>Home</Link>
            </_Link>
          </Box>
          <Box>
            <_Link href="/get-static-props">
              <Link>GetStaticProps</Link>
            </_Link>
          </Box>
          <Box>
            <_Link href="/get-server-side-props">
              <Link>GetServerSideProps</Link>
            </_Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
