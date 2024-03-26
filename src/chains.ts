export enum ChainId {
  MAINNET = 1,
  GOERLI = 5,
  SEPOLIA = 11155111,
  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
  CELO = 42220,
  CELO_ALFAJORES = 44787,
  BNB = 56,
  BNB_TESTNET = 97,
  BASE = 8453,
  BASE_GOERLI = 84531
}

export const SUPPORTED_CHAINS = [
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
] as const;

export type SupportedChainsType = typeof SUPPORTED_CHAINS[number];

export enum NativeCurrencyName {
  ETHER = 'ETH',
  MATIC = 'MATIC',
  BASE = 'BASE',
  CELO = 'CELO',
  BNB = 'BNB'
}