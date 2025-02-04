//SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

interface IRangeProtocolVault {
    event MintedPosition(
        address indexed receiver,
        uint256 mintAmount,
        uint256 amount0In,
        uint256 amount1In
    );
    event Burned(
        address indexed receiver,
        uint256 burnAmount,
        uint256 amount0Out,
        uint256 amount1Out
    );
    event LiquidityAdded(
        uint256 liquidityMinted,
        int24 tickLower,
        int24 tickUpper,
        uint256 amount0In,
        uint256 amount1In
    );
    event LiquidityRemoved(
        uint256 liquidityRemoved,
        int24 tickLower,
        int24 tickUpper,
        uint256 amount0Out,
        uint256 amount1Out
    );
    event FeesEarned(uint256 feesEarned0, uint256 feesEarned1);
    event FeesUpdated(uint16 managingFee, uint16 performanceFee);
    event InThePositionStatusSet(bool inThePosition);
    event Swapped(bool zeroForOne, int256 amount0, int256 amount1);
    event TicksSet(int24 lowerTick, int24 upperTick);
    event MintStarted();

    function initialize(address _pool, int24 _tickSpacing, address _manager) external;

    function mint(
        uint256 mintAmount,
        uint256[2] calldata maxAmountsIn
    ) external returns (uint256 amount0, uint256 amount1);

    function burn(
        uint256 burnAmount,
        uint256[2] calldata minAmountsOut
    ) external returns (uint256 amount0, uint256 amount1);

    function removeLiquidity(uint256[2] calldata minAmountsOut) external;

    function getMintAmounts(
        uint256 amount0Max,
        uint256 amount1Max
    ) external view returns (uint256 amount0, uint256 amount1, uint256 mintAmount);

    function getUnderlyingBalances()
        external
        view
        returns (uint256 amount0Current, uint256 amount1Current);

    function getCurrentFees() external view returns (uint256 fee0, uint256 fee1);

    function getPositionID() external view returns (bytes32 positionID);

    struct UserVaultInfo {
        address user;
        uint256 token0;
        uint256 token1;
    }

    function getUserVaults(
        uint256 fromIdx,
        uint256 toIdx
    ) external view returns (UserVaultInfo[] memory);
}
