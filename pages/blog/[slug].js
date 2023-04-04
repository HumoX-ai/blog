import { Sidebar } from "@/components";
import Layout from "@/layout/layout";
import { BlogsService } from "@/services/blog.service";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function DetailBlogPage({ blog, latestBlogs, categories }) {
  return (
    <Layout>
      <Container maxWidth="xxl">
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: { xs: "column", md: "row" },
            padding: "20px",
          }}
        >
          <Box width={{ xs: "100%", md: "70%" }}>
            <Typography
              variant="h4"
              color="primary"
              sx={{ textAlign: "center", mb: 4 }}
            >
              {blog.title}
            </Typography>
            <Box
              sx={{
                m: "auto",
                backgroundColor: "#000",
                padding: "20px",
                borderRadius: 3,
                boxShadow: "0px 8px 16px rgba(255,255,255,.1)",
                position: "relative",
                width: { xs: "100%", md: "50%" },
                height: { xs: "30vh", md: "50vh" },
              }}
            >
              <Image
                src={blog.image.url}
                alt={blog.title}
                fill
                style={{ objectFit: "cover", borderRadius: 3, }}
              />
            </Box>
            <Typography color="primary" sx={{ opacity: ".4", mt: 4 }}>
              {blog.excerpt}
            </Typography>
            <div
              style={{ color: "#d9d9d9",}}
              dangerouslySetInnerHTML={{ __html: blog.description.html }}
            />
          </Box>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
        </Box>
      </Container>
    </Layout>
  );
}
export const getServerSideProps = async ({ query }) => {
  const blog = await BlogsService.getDetailedBlog(query.slug);
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategories();
  return {
    props: {
      blog,
      latestBlogs,
      categories,
    },
  };
};
