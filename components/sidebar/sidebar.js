import { navItems } from "@/config/constants";
import { calculateEstimatedTimeToRead } from "@/helper/time.format";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

export default function Sidebar({ latestBlogs, categories }) {
  const router = useRouter();
  console.log(latestBlogs);
  return (
    <Box width={{ xs: "100%", md: "25%" }}>
      <Box
        style={{ position: "sticky", top: "100px" }}
        sx={{ transition: "all .3 ease-in" }}
      >
        <Box>
          <Typography sx={{ pb: 3 }} color="primary" variant="h5">
            So`nggi qo`shilgan postlar
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {latestBlogs.map((item) => (
              <Box
                sx={{ cursor: "pointer" }}
                key={item.id}
                onClick={() => router.push(`/blog/${item.slug}`)}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    justifyContent: "center",
                    m: "auto",
                    backgroundColor: "#0a1929",
                    borderRadius: "0px 25px 0px 25px",
                    boxShadow: "2px 2px 4px #4a707a, -2px -2px 4px #4a707a",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={item.image.url}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      color="primary"
                      component="div"
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "20px",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        alt={item.author.name}
                        src={item.author.avatar.url}
                      />
                      <Box>
                        <Typography color="primary" variant="body2">
                          {item.author.name}
                        </Typography>
                        <Box sx={{ color: "#fff" }}>
                          <Typography variant="body2" sx={{ opacity: ".4" }}>
                            {format(new Date(item.createdAt), "dd MMM, yyyy")}{" "}
                            &#x2022;{" "}
                            {calculateEstimatedTimeToRead(
                              item.description.text
                            )}{" "}
                            min ago
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardActions>
                </Card>

                <Divider sx={{ backgroundColor: "grey", mt: "20px" }} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            mt: "20px",
            p: "20px",

            borderRadius: 2,
            boxShadow: "2px 2px 4px #4a707a, -2px -2px 4px #4a707a",
          }}
        >
          <Typography
            color="primary"
            variant="h5"
            sx={{ textDecoration: "underline" }}
          >
            Kategoriyalar
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {categories.map((item) => (
              <Fragment key={item.slug}>
                <Button
                  onClick={() => router.push(`/category/${item.slug}`)}
                  sx={{ justifyContent: "flex-start", height: "50px" }}
                >
                  {item.label}
                </Button>
                <Divider sx={{ backgroundColor: "grey" }} />
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
