import React from "react";
import Link from "next/link";
import type { Blog } from "@/types/blog";
import { getUrl } from "@/utils/routes";
import { Content } from "@helpdice/sdk";

const RelatedPost = async () => {

  const res = await Content.articles({
    params: {
      related: true
    }
  });
  const blogs: Blog[] = res.data.articles;
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts
        </h4>

        <div>
          {blogs.slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={`post-${post._id}-${key}`}
            >
              {/* {post?.image ? (
                <div className="max-w-45 relative h-18 w-45">
                  <Image fill src={post.image} alt="Blog" />
                </div>
              ) : null} */}
              <h5 className="text-sm font-medium text-black transition-all duration-300 hover:text-primary dark:text-gray-400 dark:hover:text-white">
                <Link href={getUrl('BLOG_POST', { category: post.category.slug, slug: post.slug })}>
                  {post.title.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
