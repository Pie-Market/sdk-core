import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains';

type AddressMap = { [chainId: number]: `0x${string}` };

type ChainAddresses = {
  v1CoreFactoryAddress: `0x${string}`;
  v1CoreMarketAddress: `0x${string}`;
}

// Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
export const DEFAULT_ADDRESSES: ChainAddresses = {
  v1CoreFactoryAddress: '0xAB006b7e3bE88034E86EC14cFDc27b754237Fd34',
  v1CoreMarketAddress: '0xEEBD50f9bc0952c475023Ac2Ea0B7A1364A8A7CD'
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.MAINNET]: DEFAULT_ADDRESSES,
  [ChainId.GOERLI]: DEFAULT_ADDRESSES,
  [ChainId.SEPOLIA]: DEFAULT_ADDRESSES,
  [ChainId.POLYGON]: DEFAULT_ADDRESSES,
  [ChainId.POLYGON_MUMBAI]: DEFAULT_ADDRESSES,
  [ChainId.CELO_ALFAJORES]: DEFAULT_ADDRESSES,
  [ChainId.CELO]: DEFAULT_ADDRESSES,
  [ChainId.BNB]: DEFAULT_ADDRESSES,
  [ChainId.BNB_TESTNET]: DEFAULT_ADDRESSES,
  [ChainId.BASE]: DEFAULT_ADDRESSES,
  [ChainId.BASE_GOERLI]: DEFAULT_ADDRESSES
}

/* V3 Contract Addresses */
export const V1_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v1CoreFactoryAddress
    return memo
  }, {})
}

export const V1_CORE_MARKET_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1CoreMarketAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {})
}
