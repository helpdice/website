/* eslint-disable react/no-unescaped-entities */
// import { useMcqCategories, useMcqs } from '@src/api/mcq.services';
import './index.scss';

import * as React from 'react';

import { getUrl } from '@/utils/routes';
import slugify from '@/utils/slugify';
// import { useDispatch } from 'react-redux';

interface CourseProps {
  course: {
    title: string;
    slug: string;
    category: any;
    index: any[];
    likes_count: number;
    description: string;
  };
}

const Course: React.FunctionComponent<CourseProps> = ({
  course,
}: CourseProps) => {
  return (
    <div className="course row">
      <div className="course-preview col-lg-3 col-md-4 col-sm-12">
        <h6>Course</h6>
        <h2>{course.title}</h2>
        <a
          href={getUrl('COURSE_PAGE', {
            category: course.category.slug,
            course: course.slug,
            page: slugify(course?.index[0]?.title),
          })}
        >
          View all chapters <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div className="course-info col-lg-7 col-md-7 col-sm-12">
        {/* <div className="progress-container">
				<div className="progress"></div>
				<span className="progress-text">
					6/9 Challenges
				</span>
			</div> */}
        <h6>Chapters {course.index?.length ?? 0}</h6>
        <p>{course.likes_count} Likes</p>
        <p>{`${course.description.substring(0, 170)}...`}</p>
        <br />
        <br />
        <br />
        <a
          href={getUrl('COURSE_PAGE', {
            category: course.category.slug,
            course: course.slug,
            page: slugify(course?.index[0]?.title),
          })}
          className="btn text-white"
        >
          Continue
        </a>
      </div>
    </div>
  );
};

export default Course;
