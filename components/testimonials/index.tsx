import React from "react";
import StarReview from "components/star-review";

const ReviewCard = ({ review }: any) => {
  return (
    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-blue-800 font-light mb-6">
      <div className="w-full">
        <h6 className="font-bold text-sm uppercase text-blue-600 text-center">
          {review.name}
        </h6>
      </div>
      <div className="mb-2">
        <StarReview count={5} />
      </div>
      <div className="w-full">
        <p className="text-sm">
          <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
            &quot;
          </span>
          {review.review}
          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
            &quot;
          </span>
        </p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const reviews_array = [
    [
      {
        name: "Miguel",
        review:
          "10/10 experience! Quick and easy transactions with the owner. Good quality gears with lota of freebies. Would recommend!",
      },
      {
        name: "Mary Kheralei",
        review:
          "I recommend Salt & Sun's translucent and black fins <3 Also, check out their diving masks' color options!",
      },
    ],
    [
      {
        name: "Sherwin",
        review:
          "Really good and quality products at a very reasonable price. Im using their Annularis Mask and it fits perfectly. Highly recommended 👌",
      },
      {
        name: "Jesse",
        review:
          "Get started with their affordable gear sets, and see you guys in the water. Dive safe😊🤙🏼👌🏼",
      },
    ],
    [
      {
        name: "Florence Mae",
        review:
          "Salt & Sun delivers quality freediving gears within the reach of your pockets!! Very stylish and durable 🙂 get yours now! 🥰",
      },
    ],
  ];
  return (
    <div id="testimonials">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h1 className="text-xl lg:text-2xl text-white font-bold leading-none mb-2">
            What our buddies are saying
          </h1>
          <div className="mt-4">
            <StarReview count={5} />
          </div>
          <h3 className="text-base text-white mb-5 font-light">
            We have a positive reviews in our{" "}
            <a
              href="https://www.facebook.com/saltandsunlifestyle/reviews"
              target="_blank"
              className="text-blue-800"
              rel="noreferrer"
            >
              facebook page
            </a>{" "}
            and{" "}
            <a
              href="https://goo.gl/maps/EsY8WrsS3iLhbjKF6"
              target="_blank"
              className="text-blue-800"
              rel="noreferrer"
            >
              google my business page!
            </a>
          </h3>
        </div>

        <div className="-mx-3 md:flex items-start">
          {reviews_array.map((reviews, key) => (
            <div key={key} className="px-3 md:w-1/3">
              {reviews.map((review, key) => (
                <ReviewCard key={`review-${key}`} review={review} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
