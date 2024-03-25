import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains';

type AddressMap = { [chainId: number]: string };

type ChainAddresses = {
  v1CoreFactoryAddress: string;
  v1CoreMarketAddress: string;
}

const DEFAULT_NETWORKS = [ChainId.MAINNET, ChainId.GOERLI, ChainId.SEPOLIA]

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}

export const PIEMARKET_ADDRESSES: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', [
  ChainId.MAINNET,
  ChainId.GOERLI,
  ChainId.SEPOLIA,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
  ChainId.CELO_ALFAJORES,
  ChainId.CELO,
  ChainId.BNB,
  ChainId.BNB_TESTNET,
  ChainId.BASE,
  ChainId.BASE_GOERLI
])

// export const PIEMARKET_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78';

// Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
const DEFAULT_ADDRESSES: ChainAddresses = {
  v1CoreFactoryAddress: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  v1CoreMarketAddress: '0x1F98415757620B543A52E61c46B32eB19261F984'
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
