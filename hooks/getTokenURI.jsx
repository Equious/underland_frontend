import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../utils/contract";

export const getTokenURI = () => {
  const { config: getURIConfig, error: configError } = usePrepareContractWrite({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: "tokenURI",
    args: [0],
  });

  const { data: tokenURIRes, write: tokenURI } = useContractWrite(getURIConfig);

  const { isLoading, error, isSuccess } = useWaitForTransaction({
    hash: tokenURIRes?.hash,
  });

  return { tokenURI, isLoading, error, isSuccess };
};
