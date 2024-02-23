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
  BitMathEchidnaTest,
  BitMathEchidnaTestInterface,
} from "../../../../contracts/uniswap/test/BitMathEchidnaTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "input",
        type: "uint256",
      },
    ],
    name: "leastSignificantBitInvariant",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "input",
        type: "uint256",
      },
    ],
    name: "mostSignificantBitInvariant",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102b2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632d711e0c1461003b578063f94ac90e1461005a575b600080fd5b6100586004803603602081101561005157600080fd5b5035610077565b005b6100586004803603602081101561007057600080fd5b50356100ab565b6000610082826100e8565b905060ff811660020a821661009357fe5b60001960ff821660020a018216156100a757fe5b5050565b60006100b6826101dc565b90508060ff1660020a8210156100c857fe5b8060ff1660ff14806100e257508060010160ff1660020a82105b6100a757fe5b60008082116100f657600080fd5b5060ff6fffffffffffffffffffffffffffffffff82161561011a57607f1901610122565b608082901c91505b67ffffffffffffffff82161561013b57603f1901610143565b604082901c91505b63ffffffff82161561015857601f1901610160565b602082901c91505b61ffff82161561017357600f190161017b565b601082901c91505b60ff82161561018d5760071901610195565b600882901c91505b600f8216156101a757600319016101af565b600482901c91505b60038216156101c157600119016101c9565b600282901c91505b60018216156101d757600019015b919050565b60008082116101ea57600080fd5b600160801b82106101fd57608091821c91015b68010000000000000000821061021557604091821c91015b640100000000821061022957602091821c91015b62010000821061023b57601091821c91015b610100821061024c57600891821c91015b6010821061025c57600491821c91015b6004821061026c57600291821c91015b600282106101d75760010191905056fea2646970667358221220e49fe880e221a77d9e415667932fb55854474d579f03c34e243c85e27680f2d964736f6c63430007060033";

type BitMathEchidnaTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BitMathEchidnaTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BitMathEchidnaTest__factory extends ContractFactory {
  constructor(...args: BitMathEchidnaTestConstructorParams) {
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
      BitMathEchidnaTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BitMathEchidnaTest__factory {
    return super.connect(runner) as BitMathEchidnaTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BitMathEchidnaTestInterface {
    return new Interface(_abi) as BitMathEchidnaTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BitMathEchidnaTest {
    return new Contract(address, _abi, runner) as unknown as BitMathEchidnaTest;
  }
}