'use client';

/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
// import './index.scss';

// import { useTranslations } from 'next-intl';
import { Card, Grid, Text } from '@helpdice/ui';
import Link from 'next/link';

// import { useBlogs } from '../api/blog.services';
// import { useCourseCategories, useCourses } from '../api/learn.services';
// import POST from '../blog/post';
// import Course from './course';

export default function LearnBody() {
  // const t = useTranslations('About');
  // const { data, status } = useCourses();
  // const {
  //   data: categories,
  //   status: statusCategories,
  //   // error: errorCategories,
  // } = useCourseCategories();
  // const {
  //   data: blogs,
  //   status: statusBlogs,
  //   // error: errorBlogs,
  // } = useBlogs(true);

  return (
    <div>
      <div className="container-fluid mobile-margin mb-3 top-inside">
        {/* {% comment %}
                <div className="container-fluid learn-container">
                    <div className="d-flex just-shadow mx-3 py-2 px-3 course_right_menu">
                    {% if user.is_admin %}
                    <button data-toggle="modal" data-target="#add_course"
                        className="btn btn-sm d-flex py-2 px-3 button--blue pointer contentCenter alignCenter">
                        <span className="plus-icon mt-1 mr-2"></span>
                        <span className="h6">COURSE</span>
                    </button>
                    {% endif %}
                    &emsp;
                    </div>
                </div>
                {% endcomment %} */}
        <Grid.Container gap={2} justify="center">
          <Grid xs={24} md={6}>
            <Card width="100%">
              <Text>
                <strong>CATEGORIES</strong>
              </Text>
              <hr className="theme_border title-hr" />
              {/* {statusCategories === 'pending' ? (
                <Loading />
              ) : statusCategories === 'error' ? (
                <div />
              ) : (
                <ol
                  className="parent"
                  style={{ listStyle: 'none', marginLeft: 0, marginRight: 0 }}
                >
                  {categories.map(
                    (
                      category: {
                        _id: any;
                        name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | Iterable<React.ReactNode>
                          | null
                          | undefined;
                        children: { _id: string; name: string; slug: string }[];
                      },
                      index: any,
                    ) => (
                      <li key={`category-${category._id}-${index}`}>
                        <details>
                          <summary>
                            <span>{category.name}</span>
                            <em
                              onClick={() => {}}
                              className="mdi mdi-chevron-down"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-box-arrow-up-right"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                />
                                <path
                                  fillRule="evenodd"
                                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                />
                              </svg>
                            </em>
                          </summary>
                          {/* <ul>
                                                {category.children.map((child: { _id: string, name: string; slug: string; }, indx: number) => (
                                                    <li key={`sub-category-${child._id}-${indx}`}>
                                                        <a href={getUrl("MCQ_SLUG", { slug: child.slug })}>
                                                            {child.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                        </details>
                      </li>
                    ),
                  )}
                </ol>
              )} */}
              <ol
                className="parent"
                style={{ listStyle: 'none', marginLeft: 0, marginRight: 0 }}
              >
                <li>
                  <details open>
                    <summary>
                      <span>CBSE</span>
                      <em onClick={() => {}} className="mdi mdi-chevron-down">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                          />
                        </svg>
                      </em>
                    </summary>
                    <ul>
                      <li>
                        <Link href="/">Class 12</Link>
                      </li>
                      <li>
                        <Link href="/">Class 11</Link>
                      </li>
                      <li>
                        <Link href="/">Class 10</Link>
                      </li>
                      <li>
                        <Link href="/">Class 9</Link>
                      </li>
                      <li>
                        <Link href="/">Class 8</Link>
                      </li>
                      <li>
                        <Link href="/">Class 7</Link>
                      </li>
                      <li>
                        <Link href="/">Class 6</Link>
                      </li>
                      <li>
                        <Link href="/">Class 5</Link>
                      </li>
                      <li>
                        <Link href="/">Class 4</Link>
                      </li>
                      <li>
                        <Link href="/">Class 3</Link>
                      </li>
                      <li>
                        <Link href="/">Class 2</Link>
                      </li>
                      <li>
                        <Link href="/">Class 1</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ol>
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-7034818195807373"
                data-ad-slot="6904722456"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
              <ol
                className="parent"
                style={{ listStyle: 'none', marginLeft: 0, marginRight: 0 }}
              >
                <li>
                  <details open>
                    <summary>
                      <span>NCERT</span>
                      <em onClick={() => {}} className="mdi mdi-chevron-down">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                          />
                        </svg>
                      </em>
                    </summary>
                    <ul>
                      <li>
                        <Link href="/">Class 12</Link>
                      </li>
                      <li>
                        <Link href="/">Class 11</Link>
                      </li>
                      <li>
                        <Link href="/">Class 10</Link>
                      </li>
                      <li>
                        <Link href="/">Class 9</Link>
                      </li>
                      <li>
                        <Link href="/">Class 8</Link>
                      </li>
                      <li>
                        <Link href="/">Class 7</Link>
                      </li>
                      <li>
                        <Link href="/">Class 6</Link>
                      </li>
                      <li>
                        <Link href="/">Class 5</Link>
                      </li>
                      <li>
                        <Link href="/">Class 4</Link>
                      </li>
                      <li>
                        <Link href="/">Class 3</Link>
                      </li>
                      <li>
                        <Link href="/">Class 2</Link>
                      </li>
                      <li>
                        <Link href="/">Class 1</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ol>
            </Card>
          </Grid>
          <Grid xs={24} md={11}>
            <Card width="100%">
              <p className="font-weight-bold spacing my-2">
                <strong>COURSES</strong>
              </p>
              <hr
                className="title-hr theme_border"
                style={{ width: '200px' }}
              />
              {/* {status === 'pending' ? (
                <Loading />
              ) : status === 'error' ? (
                <div />
              ) : (
                data.map((course: any) => (
                  <Course key={`course-${course._id}`} course={course} />
                ))
              )} */}
            </Card>
          </Grid>
          <Grid xs={24} md={6} data-nosnippet>
            {/* <Card width="100%">
              <div className="popular-posts">
                <p className="font-weight-bold spacing my-2">
                  <strong>POPULAR POSTS</strong>
                </p>
                <hr className="theme_border title-hr" />
                {statusBlogs === 'pending' ? (
                  <Loading />
                ) : statusBlogs === 'error' ? (
                  <div />
                ) : (
                  <section className="mb-5 pb-0">
                    {blogs.map(
                      (
                        post: {
                          title: string;
                          date_published: string;
                          category: any;
                          desc: string;
                          slug: string;
                        },
                        index: any,
                      ) => (
                        <POST
                          description={false}
                          header={false}
                          key={`post-${index}`}
                          post={post}
                        />
                      ),
                    )}
                  </section>
                )}
                {/* {% include 'ads/ad-blog.htm' %}
              </div>
            </Card> */}
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
