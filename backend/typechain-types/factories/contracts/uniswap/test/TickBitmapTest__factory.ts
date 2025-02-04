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
  TickBitmapTest,
  TickBitmapTestInterface,
} from "../../../../contracts/uniswap/test/TickBitmapTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "int16",
        name: "",
        type: "int16",
      },
    ],
    name: "bitmap",
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
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "flipTick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "getGasCostOfFlipTick",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "lte",
        type: "bool",
      },
    ],
    name: "getGasCostOfNextInitializedTickWithinOneWord",
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
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "lte",
        type: "bool",
      },
    ],
    name: "nextInitializedTickWithinOneWord",
    outputs: [
      {
        internalType: "int24",
        name: "next",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105ae806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80632bdc2fd3146100675780633e7ba2281461009b5780633ffc81ee146100e15780638815912f14610113578063f04bc94314610135578063f0fc922414610155575b600080fd5b6100876004803603602081101561007d57600080fd5b503560020b61017d565b604080519115158252519081900360200190f35b6100c3600480360360408110156100b157600080fd5b50803560020b906020013515156101b2565b6040805160029390930b835290151560208301528051918290030190f35b610101600480360360208110156100f757600080fd5b503560010b6101cd565b60408051918252519081900360200190f35b6101336004803603602081101561012957600080fd5b503560020b6101df565b005b6101016004803603602081101561014b57600080fd5b503560020b6101ef565b6101016004803603604081101561016b57600080fd5b50803560020b9060200135151561020b565b6000808061018e818560018061022b565b915091508360020b8260020b146101a65760006101a8565b805b925050505b919050565b6000806101c2818560018661022b565b915091509250929050565b60006020819052908152604090205481565b6101ec600082600161036d565b50565b6000805a9050610202600084600161036d565b5a900392915050565b6000805a905061021f60008560018661022b565b50505a90039392505050565b60008060008460020b8660020b8161023f57fe5b05905060008660020b12801561026657508460020b8660020b8161025f57fe5b0760020b15155b1561027057600019015b83156102e557600080610282836103d3565b600182810b810b600090815260208d9052604090205460ff83169190911b800160001901908116801515975092945090925090856102c757888360ff168603026102da565b886102d1826103e5565b840360ff168603025b965050505050610363565b6000806102f4836001016103d3565b91509150600060018260ff166001901b031990506000818b60008660010b60010b815260200190815260200160002054169050806000141595508561034657888360ff0360ff1686600101010261035c565b888361035183610485565b0360ff168660010101025b9650505050505b5094509492505050565b8060020b8260020b8161037c57fe5b0760020b1561038a57600080fd5b6000806103a58360020b8560020b8161039f57fe5b056103d3565b600191820b820b60009081526020979097526040909620805460ff9097169190911b90951890945550505050565b60020b600881901d9161010090910790565b60008082116103f357600080fd5b600160801b821061040657608091821c91015b68010000000000000000821061041e57604091821c91015b640100000000821061043257602091821c91015b62010000821061044457601091821c91015b610100821061045557600891821c91015b6010821061046557600491821c91015b6004821061047557600291821c91015b600282106101ad57600101919050565b600080821161049357600080fd5b5060ff6fffffffffffffffffffffffffffffffff8216156104b757607f19016104bf565b608082901c91505b67ffffffffffffffff8216156104d857603f19016104e0565b604082901c91505b63ffffffff8216156104f557601f19016104fd565b602082901c91505b61ffff82161561051057600f1901610518565b601082901c91505b60ff82161561052a5760071901610532565b600882901c91505b600f821615610544576003190161054c565b600482901c91505b600382161561055e5760011901610566565b600282901c91505b60018216156101ad576000190191905056fea26469706673582212203613de2d3372e8a1b84f523d96969de98eb0a1e290873c3b051898bc809d48e064736f6c63430007060033";

type TickBitmapTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TickBitmapTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TickBitmapTest__factory extends ContractFactory {
  constructor(...args: TickBitmapTestConstructorParams) {
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
      TickBitmapTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TickBitmapTest__factory {
    return super.connect(runner) as TickBitmapTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickBitmapTestInterface {
    return new Interface(_abi) as TickBitmapTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TickBitmapTest {
    return new Contract(address, _abi, runner) as unknown as TickBitmapTest;
  }
}
