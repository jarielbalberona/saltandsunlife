import React from "react";
import StarReview from "components/star-review";

export default function Testimonials() {
  const reviews = [
    {
      name: "Miguel",
      review:
        "10/10 experience! Quick and easy transactions with the owner. Good quality gears with lota of freebies. Would recommend!",
    },
    {
      name: "Jesse",
      review:
        "Get started with their affordable gear sets, and see you guys in the water. Dive safe😊🤙🏼👌🏼",
    },
    {
      name: "Mary Kheralei",
      review:
        "I recommend Salt & Sun's translucent and black fins <3 Also, check out their diving masks' color options!",
    },
    {
      name: "Sherwin",
      review:
        "Really good and quality products at a very reasonable price. Im using their Annularis Mask and it fits perfectly. Highly recommended 👌",
    },
    {
      name: "Florence Mae",
      review:
        "Salt & Sun delivers quality freediving gears within the reach of your pockets!! Very stylish and durable 🙂 get yours now! 🥰",
    },
  ];
  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full">
                  <h6 className="font-bold text-sm uppercase text-blue-600 text-center">
                    Test
                  </h6>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sunt ratione dolor exercitationem minima quas itaque
                    saepe quasi architecto vel! Accusantium, vero sint
                    recusandae cum tempora nemo commodi soluta deleniti.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full">
                  <h6 className="font-bold text-sm uppercase text-blue-600 text-center">
                    Test
                  </h6>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                    Dolore quod necessitatibus, labore sapiente, est,
                    dignissimos ullam error ipsam sint quam tempora vel.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full">
                  <h6 className="font-bold text-sm uppercase text-blue-600 text-center">
                    Test
                  </h6>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vitae, obcaecati ullam excepturi dicta error deleniti sequi.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full">
                  <h6 className="font-bold text-sm uppercase text-blue-600 text-center">
                    Test
                  </h6>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto inventore voluptatum nostrum atque, corrupti,
                    vitae esse id accusamus dignissimos neque reprehenderit
                    natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full">
                  <h6 className="font-bold text-sm uppercase text-blue-600 text-center">
                    Test
                  </h6>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                    ipsum, laboriosam nostrum facere exercitationem pariatur
                    deserunt tempora molestiae assumenda nesciunt alias eius?
                    Illo, autem!
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
