import { useContractRead } from "wagmi";
import Image from "next/image";
import { useMintNft } from "../hooks/useMintNft";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../utils/contract";

export default function Home() {
  const { requestNft, isLoading, error, isSuccess } = useMintNft();
  const { data } = useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: "getTokenArray",
    args: [],
  });

  console.log(data);

  return (
    <div className="py-[8rem] gap-4 text-white font-bold text-4xl text-center flex place-items-center flex-col justify-evenly ">
      <div className="background -z-100">
        <div>
          <div className="bubbles">
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 26 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 28 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 11 }}></span>
          </div>
        </div>
      </div>
      {!data ? (
        <div>
          <div className="rounded-full flex place-items-center">
            <Image
              className="hover:scale-125 rounded-full"
              src="/Rabbit Hole.png"
              width="750"
              height="750"
              alt="/"
            />
          </div>
          <div className="p-3 flex flex-col">
            <button
              className="bg-gray-500 rounded-lg p-3 text-gray-300 hover:scale-105 shadow-sm shadow-gray-500"
              onClick={requestNft}
              disabled={!requestNft}
            >
              Follow the white rabbit...
            </button>
            <p className="text-lg font-bold text-white py-2">
              Mint your Underland NFT now 0.01E.
            </p>
          </div>
        </div>
      ) : (
        <div>The way to Underland is closed...</div>
      )}
    </div>
  );
}
