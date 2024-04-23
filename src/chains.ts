export enum ChainId {
  MAINNET = 1,
  SEPOLIA = 11155111,
  POLYGON = 137,
  POLYGON_AMOY = 80002,
  CELO = 42220,
  CELO_ALFAJORES = 44787,
  BSC = 56,
  BSC_TESTNET = 97,
  BASE = 8453,
  BASE_SEPOLIA = 84532
}

export const SUPPORTED_CHAINS = [
  ChainId.MAINNET,
  ChainId.SEPOLIA,
  ChainId.POLYGON,
  ChainId.POLYGON_AMOY,
  ChainId.CELO_ALFAJORES,
  ChainId.CELO,
  ChainId.BSC,
  ChainId.BSC_TESTNET,
  ChainId.BASE,
  ChainId.BASE_SEPOLIA
] as const;

export type SupportedChainsType = typeof SUPPORTED_CHAINS[number];

export enum NativeCurrencyName {
  ETHER = 'ETH',
  MATIC = 'MATIC',
  BASE = 'BASE',
  CELO = 'CELO',
  BNB = 'BNB'
}

// ethereum
const ethereum = {
  networkName: "ethereum",
  chainName: "Ethereum Mainnet",
  chainNameShort: "Ethereum",
  chainId: 1,
  chainHex: "0x1",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://rpc.ankr.com/eth"],
  blockExplorerUrls: ["https://etherscan.io"]
};
const sepolia = {
  networkName: "sepolia",
  chainName: "Sepolia Testnet",
  chainNameShort: "Sepolia",
  chainId: 11155111,
  chainHex: "0xaa36a7",
  nativeCurrency: {
    name: "tETH",
    symbol: "tETH",
    decimals: 18,
  },
  rpcUrls: ["https://1rpc.io/sepolia"],
  blockExplorerUrls: ["https://sepolia.etherscan.io/"]
};
// polygon
const polygon = {
  networkName: "polygon",
  chainName: "Polygon Mainnet",
  chainNameShort: "Polygon",
  chainId: 137,
  chainHex: "0x89",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: ["https://polygon-rpc.com"],
  blockExplorerUrls: ["https://polygonscan.com/"]
};
const amoy = {
  networkName: "amoy",
  chainName: "Amoy Testnet",
  chainNameShort: "Amoy",
  chainId: 80002,
  chainHex: "0x13882",
  nativeCurrency: {
    name: "tMATIC",
    symbol: "tMATIC",
    decimals: 18,
  },
  rpcUrls: ["https://rpc-amoy.polygon.technology"],
  blockExplorerUrls: ["https://amoy.polygonscan.com/"]
};
// bsc
const bsc = {
  networkName: "bsc",
  chainName: "Binance Smart Chain",
  chainNameShort: "BSC",
  chainId: 56,
  chainHex: "0x38",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: ["https://endpoints.omniatech.io/v1/bsc/mainnet/public"],
  blockExplorerUrls: ["https://bscscan.com"]
};
const bsctest = {
  networkName: "bsctest",
  chainName: "Binance Smart Chain Testnet",
  chainNameShort: "BSC Testnet",
  chainId: 97,
  chainHex: "0x61",
  nativeCurrency: {
    name: "tBNB",
    symbol: "tBNB",
    decimals: 18,
  },
  rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
  blockExplorerUrls: ["https://testnet.bscscan.com"]
};
// celo
const celo = {
  networkName: "celo",
  chainName: "Celo Mainnet",
  chainNameShort: "Celo",
  chainId: 42220,
  chainHex: "0xa4ec",
  nativeCurrency: {
    name: "CELO",
    symbol: "CELO",
    decimals: 18,
  },
  rpcUrls: ["https://forno.celo.org"],
  blockExplorerUrls: ["https://celoscan.io"]
};
const alfajores = {
  networkName: "alfajores",
  chainName: "Alfajores Testnet",
  chainNameShort: "Alfajores",
  chainId: 44787,
  chainHex: "0xaef3",
  nativeCurrency: {
    name: "tCELO",
    symbol: "tCELO",
    decimals: 18,
  },
  rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
  blockExplorerUrls: ["https://alfajores.celoscan.io"]
};
// base
const base = {
  networkName: "base",
  chainName: "Base Mainnet",
  chainNameShort: "Base",
  chainId: 8453,
  chainHex: "0x2105",
  nativeCurrency: {
    name: "BASE",
    symbol: "BASE",
    decimals: 18,
  },
  rpcUrls: ["https://mainnet.base.org"],
  blockExplorerUrls: ["https://basescan.org"]
};
const basesepolia = {
  networkName: "basesepolia",
  chainName: "Base Sepolia Testnet",
  chainNameShort: "Base Sepolia",
  chainId: 84532,
  chainHex: "0x14a34",
  nativeCurrency: {
    name: "tBASE",
    symbol: "tBASE",
    decimals: 18,
  },
  rpcUrls: ["https://sepolia.base.org"],
  blockExplorerUrls: ["https://sepolia-explorer.base.org"]
};

export type IValidNetwork = 
  'mainnet' | 'ethereum' | 'sepolia' |
  'polygon' | 'amoy' |
  'bsc' | 'bsctest' |
  'celo' | 'alfajores' |
  'base' | 'basesepolia';

export const SUPPORTED_NETWORKS = {
  // ETH
  mainnet: ethereum,
  ethereum,
  sepolia,
  // Polygon
  polygon,
  amoy,
  // BSC
  bsc,
  bsctest,
  // Celo
  celo,
  alfajores,
  // Base
  base,
  basesepolia
};

export type SupportedNetworkType = typeof SUPPORTED_NETWORKS[IValidNetwork];

export const VALID_NETWORKS = [
  'ethereum', 'sepolia',
  'polygon', 'amoy',
  'bsc', 'bsctest',
  'celo', 'alfajores',
  'base', 'basesepolia'
];
