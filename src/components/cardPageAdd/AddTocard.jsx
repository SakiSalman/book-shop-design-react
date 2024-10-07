import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { MdStarRate } from "react-icons/md"; // Import MdStarRate if not already done
import addcartdata from "../../faker/fake";

const AddTocard = () => {
  const [amountCount, setAmountCount] = useState(0);

  const handleIncrement = () => {
    if (amountCount >= 10) {
      alert("You cannot take more than ten items");
    } else {
      setAmountCount(amountCount + 1);
    }
  };

  const handleDecrement = () => {
    if (amountCount > 0) {
      setAmountCount(amountCount - 1);
    }
  };

  return (
    <div className="main bg-bgGray h-full pt-4">
      <div className="_container h-full">
        <div className="grid h-full grid-cols-1 md:grid-cols-12 gap-10 w-full md:w-[1118px] mx-auto">
          <div className="left-side items-start col-span-8 flex flex-col gap-2">
            <div className="youretotal w-full md:w-full lato bg-white flex justify-between items-center p-3">
              <div className="input-side flex items-center gap-3">
                <input type="checkbox" />
                <label>Select All (1 item)</label>
              </div>
              <div className="calculate">
                <h3>
                  <p className="flex gap-2 items-center">
                    Your Total:
                    <span className="text-lg text-[#fe5050] line-through">0 TK</span>
                    <span className="text-green-600">0 TK</span>
                  </p>
                </h3>
              </div>
            </div>

            <div className="book-store grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-between w-full md:w-full h-[170px] bg-bgInport mt-5 p-2">
              <div className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-1">
                  <input className="mt-9" type="checkbox" />
                </div>
                <div className="imgs col-span-3">
                  <img
                    className="w-[80px] h-[80px] object-cover"
                    src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Dollerer_Khela_o_rashtrer_deuliyatter_ro-Mohaimin_Patwari-40be9-286406.jpg"
                    alt="Book Cover"
                  />
                </div>
                <div className="text col-span-8">
                  <h3 className="lato">ডলারের খেলা ও রাষ্ট্রের দেউলিয়া রহস্য</h3>
                  <p className="text-[#666]">মোহাইমিন পাটোয়ারী</p>
                </div>
              </div>
              <div className="grid grid-cols-2 items-center">
                <div className="flex items-center p-2 bg-[#e6e6e6]">
                  <span
                    onClick={handleDecrement}
                    className="cursor-pointer font-bold text-[30px] px-4 h-[31px] w-full flex justify-center items-center"
                  >
                    -
                  </span>
                  <input
                    className="w-[40px] h-[31px] text-center"
                    type="text"
                    value={amountCount}
                    readOnly
                  />
                  <span
                    onClick={handleIncrement}
                    className="cursor-pointer font-bold text-[20px] px-4 h-[31px] w-full flex justify-center items-center"
                  >
                    +
                  </span>
                </div>
                <div>
                  <div className="text-end lato">
                    <h1 className="text-lg font-bold">331 TK</h1>
                    <h2 className="line-through text-red-600 font-semibold">420 TK</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-white flex items-center md:w-full justify-center p-2 gap-0 lato">
              <div className="mid flex gap-2 items-center">
                <div className="main col-span-4">
                  <img
                    src="/img/image.png" // Ensure this path is correct
                    alt="Gift Image"
                    className="h-auto w-[40px]"
                  />
                </div>
                <div className="image">
                  <p className="text-center text-sm md:text-sm">
                    আপনার প্রিয়জনকে উপহার দিতে{" "}
                    <a href="#" className="underline text-blue-900">
                      Order as a Gift
                    </a>{" "}
                    বাটনে ক্লিক করুন
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="checkouts hidden md:w-full col-span-4 md:grid md:visible m-0 p-0 grid-cols-1">
            <div className="bg-white p-5 h-auto lato">
              <div className="heading border-b border-slate-400 p-2">
                <h1 className="font-medium text-2xl">Check Summary</h1>
              </div>

              <div className="des w-full flex justify-between items-center p-2 border-b border-b-[#ccc] border-dotted">
                <p>Sub Total</p>
                <span>0 TK</span>
              </div>
              <div className="des w-full flex justify-between items-center p-2 border-b border-b-[#ccc] border-dotted">
                <p>Tax</p>
                <span>0 TK</span>
              </div>
              <div className="des w-full flex justify-between items-center p-2 border-b border-b-[#ccc] border-dotted">
                <p>Shipping</p>
                <span>0 TK</span>
              </div>
              <div className="des w-full flex justify-between items-center p-2 border-b border-b-[#ccc] border-dotted">
                <p>Total</p>
                <span>0 TK</span>
              </div>
            </div>
            <div className="boxes flex flex-col gap-4">
              <button className="btn-single-other focus:outline focus:outline-violet-600">Order As Gift</button>
              <button className="w-full bg-[#4398fe] py-3 rounded-sm flex justify-center items-center font-bold text-white">
                Process To Checkout <span className="arrow text-xl"><GoArrowRight /></span>
              </button>

              <p className="text-sm w-[80%] text-start">Apply<span className="text-md font-semibold">Promo Code</span> or Voucher Code on the Shipping Page</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col   mt-8 h-auto lato">
          <div className="mid bg-white  h-auto rounded-md p-4 ">
            <h1 className="text-2xl font-medium">Popular Products You May Like</h1>
            <div className="chin grid grid-cols-5">
            {addcartdata.map((item, index) => (
              <div
                key={index}
                className="card relative group border-0 mb-4 w-full m-auto h-[348px] hover:border-2 hover:border-gray-400 text-center flex flex-col items-center justify-center transition-all"
              >
                <img className="object-cover" src={item.img} alt={`Card ${index + 1}`} />
                <div className="text mt-2">
                  <h1 className="font-thin text-sm md:text-base">mulla</h1>
                </div>
                <div className="button w-full h-full absolute text-center flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <button className="group-hover:-translate-y-9 transition-all lato duration-500 font-bold text-white rounded-md bg-[#f90] m-auto py-3 px-4 flex items-center justify-center">
                    Add To Cart
                  </button>
                  <button className="bg-slate-300 w-full p-2 font-bold text-white rounded-md">Details</button>
                </div>
              </div>
            ))}
          </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default AddTocard;
