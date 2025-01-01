import Footer from "@/components/footer";
import Navbarmenu from "@/components/navmenu";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Shop() {
  return (
    <div>
      <Navbarmenu />
      {/* Hero Section */}
      <section className="relative w-full h-[250px] md:h-[410px] bg-black">
        <Image
          src="/unsplash_4ycv3Ky1ZZU.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Our Shop</h1>
          <p className="text-yellow-500 mt-2 text-sm md:text-base">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            &gt; Menu
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div>
                <label htmlFor="sort-by" className="text-sm mr-2">
                  Sort By:
                </label>
                <select id="sort-by" className="border px-2 py-1 rounded">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <div>
                <label htmlFor="show" className="text-sm mr-2">
                  Show:
                </label>
                <select id="show" className="border px-2 py-1 rounded">
                  <option>Default</option>
                  <option>12</option>
                  <option>24</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 h-[37px]">
              {[
                {
                  name: "Fresh Lime",
                  price: "$58.00",
                  oldPrice: "$65.00",
                  image: "/Mask Group (1).png",
                  sale: true,
                },
                {
                  name: "Chocolate Muffin",
                  price: "$28.00",
                  image: "/Mask Group (2).png",
                },
                {
                  name: "Burger",
                  price: "$21.00",
                  oldPrice: "$46.00",
                  image: "/unsplash_-GFCYhoRe48.png",
                },
                {
                  name: "Country Burger",
                  price: "$45.00",
                  image: "/Mask Group (3).png",
                },
                {
                  name: "Drink",
                  price: "$23.00",
                  oldPrice: "$46.00",
                  image: "/unsplash_akwA-GPF710.png",
                },
                {
                  name: "Pizza",
                  price: "$43.00",
                  image: "/Mask Group (4).png",
                },
                {
                  name: "Cheese Butter",
                  price: "$10.00",
                  image: "/Mask Group (5).png",
                },
                {
                  name: "Sandwiches",
                  price: "$25.00",
                  image: "/Mask Group (6).png",
                },
                {
                  name: "Chicken Chup",
                  price: "$12.00",
                  image: "/Mask Group (8).png",
                  sale: true,
                },
                {
                  name: "Classic Salad",
                  price: "$15.00",
                  image: "/Mask Group (3).png",
                },
                {
                  name: "Pasta",
                  price: "$20.00",
                  image: "/unsplash_akwA-GPF710.png",
                },
                {
                  name: "Ice Cream",
                  price: "$8.00",
                  image: "/Mask Group (4).png",
                },
                {
                  name: "Fried Chicken",
                  price: "$30.00",
                  image: "/Mask Group (5).png",
                },
                {
                  name: "Cupcake",
                  price: "$12.00",
                  image: "/Mask Group (6).png",
                },
                { name: "Fries", price: "$5.00", image: "/Mask Group (8).png" },
              ].map((product, index) => (
                <div
                  key={index}
                  className="border rounded shadow hover:shadow-lg transition duration-300"
                >
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300} // Set the desired width
                      height={160} // Set the desired height
                      className="w-full h-40 object-cover rounded-t"
                    />
                    {product.sale && (
                      <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Sale
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold">{product.name}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-orange-500 font-bold">
                        {product.price}
                      </p>
                      {product.oldPrice && (
                        <p className="line-through text-gray-500 text-sm">
                          {product.oldPrice}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                1
              </button>
              <button className="border px-4 py-2 rounded">2</button>
              <button className="border px-4 py-2 rounded">3</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 bg-white shadow rounded p-4">
            {/* Search Product */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="w-full px-4 py-2 border rounded"
                />
                <button className="absolute right-2 top-2 text-orange-500 p-2">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Categories Section */}
            <h3 className="text-lg font-bold mb-4">Category</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Sandwiches",
                "Burger",
                "Chicken Chup",
                "Drink",
                "Pizza",
                "Non Veg",
                "Uncategorized",
              ].map((category, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <input type="checkbox" id={`category-${index}`} />
                  <label htmlFor={`category-${index}`}>{category}</label>
                </li>
              ))}
            </ul>

            {/* Image Above Filter By Price */}
            <div className="mt-6">
              <Image
                src="/Banner.png"
                width={312}
                height={14}
                alt="Featured Product"
                className="w-full rounded shadow mb-4"
              />
            </div>

            {/* Filter By Price Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4">Filter By Price</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="From"
                  className="w-full px-2 py-1 border rounded"
                />
                <input
                  type="number"
                  placeholder="To"
                  className="w-full px-2 py-1 border rounded"
                />
                <button className="bg-orange-500 text-white px-4 py-1 rounded">
                  Filter
                </button>
              </div>
            </div>

            <section>
  <h3 className="text-lg font-bold mt-6 mb-4">Latest Products</h3>
  <ul className="space-y-4">
    {[
      { name: "Pizza", price: "$43.00", image: "/product-20.png" },
      { name: "Burger", price: "$21.00", image: "/product-20.png" },
      { name: "Drink", price: "$23.00", image: "/product-20.png" },
      {
        name: "Sandwiches",
        price: "$25.00",
        image: "/product-20.png",
      },
    ].map((product, index) => (
      <li key={index} className="flex items-center space-x-4">
        <Image
          src={product.image}
          alt={product.name}
          width={48} // Set the desired width
          height={48} // Set the desired height
          className="rounded"
        />
        <div>
          <p className="text-sm font-bold">{product.name}</p>
          <p className="text-xs text-gray-500">{product.price}</p>
        </div>
      </li>
    ))}
  </ul>
</section>

          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Support Section */}
      <div className="flex flex-col bg-black lg:flex-row items-center px-12 py-8 justify-between gap-8">
        {/* Left Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h4 className="text-xl text-white font-bold">
            <span className="text-[#ff9f0d]">Still</span> You Need Our Support?
          </h4>
          <p className="text-white text-sm">
            Don’t wait, make a smart & logical quote here. It’s pretty easy.
          </p>
        </div>

        {/* Right Input and Button */}
        <div className="lg:w-1/2 flex items-center justify-center lg:justify-end">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-3 w-full max-w-[250px] lg:max-w-[300px] bg-white text-black border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
          />
          <button className="px-6 py-3 bg-[#ff9f0d] text-black font-bold rounded-r-md hover:bg-[#ffa500] transition duration-300">
            Subscribe Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
