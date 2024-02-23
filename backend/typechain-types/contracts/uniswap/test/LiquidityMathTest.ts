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
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface LiquidityMathTestInterface extends Interface {
  getFunction(
    nameOrSignature: "addDelta" | "getGasCostOfAddDelta"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addDelta",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfAddDelta",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addDelta", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfAddDelta",
    data: BytesLike
  ): Result;
}

export interface LiquidityMathTest extends BaseContract {
  connect(runner?: ContractRunner | null): LiquidityMathTest;
  waitForDeployment(): Promise<this>;

  interface: LiquidityMathTestInterface;

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

  addDelta: TypedContractMethod<
    [x: BigNumberish, y: BigNumberish],
    [bigint],
    "view"
  >;

  getGasCostOfAddDelta: TypedContractMethod<
    [x: BigNumberish, y: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addDelta"
  ): TypedContractMethod<[x: BigNumberish, y: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getGasCostOfAddDelta"
  ): TypedContractMethod<[x: BigNumberish, y: BigNumberish], [bigint], "view">;

  filters: {};
}