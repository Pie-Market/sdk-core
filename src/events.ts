import { DEFAULT_ADDRESSES } from "./addresses";
import { keccak256Hex } from "./utils/keccak256";

export enum EventName {
  PieCreated,
  OwnerChanged,
  BuySlices,
  SplitSlices,
  MergeSlices,
  Collect
}

export const SUPPORTED_EVENTS = [
  'PieCreated',
  'OwnerChanged',
  'BuySlices',
  'SplitSlices',
  'MergeSlices',
  'Collect'
] as const;

export type SupportedEventsType = typeof SUPPORTED_EVENTS[number];

const EVENT_SIGNATURES = {
  [SUPPORTED_EVENTS[EventName.PieCreated]]: 'PieCreated(address,uint256,address,uint16,string,string)',
  [SUPPORTED_EVENTS[EventName.OwnerChanged]]: 'OwnerChanged(address,address)',
  [SUPPORTED_EVENTS[EventName.BuySlices]]: 'BuySlices(address,address,uint256)',
  [SUPPORTED_EVENTS[EventName.SplitSlices]]: 'SplitSlices(uint256[],uint256[],address)',
  [SUPPORTED_EVENTS[EventName.MergeSlices]]: 'MergeSlices(uint256[],uint256,address)',
  [SUPPORTED_EVENTS[EventName.Collect]]: 'Collect(address,address)'
}

type EventContracts = {
  event: string;
  signature: string;
  topic0: `0x${string}`;
  contract: `0x${string}`;
}

function constructEvent(event: SupportedEventsType, contract: `0x${string}`): EventContracts {
  return {
    event,
    signature: EVENT_SIGNATURES[event],
    topic0: keccak256Hex(EVENT_SIGNATURES[event]),
    contract
  }
}

export const EVENT_TO_TOPIC0_CONTRACT_MAP: Record<SupportedEventsType, EventContracts> = {
  [SUPPORTED_EVENTS[EventName.PieCreated]]: constructEvent(SUPPORTED_EVENTS[EventName.PieCreated], DEFAULT_ADDRESSES.v1CoreFactoryAddress),
  [SUPPORTED_EVENTS[EventName.OwnerChanged]]: constructEvent(SUPPORTED_EVENTS[EventName.OwnerChanged], DEFAULT_ADDRESSES.v1CoreFactoryAddress),
  [SUPPORTED_EVENTS[EventName.BuySlices]]: constructEvent(SUPPORTED_EVENTS[EventName.BuySlices], DEFAULT_ADDRESSES.v1CoreMarketAddress),
  [SUPPORTED_EVENTS[EventName.SplitSlices]]: constructEvent(SUPPORTED_EVENTS[EventName.SplitSlices], DEFAULT_ADDRESSES.v1CoreMarketAddress),
  [SUPPORTED_EVENTS[EventName.MergeSlices]]: constructEvent(SUPPORTED_EVENTS[EventName.MergeSlices], DEFAULT_ADDRESSES.v1CoreMarketAddress),
  [SUPPORTED_EVENTS[EventName.Collect]]: constructEvent(SUPPORTED_EVENTS[EventName.Collect], DEFAULT_ADDRESSES.v1CoreMarketAddress),
}
