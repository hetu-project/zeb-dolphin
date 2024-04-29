/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = '';

export enum ZType {
  Z_TYPE_RNG = 0,
  Z_TYPE_EVENT = 1,
  Z_TYPE_CLOCK = 2,
  UNRECOGNIZED = -1,
}

export function zTypeFromJSON(object: any): ZType {
  switch (object) {
    case 0:
    case 'Z_TYPE_RNG':
      return ZType.Z_TYPE_RNG;
    case 1:
    case 'Z_TYPE_EVENT':
      return ZType.Z_TYPE_EVENT;
    case 2:
    case 'Z_TYPE_CLOCK':
      return ZType.Z_TYPE_CLOCK;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ZType.UNRECOGNIZED;
  }
}

export function zTypeToJSON(object: ZType): string {
  switch (object) {
    case ZType.Z_TYPE_RNG:
      return 'Z_TYPE_RNG';
    case ZType.Z_TYPE_EVENT:
      return 'Z_TYPE_EVENT';
    case ZType.Z_TYPE_CLOCK:
      return 'Z_TYPE_CLOCK';
    case ZType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface ZMessage {
  id: Uint8Array;
  version: number;
  type: ZType;
  publicKey: Uint8Array;
  data: Uint8Array;
  signature: Uint8Array;
  from: Uint8Array;
  to: Uint8Array;
}

function createBaseZMessage(): ZMessage {
  return {
    id: new Uint8Array(0),
    version: 0,
    type: 0,
    publicKey: new Uint8Array(0),
    data: new Uint8Array(0),
    signature: new Uint8Array(0),
    from: new Uint8Array(0),
    to: new Uint8Array(0),
  };
}

export const ZMessage = {
  encode(message: ZMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.version !== 0) {
      writer.uint32(16).uint32(message.version);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(34).bytes(message.publicKey);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    if (message.signature.length !== 0) {
      writer.uint32(50).bytes(message.signature);
    }
    if (message.from.length !== 0) {
      writer.uint32(58).bytes(message.from);
    }
    if (message.to.length !== 0) {
      writer.uint32(66).bytes(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.publicKey = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.signature = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.from = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.to = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZMessage {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(0),
      version: isSet(object.version) ? globalThis.Number(object.version) : 0,
      type: isSet(object.type) ? zTypeFromJSON(object.type) : 0,
      publicKey: isSet(object.publicKey) ? bytesFromBase64(object.publicKey) : new Uint8Array(0),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
      from: isSet(object.from) ? bytesFromBase64(object.from) : new Uint8Array(0),
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(0),
    };
  },

  toJSON(message: ZMessage): unknown {
    const obj: any = {};
    if (message.id.length !== 0) {
      obj.id = base64FromBytes(message.id);
    }
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    if (message.type !== 0) {
      obj.type = zTypeToJSON(message.type);
    }
    if (message.publicKey.length !== 0) {
      obj.publicKey = base64FromBytes(message.publicKey);
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    if (message.from.length !== 0) {
      obj.from = base64FromBytes(message.from);
    }
    if (message.to.length !== 0) {
      obj.to = base64FromBytes(message.to);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZMessage>, I>>(base?: I): ZMessage {
    return ZMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZMessage>, I>>(object: I): ZMessage {
    const message = createBaseZMessage();
    message.id = object.id ?? new Uint8Array(0);
    message.version = object.version ?? 0;
    message.type = object.type ?? 0;
    message.publicKey = object.publicKey ?? new Uint8Array(0);
    message.data = object.data ?? new Uint8Array(0);
    message.signature = object.signature ?? new Uint8Array(0);
    message.from = object.from ?? new Uint8Array(0);
    message.to = object.to ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach(byte => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
    ? globalThis.Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends {}
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
