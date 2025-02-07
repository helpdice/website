import './index.scss';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getUrl } from '@/utils/routes';

interface PostProps {
  post: {
    title: string;
    date_published: string;
    category: {
      name: string;
    };
    desc: string;
    slug: string;
  };
  header?: boolean;
  description?: boolean;
}

export const Post: React.FunctionComponent<PostProps> = ({
  post,
  header = true,
  description = true,
}: PostProps) => {
  return (
    <article className="card__blog">
      {header && (
        <>
          <header className="card__thumb">
            <a
              href={getUrl('BLOG_POST', {
                category: 'technology',
                slug: post.slug,
              })}
            >
              <Image
                width="380"
                height={100}
                src="/images/default_blog.webp"
                alt={post.title}
              />
            </a>
          </header>
          <div className="card__date">
            <span className="card__date__month">
              {/* {post.date_published} */}
              {format(post.date_published, 'd MMM yyyy')}
            </span>
          </div>
        </>
      )}
      <div className="card__body" style={{ height: description ? '' : 'auto' }}>
        {header && (
          <div className="card__category">
            <Link href="/">{post.category.name}</Link>
          </div>
        )}
        <div className="card__title">
          <a
            href={getUrl('BLOG_POST', {
              category: 'technology',
              slug: post.slug,
            })}
          >
            {post.title}
          </a>
        </div>
        {/* <!-- <div className="card__subtitle">Donec posuere vulputate</div> --> */}
        {description && (
          <p className="card__description">
            {`${post.desc.substring(0, 170)}...`}
          </p>
        )}
        <br />
      </div>
      <footer className="card__footer">
        <span className="icon mr-2">
          <span className="time-icon" />
          &ensp;6 min
        </span>
        <span className="icon mr-2">
          <span className="comment-icon" />
          &ensp;0 comments
        </span>
      </footer>
    </article>
  );
};

export default Post;
