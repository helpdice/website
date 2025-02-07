"use client";
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
        className="animate_top shadow-solid-8 dark:bg-blacksection relative my-0 flex flex-col rounded-lg border border-slate-200 bg-white"
      >
        <div className="p-4">
          {mainImage && (
            <Link
              href={`/mcq/${category?.slug}/${slug}`}
              className="relative block aspect-[368/239]"
            >
              <Image src={mainImage} alt={title} fill />
            </Link>
          )}
          <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-gray-300">
            <Link href={`/mcq/${category?.slug}/${slug}`}>
              {title.slice(0, 115) + (title?.length > 115 ? "..." : "")}
            </Link>
          </h3>
          {metadata || desc ? (
            <p className="leading-normal font-light text-slate-600">
              {metadata ?? desc}
            </p>
          ) : null}
        </div>
        <div className="mx-3 mt-auto border-t border-slate-200 px-1 pt-2 pb-3">
          <span className="text-sm font-medium text-slate-600 dark:text-gray-400">
            Last updated: {humanTime(new Date(updatedAt), true)}
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default McqItem;
