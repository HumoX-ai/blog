import { Content, Sidebar } from "@/components";
import Layout from "@/layout/layout";
import { BlogsService } from "@/services/blog.service";
import { Box } from "@mui/material";
import React from "react";

export default function CategoryDetailPage({ blogs, latestBlogs, categories }) {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
          padding: "20px",
        }}
      >
        <Sidebar latestBlogs={latestBlogs} categories={categories} />
        <Content blogs={blogs} />
      </Box>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const blogs = await BlogsService.getDetailedCategoriesBlog(query.slug);
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategories();
  return {
    props: {
      blogs,
      latestBlogs,
      categories,
    },
  };
};
