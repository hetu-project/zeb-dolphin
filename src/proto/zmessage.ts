// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.2
//   protoc               v5.26.1
// source: src/proto/zmessage.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum ZType {
  Z_TYPE_RNG = 0,
  Z_TYPE_EVENT = 1,
  Z_TYPE_CLOCK = 2,
  UNRECOGNIZED = -1,
}

export function zTypeFromJSON(object: any): ZType {
  switch (object) {
    case 0:
    case "Z_TYPE_RNG":
      return ZType.Z_TYPE_RNG;
    case 1:
    case "Z_TYPE_EVENT":
      return ZType.Z_TYPE_EVENT;
    case 2:
    case "Z_TYPE_CLOCK":
      return ZType.Z_TYPE_CLOCK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ZType.UNRECOGNIZED;
  }
}

export function zTypeToJSON(object: ZType): string {
  switch (object) {
    case ZType.Z_TYPE_RNG:
      return "Z_TYPE_RNG";
    case ZType.Z_TYPE_EVENT:
      return "Z_TYPE_EVENT";
    case ZType.Z_TYPE_CLOCK:
      return "Z_TYPE_CLOCK";
    case ZType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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

export interface ZMessages {
  messages: ZMessage[];
}

export interface Clock {
  values: { [key: string]: string };
}

export interface Clock_ValuesEntry {
  key: string;
  value: string;
}

export interface ClockInfo {
  clock: Clock | undefined;
  nodeId: Uint8Array;
  clockHash: Uint8Array;
  messageId: Uint8Array;
  count: string;
  createAt: string;
}

export interface ZChat {
  messageData: Uint8Array;
  clock: ClockInfo | undefined;
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

function createBaseZMessages(): ZMessages {
  return { messages: [] };
}

export const ZMessages = {
  encode(message: ZMessages, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      ZMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZMessages {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZMessages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages.push(ZMessage.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZMessages {
    return {
      messages: globalThis.Array.isArray(object?.messages) ? object.messages.map((e: any) => ZMessage.fromJSON(e)) : [],
    };
  },

  toJSON(message: ZMessages): unknown {
    const obj: any = {};
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => ZMessage.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZMessages>, I>>(base?: I): ZMessages {
    return ZMessages.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZMessages>, I>>(object: I): ZMessages {
    const message = createBaseZMessages();
    message.messages = object.messages?.map((e) => ZMessage.fromPartial(e)) || [];
    return message;
  },
};

function createBaseClock(): Clock {
  return { values: {} };
}

export const Clock = {
  encode(message: Clock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.values).forEach(([key, value]) => {
      Clock_ValuesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Clock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Clock_ValuesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.values[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Clock {
    return {
      values: isObject(object.values)
        ? Object.entries(object.values).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Clock): unknown {
    const obj: any = {};
    if (message.values) {
      const entries = Object.entries(message.values);
      if (entries.length > 0) {
        obj.values = {};
        entries.forEach(([k, v]) => {
          obj.values[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Clock>, I>>(base?: I): Clock {
    return Clock.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Clock>, I>>(object: I): Clock {
    const message = createBaseClock();
    message.values = Object.entries(object.values ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseClock_ValuesEntry(): Clock_ValuesEntry {
  return { key: "", value: "0" };
}

export const Clock_ValuesEntry = {
  encode(message: Clock_ValuesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "0") {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Clock_ValuesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClock_ValuesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Clock_ValuesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "0",
    };
  },

  toJSON(message: Clock_ValuesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "0") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Clock_ValuesEntry>, I>>(base?: I): Clock_ValuesEntry {
    return Clock_ValuesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Clock_ValuesEntry>, I>>(object: I): Clock_ValuesEntry {
    const message = createBaseClock_ValuesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "0";
    return message;
  },
};

function createBaseClockInfo(): ClockInfo {
  return {
    clock: undefined,
    nodeId: new Uint8Array(0),
    clockHash: new Uint8Array(0),
    messageId: new Uint8Array(0),
    count: "0",
    createAt: "0",
  };
}

export const ClockInfo = {
  encode(message: ClockInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clock !== undefined) {
      Clock.encode(message.clock, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodeId.length !== 0) {
      writer.uint32(18).bytes(message.nodeId);
    }
    if (message.clockHash.length !== 0) {
      writer.uint32(26).bytes(message.clockHash);
    }
    if (message.messageId.length !== 0) {
      writer.uint32(34).bytes(message.messageId);
    }
    if (message.count !== "0") {
      writer.uint32(40).uint64(message.count);
    }
    if (message.createAt !== "0") {
      writer.uint32(48).uint64(message.createAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClockInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClockInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clock = Clock.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeId = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clockHash = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.messageId = reader.bytes();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.count = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.createAt = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClockInfo {
    return {
      clock: isSet(object.clock) ? Clock.fromJSON(object.clock) : undefined,
      nodeId: isSet(object.nodeId) ? bytesFromBase64(object.nodeId) : new Uint8Array(0),
      clockHash: isSet(object.clockHash) ? bytesFromBase64(object.clockHash) : new Uint8Array(0),
      messageId: isSet(object.messageId) ? bytesFromBase64(object.messageId) : new Uint8Array(0),
      count: isSet(object.count) ? globalThis.String(object.count) : "0",
      createAt: isSet(object.createAt) ? globalThis.String(object.createAt) : "0",
    };
  },

  toJSON(message: ClockInfo): unknown {
    const obj: any = {};
    if (message.clock !== undefined) {
      obj.clock = Clock.toJSON(message.clock);
    }
    if (message.nodeId.length !== 0) {
      obj.nodeId = base64FromBytes(message.nodeId);
    }
    if (message.clockHash.length !== 0) {
      obj.clockHash = base64FromBytes(message.clockHash);
    }
    if (message.messageId.length !== 0) {
      obj.messageId = base64FromBytes(message.messageId);
    }
    if (message.count !== "0") {
      obj.count = message.count;
    }
    if (message.createAt !== "0") {
      obj.createAt = message.createAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClockInfo>, I>>(base?: I): ClockInfo {
    return ClockInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClockInfo>, I>>(object: I): ClockInfo {
    const message = createBaseClockInfo();
    message.clock = (object.clock !== undefined && object.clock !== null) ? Clock.fromPartial(object.clock) : undefined;
    message.nodeId = object.nodeId ?? new Uint8Array(0);
    message.clockHash = object.clockHash ?? new Uint8Array(0);
    message.messageId = object.messageId ?? new Uint8Array(0);
    message.count = object.count ?? "0";
    message.createAt = object.createAt ?? "0";
    return message;
  },
};

function createBaseZChat(): ZChat {
  return { messageData: new Uint8Array(0), clock: undefined };
}

export const ZChat = {
  encode(message: ZChat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageData.length !== 0) {
      writer.uint32(10).bytes(message.messageData);
    }
    if (message.clock !== undefined) {
      ClockInfo.encode(message.clock, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZChat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messageData = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clock = ClockInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZChat {
    return {
      messageData: isSet(object.messageData) ? bytesFromBase64(object.messageData) : new Uint8Array(0),
      clock: isSet(object.clock) ? ClockInfo.fromJSON(object.clock) : undefined,
    };
  },

  toJSON(message: ZChat): unknown {
    const obj: any = {};
    if (message.messageData.length !== 0) {
      obj.messageData = base64FromBytes(message.messageData);
    }
    if (message.clock !== undefined) {
      obj.clock = ClockInfo.toJSON(message.clock);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZChat>, I>>(base?: I): ZChat {
    return ZChat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZChat>, I>>(object: I): ZChat {
    const message = createBaseZChat();
    message.messageData = object.messageData ?? new Uint8Array(0);
    message.clock = (object.clock !== undefined && object.clock !== null)
      ? ClockInfo.fromPartial(object.clock)
      : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
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
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
