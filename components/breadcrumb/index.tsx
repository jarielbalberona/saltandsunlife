import React from "react";
import Link from "next/link";

const Breadcrumb = ({ items }: any) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item: any, index: number) => (
          <li key={index}>
            <div className="flex items-center">
              {index !== 0 ? (
                <svg
                  className="w-6 h-6 text-gray-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <></>
              )}

              <Link
                href={item.link}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 "
              >
                {item.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
