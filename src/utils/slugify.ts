/* eslint-disable no-param-reassign */
// import type { ReactElement, ReactNode } from 'react';
import { remove as stripAccents } from '@/utils/diacritics';

function getSafeRegexpString(input: string): string {
  return input
    .split('')
    .map((char) => `\\${char}`)
    .join('');
}

/**
 * Format a string by removing spaces, non-alphabetical caracters and by
 * adding delimiter
 */
function format(
  input: string,
  delimiter: string,
  ignoreInvalid = false,
): string {
  const harmonized = stripAccents(input).trim().toLowerCase();
  // console.log(harmonized);
  const safeDelimiter = getSafeRegexpString(delimiter);

  if (ignoreInvalid) {
    return harmonized.replace(/\s+/g, delimiter);
  }

  return harmonized
    .replace(new RegExp(`[^a-z0-9${safeDelimiter}]+`, 'g'), delimiter) // Replace all non-valid caracters by delimiter
    .replace(new RegExp(`${safeDelimiter}+`, 'g'), delimiter) // Remove multiple delimiters repetition
    .replace(new RegExp(`^${safeDelimiter}`, 'g'), '') // remove delimiter at the beginning
    .replace(new RegExp(`${safeDelimiter}$`, 'g'), ''); // remove delimiter at the end
}

// interface SlugifyOptions {
//   delimiter?: string;
//   prefix?: string;
// }

/**
 * Slugify a React node
 */
export default function slugify(
  node: any,
  options: SlugifyOptions = { delimiter: '-', prefix: '' },
): string {
  if (!options.delimiter) options.delimiter = '-';
  if (!options.prefix) options.prefix = '';

  if (!node || typeof node === 'boolean') {
    return '';
  }

  const { delimiter, prefix } = options;

  // boolean
  if (typeof node === 'boolean') {
    return ''; // not much we can do here
  }

  // string, number
  if (typeof node === 'string' || typeof node === 'number') {
    const harmonizedPrefix = format(prefix, delimiter, true);
    const harmonizedNode = format(String(node), delimiter);

    if (harmonizedPrefix) {
      return `${harmonizedPrefix}${delimiter}${harmonizedNode}`;
    }

    return harmonizedNode;
  }

  // ReactPortal
  if ('children' in node) {
    return slugify(node.children);
  }

  // ReactElement
  if ('type' in node) return slugify(node.props.children, options);

  // ReactFragment (including array of nodes)
  if (Symbol.iterator in node) {
    return slugify(
      Array.from(node)
        .map((subNode) => slugify(subNode, { delimiter }))
        .join(delimiter),
      options,
    );
  }

  // unhandled case
  return '';
}

interface SlugifyOptions {
  delimiter: string;
  prefix?: string;
}

// export default function slugify(
//   node: any,
//   options: SlugifyOptions = { delimiter: '-', prefix: '' },
// ): string {
//   const { delimiter = '-' } = options;

//   if (node === undefined || node === null || typeof node === 'boolean') {
//     return '';
//   }

//   const sanitizeString = (str: string): string => {
//     return str
//       .trim()
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, delimiter);
//   };

//   const processNode = (n: any): string => {
//     if (typeof n === 'string' || typeof n === 'number') {
//       return sanitizeString(String(n));
//     }

//     if (n !== null && n !== undefined) {
//       if ('children' in n) {
//         return slugify(n.children, options);
//       }

//       if ('type' in n) {
//         return slugify(n.props.children, options);
//       }

//       if (Symbol.iterator in n) {
//         return Array.from(n)
//           .map((subNode) => slugify(subNode, options))
//           .filter(Boolean)
//           .join(delimiter);
//       }
//     }

//     return '';
//   };

//   if (Array.isArray(node)) {
//     return node.map(processNode).filter(Boolean).join(delimiter);
//   }

//   return sanitizeString(processNode(node));
// }
