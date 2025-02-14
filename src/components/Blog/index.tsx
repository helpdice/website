"use client"

import React, { useEffect, useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import type { Blog } from "@/types/blog";
import { Content } from "@helpdice/sdk";

const Blog = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      setLoading(true);
      const blogs = (await Content.articles({
        params: {
          related: true
        }
      })).data.articles;
      if (blogs) {
        setData(blogs)
        setLoading(false);
      }
    })();
  }, []);
  
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Stay informed with our latest news and blogs, offering insights on industry trends, product updates, business strategies, and expert opinions to help you stay ahead and make informed decisions.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {data.slice(0, 3).map((blog: Blog, key: React.Key | null | undefined) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
