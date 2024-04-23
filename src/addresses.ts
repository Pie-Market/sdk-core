import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains';

type AddressMap = { [chainId: number]: `0x${string}` };

type ChainAddresses = {
  v1CoreFactoryAddress: `0x${string}`;
  v1CoreMarketAddress: `0x${string}`;
}

// Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
export const DEFAULT_ADDRESSES: ChainAddresses = {
  v1CoreFactoryAddress: '0xa9ca63E3735e7dDfE966804438AC8c83356bBE7f',
  v1CoreMarketAddress: '0x10C6bBC20E4DbbF9177c079dCe26dD709d5A4410'
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.MAINNET]: DEFAULT_ADDRESSES,
  [ChainId.GOERLI]: DEFAULT_ADDRESSES,
  [ChainId.SEPOLIA]: DEFAULT_ADDRESSES,
  [ChainId.POLYGON]: DEFAULT_ADDRESSES,
  [ChainId.POLYGON_AMOY]: DEFAULT_ADDRESSES,
  [ChainId.CELO_ALFAJORES]: DEFAULT_ADDRESSES,
  [ChainId.CELO]: DEFAULT_ADDRESSES,
  [ChainId.BNB]: DEFAULT_ADDRESSES,
  [ChainId.BNB_TESTNET]: DEFAULT_ADDRESSES,
  [ChainId.BASE]: DEFAULT_ADDRESSES,
  [ChainId.BASE_GOERLI]: DEFAULT_ADDRESSES
}

/* V1 Contract Addresses */
export const V1_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v1CoreFactoryAddress
    return memo
  }, {})
}

export const V1_CORE_MARKET_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v1CoreMarketAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1CoreMarketAddress
    if (v1CoreMarketAddress) {
      memo[chainId] = v1CoreMarketAddress
    }
    return memo
  }, {})
}
