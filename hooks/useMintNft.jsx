import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { CONTRACT_ABI, CONTRACT_ADDRESS, MINT_FEE } from "../utils/contract";

export const useMintNft = () => {
  const { config: mintTokenConfig, error: configError } =
    usePrepareContractWrite({
      addressOrName: CONTRACT_ADDRESS,
      contractInterface: CONTRACT_ABI,
      functionName: "requestNFT",
      args: [],
      overrides: {
        value: MINT_FEE,
      },
    });

  const { data: requestNftRes, write: requestNft } =
    useContractWrite(mintTokenConfig);

  const { isLoading, error, isSuccess } = useWaitForTransaction({
    hash: requestNftRes?.hash,
  });

  return { requestNft, isLoading, error, isSuccess };
};
