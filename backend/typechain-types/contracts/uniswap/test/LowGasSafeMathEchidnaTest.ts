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

export interface LowGasSafeMathEchidnaTestInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "checkAdd"
      | "checkAddi"
      | "checkMul"
      | "checkSub"
      | "checkSubi"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkAdd",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkAddi",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkMul",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkSub",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkSubi",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "checkAdd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checkAddi", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checkMul", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checkSub", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checkSubi", data: BytesLike): Result;
}

export interface LowGasSafeMathEchidnaTest extends BaseContract {
  connect(runner?: ContractRunner | null): LowGasSafeMathEchidnaTest;
  waitForDeployment(): Promise<this>;

  interface: LowGasSafeMathEchidnaTestInterface;

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

  checkAdd: TypedContractMethod<
    [x: BigNumberish, y: BigNumberish],
    [void],
    "view"
  >;

  checkAddi: TypedContractMethod<
    [x: BigNumberish, y: BigNumberish],
    [void],
    "view"
  >;

  checkMul: TypedContractMethod<
    [x: BigNumberish, y: BigNumberish],
    [void],
    "view"
  >;

  checkSub: TypedContractMethod<
    [x: BigNumberish, y: BigNumberish],
    [void],
    "view"
  >;

  checkSubi: TypedContractMethod<
    [x: BigNumberish, y: BigNumberish],
    [void],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "checkAdd"
  ): TypedContractMethod<[x: BigNumberish, y: BigNumberish], [void], "view">;
  getFunction(
    nameOrSignature: "checkAddi"
  ): TypedContractMethod<[x: BigNumberish, y: BigNumberish], [void], "view">;
  getFunction(
    nameOrSignature: "checkMul"
  ): TypedContractMethod<[x: BigNumberish, y: BigNumberish], [void], "view">;
  getFunction(
    nameOrSignature: "checkSub"
  ): TypedContractMethod<[x: BigNumberish, y: BigNumberish], [void], "view">;
  getFunction(
    nameOrSignature: "checkSubi"
  ): TypedContractMethod<[x: BigNumberish, y: BigNumberish], [void], "view">;

  filters: {};
}