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
  ERC20,
  ERC20Interface,
} from "../../../../contracts/tokens/ERC20/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000c0738038062000c0783398101604081905262000034916200012c565b600362000042838262000225565b50600462000051828262000225565b50506005805460ff1916601217905550620002f1565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008f57600080fd5b81516001600160401b0380821115620000ac57620000ac62000067565b604051601f8301601f19908116603f01168101908282118183101715620000d757620000d762000067565b81604052838152602092508683858801011115620000f457600080fd5b600091505b83821015620001185785820183015181830184015290820190620000f9565b600093810190920192909252949350505050565b600080604083850312156200014057600080fd5b82516001600160401b03808211156200015857600080fd5b62000166868387016200007d565b935060208501519150808211156200017d57600080fd5b506200018c858286016200007d565b9150509250929050565b600181811c90821680620001ab57607f821691505b602082108103620001cc57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200022057600081815260208120601f850160051c81016020861015620001fb5750805b601f850160051c820191505b818110156200021c5782815560010162000207565b5050505b505050565b81516001600160401b0381111562000241576200024162000067565b620002598162000252845462000196565b84620001d2565b602080601f831160018114620002915760008415620002785750858301515b600019600386901b1c1916600185901b1785556200021c565b600085815260208120601f198616915b82811015620002c257888601518255948401946001909101908401620002a1565b5085821015620002e15787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61090680620003016000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012957806370a082311461013c57806395d89b4114610165578063a457c2d71461016d578063a9059cbb14610180578063dd62ed3e1461019357600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101cc565b6040516100c391906106c9565b60405180910390f35b6100df6100da366004610733565b61025e565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f36600461075d565b610275565b60055460405160ff90911681526020016100c3565b6100df610137366004610733565b6102de565b6100f361014a366004610799565b6001600160a01b031660009081526020819052604090205490565b6100b6610314565b6100df61017b366004610733565b610323565b6100df61018e366004610733565b610372565b6100f36101a13660046107b4565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101db906107e7565b80601f0160208091040260200160405190810160405280929190818152602001828054610207906107e7565b80156102545780601f1061022957610100808354040283529160200191610254565b820191906000526020600020905b81548152906001019060200180831161023757829003601f168201915b5050505050905090565b600061026b33848461037f565b5060015b92915050565b60006102828484846104a9565b6102d484336102cf85604051806060016040528060288152602001610884602891396001600160a01b038a166000908152600160209081526040808320338452909152902054919061062c565b61037f565b5060019392505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161026b9185906102cf9086610663565b6060600480546101db906107e7565b600061026b33846102cf856040518060600160405280602581526020016108ac602591393360009081526001602090815260408083206001600160a01b038d168452909152902054919061062c565b600061026b3384846104a9565b6001600160a01b0383166103e65760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084015b60405180910390fd5b6001600160a01b0382166104475760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103dd565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03831661050d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103dd565b6001600160a01b03821661056f5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103dd565b6105ac8160405180606001604052806026815260200161085e602691396001600160a01b038616600090815260208190526040902054919061062c565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546105db9082610663565b6001600160a01b038381166000818152602081815260409182902094909455518481529092918616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910161049c565b600081848411156106505760405162461bcd60e51b81526004016103dd91906106c9565b5061065b8385610837565b949350505050565b600080610670838561084a565b9050838110156106c25760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f77000000000060448201526064016103dd565b9392505050565b600060208083528351808285015260005b818110156106f6578581018301518582016040015282016106da565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461072e57600080fd5b919050565b6000806040838503121561074657600080fd5b61074f83610717565b946020939093013593505050565b60008060006060848603121561077257600080fd5b61077b84610717565b925061078960208501610717565b9150604084013590509250925092565b6000602082840312156107ab57600080fd5b6106c282610717565b600080604083850312156107c757600080fd5b6107d083610717565b91506107de60208401610717565b90509250929050565b600181811c908216806107fb57607f821691505b60208210810361081b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561026f5761026f610821565b8082018082111561026f5761026f61082156fe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212209e9268f9633f4f2ad9163145e96b0939566a47d3da6a52beed3dac6b230cfd9064736f6c63430008140033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override deploy(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<
      ERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC20__factory {
    return super.connect(runner) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC20 {
    return new Contract(address, _abi, runner) as unknown as ERC20;
  }
}