/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MainChain,
  MainChainInterface,
} from "../../../contracts/ccip/MainChain";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_link",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "calculatedFees",
        type: "uint256",
      },
    ],
    name: "NotEnoughBalance",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fees",
        type: "uint256",
      },
    ],
    name: "MessageSent",
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
    ],
    name: "OwnershipTransferRequested",
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
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
    ],
    name: "sendMessagePayLink",
    outputs: [
      {
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
    ],
    name: "sendMessagePayNative",
    outputs: [
      {
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200186838038062001868833981810160405281019062000037919062000359565b338060008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000ac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a39062000401565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000133576200013281620001c060201b60201c565b5b50505081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000495565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000231576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002289062000473565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200032182620002f4565b9050919050565b620003338162000314565b81146200033f57600080fd5b50565b600081519050620003538162000328565b92915050565b60008060408385031215620003735762000372620002ef565b5b6000620003838582860162000342565b9250506020620003968582860162000342565b9150509250929050565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b6000620003e9601883620003a0565b9150620003f682620003b1565b602082019050919050565b600060208201905081810360008301526200041c81620003da565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b60006200045b601783620003a0565b9150620004688262000423565b602082019050919050565b600060208201905081810360008301526200048e816200044c565b9050919050565b6113c380620004a56000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063530845891461005c57806379ba50971461008c57806381568a06146100965780638da5cb5b146100c6578063f2fde38b146100e4575b600080fd5b61007660048036038101906100719190610c76565b610100565b6040516100839190610d03565b60405180910390f35b610094610498565b005b6100b060048036038101906100ab9190610c76565b61062d565b6040516100bd9190610d03565b60405180910390f35b6100ce6108c1565b6040516100db9190610d2d565b60405180910390f35b6100fe60048036038101906100f99190610d48565b6108ea565b005b600061010a6108fe565b60006040518060a00160405280866040516020016101289190610d2d565b6040516020818303038152906040528152602001858560405160200161014f929190610dd3565b6040516020818303038152906040528152602001600067ffffffffffffffff81111561017e5761017d610df7565b5b6040519080825280602002602001820160405280156101b757816020015b6101a4610b39565b81526020019060019003908161019c5790505b508152602001600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001610215604051806020016040528062030d4081525061098e565b81525090506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166320487ded88846040518363ffffffff1660e01b8152600401610279929190611045565b602060405180830381865afa158015610296573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ba91906110a1565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b815260040161033b9291906110dd565b6020604051808303816000875af115801561035a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037e919061113e565b50600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166396f4e9f988846040518363ffffffff1660e01b81526004016103dc929190611045565b6020604051808303816000875af11580156103fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041f9190611197565b92508667ffffffffffffffff16837fd36445359b3c6e26c120659aef090ce0f2eb005cf9af450d11aa1225609b4f4d888888600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16876040516104869594939291906111c4565b60405180910390a35050949350505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610528576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051f9061125e565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60006106376108fe565b60006040518060a00160405280866040516020016106559190610d2d565b6040516020818303038152906040528152602001858560405160200161067c929190610dd3565b6040516020818303038152906040528152602001600067ffffffffffffffff8111156106ab576106aa610df7565b5b6040519080825280602002602001820160405280156106e457816020015b6106d1610b39565b8152602001906001900390816106c95790505b508152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001610721604051806020016040528062030d4081525061098e565b81525090506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166320487ded88846040518363ffffffff1660e01b8152600401610785929190611045565b602060405180830381865afa1580156107a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c691906110a1565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166396f4e9f98289856040518463ffffffff1660e01b8152600401610826929190611045565b60206040518083038185885af1158015610844573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906108699190611197565b92508667ffffffffffffffff16837fd36445359b3c6e26c120659aef090ce0f2eb005cf9af450d11aa1225609b4f4d8888886000876040516108af9594939291906111c4565b60405180910390a35050949350505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108f26108fe565b6108fb81610a0d565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461098c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610983906112ca565b60405180910390fd5b565b60606397a657c960e01b826040516024016109a99190611306565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050919050565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a729061136d565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b610b9081610b73565b8114610b9b57600080fd5b50565b600081359050610bad81610b87565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bde82610bb3565b9050919050565b610bee81610bd3565b8114610bf957600080fd5b50565b600081359050610c0b81610be5565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610c3657610c35610c11565b5b8235905067ffffffffffffffff811115610c5357610c52610c16565b5b602083019150836001820283011115610c6f57610c6e610c1b565b5b9250929050565b60008060008060608587031215610c9057610c8f610b69565b5b6000610c9e87828801610b9e565b9450506020610caf87828801610bfc565b935050604085013567ffffffffffffffff811115610cd057610ccf610b6e565b5b610cdc87828801610c20565b925092505092959194509250565b6000819050919050565b610cfd81610cea565b82525050565b6000602082019050610d186000830184610cf4565b92915050565b610d2781610bd3565b82525050565b6000602082019050610d426000830184610d1e565b92915050565b600060208284031215610d5e57610d5d610b69565b5b6000610d6c84828501610bfc565b91505092915050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b6000610db28385610d75565b9350610dbf838584610d86565b610dc883610d95565b840190509392505050565b60006020820190508181036000830152610dee818486610da6565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610e2f81610b73565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e6f578082015181840152602081019050610e54565b60008484015250505050565b6000610e8682610e35565b610e908185610e40565b9350610ea0818560208601610e51565b610ea981610d95565b840191505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ee981610bd3565b82525050565b6000819050919050565b610f0281610eef565b82525050565b604082016000820151610f1e6000850182610ee0565b506020820151610f316020850182610ef9565b50505050565b6000610f438383610f08565b60408301905092915050565b6000602082019050919050565b6000610f6782610eb4565b610f718185610ebf565b9350610f7c83610ed0565b8060005b83811015610fad578151610f948882610f37565b9750610f9f83610f4f565b925050600181019050610f80565b5085935050505092915050565b600060a0830160008301518482036000860152610fd78282610e7b565b91505060208301518482036020860152610ff18282610e7b565b9150506040830151848203604086015261100b8282610f5c565b91505060608301516110206060860182610ee0565b50608083015184820360808601526110388282610e7b565b9150508091505092915050565b600060408201905061105a6000830185610e26565b818103602083015261106c8184610fba565b90509392505050565b61107e81610eef565b811461108957600080fd5b50565b60008151905061109b81611075565b92915050565b6000602082840312156110b7576110b6610b69565b5b60006110c58482850161108c565b91505092915050565b6110d781610eef565b82525050565b60006040820190506110f26000830185610d1e565b6110ff60208301846110ce565b9392505050565b60008115159050919050565b61111b81611106565b811461112657600080fd5b50565b60008151905061113881611112565b92915050565b60006020828403121561115457611153610b69565b5b600061116284828501611129565b91505092915050565b61117481610cea565b811461117f57600080fd5b50565b6000815190506111918161116b565b92915050565b6000602082840312156111ad576111ac610b69565b5b60006111bb84828501611182565b91505092915050565b60006080820190506111d96000830188610d1e565b81810360208301526111ec818688610da6565b90506111fb6040830185610d1e565b61120860608301846110ce565b9695505050505050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b6000611248601683610d75565b915061125382611212565b602082019050919050565b600060208201905081810360008301526112778161123b565b9050919050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b60006112b4601683610d75565b91506112bf8261127e565b602082019050919050565b600060208201905081810360008301526112e3816112a7565b9050919050565b6020820160008201516113006000850182610ef9565b50505050565b600060208201905061131b60008301846112ea565b92915050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000611357601783610d75565b915061136282611321565b602082019050919050565b600060208201905081810360008301526113868161134a565b905091905056fea264697066735822122086660951d530019c0fcd587daf301562adf7da1db6dcd546240c0a507ef6e6f964736f6c63430008140033";

type MainChainConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MainChainConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MainChain__factory extends ContractFactory {
  constructor(...args: MainChainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _router: AddressLike,
    _link: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_router, _link, overrides || {});
  }
  override deploy(
    _router: AddressLike,
    _link: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_router, _link, overrides || {}) as Promise<
      MainChain & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MainChain__factory {
    return super.connect(runner) as MainChain__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MainChainInterface {
    return new Interface(_abi) as MainChainInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MainChain {
    return new Contract(address, _abi, runner) as unknown as MainChain;
  }
}