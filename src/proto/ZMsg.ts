/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'protos';

export enum ZType {
  Z_TYPE_RNG = 0,
  Z_TYPE_EVENT = 1,
  Z_TYPE_CLOCK = 2,
  Z_TYPE_GATEWAY = 3,
  Z_TYPE_ZCHAT = 4,
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
    case 3:
    case 'Z_TYPE_GATEWAY':
      return ZType.Z_TYPE_GATEWAY;
    case 4:
    case 'Z_TYPE_ZCHAT':
      return ZType.Z_TYPE_ZCHAT;
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
    case ZType.Z_TYPE_GATEWAY:
      return 'Z_TYPE_GATEWAY';
    case ZType.Z_TYPE_ZCHAT:
      return 'Z_TYPE_ZCHAT';
    case ZType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum ClockType {
  CLOCK_TYPE_EVENT_TRIGGER = 0,
  CLOCK_TYPE_DIFF_REQ = 1,
  CLOCK_TYPE_DIFF_RSP = 2,
  CLOCK_TYPE_ACTIVE_SYNC = 3,
  UNRECOGNIZED = -1,
}

export function clockTypeFromJSON(object: any): ClockType {
  switch (object) {
    case 0:
    case 'CLOCK_TYPE_EVENT_TRIGGER':
      return ClockType.CLOCK_TYPE_EVENT_TRIGGER;
    case 1:
    case 'CLOCK_TYPE_DIFF_REQ':
      return ClockType.CLOCK_TYPE_DIFF_REQ;
    case 2:
    case 'CLOCK_TYPE_DIFF_RSP':
      return ClockType.CLOCK_TYPE_DIFF_RSP;
    case 3:
    case 'CLOCK_TYPE_ACTIVE_SYNC':
      return ClockType.CLOCK_TYPE_ACTIVE_SYNC;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ClockType.UNRECOGNIZED;
  }
}

export function clockTypeToJSON(object: ClockType): string {
  switch (object) {
    case ClockType.CLOCK_TYPE_EVENT_TRIGGER:
      return 'CLOCK_TYPE_EVENT_TRIGGER';
    case ClockType.CLOCK_TYPE_DIFF_REQ:
      return 'CLOCK_TYPE_DIFF_REQ';
    case ClockType.CLOCK_TYPE_DIFF_RSP:
      return 'CLOCK_TYPE_DIFF_RSP';
    case ClockType.CLOCK_TYPE_ACTIVE_SYNC:
      return 'CLOCK_TYPE_ACTIVE_SYNC';
    case ClockType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Identity {
  IDENTITY_CLIENT = 0,
  IDENTITY_SERVER = 1,
  IDENTITY_INIT = 2,
  UNRECOGNIZED = -1,
}

export function identityFromJSON(object: any): Identity {
  switch (object) {
    case 0:
    case 'IDENTITY_CLIENT':
      return Identity.IDENTITY_CLIENT;
    case 1:
    case 'IDENTITY_SERVER':
      return Identity.IDENTITY_SERVER;
    case 2:
    case 'IDENTITY_INIT':
      return Identity.IDENTITY_INIT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Identity.UNRECOGNIZED;
  }
}

export function identityToJSON(object: Identity): string {
  switch (object) {
    case Identity.IDENTITY_CLIENT:
      return 'IDENTITY_CLIENT';
    case Identity.IDENTITY_SERVER:
      return 'IDENTITY_SERVER';
    case Identity.IDENTITY_INIT:
      return 'IDENTITY_INIT';
    case Identity.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Action {
  ACTION_READ = 0,
  ACTION_WRITE = 1,
  ACTION_READ_REPLY = 2,
  ACTION_WRITE_REPLY = 3,
  UNRECOGNIZED = -1,
}

export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case 'ACTION_READ':
      return Action.ACTION_READ;
    case 1:
    case 'ACTION_WRITE':
      return Action.ACTION_WRITE;
    case 2:
    case 'ACTION_READ_REPLY':
      return Action.ACTION_READ_REPLY;
    case 3:
    case 'ACTION_WRITE_REPLY':
      return Action.ACTION_WRITE_REPLY;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Action.UNRECOGNIZED;
  }
}

export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ACTION_READ:
      return 'ACTION_READ';
    case Action.ACTION_WRITE:
      return 'ACTION_WRITE';
    case Action.ACTION_READ_REPLY:
      return 'ACTION_READ_REPLY';
    case Action.ACTION_WRITE_REPLY:
      return 'ACTION_WRITE_REPLY';
    case Action.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum PushType {
  PUSH_TYPE_DIRECT = 0,
  PUSH_TYPE_BROADCAST = 1,
  UNRECOGNIZED = -1,
}

export function pushTypeFromJSON(object: any): PushType {
  switch (object) {
    case 0:
    case 'PUSH_TYPE_DIRECT':
      return PushType.PUSH_TYPE_DIRECT;
    case 1:
    case 'PUSH_TYPE_BROADCAST':
      return PushType.PUSH_TYPE_BROADCAST;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PushType.UNRECOGNIZED;
  }
}

export function pushTypeToJSON(object: PushType): string {
  switch (object) {
    case PushType.PUSH_TYPE_DIRECT:
      return 'PUSH_TYPE_DIRECT';
    case PushType.PUSH_TYPE_BROADCAST:
      return 'PUSH_TYPE_BROADCAST';
    case PushType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum QueryMethod {
  QUERY_BY_MSGID = 0,
  QUERY_BY_TABLE_KEYID = 1,
  UNRECOGNIZED = -1,
}

export function queryMethodFromJSON(object: any): QueryMethod {
  switch (object) {
    case 0:
    case 'QUERY_BY_MSGID':
      return QueryMethod.QUERY_BY_MSGID;
    case 1:
    case 'QUERY_BY_TABLE_KEYID':
      return QueryMethod.QUERY_BY_TABLE_KEYID;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return QueryMethod.UNRECOGNIZED;
  }
}

export function queryMethodToJSON(object: QueryMethod): string {
  switch (object) {
    case QueryMethod.QUERY_BY_MSGID:
      return 'QUERY_BY_MSGID';
    case QueryMethod.QUERY_BY_TABLE_KEYID:
      return 'QUERY_BY_TABLE_KEYID';
    case QueryMethod.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum GatewayType {
  GATEWAY_TYPE_CLOCK_NODE = 0,
  /** GATEWAY_TYPE_MERGE_LOG - ref merge log */
  GATEWAY_TYPE_MERGE_LOG = 1,
  /** GATEWAY_TYPE_NODE_INFO - heartbeat or node info */
  GATEWAY_TYPE_NODE_INFO = 2,
  UNRECOGNIZED = -1,
}

export function gatewayTypeFromJSON(object: any): GatewayType {
  switch (object) {
    case 0:
    case 'GATEWAY_TYPE_CLOCK_NODE':
      return GatewayType.GATEWAY_TYPE_CLOCK_NODE;
    case 1:
    case 'GATEWAY_TYPE_MERGE_LOG':
      return GatewayType.GATEWAY_TYPE_MERGE_LOG;
    case 2:
    case 'GATEWAY_TYPE_NODE_INFO':
      return GatewayType.GATEWAY_TYPE_NODE_INFO;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return GatewayType.UNRECOGNIZED;
  }
}

export function gatewayTypeToJSON(object: GatewayType): string {
  switch (object) {
    case GatewayType.GATEWAY_TYPE_CLOCK_NODE:
      return 'GATEWAY_TYPE_CLOCK_NODE';
    case GatewayType.GATEWAY_TYPE_MERGE_LOG:
      return 'GATEWAY_TYPE_MERGE_LOG';
    case GatewayType.GATEWAY_TYPE_NODE_INFO:
      return 'GATEWAY_TYPE_NODE_INFO';
    case GatewayType.UNRECOGNIZED:
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

export interface MergeLog {
  fromId: Uint8Array;
  toId: Uint8Array;
  startCount: string;
  endCount: string;
  sClock: Clock | undefined;
  eClock: Clock | undefined;
  mergeAt: string;
}

/** zmessage type = Z_TYPE_CLOCK */
export interface ZClock {
  type: ClockType;
  data: Uint8Array;
}

/** Server Clock Message */
export interface EventTrigger {
  clockInfo: ClockInfo | undefined;
  message: ZMessage | undefined;
}

export interface DiffReq {
  to: Uint8Array;
  fromClock: ClockInfo | undefined;
}

export interface DiffResp {
  to: Uint8Array;
  diffs: string[];
  from: ClockInfo | undefined;
}

export interface ActiveSync {
  to: Uint8Array;
  diffs: string[];
  latest: ClockInfo | undefined;
}

export interface Innermsg {
  identity: Identity;
  action: Action;
  /** for vlc */
  pushType: PushType;
  message: ZMessage | undefined;
  publicKeys: Uint8Array[];
  /** for verifying or threshold signatures */
  signatures: Uint8Array[];
}

export interface ZChat {
  messageData: Uint8Array;
  clock: ClockInfo | undefined;
}

/**
 * ZMessage.type = Z_TYPE_GATEWAY
 * Gateway just only needs read api
 */
export interface ZGateway {
  type: GatewayType;
  method: QueryMethod;
  data: Uint8Array;
}

/** ZGateway.type = GATEWAY_TYPE_CLOCK_NODE */
export interface ClockNode {
  clock: Clock | undefined;
  id: Uint8Array;
  messageId: Uint8Array;
  count: string;
  createAt: string;
  rawMessage: Uint8Array;
}

/** ZGateway.type = GATEWAY_TYPE_NODE_INFO */
export interface NodeInfo {
  nodeIds: string[];
}

export interface NodeData {
  publicKey: Uint8Array;
  websocketPort: number;
  jsonRpcPort: number;
  domain: string;
}

export interface QueryResponse {
  success: boolean;
  reason: string;
  data: Uint8Array;
}

/** ZGateway.method = QUERY_BY_MSGID */
export interface QueryByMsgID {
  msgId: string;
}

/** ZGateway.method = QUERY_BY_TABLE_KEYID */
export interface QueryByTableKeyID {
  lastPos: string;
}

export interface OutboundMsg {
  id: Uint8Array;
  from: Uint8Array;
  to: Uint8Array;
  data: Uint8Array;
  type: ZType;
}

export interface InboundMsg {
  id: Uint8Array;
  from: Uint8Array;
  data: Uint8Array;
  type: ZType;
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
  return { key: '', value: '0' };
}

export const Clock_ValuesEntry = {
  encode(message: Clock_ValuesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== '0') {
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
      key: isSet(object.key) ? globalThis.String(object.key) : '',
      value: isSet(object.value) ? globalThis.String(object.value) : '0',
    };
  },

  toJSON(message: Clock_ValuesEntry): unknown {
    const obj: any = {};
    if (message.key !== '') {
      obj.key = message.key;
    }
    if (message.value !== '0') {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Clock_ValuesEntry>, I>>(base?: I): Clock_ValuesEntry {
    return Clock_ValuesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Clock_ValuesEntry>, I>>(object: I): Clock_ValuesEntry {
    const message = createBaseClock_ValuesEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '0';
    return message;
  },
};

function createBaseClockInfo(): ClockInfo {
  return {
    clock: undefined,
    nodeId: new Uint8Array(0),
    clockHash: new Uint8Array(0),
    messageId: new Uint8Array(0),
    count: '0',
    createAt: '0',
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
    if (message.count !== '0') {
      writer.uint32(40).uint64(message.count);
    }
    if (message.createAt !== '0') {
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
      count: isSet(object.count) ? globalThis.String(object.count) : '0',
      createAt: isSet(object.createAt) ? globalThis.String(object.createAt) : '0',
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
    if (message.count !== '0') {
      obj.count = message.count;
    }
    if (message.createAt !== '0') {
      obj.createAt = message.createAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClockInfo>, I>>(base?: I): ClockInfo {
    return ClockInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClockInfo>, I>>(object: I): ClockInfo {
    const message = createBaseClockInfo();
    message.clock = object.clock !== undefined && object.clock !== null ? Clock.fromPartial(object.clock) : undefined;
    message.nodeId = object.nodeId ?? new Uint8Array(0);
    message.clockHash = object.clockHash ?? new Uint8Array(0);
    message.messageId = object.messageId ?? new Uint8Array(0);
    message.count = object.count ?? '0';
    message.createAt = object.createAt ?? '0';
    return message;
  },
};

function createBaseMergeLog(): MergeLog {
  return {
    fromId: new Uint8Array(0),
    toId: new Uint8Array(0),
    startCount: '0',
    endCount: '0',
    sClock: undefined,
    eClock: undefined,
    mergeAt: '0',
  };
}

export const MergeLog = {
  encode(message: MergeLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromId.length !== 0) {
      writer.uint32(10).bytes(message.fromId);
    }
    if (message.toId.length !== 0) {
      writer.uint32(18).bytes(message.toId);
    }
    if (message.startCount !== '0') {
      writer.uint32(24).uint64(message.startCount);
    }
    if (message.endCount !== '0') {
      writer.uint32(32).uint64(message.endCount);
    }
    if (message.sClock !== undefined) {
      Clock.encode(message.sClock, writer.uint32(42).fork()).ldelim();
    }
    if (message.eClock !== undefined) {
      Clock.encode(message.eClock, writer.uint32(50).fork()).ldelim();
    }
    if (message.mergeAt !== '0') {
      writer.uint32(56).uint64(message.mergeAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MergeLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMergeLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fromId = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toId = reader.bytes();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.startCount = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.endCount = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sClock = Clock.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.eClock = Clock.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.mergeAt = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MergeLog {
    return {
      fromId: isSet(object.fromId) ? bytesFromBase64(object.fromId) : new Uint8Array(0),
      toId: isSet(object.toId) ? bytesFromBase64(object.toId) : new Uint8Array(0),
      startCount: isSet(object.startCount) ? globalThis.String(object.startCount) : '0',
      endCount: isSet(object.endCount) ? globalThis.String(object.endCount) : '0',
      sClock: isSet(object.sClock) ? Clock.fromJSON(object.sClock) : undefined,
      eClock: isSet(object.eClock) ? Clock.fromJSON(object.eClock) : undefined,
      mergeAt: isSet(object.mergeAt) ? globalThis.String(object.mergeAt) : '0',
    };
  },

  toJSON(message: MergeLog): unknown {
    const obj: any = {};
    if (message.fromId.length !== 0) {
      obj.fromId = base64FromBytes(message.fromId);
    }
    if (message.toId.length !== 0) {
      obj.toId = base64FromBytes(message.toId);
    }
    if (message.startCount !== '0') {
      obj.startCount = message.startCount;
    }
    if (message.endCount !== '0') {
      obj.endCount = message.endCount;
    }
    if (message.sClock !== undefined) {
      obj.sClock = Clock.toJSON(message.sClock);
    }
    if (message.eClock !== undefined) {
      obj.eClock = Clock.toJSON(message.eClock);
    }
    if (message.mergeAt !== '0') {
      obj.mergeAt = message.mergeAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MergeLog>, I>>(base?: I): MergeLog {
    return MergeLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MergeLog>, I>>(object: I): MergeLog {
    const message = createBaseMergeLog();
    message.fromId = object.fromId ?? new Uint8Array(0);
    message.toId = object.toId ?? new Uint8Array(0);
    message.startCount = object.startCount ?? '0';
    message.endCount = object.endCount ?? '0';
    message.sClock =
      object.sClock !== undefined && object.sClock !== null ? Clock.fromPartial(object.sClock) : undefined;
    message.eClock =
      object.eClock !== undefined && object.eClock !== null ? Clock.fromPartial(object.eClock) : undefined;
    message.mergeAt = object.mergeAt ?? '0';
    return message;
  },
};

function createBaseZClock(): ZClock {
  return { type: 0, data: new Uint8Array(0) };
}

export const ZClock = {
  encode(message: ZClock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZClock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZClock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZClock {
    return {
      type: isSet(object.type) ? clockTypeFromJSON(object.type) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: ZClock): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = clockTypeToJSON(message.type);
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZClock>, I>>(base?: I): ZClock {
    return ZClock.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZClock>, I>>(object: I): ZClock {
    const message = createBaseZClock();
    message.type = object.type ?? 0;
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseEventTrigger(): EventTrigger {
  return { clockInfo: undefined, message: undefined };
}

export const EventTrigger = {
  encode(message: EventTrigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clockInfo !== undefined) {
      ClockInfo.encode(message.clockInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.message !== undefined) {
      ZMessage.encode(message.message, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTrigger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clockInfo = ClockInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = ZMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventTrigger {
    return {
      clockInfo: isSet(object.clockInfo) ? ClockInfo.fromJSON(object.clockInfo) : undefined,
      message: isSet(object.message) ? ZMessage.fromJSON(object.message) : undefined,
    };
  },

  toJSON(message: EventTrigger): unknown {
    const obj: any = {};
    if (message.clockInfo !== undefined) {
      obj.clockInfo = ClockInfo.toJSON(message.clockInfo);
    }
    if (message.message !== undefined) {
      obj.message = ZMessage.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventTrigger>, I>>(base?: I): EventTrigger {
    return EventTrigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventTrigger>, I>>(object: I): EventTrigger {
    const message = createBaseEventTrigger();
    message.clockInfo =
      object.clockInfo !== undefined && object.clockInfo !== null ? ClockInfo.fromPartial(object.clockInfo) : undefined;
    message.message =
      object.message !== undefined && object.message !== null ? ZMessage.fromPartial(object.message) : undefined;
    return message;
  },
};

function createBaseDiffReq(): DiffReq {
  return { to: new Uint8Array(0), fromClock: undefined };
}

export const DiffReq = {
  encode(message: DiffReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to.length !== 0) {
      writer.uint32(10).bytes(message.to);
    }
    if (message.fromClock !== undefined) {
      ClockInfo.encode(message.fromClock, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiffReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiffReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.to = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fromClock = ClockInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DiffReq {
    return {
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(0),
      fromClock: isSet(object.fromClock) ? ClockInfo.fromJSON(object.fromClock) : undefined,
    };
  },

  toJSON(message: DiffReq): unknown {
    const obj: any = {};
    if (message.to.length !== 0) {
      obj.to = base64FromBytes(message.to);
    }
    if (message.fromClock !== undefined) {
      obj.fromClock = ClockInfo.toJSON(message.fromClock);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiffReq>, I>>(base?: I): DiffReq {
    return DiffReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiffReq>, I>>(object: I): DiffReq {
    const message = createBaseDiffReq();
    message.to = object.to ?? new Uint8Array(0);
    message.fromClock =
      object.fromClock !== undefined && object.fromClock !== null ? ClockInfo.fromPartial(object.fromClock) : undefined;
    return message;
  },
};

function createBaseDiffResp(): DiffResp {
  return { to: new Uint8Array(0), diffs: [], from: undefined };
}

export const DiffResp = {
  encode(message: DiffResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to.length !== 0) {
      writer.uint32(10).bytes(message.to);
    }
    for (const v of message.diffs) {
      writer.uint32(18).string(v!);
    }
    if (message.from !== undefined) {
      ClockInfo.encode(message.from, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiffResp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiffResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.to = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.diffs.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.from = ClockInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DiffResp {
    return {
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(0),
      diffs: globalThis.Array.isArray(object?.diffs) ? object.diffs.map((e: any) => globalThis.String(e)) : [],
      from: isSet(object.from) ? ClockInfo.fromJSON(object.from) : undefined,
    };
  },

  toJSON(message: DiffResp): unknown {
    const obj: any = {};
    if (message.to.length !== 0) {
      obj.to = base64FromBytes(message.to);
    }
    if (message.diffs?.length) {
      obj.diffs = message.diffs;
    }
    if (message.from !== undefined) {
      obj.from = ClockInfo.toJSON(message.from);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiffResp>, I>>(base?: I): DiffResp {
    return DiffResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DiffResp>, I>>(object: I): DiffResp {
    const message = createBaseDiffResp();
    message.to = object.to ?? new Uint8Array(0);
    message.diffs = object.diffs?.map(e => e) || [];
    message.from = object.from !== undefined && object.from !== null ? ClockInfo.fromPartial(object.from) : undefined;
    return message;
  },
};

function createBaseActiveSync(): ActiveSync {
  return { to: new Uint8Array(0), diffs: [], latest: undefined };
}

export const ActiveSync = {
  encode(message: ActiveSync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.to.length !== 0) {
      writer.uint32(10).bytes(message.to);
    }
    for (const v of message.diffs) {
      writer.uint32(18).string(v!);
    }
    if (message.latest !== undefined) {
      ClockInfo.encode(message.latest, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveSync {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveSync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.to = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.diffs.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.latest = ClockInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActiveSync {
    return {
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(0),
      diffs: globalThis.Array.isArray(object?.diffs) ? object.diffs.map((e: any) => globalThis.String(e)) : [],
      latest: isSet(object.latest) ? ClockInfo.fromJSON(object.latest) : undefined,
    };
  },

  toJSON(message: ActiveSync): unknown {
    const obj: any = {};
    if (message.to.length !== 0) {
      obj.to = base64FromBytes(message.to);
    }
    if (message.diffs?.length) {
      obj.diffs = message.diffs;
    }
    if (message.latest !== undefined) {
      obj.latest = ClockInfo.toJSON(message.latest);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActiveSync>, I>>(base?: I): ActiveSync {
    return ActiveSync.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActiveSync>, I>>(object: I): ActiveSync {
    const message = createBaseActiveSync();
    message.to = object.to ?? new Uint8Array(0);
    message.diffs = object.diffs?.map(e => e) || [];
    message.latest =
      object.latest !== undefined && object.latest !== null ? ClockInfo.fromPartial(object.latest) : undefined;
    return message;
  },
};

function createBaseInnermsg(): Innermsg {
  return { identity: 0, action: 0, pushType: 0, message: undefined, publicKeys: [], signatures: [] };
}

export const Innermsg = {
  encode(message: Innermsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identity !== 0) {
      writer.uint32(8).int32(message.identity);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    if (message.pushType !== 0) {
      writer.uint32(24).int32(message.pushType);
    }
    if (message.message !== undefined) {
      ZMessage.encode(message.message, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.publicKeys) {
      writer.uint32(42).bytes(v!);
    }
    for (const v of message.signatures) {
      writer.uint32(50).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Innermsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnermsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.identity = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pushType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.message = ZMessage.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.publicKeys.push(reader.bytes());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.signatures.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Innermsg {
    return {
      identity: isSet(object.identity) ? identityFromJSON(object.identity) : 0,
      action: isSet(object.action) ? actionFromJSON(object.action) : 0,
      pushType: isSet(object.pushType) ? pushTypeFromJSON(object.pushType) : 0,
      message: isSet(object.message) ? ZMessage.fromJSON(object.message) : undefined,
      publicKeys: globalThis.Array.isArray(object?.publicKeys)
        ? object.publicKeys.map((e: any) => bytesFromBase64(e))
        : [],
      signatures: globalThis.Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: Innermsg): unknown {
    const obj: any = {};
    if (message.identity !== 0) {
      obj.identity = identityToJSON(message.identity);
    }
    if (message.action !== 0) {
      obj.action = actionToJSON(message.action);
    }
    if (message.pushType !== 0) {
      obj.pushType = pushTypeToJSON(message.pushType);
    }
    if (message.message !== undefined) {
      obj.message = ZMessage.toJSON(message.message);
    }
    if (message.publicKeys?.length) {
      obj.publicKeys = message.publicKeys.map(e => base64FromBytes(e));
    }
    if (message.signatures?.length) {
      obj.signatures = message.signatures.map(e => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Innermsg>, I>>(base?: I): Innermsg {
    return Innermsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Innermsg>, I>>(object: I): Innermsg {
    const message = createBaseInnermsg();
    message.identity = object.identity ?? 0;
    message.action = object.action ?? 0;
    message.pushType = object.pushType ?? 0;
    message.message =
      object.message !== undefined && object.message !== null ? ZMessage.fromPartial(object.message) : undefined;
    message.publicKeys = object.publicKeys?.map(e => e) || [];
    message.signatures = object.signatures?.map(e => e) || [];
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
    message.clock =
      object.clock !== undefined && object.clock !== null ? ClockInfo.fromPartial(object.clock) : undefined;
    return message;
  },
};

function createBaseZGateway(): ZGateway {
  return { type: 0, method: 0, data: new Uint8Array(0) };
}

export const ZGateway = {
  encode(message: ZGateway, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ZGateway {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZGateway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.method = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ZGateway {
    return {
      type: isSet(object.type) ? gatewayTypeFromJSON(object.type) : 0,
      method: isSet(object.method) ? queryMethodFromJSON(object.method) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: ZGateway): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = gatewayTypeToJSON(message.type);
    }
    if (message.method !== 0) {
      obj.method = queryMethodToJSON(message.method);
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ZGateway>, I>>(base?: I): ZGateway {
    return ZGateway.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ZGateway>, I>>(object: I): ZGateway {
    const message = createBaseZGateway();
    message.type = object.type ?? 0;
    message.method = object.method ?? 0;
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseClockNode(): ClockNode {
  return {
    clock: undefined,
    id: new Uint8Array(0),
    messageId: new Uint8Array(0),
    count: '0',
    createAt: '0',
    rawMessage: new Uint8Array(0),
  };
}

export const ClockNode = {
  encode(message: ClockNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clock !== undefined) {
      Clock.encode(message.clock, writer.uint32(10).fork()).ldelim();
    }
    if (message.id.length !== 0) {
      writer.uint32(18).bytes(message.id);
    }
    if (message.messageId.length !== 0) {
      writer.uint32(26).bytes(message.messageId);
    }
    if (message.count !== '0') {
      writer.uint32(32).uint64(message.count);
    }
    if (message.createAt !== '0') {
      writer.uint32(40).uint64(message.createAt);
    }
    if (message.rawMessage.length !== 0) {
      writer.uint32(50).bytes(message.rawMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClockNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClockNode();
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

          message.id = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.messageId = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.count = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.createAt = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.rawMessage = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClockNode {
    return {
      clock: isSet(object.clock) ? Clock.fromJSON(object.clock) : undefined,
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(0),
      messageId: isSet(object.messageId) ? bytesFromBase64(object.messageId) : new Uint8Array(0),
      count: isSet(object.count) ? globalThis.String(object.count) : '0',
      createAt: isSet(object.createAt) ? globalThis.String(object.createAt) : '0',
      rawMessage: isSet(object.rawMessage) ? bytesFromBase64(object.rawMessage) : new Uint8Array(0),
    };
  },

  toJSON(message: ClockNode): unknown {
    const obj: any = {};
    if (message.clock !== undefined) {
      obj.clock = Clock.toJSON(message.clock);
    }
    if (message.id.length !== 0) {
      obj.id = base64FromBytes(message.id);
    }
    if (message.messageId.length !== 0) {
      obj.messageId = base64FromBytes(message.messageId);
    }
    if (message.count !== '0') {
      obj.count = message.count;
    }
    if (message.createAt !== '0') {
      obj.createAt = message.createAt;
    }
    if (message.rawMessage.length !== 0) {
      obj.rawMessage = base64FromBytes(message.rawMessage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClockNode>, I>>(base?: I): ClockNode {
    return ClockNode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClockNode>, I>>(object: I): ClockNode {
    const message = createBaseClockNode();
    message.clock = object.clock !== undefined && object.clock !== null ? Clock.fromPartial(object.clock) : undefined;
    message.id = object.id ?? new Uint8Array(0);
    message.messageId = object.messageId ?? new Uint8Array(0);
    message.count = object.count ?? '0';
    message.createAt = object.createAt ?? '0';
    message.rawMessage = object.rawMessage ?? new Uint8Array(0);
    return message;
  },
};

function createBaseNodeInfo(): NodeInfo {
  return { nodeIds: [] };
}

export const NodeInfo = {
  encode(message: NodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodeIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeInfo {
    return {
      nodeIds: globalThis.Array.isArray(object?.nodeIds) ? object.nodeIds.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: NodeInfo): unknown {
    const obj: any = {};
    if (message.nodeIds?.length) {
      obj.nodeIds = message.nodeIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeInfo>, I>>(base?: I): NodeInfo {
    return NodeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeInfo>, I>>(object: I): NodeInfo {
    const message = createBaseNodeInfo();
    message.nodeIds = object.nodeIds?.map(e => e) || [];
    return message;
  },
};

function createBaseNodeData(): NodeData {
  return { publicKey: new Uint8Array(0), websocketPort: 0, jsonRpcPort: 0, domain: '' };
}

export const NodeData = {
  encode(message: NodeData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey.length !== 0) {
      writer.uint32(10).bytes(message.publicKey);
    }
    if (message.websocketPort !== 0) {
      writer.uint32(16).uint32(message.websocketPort);
    }
    if (message.jsonRpcPort !== 0) {
      writer.uint32(24).uint32(message.jsonRpcPort);
    }
    if (message.domain !== '') {
      writer.uint32(34).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.publicKey = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.websocketPort = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.jsonRpcPort = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.domain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeData {
    return {
      publicKey: isSet(object.publicKey) ? bytesFromBase64(object.publicKey) : new Uint8Array(0),
      websocketPort: isSet(object.websocketPort) ? globalThis.Number(object.websocketPort) : 0,
      jsonRpcPort: isSet(object.jsonRpcPort) ? globalThis.Number(object.jsonRpcPort) : 0,
      domain: isSet(object.domain) ? globalThis.String(object.domain) : '',
    };
  },

  toJSON(message: NodeData): unknown {
    const obj: any = {};
    if (message.publicKey.length !== 0) {
      obj.publicKey = base64FromBytes(message.publicKey);
    }
    if (message.websocketPort !== 0) {
      obj.websocketPort = Math.round(message.websocketPort);
    }
    if (message.jsonRpcPort !== 0) {
      obj.jsonRpcPort = Math.round(message.jsonRpcPort);
    }
    if (message.domain !== '') {
      obj.domain = message.domain;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeData>, I>>(base?: I): NodeData {
    return NodeData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeData>, I>>(object: I): NodeData {
    const message = createBaseNodeData();
    message.publicKey = object.publicKey ?? new Uint8Array(0);
    message.websocketPort = object.websocketPort ?? 0;
    message.jsonRpcPort = object.jsonRpcPort ?? 0;
    message.domain = object.domain ?? '';
    return message;
  },
};

function createBaseQueryResponse(): QueryResponse {
  return { success: false, reason: '', data: new Uint8Array(0) };
}

export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success !== false) {
      writer.uint32(8).bool(message.success);
    }
    if (message.reason !== '') {
      writer.uint32(18).string(message.reason);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryResponse {
    return {
      success: isSet(object.success) ? globalThis.Boolean(object.success) : false,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : '',
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    if (message.success !== false) {
      obj.success = message.success;
    }
    if (message.reason !== '') {
      obj.reason = message.reason;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryResponse>, I>>(base?: I): QueryResponse {
    return QueryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryResponse>, I>>(object: I): QueryResponse {
    const message = createBaseQueryResponse();
    message.success = object.success ?? false;
    message.reason = object.reason ?? '';
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseQueryByMsgID(): QueryByMsgID {
  return { msgId: '' };
}

export const QueryByMsgID = {
  encode(message: QueryByMsgID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgId !== '') {
      writer.uint32(10).string(message.msgId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByMsgID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByMsgID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msgId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryByMsgID {
    return { msgId: isSet(object.msgId) ? globalThis.String(object.msgId) : '' };
  },

  toJSON(message: QueryByMsgID): unknown {
    const obj: any = {};
    if (message.msgId !== '') {
      obj.msgId = message.msgId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryByMsgID>, I>>(base?: I): QueryByMsgID {
    return QueryByMsgID.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryByMsgID>, I>>(object: I): QueryByMsgID {
    const message = createBaseQueryByMsgID();
    message.msgId = object.msgId ?? '';
    return message;
  },
};

function createBaseQueryByTableKeyID(): QueryByTableKeyID {
  return { lastPos: '0' };
}

export const QueryByTableKeyID = {
  encode(message: QueryByTableKeyID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastPos !== '0') {
      writer.uint32(8).uint64(message.lastPos);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByTableKeyID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByTableKeyID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.lastPos = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryByTableKeyID {
    return { lastPos: isSet(object.lastPos) ? globalThis.String(object.lastPos) : '0' };
  },

  toJSON(message: QueryByTableKeyID): unknown {
    const obj: any = {};
    if (message.lastPos !== '0') {
      obj.lastPos = message.lastPos;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryByTableKeyID>, I>>(base?: I): QueryByTableKeyID {
    return QueryByTableKeyID.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryByTableKeyID>, I>>(object: I): QueryByTableKeyID {
    const message = createBaseQueryByTableKeyID();
    message.lastPos = object.lastPos ?? '0';
    return message;
  },
};

function createBaseOutboundMsg(): OutboundMsg {
  return { id: new Uint8Array(0), from: new Uint8Array(0), to: new Uint8Array(0), data: new Uint8Array(0), type: 0 };
}

export const OutboundMsg = {
  encode(message: OutboundMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.from.length !== 0) {
      writer.uint32(18).bytes(message.from);
    }
    if (message.to.length !== 0) {
      writer.uint32(26).bytes(message.to);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutboundMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutboundMsg();
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
          if (tag !== 18) {
            break;
          }

          message.from = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutboundMsg {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(0),
      from: isSet(object.from) ? bytesFromBase64(object.from) : new Uint8Array(0),
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(0),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      type: isSet(object.type) ? zTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: OutboundMsg): unknown {
    const obj: any = {};
    if (message.id.length !== 0) {
      obj.id = base64FromBytes(message.id);
    }
    if (message.from.length !== 0) {
      obj.from = base64FromBytes(message.from);
    }
    if (message.to.length !== 0) {
      obj.to = base64FromBytes(message.to);
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.type !== 0) {
      obj.type = zTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OutboundMsg>, I>>(base?: I): OutboundMsg {
    return OutboundMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OutboundMsg>, I>>(object: I): OutboundMsg {
    const message = createBaseOutboundMsg();
    message.id = object.id ?? new Uint8Array(0);
    message.from = object.from ?? new Uint8Array(0);
    message.to = object.to ?? new Uint8Array(0);
    message.data = object.data ?? new Uint8Array(0);
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseInboundMsg(): InboundMsg {
  return { id: new Uint8Array(0), from: new Uint8Array(0), data: new Uint8Array(0), type: 0 };
}

export const InboundMsg = {
  encode(message: InboundMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.from.length !== 0) {
      writer.uint32(18).bytes(message.from);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InboundMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInboundMsg();
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
          if (tag !== 18) {
            break;
          }

          message.from = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InboundMsg {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(0),
      from: isSet(object.from) ? bytesFromBase64(object.from) : new Uint8Array(0),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      type: isSet(object.type) ? zTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: InboundMsg): unknown {
    const obj: any = {};
    if (message.id.length !== 0) {
      obj.id = base64FromBytes(message.id);
    }
    if (message.from.length !== 0) {
      obj.from = base64FromBytes(message.from);
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.type !== 0) {
      obj.type = zTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InboundMsg>, I>>(base?: I): InboundMsg {
    return InboundMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InboundMsg>, I>>(object: I): InboundMsg {
    const message = createBaseInboundMsg();
    message.id = object.id ?? new Uint8Array(0);
    message.from = object.from ?? new Uint8Array(0);
    message.data = object.data ?? new Uint8Array(0);
    message.type = object.type ?? 0;
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

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
