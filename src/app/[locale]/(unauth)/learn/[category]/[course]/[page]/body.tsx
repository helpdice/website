'use client';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
// import './index.scss';
// import { useTranslations } from 'next-intl';
import { Card, Grid, Loading } from '@helpdice/ui';
// import { useParams } from 'next/navigation';

// import { useBlogs } from '@/app/[locale]/(unauth)/api/blog.services';
// import { useCoursePages } from '@/app/[locale]/(unauth)/api/learn.services';
// import { useBlogs } from '@/app/[locale]/(unauth)/api/blog.services';
// import { useCoursePages } from '@/app/[locale]/(unauth)/api/learn.services';
// import POST from '@/app/[locale]/(unauth)/blog/post';
// import { getUrl } from '@/utils/routes';
// import { getTranslations } from 'next-intl/server';

export default function CourseBody({ Page }: { Page?: any }) {
  // const { course, page } = useParams();
  // console.log(category, course, page);
  // const t = useTranslations('About');
  // const { data, status } = useCoursePages(course);
  // const {
  //   data: Page,
  //   status: statusPage,
  //   error: errorPage,
  // } = useCoursePages(course, page);
  // const currentPage =
  //   status === 'success'
  //     ? data.children.find(
  //         (chd: { slug: string | undefined }) => chd.slug === page,
  //       )
  //     : null;
  // const prevPage =
  //   status === 'success' ? data.children[currentPage.index - 1] : null;
  // const nextPage =
  //   status === 'success' ? data.children[currentPage.index + 1] : null;
  // console.log(currentPage);
  // console.log(status, data, nextPage);
  // const {
  //   data: blogs,
  //   status: statusBlogs,
  //   // error: errorBlogs,
  // } = useBlogs(true);

  return (
    <Grid.Container gap={1}>
      <Grid md={6} xs={24}>
        <Card width="100%">
          <div>
            <p className="font-weight-bold mb-2">
              <strong>COURSE CONTENT</strong>
            </p>
            <hr className="theme_border title-hr" />
            {status === 'pending' ? (
              <Loading />
            ) : status === 'error' ? (
              <div />
            ) : (
              <ol
                className="parent"
                style={{ listStyle: 'none', marginLeft: 0, marginRight: 0 }}
              >
                <li>
                  <details open>
                    <summary>
                      {/* <span>{data.title}</span> */}
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
                      {/* {data.children.map(
                        (
                          child: { _id: string; title: string; slug: string },
                          indx: number,
                        ) => (
                          <li key={`sub-category-${child._id}-${indx}`}>
                            <a
                              href={getUrl('COURSE_PAGE', {
                                category: data.category.slug,
                                course: data.slug,
                                page: child.slug,
                              })}
                            >
                              {child.title}
                            </a>
                          </li>
                        ),
                      )} */}
                    </ul>
                  </details>
                </li>
              </ol>
            )}
            {/* <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-7034818195807373"
                data-ad-slot="6904722456" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
          </div>
        </Card>
      </Grid>
      <Grid xs={24} md={12}>
        <Card width="100%">
          {/* {statusPage === 'pending' ? (
            <Loading />
          ) : statusPage === 'error' ? (
            <div>{errorPage.message}</div>
          ) : (
            
          )} */}
          <>
            <div className="tutorial-navigation">
              <div className="container d-flex contentCorner position-relative">
                {/* {prevPage && (
                  <a
                    href={getUrl('COURSE_PAGE', {
                      category: data.category.slug,
                      course: data.slug,
                      page: prevPage.slug,
                    })}
                    className="bg-dark d-flex alignCenter ripple round-25 px-3 py-2 text-white"
                  >
                    &#10094;&ensp;
                    {prevPage?.title}
                  </a>
                )}
                <div>{currentPage.title}</div>
                {nextPage && (
                  <a
                    href={getUrl('COURSE_PAGE', {
                      category: data.category.slug,
                      course: data.slug,
                      page: nextPage.slug,
                    })}
                    className="bg-dark d-flex alignCenter ripple round-25 px-3 py-2 text-white"
                  >
                    {nextPage?.title}&ensp;&#10095;
                  </a>
                )} */}
              </div>
            </div>
            <br />
            {/* {prevPage || nextPage ? <Divider /> : ''} */}
            <br />
            <div dangerouslySetInnerHTML={{ __html: Page.body }} />
          </>
          {/* {% if request.user.is_admin or request.user.is_staff %}
                        <div className="p-3 m-3 just-shadow d-none" id="course_new_page" style="height:140px;">
                        <lable>New Page Title</lable><input className="form-control mt-2" id="new_page_title" type="text" />
                        <a className="btn btn-info p-1 mt-2" onclick="course_new_page()">Create</a>
                        </div>
                        {% endif %}
                        {% include 'components/tutorialNavigation/tutorialNavigation.htm' %}
                        <h1 className="heading text-white p-2 mt-3 mb-4 default-bg">{{title}}</h1>
                        {% block course_content%}{% endblock %} */}
          {/* <br />
                                    <hr className="title-hr mb-2" /> */}
          {/* <i style="margin-right:8px;color:green;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                        </svg></i>Happy learning !<br /> 
                    */}
        </Card>
      </Grid>
      <Grid xs={24} md={6}>
        <Card width="100%">
          <section className="section">
            <p className="font-weight-bold mb-2">
              <strong>SHARE THIS</strong>
            </p>
            <hr className="theme_border title-hr" />
            <div className="social-bar">
              <ol className="list-unstyled">
                <li>
                  <a
                    href="#"
                    data-sharer="facebook"
                    data-url="{{request.build_absolute_uri}}"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-facebook icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>{' '}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-sharer="instagram"
                    data-url="{{request.build_absolute_uri}}"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-instagram icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-sharer="linkedin"
                    data-url="{{request.build_absolute_uri}}"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-linkedin icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-sharer="whatsapp"
                    data-title="{{title}}"
                    data-url="{{request.build_absolute_uri}}"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-whatsapp icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>
          </section>
          <section className="section mb-5">
            <p className="font-weight-bold mb-2">
              <strong>POPULAR BLOGS</strong>
            </p>
            <hr className="theme_border title-hr" />
            {/* {statusBlogs === 'pending' ? (
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
                      key={`post-${index}`}
                      post={post}
                      header={false}
                      description={false}
                    />
                  ),
                )}
              </section>
            )} */}
          </section>
          <div className="container-fluid">
            <div className="d-flex flex-row mb-2">
              <div className="ml-2 mr-2">
                <span className="h4 default-text alt_color">
                  <strong className="font-weight-bold">You May</strong>
                  &nbsp;also like
                </span>
              </div>
            </div>
            <hr className="theme_border title-hr" />
          </div>
          <br />
          <div className="mb-2 text-left">
            {/* <ul className="list-unstyled">
                {% if courses %}
                {% for course in courses %}
                {% if course %}
                    <li className="mb-2">
                        <a href="{% url 'course_page' course.course_category.slug course.slug course.index.0.title|slugify %}" className="btn px-0 list w-100 just-shadow">&emsp;&#10148;&emsp;{{course.title}}</a>
                    </li>
                    {% else %}
                    <div className="container mt-3">
                        <div className="card m-auto" style="min-height:25rem;">
                            <div className="card-body mt-2 mb-2">
                                <h2 className="card-title">No Courses Found</h2>
                            </div>
                        </div>
                    </div>
                {% endif %}
                {% endfor %}
                {% else %}
                {% include 'snippets/home_course.htm' with query=query %}
                {% endif %}
            </ul> */}
          </div>
          {/* <script>
            function course_new_page() {
                $.ajax({
                    type: 'POST',
                    url: '/w/course_new_page/',
                    data: {
                        title_course: $('#title_course').val(),
                        new_page_title: $('#new_page_title').val(),
                        current_page_link: $('#current_page_link').val(),
                        category_course: $('#category_course').val(),
                        csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                    },
                });
                window.location.reload();
            }
        </script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
          {/* <!-- mcq_category --><ins className="adsbygoogle" style="display:block" data-ad-client="ca-pub-7034818195807373"
            data-ad-slot="4666583681" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
        </Card>
      </Grid>
    </Grid.Container>
  );
}
