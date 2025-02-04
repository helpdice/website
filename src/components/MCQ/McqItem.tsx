"use client"
import type { MCQ } from "@/types/mcq";
import { humanTime } from "@/utils/Helpers";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const McqItem = ({ blog }: { blog: MCQ }) => {
  const { mainImage, title, metadata, desc, category, slug, updatedAt } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top relative flex flex-col my-0 bg-white border border-slate-200 rounded-lg shadow-solid-8 dark:bg-blacksection"
      >

        <div className="p-4">
          {mainImage && (
            <Link href={`/mcq/${category?.slug}/${slug}`} className="relative block aspect-[368/239]">
              <Image src={mainImage} alt={title} fill />
            </Link>
          )}
          <h3 className="mb-2 text-slate-800 text-xl font-semibold dark:text-gray-300">
            <Link href={`/mcq/${category?.slug}/${slug}`}>
              {title.slice(0, 115) + '...'}
            </Link>
          </h3>
          <p className="text-slate-600 leading-normal font-light">
            {metadata ?? desc}
          </p>
        </div>
        <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1 mt-auto">
          <span className="text-sm text-slate-600 font-medium dark:text-gray-400">
            Last updated: {humanTime(new Date(updatedAt), true)}
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default McqItem;
