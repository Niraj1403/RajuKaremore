import React from "react"; // Replace with the correct image path

const CartHero = () => {
  return (
    <section className="bg-[#5f008e] flex items-center">
      <div
        className="container mx-auto flex flex-col-reverse lg:flex-row items-center text-center lg:text-left pb-10 lg:pb-20"
        style={{
          paddingLeft: "110px",
          paddingRight: "110px",
          paddingTop: "110px",
        }}
      >
        {/* Text Section */}
        <div className="text-white w-full lg:w-1/2 px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-10">Cart</h1>

          {/* CTA Buttons */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <button className="bg-yellow-500 text-black font-semibold rounded-full px-8 py-3 hover:bg-white transition">
              Shop Now
            </button>
            <button className="border border-gray-300 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#5f008e] transition">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartHero;