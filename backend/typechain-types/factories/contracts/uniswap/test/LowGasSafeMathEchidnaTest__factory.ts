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
  LowGasSafeMathEchidnaTest,
  LowGasSafeMathEchidnaTestInterface,
} from "../../../../contracts/uniswap/test/LowGasSafeMathEchidnaTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "checkAdd",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "y",
        type: "int256",
      },
    ],
    name: "checkAddi",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "checkMul",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "checkSub",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "y",
        type: "int256",
      },
    ],
    name: "checkSubi",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102b5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630f9350001461005c5780630fe48c5c146100815780636d886fae146100a45780639239e777146100c7578063bd78b20d146100ea575b600080fd5b61007f6004803603604081101561007257600080fd5b508035906020013561010d565b005b61007f6004803603604081101561009757600080fd5b5080359060200135610141565b61007f600480360360408110156100ba57600080fd5b5080359060200135610180565b61007f600480360360408110156100dd57600080fd5b50803590602001356101a3565b61007f6004803603604081101561010057600080fd5b50803590602001356101d6565b60006101198383610209565b9050818301811461012657fe5b8281101580156101365750818110155b61013c57fe5b505050565b600061014d838361021f565b9050818302811461015a57fe5b821580610165575081155b80610136575082811015801561013657508181101561013c57fe5b600061018c8383610243565b9050818303811461019957fe5b8281111561013c57fe5b60006101af8383610253565b905081830181146101bc57fe5b600082126101cd5782811215610136565b82811261013c57fe5b60006101e28383610269565b905081830381146101ef57fe5b600082126102005782811315610136565b82811361013c57fe5b8082018281101561021957600080fd5b92915050565b600082158061023a5750508181028183828161023757fe5b04145b61021957600080fd5b8082038281111561021957600080fd5b8181018281121560008312151461021957600080fd5b8082038281131560008312151461021957600080fdfea264697066735822122036652edea127a47b31f76f7fccdb120c6246733aa008f5ff24afb042bff57db364736f6c63430007060033";

type LowGasSafeMathEchidnaTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LowGasSafeMathEchidnaTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LowGasSafeMathEchidnaTest__factory extends ContractFactory {
  constructor(...args: LowGasSafeMathEchidnaTestConstructorParams) {
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
      LowGasSafeMathEchidnaTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): LowGasSafeMathEchidnaTest__factory {
    return super.connect(runner) as LowGasSafeMathEchidnaTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LowGasSafeMathEchidnaTestInterface {
    return new Interface(_abi) as LowGasSafeMathEchidnaTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LowGasSafeMathEchidnaTest {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as LowGasSafeMathEchidnaTest;
  }
}
