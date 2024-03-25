import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains';

type AddressMap = { [chainId: number]: string };

type ChainAddresses = {
  v1CoreFactoryAddress: string;
  v1CoreMarketAddress: string;
}

// Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
const DEFAULT_ADDRESSES: ChainAddresses = {
  v1CoreFactoryAddress: '0xC6d06514a7e51F8A328f5416E38506215D7EFd6a',
  v1CoreMarketAddress: '0x6fb2D3c803470742CAA74CD8Ab678Eca71F791Ce'
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
