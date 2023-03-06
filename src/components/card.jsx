import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><a dir="rtl" href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img
					alt="Ibrahim Nurul Huda smiling in a red plaid shirt and tortoise shell glasses"
					width="480"
					height="620"
					src="/assets/aqid/001.webp"
          						class="mx-auto shadow-lg  bg-gray-400 object-cover w-md md:w-full !rounded-none rounded-t-lg	"

    			/>    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">مراجع العقيدة</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
         <object><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a></object>
    </div>
   
</a></SwiperSlide>
<SwiperSlide><a dir="rtl" href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img
					alt="Ibrahim Nurul Huda smiling in a red plaid shirt and tortoise shell glasses"
					width="480"
					height="620"
					src="/assets/aqid/001.webp"
          						class="mx-auto shadow-lg  bg-gray-400 object-cover w-md md:w-full !rounded-none rounded-t-lg	"

    			/>    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">مراجع العقيدة</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
         <object><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a></object>
    </div>
   
</a></SwiperSlide><SwiperSlide><a dir="rtl" href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img
					alt="Ibrahim Nurul Huda smiling in a red plaid shirt and tortoise shell glasses"
					width="480"
					height="620"
					src="/assets/aqid/001.webp"
          						class="mx-auto shadow-lg  bg-gray-400 object-cover w-md md:w-full !rounded-none rounded-t-lg	"

    			/>    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">مراجع العقيدة</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
         <object><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a></object>
    </div>
   
</a></SwiperSlide><SwiperSlide><a dir="rtl" href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img
					alt="Ibrahim Nurul Huda smiling in a red plaid shirt and tortoise shell glasses"
					width="480"
					height="620"
					src="/assets/aqid/001.webp"
          						class="mx-auto shadow-lg  bg-gray-400 object-cover w-md md:w-full !rounded-none rounded-t-lg	"

    			/>    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">مراجع العقيدة</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
         <object><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a></object>
    </div>
   
</a></SwiperSlide><SwiperSlide><a dir="rtl" href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img
					alt="Ibrahim Nurul Huda smiling in a red plaid shirt and tortoise shell glasses"
					width="480"
					height="620"
					src="/assets/aqid/001.webp"
          						class="mx-auto shadow-lg  bg-gray-400 object-cover w-md md:w-full !rounded-none rounded-t-lg	"

    			/>    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">مراجع العقيدة</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
         <object><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a></object>
    </div>
   
</a></SwiperSlide><SwiperSlide><a dir="rtl" href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img
					alt="Ibrahim Nurul Huda smiling in a red plaid shirt and tortoise shell glasses"
					width="480"
					height="620"
					src="/assets/aqid/001.webp"
          						class="mx-auto shadow-lg  bg-gray-400 object-cover w-md md:w-full !rounded-none rounded-t-lg	"

    			/>    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">مراجع العقيدة</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
         <object><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a></object>
    </div>
   
</a></SwiperSlide>
      </Swiper>
    </>
  );
}
