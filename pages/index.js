import Image from "next/image";
import { useMintNft } from "../hooks/useMintNft";

export default function Home() {
  const { requestNft, isLoading, error, isSuccess } = useMintNft();

  return (
    <div className="py-[8rem] gap-4 bg-gradient-to-tr from-gray-600 via-gray-300 to-gray-600 h-screen w-screen text-white font-bold text-4xl text-center flex place-items-center flex-col ">
      <div className="rounded-full">
        <Image
          className="hover:cursor-pointer hover:scale-125 rounded-full"
          src="/Rabbit Hole.png"
          width="750"
          height="750"
        />
      </div>
      <div className="p-3 flex flex-col">
        <button
          className="bg-gray-500 rounded-lg p-3 text-gray-300 hover:scale-105 shadow-lg shadow-gray-500"
          onClick={requestNft}
          disabled={!requestNft}
        >
          Follow the white rabbit...
        </button>

        <p className="text-sm font-bold text-black py-2">
          Mint your Underland NFT now 0.01E.
        </p>
      </div>
    </div>
  );
}
