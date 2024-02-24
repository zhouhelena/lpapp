/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IGovernable,
  IGovernableInterface,
} from "../../../../../@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IGovernable";

const _abi = [
  {
    inputs: [],
    name: "InvalidGovernance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMintLimiter",
    type: "error",
  },
  {
    inputs: [],
    name: "NotGovernance",
    type: "error",
  },
  {
    inputs: [],
    name: "NotMintLimiter",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousGovernance",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernance",
        type: "address",
      },
    ],
    name: "GovernanceTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousGovernance",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernance",
        type: "address",
      },
    ],
    name: "MintLimiterTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintLimiter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newGovernance",
        type: "address",
      },
    ],
    name: "transferGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newGovernance",
        type: "address",
      },
    ],
    name: "transferMintLimiter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IGovernable__factory {
  static readonly abi = _abi;
  static createInterface(): IGovernableInterface {
    return new Interface(_abi) as IGovernableInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IGovernable {
    return new Contract(address, _abi, runner) as unknown as IGovernable;
  }
}
