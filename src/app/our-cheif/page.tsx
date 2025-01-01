import Navmenu from "@/components/navmenu"
import Image from "next/image"
import Footer from "@/components/footer"

export default function Ourchef(){
    return(
        <div>
            <Navmenu />
            <section className="relative w-full h-[250px] md:h-[410px] bg-black">
                    <Image
                      src="/unsplash_4ycv3Ky1ZZU.png"
                      alt="Hero Image"
                      fill
  style={{ objectFit: 'cover' }}
                      className="opacity-70"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
                      <h1 className="text-2xl md:text-4xl font-bold">Our Chef</h1>
                      <p className="text-yellow-500 mt-2 text-sm md:text-base">
                        <a href="/" className="hover:underline">
                          Home
                        </a>{" "}
                        &gt; Chef
                      </p>
                    </div>
                  </section>

                  <section className="py-12">
  {/* Chef Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Chef 1 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_lRAWcT7uwhY.png"
        alt="Tahmina Rumi"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">Tahmina Rumi</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>

    {/* Chef 2 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_XQWfro4LrVs.png"
        alt="Jorina Begum"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">Jorina Begum</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>

    {/* Chef 3 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_v3OlBE6-fhU.png"
        alt="M. Mohammad"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">M. Mohammad</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>

    {/* Chef 4 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_SiQgni-cqFg.png"
        alt="Munna Kathy"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">Munna Kathy</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>

    {/* Chef 5 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_7qileFwJEWo.png"
        alt="Tahmina Rumi"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">Tahmina Rumi</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>

    {/* Chef 6 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_DdglEoIC2y4.png"
        alt="Bisnu Devgon"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">Bisnu Devgon</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>

    {/* Chef 7 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_llcX9pTjhXM.png"
        alt="Motin Mollasaf"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">Motin Mollasaf</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>

    {/* Chef 8 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_uTaSlu2Jfsg.png"
        alt="William Rumi"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">William Rumi</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>

    {/* Chef 9 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_iv6yNy7oBqQ.png"
        alt="Kets William Roy"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">Kets William Roy</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>

    {/* Chef 10 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_CYnQUywzBtI.png"
        alt="Mahmud Kholl"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">Mahmud Kholl</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>

    {/* Chef 11 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_VdFBh2ZgXbM.png"
        alt="Ataur Rahman"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">Ataur Rahman</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>

    {/* Chef 12 */}
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/unsplash_GSD9VoG6f-U.png"
        alt="Monalisa Holly"
        width={312}
        height={391}
        className="w-full h-[391px] object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">Monalisa Holly</h4>
        <p className="text-gray-500 text-sm">Chef</p>
      </div>
    </div>
  </div>
</section>

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
    )
}