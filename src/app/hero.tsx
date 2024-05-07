"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="md:mt-[5rem] pt-3 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:-mt-40">
          {/* <Typography
            variant="h1"
            color="red"
            className="text-3xl !leading-snug"
          >
            40% OFF
          </Typography> */}
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-5xl"
          >
            Welcome to Flora Fauna
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
          >
            At Flora Fauna Foundation, we believe in creating a compassionate world where every animal, receives the care and love they deserve. Our mission is to provide a safe haven for animals in need, advocate for their rights, and foster positive relationships between humans and animals.
          </Typography>
          <Button size="lg" className="bg-[#15F5BA]">
            Join Now
          </Button>
        </div>
        <div className="mt-40 grid gap-6 lg:mt-0">
          <div className="grid grid-cols-4 gap-6">
            <Image
              width={768}
              height={768}
              src="https://img.freepik.com/free-photo/adorable-dog-fantasy-style_23-2151147734.jpg?t=st=1715061945~exp=1715065545~hmac=8bfbdf368fa9f4f69961582cb7afb03e19bed92cab799f0e487cfc87058c1c37&w=360"
              className="rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="https://img.freepik.com/free-photo/cute-dog-sleeping_23-2151257865.jpg?t=st=1715062108~exp=1715065708~hmac=04b36e984449318482ed3b2b7681cb3c4c5d2736627aa5cf23c47514f4655097&w=360"
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="https://img.freepik.com/free-photo/cute-dog-sleeping-ai-generated_23-2150643837.jpg?t=st=1715062139~exp=1715065739~hmac=851a2db24aa73474d2fc56db2b8d7ad4076318fe49d96dba2b461c07214381dd&w=360"
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="https://img.freepik.com/free-photo/3d-rendering-cartoon-dog-portrait_23-2150907138.jpg?t=st=1715062221~exp=1715065821~hmac=38dcf2b568f435d8ee8f8042f52db7cd392b060d1f94f2a4226f17a9c061ade9&w=360"
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div></div>
            <Image
              width={768}
              height={768}
              src="https://img.freepik.com/free-photo/cute-dog-sleeping_23-2151257870.jpg?t=st=1715062258~exp=1715065858~hmac=c8d0f4f40e781a6475e100e8d347c18b00bd0fd792534754f73dee7841c6d0af&w=360"
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="https://img.freepik.com/free-photo/portrait-cute-dog-anime-style_23-2151382095.jpg?t=st=1715062338~exp=1715065938~hmac=e949c31b8b02bde475a1dd7a1a02f699f8b65f495034560f4d7195c4ac989667&w=360"
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="https://img.freepik.com/free-photo/cute-dog-city_23-2151002720.jpg?t=st=1715062377~exp=1715065977~hmac=b11129a9173fa13c9f484407f8d47b53d05ba87c3c477b9b956ecbc8d29a89ec&w=360"
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
