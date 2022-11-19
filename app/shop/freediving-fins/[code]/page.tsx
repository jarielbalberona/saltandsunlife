import { notFound } from "next/navigation";
import { StarIcon } from "@heroicons/react/20/solid";
import Breadcrumb from "components/breadcrumb";
import { PAGEURL } from "types/url";
import { shop_navigation_fins } from "app/shop/constants";
import { getDiveGearItemByCode } from "utilities/data";
import { getImageSrc } from "utilities/methods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default async function FreedivingFin({ params }: any) {
  const fin = await getDiveGearItemByCode(params.code);

  const reviews = { href: "#", average: 4, totalCount: 117 };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  if (!fin) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="title-breadcrumb">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 pb-2">
            {fin.name} - Starter Fins | Dive Shop
          </h1>
          <Breadcrumb
            items={[
              ...shop_navigation_fins,
              {
                name: fin.name,
                link: `${PAGEURL.SHOP_FINS}/${fin.code}`,
              },
            ]}
          />
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Image gallery */}
        <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={getImageSrc(fin.name, 1, "fins")}
              alt={fin.description}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={getImageSrc(fin.name, 2, "fins")}
                alt={fin.description}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={getImageSrc(fin.name, 3, "fins")}
                alt={fin.description}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={getImageSrc(fin.name, null, "fins")}
              alt={fin.description}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {fin.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              <p className="text-3xl tracking-tight text-gray-900">
                {new Intl.NumberFormat("fil-PH", {
                  style: "currency",
                  currency: "PHP",
                }).format(fin.price)}
              </p>
            </p>

            {/* Reviews */}
            <div className="mt-6 hidden">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Sizes</h3>
                  <p className="text-sm font-medium ">
                    {fin.size.split(",").join(", ")}
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <a
                  target="_blank"
                  href="size-guide"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Size guide
                </a>
              </div>
              <div className="mt-6">
                <span className="m-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-2 bg-green-200 text-green-700 rounded-full">
                  {fin.tags.split(",")[0]}
                </span>
                <span className="m-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-2 bg-orange-200 text-orange-700  rounded-full">
                  {fin.tags.split(",")[1]}
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm">
                  We are still working on our checkout process. To order, please
                  send us a message in instagram or facebook and provide your
                  desired items.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap text-black justify-start gap-2 pr-4 mb-4 mt-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/saltandsunlifestyle"
                  >
                    <FontAwesomeIcon icon={faFacebookF} className="px-2" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://instagram.com/saltandsunlifestyle"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="px-2" />
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hidden"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{fin.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {fin.details.split(",").map((highlight: any) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
