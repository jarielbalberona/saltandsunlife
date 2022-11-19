import Breadcrumb from "components/breadcrumb";
import { shop_navigation_accessories } from "../constants";

export default async function Shop() {
  return (
    <div className="bg-white h-screen">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="title-breadcrumb">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 pb-2">
            Freediving Accessories | Dive Shop
          </h1>
          <Breadcrumb items={shop_navigation_accessories} />
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="text-sm">Stocks coming soon 🤙</p>
      </div>
    </div>
  );
}
