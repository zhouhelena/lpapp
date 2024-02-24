/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IImplementation,
  IImplementationInterface,
} from "../../../../../@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IImplementation";

const _abi = [
  {
    inputs: [],
    name: "NotProxy",
    type: "error",
  },
  {
    inputs: [],
    name: "contractId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IImplementation__factory {
  static readonly abi = _abi;
  static createInterface(): IImplementationInterface {
    return new Interface(_abi) as IImplementationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IImplementation {
    return new Contract(address, _abi, runner) as unknown as IImplementation;
  }
}