import { Tag } from '@helpdice/ui';
import * as React from 'react';
import { getUrl } from '@/utils/routes';

interface QnaProps {
  qna: {
    _id: string;
    question: string;
    marks: string;
    category: string;
    answer: string;
    slug: string;
  };
}

const QNA: React.FunctionComponent<QnaProps> = ({ qna }: QnaProps) => {
  return (
    <div style={{ boxShadow: 'none' }} className="qa card m-0 my-3 p-2">
      <div className="card-body theme_body m-0 mb-2 p-2">
        <fieldset className="p-2">
          <legend className="d-flex alignCenter mb-2 px-1">
            <a
              className="default-text alt_color"
              href={getUrl('QNA_SLUG', { slug: qna.slug })}
            >
              <b>Q. {qna.question}</b>
            </a>
            <Tag ml={0.8} scale={0.7} type="default" data-nosnippet invert>
              {qna.marks}&nbsp;Marks
            </Tag>
          </legend>
          <span data-nosnippet>
            <b>Solution</b>
          </span>
          <span
            style={{ overflow: 'auto' }}
            className="font-14 d-block mt-1"
            dangerouslySetInnerHTML={{ __html: qna.answer }}
            data-nosnippet
          />
          <br />
        </fieldset>
      </div>
    </div>
  );
};

export default QNA;
