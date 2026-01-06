import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
  {
    name: "Running",
    imgUrl: "category-running.png",
  },
  {
    name: "Tennis",
    imgUrl: "category-tennis.png",
  },
  {
    name: "Basketball",
    imgUrl: "category-basketball.png",
  },
  {
    name: "Football",
    imgUrl: "category-football.png",
  },
  {
    name: "Badminton",
    imgUrl: "category-badminton.png",
  },
  {
    name: "Swimming",
    imgUrl: "category-swimming.png",
  },
];

const CategoriesSection = () => {
  return (
    <section id="category-section" className="container mx-auto pb-20 px-4 md:px-0">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl md:text-2xl uppercase">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium text-sm md:text-base">
          <span>See All</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-12 mt-8">
        {categoryList.map((category, index) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center hover:shadow-md transition-all"
            key={index}
          >
            <div className="self-center">
              <Image
                src={`/images/categories/${category.imgUrl}`}
                width={86}
                height={86}
                alt={category.name}
                className="mb-[10px] mx-auto w-14 md:w-20"
              />
              <div className="text-primary font-medium text-base md:text-xl text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;