/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  BitMathTest,
  BitMathTestInterface,
} from "../../../../contracts/uniswap/test/BitMathTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "getGasCostOfLeastSignificantBit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "getGasCostOfMostSignificantBit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "leastSignificantBit",
    outputs: [
      {
        internalType: "uint8",
        name: "r",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "mostSignificantBit",
    outputs: [
      {
        internalType: "uint8",
        name: "r",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102f7806100206000396000f3fe608060405234801561001057600080fd5b506004361061004b5760003560e01c806246b777146100505780636b83cf261461007f578063d230d23f1461009c578063e6bcbc65146100cf575b600080fd5b61006d6004803603602081101561006657600080fd5b50356100ec565b60408051918252519081900360200190f35b61006d6004803603602081101561009557600080fd5b5035610107565b6100b9600480360360208110156100b257600080fd5b5035610116565b6040805160ff9092168252519081900360200190f35b6100b9600480360360208110156100e557600080fd5b5035610127565b6000805a90506100fb8361012e565b505a900390505b919050565b6000805a90506100fb836101ce565b6000610121826101ce565b92915050565b6000610121825b600080821161013c57600080fd5b600160801b821061014f57608091821c91015b68010000000000000000821061016757604091821c91015b640100000000821061017b57602091821c91015b62010000821061018d57601091821c91015b610100821061019e57600891821c91015b601082106101ae57600491821c91015b600482106101be57600291821c91015b6002821061010257600101919050565b60008082116101dc57600080fd5b5060ff6fffffffffffffffffffffffffffffffff82161561020057607f1901610208565b608082901c91505b67ffffffffffffffff82161561022157603f1901610229565b604082901c91505b63ffffffff82161561023e57601f1901610246565b602082901c91505b61ffff82161561025957600f1901610261565b601082901c91505b60ff821615610273576007190161027b565b600882901c91505b600f82161561028d5760031901610295565b600482901c91505b60038216156102a757600119016102af565b600282901c91505b6001821615610102576000190191905056fea264697066735822122067b8403205196fde61a883c53abd45bb685c508bd12975c7c1df61e7aabf47ea64736f6c63430007060033";

type BitMathTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BitMathTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BitMathTest__factory extends ContractFactory {
  constructor(...args: BitMathTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BitMathTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BitMathTest__factory {
    return super.connect(runner) as BitMathTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BitMathTestInterface {
    return new Interface(_abi) as BitMathTestInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): BitMathTest {
    return new Contract(address, _abi, runner) as unknown as BitMathTest;
  }
}
