/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface AptosSenderInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "execute"
      | "executeWithToken"
      | "gateway"
      | "releaseTokens"
      | "sourceAddress"
      | "sourceChain"
      | "value"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;

  encodeFunctionData(
    functionFragment: "execute",
    values: [BytesLike, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeWithToken",
    values: [BytesLike, string, string, BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releaseTokens",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sourceAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sourceChain",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeWithToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sourceAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sourceChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
}

export namespace ExecutedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AptosSender extends BaseContract {
  connect(runner?: ContractRunner | null): AptosSender;
  waitForDeployment(): Promise<this>;

  interface: AptosSenderInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  execute: TypedContractMethod<
    [
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  executeWithToken: TypedContractMethod<
    [
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike,
      tokenSymbol: string,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  gateway: TypedContractMethod<[], [string], "view">;

  releaseTokens: TypedContractMethod<
    [
      destinationChain: string,
      destinationAddress: string,
      amount: BigNumberish
    ],
    [void],
    "payable"
  >;

  sourceAddress: TypedContractMethod<[], [string], "view">;

  sourceChain: TypedContractMethod<[], [string], "view">;

  value: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<
    [
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "executeWithToken"
  ): TypedContractMethod<
    [
      commandId: BytesLike,
      sourceChain: string,
      sourceAddress: string,
      payload: BytesLike,
      tokenSymbol: string,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "gateway"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "releaseTokens"
  ): TypedContractMethod<
    [
      destinationChain: string,
      destinationAddress: string,
      amount: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "sourceAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sourceChain"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "value"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Executed"
  ): TypedContractEvent<
    ExecutedEvent.InputTuple,
    ExecutedEvent.OutputTuple,
    ExecutedEvent.OutputObject
  >;

  filters: {
    "Executed()": TypedContractEvent<
      ExecutedEvent.InputTuple,
      ExecutedEvent.OutputTuple,
      ExecutedEvent.OutputObject
    >;
    Executed: TypedContractEvent<
      ExecutedEvent.InputTuple,
      ExecutedEvent.OutputTuple,
      ExecutedEvent.OutputObject
    >;
  };
}
