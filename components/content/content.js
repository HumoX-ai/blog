import { calculateEstimatedTimeToRead } from "@/helper/time.format";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Content({ blogs }) {
  const router = useRouter();
  console.log(blogs);
  return (
    <Box width={{ xs: "100%", md: "75%" }}>
      <Grid container spacing={2}>
        {blogs.map((item) => (
          <Grid item xs={12} sm={12} md={6} xl={4} key={item.id} >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, .5)",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 8px 16px rgba(255, 255, 255, .1)",
                cursor: "pointer",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor:"pointer"
              }}
              onClick= { () => router.push(`/blog/${item.slug}`)}
            >
              <Box position={"relative"} height={{ xs: "30vh", md: "50vh" }}>
                <Image
                  src={item.image.url}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
              </Box>
              <Box>
                <Typography color="primary" variant="h5" marginTop={"30px"}>
                  {item.title}
                </Typography>
                <Typography variant="body1" color={"gray"}>
                  {item.excerpt}
                </Typography>
              </Box>
              <Box
                sx={{ mt: 1, display: "flex", justifyContent: "flex-end" }}
                color={"#fff"}
              >
                {format(new Date(item.createdAt), "dd MMM, yyyy")} &#x2022;{" "}
                {calculateEstimatedTimeToRead(item.description.text)} min
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
