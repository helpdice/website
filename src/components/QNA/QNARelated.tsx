"use client"

import type { QNAListItem } from "@/types/qna";
import { getUrl } from "@/utils/routes";
import { Text } from "@helpdice/ui";
import Link from "next/link";

function QnaRelated({ qnas }: { qnas: QNAListItem[] }) {
  return (
    <div className="w-full my-4">
      <Text className="my-1">Related QNA's</Text>
      <ul className="rounded-lg dark:text-white"> {/* divide-y divide-gray-200 */}
        {qnas.map((qna) => (
          <li className="px-6 py-2">
            <div className="flex justify-between">
              <Link href={getUrl('QNA_SLUG', { slug: qna.slug })}><span className="font-semibold text-lg">{qna.question.slice(0, 115) + '...'}</span></Link>
              <span className="text-gray-500 text-xs w-30 text-left">1 day ago</span>
            </div>
            {/* <p className="text-gray-700">{qna?.answer}</p> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QnaRelated;