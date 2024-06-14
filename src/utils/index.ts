import { bytesToHex, hexToBytes, 
  // utf8ToBytes 
} from '@noble/hashes/utils';
export const hexToU8a = hexToBytes;
// export const stringToU8a = utf8ToBytes;
export const u8aToHex = bytesToHex;

const decoder = new TextDecoder('utf-8');
const encoder = new TextEncoder();
export type AnyString = string;

export function isU8a (value?: unknown): value is Uint8Array {
  return (
    ((value && (value as Uint8Array).constructor) === Uint8Array) ||
    value instanceof Uint8Array
  );
}
export type U8aLike = number[] | Uint8Array | AnyString;

export function stringToU8a (value?: AnyString | null): Uint8Array {
  return value
    ? encoder.encode(value.toString())
    : new Uint8Array();
}

export function u8aToString (value?: Uint8Array | null): string {
  return value
    ? decoder.decode(value)
    : '';
}