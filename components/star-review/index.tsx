import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarReview({ count = 5 }) {
  return (
    <div>
      {[...Array(count).keys()].map((item, key) => (
        <FontAwesomeIcon
          key={key}
          icon={faStar}
          className="px-1 text-yellow-500"
        />
      ))}
    </div>
  );
}
