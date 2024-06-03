/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * ZType enum.
 * @exports ZType
 * @enum {number}
 * @property {number} Z_TYPE_RNG=0 Z_TYPE_RNG value
 * @property {number} Z_TYPE_EVENT=1 Z_TYPE_EVENT value
 * @property {number} Z_TYPE_CLOCK=2 Z_TYPE_CLOCK value
 */
export const ZType = $root.ZType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Z_TYPE_RNG"] = 0;
    values[valuesById[1] = "Z_TYPE_EVENT"] = 1;
    values[valuesById[2] = "Z_TYPE_CLOCK"] = 2;
    return values;
})();

export const ZMessage = $root.ZMessage = (() => {

    /**
     * Properties of a ZMessage.
     * @exports IZMessage
     * @interface IZMessage
     * @property {Uint8Array|null} [id] ZMessage id
     * @property {number|null} [version] ZMessage version
     * @property {ZType|null} [type] ZMessage type
     * @property {Uint8Array|null} [publicKey] ZMessage publicKey
     * @property {Uint8Array|null} [data] ZMessage data
     * @property {Uint8Array|null} [signature] ZMessage signature
     * @property {Uint8Array|null} [from] ZMessage from
     * @property {Uint8Array|null} [to] ZMessage to
     */

    /**
     * Constructs a new ZMessage.
     * @exports ZMessage
     * @classdesc Represents a ZMessage.
     * @implements IZMessage
     * @constructor
     * @param {IZMessage=} [properties] Properties to set
     */
    function ZMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ZMessage id.
     * @member {Uint8Array} id
     * @memberof ZMessage
     * @instance
     */
    ZMessage.prototype.id = $util.newBuffer([]);

    /**
     * ZMessage version.
     * @member {number} version
     * @memberof ZMessage
     * @instance
     */
    ZMessage.prototype.version = 0;

    /**
     * ZMessage type.
     * @member {ZType} type
     * @memberof ZMessage
     * @instance
     */
    ZMessage.prototype.type = 0;

    /**
     * ZMessage publicKey.
     * @member {Uint8Array} publicKey
     * @memberof ZMessage
     * @instance
     */
    ZMessage.prototype.publicKey = $util.newBuffer([]);

    /**
     * ZMessage data.
     * @member {Uint8Array} data
     * @memberof ZMessage
     * @instance
     */
    ZMessage.prototype.data = $util.newBuffer([]);

    /**
     * ZMessage signature.
     * @member {Uint8Array} signature
     * @memberof ZMessage
     * @instance
     */
    ZMessage.prototype.signature = $util.newBuffer([]);

    /**
     * ZMessage from.
     * @member {Uint8Array} from
     * @memberof ZMessage
     * @instance
     */
    ZMessage.prototype.from = $util.newBuffer([]);

    /**
     * ZMessage to.
     * @member {Uint8Array} to
     * @memberof ZMessage
     * @instance
     */
    ZMessage.prototype.to = $util.newBuffer([]);

    /**
     * Creates a new ZMessage instance using the specified properties.
     * @function create
     * @memberof ZMessage
     * @static
     * @param {IZMessage=} [properties] Properties to set
     * @returns {ZMessage} ZMessage instance
     */
    ZMessage.create = function create(properties) {
        return new ZMessage(properties);
    };

    /**
     * Encodes the specified ZMessage message. Does not implicitly {@link ZMessage.verify|verify} messages.
     * @function encode
     * @memberof ZMessage
     * @static
     * @param {IZMessage} message ZMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.version);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
        if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.publicKey);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.data);
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.signature);
        if (message.from != null && Object.hasOwnProperty.call(message, "from"))
            writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.from);
        if (message.to != null && Object.hasOwnProperty.call(message, "to"))
            writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.to);
        return writer;
    };

    /**
     * Encodes the specified ZMessage message, length delimited. Does not implicitly {@link ZMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ZMessage
     * @static
     * @param {IZMessage} message ZMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ZMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ZMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ZMessage} ZMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ZMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.bytes();
                    break;
                }
            case 2: {
                    message.version = reader.uint32();
                    break;
                }
            case 3: {
                    message.type = reader.int32();
                    break;
                }
            case 4: {
                    message.publicKey = reader.bytes();
                    break;
                }
            case 5: {
                    message.data = reader.bytes();
                    break;
                }
            case 6: {
                    message.signature = reader.bytes();
                    break;
                }
            case 7: {
                    message.from = reader.bytes();
                    break;
                }
            case 8: {
                    message.to = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ZMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ZMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ZMessage} ZMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ZMessage message.
     * @function verify
     * @memberof ZMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ZMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                return "id: buffer expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isInteger(message.version))
                return "version: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                return "publicKey: buffer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        if (message.signature != null && message.hasOwnProperty("signature"))
            if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                return "signature: buffer expected";
        if (message.from != null && message.hasOwnProperty("from"))
            if (!(message.from && typeof message.from.length === "number" || $util.isString(message.from)))
                return "from: buffer expected";
        if (message.to != null && message.hasOwnProperty("to"))
            if (!(message.to && typeof message.to.length === "number" || $util.isString(message.to)))
                return "to: buffer expected";
        return null;
    };

    /**
     * Creates a ZMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ZMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ZMessage} ZMessage
     */
    ZMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ZMessage)
            return object;
        let message = new $root.ZMessage();
        if (object.id != null)
            if (typeof object.id === "string")
                $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
            else if (object.id.length >= 0)
                message.id = object.id;
        if (object.version != null)
            message.version = object.version >>> 0;
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "Z_TYPE_RNG":
        case 0:
            message.type = 0;
            break;
        case "Z_TYPE_EVENT":
        case 1:
            message.type = 1;
            break;
        case "Z_TYPE_CLOCK":
        case 2:
            message.type = 2;
            break;
        }
        if (object.publicKey != null)
            if (typeof object.publicKey === "string")
                $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
            else if (object.publicKey.length >= 0)
                message.publicKey = object.publicKey;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length >= 0)
                message.data = object.data;
        if (object.signature != null)
            if (typeof object.signature === "string")
                $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
            else if (object.signature.length >= 0)
                message.signature = object.signature;
        if (object.from != null)
            if (typeof object.from === "string")
                $util.base64.decode(object.from, message.from = $util.newBuffer($util.base64.length(object.from)), 0);
            else if (object.from.length >= 0)
                message.from = object.from;
        if (object.to != null)
            if (typeof object.to === "string")
                $util.base64.decode(object.to, message.to = $util.newBuffer($util.base64.length(object.to)), 0);
            else if (object.to.length >= 0)
                message.to = object.to;
        return message;
    };

    /**
     * Creates a plain object from a ZMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ZMessage
     * @static
     * @param {ZMessage} message ZMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ZMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.id = "";
            else {
                object.id = [];
                if (options.bytes !== Array)
                    object.id = $util.newBuffer(object.id);
            }
            object.version = 0;
            object.type = options.enums === String ? "Z_TYPE_RNG" : 0;
            if (options.bytes === String)
                object.publicKey = "";
            else {
                object.publicKey = [];
                if (options.bytes !== Array)
                    object.publicKey = $util.newBuffer(object.publicKey);
            }
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            if (options.bytes === String)
                object.signature = "";
            else {
                object.signature = [];
                if (options.bytes !== Array)
                    object.signature = $util.newBuffer(object.signature);
            }
            if (options.bytes === String)
                object.from = "";
            else {
                object.from = [];
                if (options.bytes !== Array)
                    object.from = $util.newBuffer(object.from);
            }
            if (options.bytes === String)
                object.to = "";
            else {
                object.to = [];
                if (options.bytes !== Array)
                    object.to = $util.newBuffer(object.to);
            }
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.ZType[message.type] === undefined ? message.type : $root.ZType[message.type] : message.type;
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
            object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
        if (message.from != null && message.hasOwnProperty("from"))
            object.from = options.bytes === String ? $util.base64.encode(message.from, 0, message.from.length) : options.bytes === Array ? Array.prototype.slice.call(message.from) : message.from;
        if (message.to != null && message.hasOwnProperty("to"))
            object.to = options.bytes === String ? $util.base64.encode(message.to, 0, message.to.length) : options.bytes === Array ? Array.prototype.slice.call(message.to) : message.to;
        return object;
    };

    /**
     * Converts this ZMessage to JSON.
     * @function toJSON
     * @memberof ZMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ZMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ZMessage
     * @function getTypeUrl
     * @memberof ZMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ZMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ZMessage";
    };

    return ZMessage;
})();

export const ZMessages = $root.ZMessages = (() => {

    /**
     * Properties of a ZMessages.
     * @exports IZMessages
     * @interface IZMessages
     * @property {Array.<IZMessage>|null} [messages] ZMessages messages
     */

    /**
     * Constructs a new ZMessages.
     * @exports ZMessages
     * @classdesc Represents a ZMessages.
     * @implements IZMessages
     * @constructor
     * @param {IZMessages=} [properties] Properties to set
     */
    function ZMessages(properties) {
        this.messages = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ZMessages messages.
     * @member {Array.<IZMessage>} messages
     * @memberof ZMessages
     * @instance
     */
    ZMessages.prototype.messages = $util.emptyArray;

    /**
     * Creates a new ZMessages instance using the specified properties.
     * @function create
     * @memberof ZMessages
     * @static
     * @param {IZMessages=} [properties] Properties to set
     * @returns {ZMessages} ZMessages instance
     */
    ZMessages.create = function create(properties) {
        return new ZMessages(properties);
    };

    /**
     * Encodes the specified ZMessages message. Does not implicitly {@link ZMessages.verify|verify} messages.
     * @function encode
     * @memberof ZMessages
     * @static
     * @param {IZMessages} message ZMessages message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZMessages.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messages != null && message.messages.length)
            for (let i = 0; i < message.messages.length; ++i)
                $root.ZMessage.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ZMessages message, length delimited. Does not implicitly {@link ZMessages.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ZMessages
     * @static
     * @param {IZMessages} message ZMessages message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZMessages.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ZMessages message from the specified reader or buffer.
     * @function decode
     * @memberof ZMessages
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ZMessages} ZMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZMessages.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ZMessages();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.ZMessage.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ZMessages message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ZMessages
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ZMessages} ZMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZMessages.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ZMessages message.
     * @function verify
     * @memberof ZMessages
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ZMessages.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messages != null && message.hasOwnProperty("messages")) {
            if (!Array.isArray(message.messages))
                return "messages: array expected";
            for (let i = 0; i < message.messages.length; ++i) {
                let error = $root.ZMessage.verify(message.messages[i]);
                if (error)
                    return "messages." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ZMessages message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ZMessages
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ZMessages} ZMessages
     */
    ZMessages.fromObject = function fromObject(object) {
        if (object instanceof $root.ZMessages)
            return object;
        let message = new $root.ZMessages();
        if (object.messages) {
            if (!Array.isArray(object.messages))
                throw TypeError(".ZMessages.messages: array expected");
            message.messages = [];
            for (let i = 0; i < object.messages.length; ++i) {
                if (typeof object.messages[i] !== "object")
                    throw TypeError(".ZMessages.messages: object expected");
                message.messages[i] = $root.ZMessage.fromObject(object.messages[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ZMessages message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ZMessages
     * @static
     * @param {ZMessages} message ZMessages
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ZMessages.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.messages = [];
        if (message.messages && message.messages.length) {
            object.messages = [];
            for (let j = 0; j < message.messages.length; ++j)
                object.messages[j] = $root.ZMessage.toObject(message.messages[j], options);
        }
        return object;
    };

    /**
     * Converts this ZMessages to JSON.
     * @function toJSON
     * @memberof ZMessages
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ZMessages.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ZMessages
     * @function getTypeUrl
     * @memberof ZMessages
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ZMessages.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ZMessages";
    };

    return ZMessages;
})();

export const Clock = $root.Clock = (() => {

    /**
     * Properties of a Clock.
     * @exports IClock
     * @interface IClock
     * @property {Object.<string,number|Long>|null} [values] Clock values
     */

    /**
     * Constructs a new Clock.
     * @exports Clock
     * @classdesc Represents a Clock.
     * @implements IClock
     * @constructor
     * @param {IClock=} [properties] Properties to set
     */
    function Clock(properties) {
        this.values = {};
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Clock values.
     * @member {Object.<string,number|Long>} values
     * @memberof Clock
     * @instance
     */
    Clock.prototype.values = $util.emptyObject;

    /**
     * Creates a new Clock instance using the specified properties.
     * @function create
     * @memberof Clock
     * @static
     * @param {IClock=} [properties] Properties to set
     * @returns {Clock} Clock instance
     */
    Clock.create = function create(properties) {
        return new Clock(properties);
    };

    /**
     * Encodes the specified Clock message. Does not implicitly {@link Clock.verify|verify} messages.
     * @function encode
     * @memberof Clock
     * @static
     * @param {IClock} message Clock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Clock.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.values != null && Object.hasOwnProperty.call(message, "values"))
            for (let keys = Object.keys(message.values), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.values[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Clock message, length delimited. Does not implicitly {@link Clock.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Clock
     * @static
     * @param {IClock} message Clock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Clock.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Clock message from the specified reader or buffer.
     * @function decode
     * @memberof Clock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Clock} Clock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Clock.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Clock(), key, value;
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (message.values === $util.emptyObject)
                        message.values = {};
                    let end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = 0;
                    while (reader.pos < end2) {
                        let tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.values[key] = value;
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Clock message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Clock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Clock} Clock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Clock.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Clock message.
     * @function verify
     * @memberof Clock
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Clock.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.values != null && message.hasOwnProperty("values")) {
            if (!$util.isObject(message.values))
                return "values: object expected";
            let key = Object.keys(message.values);
            for (let i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.values[key[i]]) && !(message.values[key[i]] && $util.isInteger(message.values[key[i]].low) && $util.isInteger(message.values[key[i]].high)))
                    return "values: integer|Long{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a Clock message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Clock
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Clock} Clock
     */
    Clock.fromObject = function fromObject(object) {
        if (object instanceof $root.Clock)
            return object;
        let message = new $root.Clock();
        if (object.values) {
            if (typeof object.values !== "object")
                throw TypeError(".Clock.values: object expected");
            message.values = {};
            for (let keys = Object.keys(object.values), i = 0; i < keys.length; ++i)
                if ($util.Long)
                    (message.values[keys[i]] = $util.Long.fromValue(object.values[keys[i]])).unsigned = true;
                else if (typeof object.values[keys[i]] === "string")
                    message.values[keys[i]] = parseInt(object.values[keys[i]], 10);
                else if (typeof object.values[keys[i]] === "number")
                    message.values[keys[i]] = object.values[keys[i]];
                else if (typeof object.values[keys[i]] === "object")
                    message.values[keys[i]] = new $util.LongBits(object.values[keys[i]].low >>> 0, object.values[keys[i]].high >>> 0).toNumber(true);
        }
        return message;
    };

    /**
     * Creates a plain object from a Clock message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Clock
     * @static
     * @param {Clock} message Clock
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Clock.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.objects || options.defaults)
            object.values = {};
        let keys2;
        if (message.values && (keys2 = Object.keys(message.values)).length) {
            object.values = {};
            for (let j = 0; j < keys2.length; ++j)
                if (typeof message.values[keys2[j]] === "number")
                    object.values[keys2[j]] = options.longs === String ? String(message.values[keys2[j]]) : message.values[keys2[j]];
                else
                    object.values[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.values[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.values[keys2[j]].low >>> 0, message.values[keys2[j]].high >>> 0).toNumber(true) : message.values[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this Clock to JSON.
     * @function toJSON
     * @memberof Clock
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Clock.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Clock
     * @function getTypeUrl
     * @memberof Clock
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Clock.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Clock";
    };

    return Clock;
})();

export const ClockInfo = $root.ClockInfo = (() => {

    /**
     * Properties of a ClockInfo.
     * @exports IClockInfo
     * @interface IClockInfo
     * @property {IClock|null} [clock] ClockInfo clock
     * @property {Uint8Array|null} [nodeId] ClockInfo nodeId
     * @property {Uint8Array|null} [clockHash] ClockInfo clockHash
     * @property {Uint8Array|null} [messageId] ClockInfo messageId
     * @property {number|Long|null} [count] ClockInfo count
     * @property {number|Long|null} [createAt] ClockInfo createAt
     */

    /**
     * Constructs a new ClockInfo.
     * @exports ClockInfo
     * @classdesc Represents a ClockInfo.
     * @implements IClockInfo
     * @constructor
     * @param {IClockInfo=} [properties] Properties to set
     */
    function ClockInfo(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClockInfo clock.
     * @member {IClock|null|undefined} clock
     * @memberof ClockInfo
     * @instance
     */
    ClockInfo.prototype.clock = null;

    /**
     * ClockInfo nodeId.
     * @member {Uint8Array} nodeId
     * @memberof ClockInfo
     * @instance
     */
    ClockInfo.prototype.nodeId = $util.newBuffer([]);

    /**
     * ClockInfo clockHash.
     * @member {Uint8Array} clockHash
     * @memberof ClockInfo
     * @instance
     */
    ClockInfo.prototype.clockHash = $util.newBuffer([]);

    /**
     * ClockInfo messageId.
     * @member {Uint8Array} messageId
     * @memberof ClockInfo
     * @instance
     */
    ClockInfo.prototype.messageId = $util.newBuffer([]);

    /**
     * ClockInfo count.
     * @member {number|Long} count
     * @memberof ClockInfo
     * @instance
     */
    ClockInfo.prototype.count = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * ClockInfo createAt.
     * @member {number|Long} createAt
     * @memberof ClockInfo
     * @instance
     */
    ClockInfo.prototype.createAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new ClockInfo instance using the specified properties.
     * @function create
     * @memberof ClockInfo
     * @static
     * @param {IClockInfo=} [properties] Properties to set
     * @returns {ClockInfo} ClockInfo instance
     */
    ClockInfo.create = function create(properties) {
        return new ClockInfo(properties);
    };

    /**
     * Encodes the specified ClockInfo message. Does not implicitly {@link ClockInfo.verify|verify} messages.
     * @function encode
     * @memberof ClockInfo
     * @static
     * @param {IClockInfo} message ClockInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClockInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.clock != null && Object.hasOwnProperty.call(message, "clock"))
            $root.Clock.encode(message.clock, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.nodeId);
        if (message.clockHash != null && Object.hasOwnProperty.call(message, "clockHash"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.clockHash);
        if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.messageId);
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.count);
        if (message.createAt != null && Object.hasOwnProperty.call(message, "createAt"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.createAt);
        return writer;
    };

    /**
     * Encodes the specified ClockInfo message, length delimited. Does not implicitly {@link ClockInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClockInfo
     * @static
     * @param {IClockInfo} message ClockInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClockInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClockInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ClockInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClockInfo} ClockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClockInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClockInfo();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.clock = $root.Clock.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.nodeId = reader.bytes();
                    break;
                }
            case 3: {
                    message.clockHash = reader.bytes();
                    break;
                }
            case 4: {
                    message.messageId = reader.bytes();
                    break;
                }
            case 5: {
                    message.count = reader.uint64();
                    break;
                }
            case 6: {
                    message.createAt = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClockInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClockInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClockInfo} ClockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClockInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClockInfo message.
     * @function verify
     * @memberof ClockInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClockInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.clock != null && message.hasOwnProperty("clock")) {
            let error = $root.Clock.verify(message.clock);
            if (error)
                return "clock." + error;
        }
        if (message.nodeId != null && message.hasOwnProperty("nodeId"))
            if (!(message.nodeId && typeof message.nodeId.length === "number" || $util.isString(message.nodeId)))
                return "nodeId: buffer expected";
        if (message.clockHash != null && message.hasOwnProperty("clockHash"))
            if (!(message.clockHash && typeof message.clockHash.length === "number" || $util.isString(message.clockHash)))
                return "clockHash: buffer expected";
        if (message.messageId != null && message.hasOwnProperty("messageId"))
            if (!(message.messageId && typeof message.messageId.length === "number" || $util.isString(message.messageId)))
                return "messageId: buffer expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                return "count: integer|Long expected";
        if (message.createAt != null && message.hasOwnProperty("createAt"))
            if (!$util.isInteger(message.createAt) && !(message.createAt && $util.isInteger(message.createAt.low) && $util.isInteger(message.createAt.high)))
                return "createAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a ClockInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClockInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClockInfo} ClockInfo
     */
    ClockInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ClockInfo)
            return object;
        let message = new $root.ClockInfo();
        if (object.clock != null) {
            if (typeof object.clock !== "object")
                throw TypeError(".ClockInfo.clock: object expected");
            message.clock = $root.Clock.fromObject(object.clock);
        }
        if (object.nodeId != null)
            if (typeof object.nodeId === "string")
                $util.base64.decode(object.nodeId, message.nodeId = $util.newBuffer($util.base64.length(object.nodeId)), 0);
            else if (object.nodeId.length >= 0)
                message.nodeId = object.nodeId;
        if (object.clockHash != null)
            if (typeof object.clockHash === "string")
                $util.base64.decode(object.clockHash, message.clockHash = $util.newBuffer($util.base64.length(object.clockHash)), 0);
            else if (object.clockHash.length >= 0)
                message.clockHash = object.clockHash;
        if (object.messageId != null)
            if (typeof object.messageId === "string")
                $util.base64.decode(object.messageId, message.messageId = $util.newBuffer($util.base64.length(object.messageId)), 0);
            else if (object.messageId.length >= 0)
                message.messageId = object.messageId;
        if (object.count != null)
            if ($util.Long)
                (message.count = $util.Long.fromValue(object.count)).unsigned = true;
            else if (typeof object.count === "string")
                message.count = parseInt(object.count, 10);
            else if (typeof object.count === "number")
                message.count = object.count;
            else if (typeof object.count === "object")
                message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber(true);
        if (object.createAt != null)
            if ($util.Long)
                (message.createAt = $util.Long.fromValue(object.createAt)).unsigned = true;
            else if (typeof object.createAt === "string")
                message.createAt = parseInt(object.createAt, 10);
            else if (typeof object.createAt === "number")
                message.createAt = object.createAt;
            else if (typeof object.createAt === "object")
                message.createAt = new $util.LongBits(object.createAt.low >>> 0, object.createAt.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a ClockInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClockInfo
     * @static
     * @param {ClockInfo} message ClockInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClockInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.clock = null;
            if (options.bytes === String)
                object.nodeId = "";
            else {
                object.nodeId = [];
                if (options.bytes !== Array)
                    object.nodeId = $util.newBuffer(object.nodeId);
            }
            if (options.bytes === String)
                object.clockHash = "";
            else {
                object.clockHash = [];
                if (options.bytes !== Array)
                    object.clockHash = $util.newBuffer(object.clockHash);
            }
            if (options.bytes === String)
                object.messageId = "";
            else {
                object.messageId = [];
                if (options.bytes !== Array)
                    object.messageId = $util.newBuffer(object.messageId);
            }
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.count = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.createAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createAt = options.longs === String ? "0" : 0;
        }
        if (message.clock != null && message.hasOwnProperty("clock"))
            object.clock = $root.Clock.toObject(message.clock, options);
        if (message.nodeId != null && message.hasOwnProperty("nodeId"))
            object.nodeId = options.bytes === String ? $util.base64.encode(message.nodeId, 0, message.nodeId.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodeId) : message.nodeId;
        if (message.clockHash != null && message.hasOwnProperty("clockHash"))
            object.clockHash = options.bytes === String ? $util.base64.encode(message.clockHash, 0, message.clockHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.clockHash) : message.clockHash;
        if (message.messageId != null && message.hasOwnProperty("messageId"))
            object.messageId = options.bytes === String ? $util.base64.encode(message.messageId, 0, message.messageId.length) : options.bytes === Array ? Array.prototype.slice.call(message.messageId) : message.messageId;
        if (message.count != null && message.hasOwnProperty("count"))
            if (typeof message.count === "number")
                object.count = options.longs === String ? String(message.count) : message.count;
            else
                object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber(true) : message.count;
        if (message.createAt != null && message.hasOwnProperty("createAt"))
            if (typeof message.createAt === "number")
                object.createAt = options.longs === String ? String(message.createAt) : message.createAt;
            else
                object.createAt = options.longs === String ? $util.Long.prototype.toString.call(message.createAt) : options.longs === Number ? new $util.LongBits(message.createAt.low >>> 0, message.createAt.high >>> 0).toNumber(true) : message.createAt;
        return object;
    };

    /**
     * Converts this ClockInfo to JSON.
     * @function toJSON
     * @memberof ClockInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClockInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ClockInfo
     * @function getTypeUrl
     * @memberof ClockInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ClockInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ClockInfo";
    };

    return ClockInfo;
})();

export const ZChat = $root.ZChat = (() => {

    /**
     * Properties of a ZChat.
     * @exports IZChat
     * @interface IZChat
     * @property {Uint8Array|null} [messageData] ZChat messageData
     * @property {IClockInfo|null} [clock] ZChat clock
     */

    /**
     * Constructs a new ZChat.
     * @exports ZChat
     * @classdesc Represents a ZChat.
     * @implements IZChat
     * @constructor
     * @param {IZChat=} [properties] Properties to set
     */
    function ZChat(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ZChat messageData.
     * @member {Uint8Array} messageData
     * @memberof ZChat
     * @instance
     */
    ZChat.prototype.messageData = $util.newBuffer([]);

    /**
     * ZChat clock.
     * @member {IClockInfo|null|undefined} clock
     * @memberof ZChat
     * @instance
     */
    ZChat.prototype.clock = null;

    /**
     * Creates a new ZChat instance using the specified properties.
     * @function create
     * @memberof ZChat
     * @static
     * @param {IZChat=} [properties] Properties to set
     * @returns {ZChat} ZChat instance
     */
    ZChat.create = function create(properties) {
        return new ZChat(properties);
    };

    /**
     * Encodes the specified ZChat message. Does not implicitly {@link ZChat.verify|verify} messages.
     * @function encode
     * @memberof ZChat
     * @static
     * @param {IZChat} message ZChat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZChat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messageData != null && Object.hasOwnProperty.call(message, "messageData"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.messageData);
        if (message.clock != null && Object.hasOwnProperty.call(message, "clock"))
            $root.ClockInfo.encode(message.clock, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ZChat message, length delimited. Does not implicitly {@link ZChat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ZChat
     * @static
     * @param {IZChat} message ZChat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ZChat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ZChat message from the specified reader or buffer.
     * @function decode
     * @memberof ZChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ZChat} ZChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZChat.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ZChat();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.messageData = reader.bytes();
                    break;
                }
            case 2: {
                    message.clock = $root.ClockInfo.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ZChat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ZChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ZChat} ZChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ZChat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ZChat message.
     * @function verify
     * @memberof ZChat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ZChat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messageData != null && message.hasOwnProperty("messageData"))
            if (!(message.messageData && typeof message.messageData.length === "number" || $util.isString(message.messageData)))
                return "messageData: buffer expected";
        if (message.clock != null && message.hasOwnProperty("clock")) {
            let error = $root.ClockInfo.verify(message.clock);
            if (error)
                return "clock." + error;
        }
        return null;
    };

    /**
     * Creates a ZChat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ZChat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ZChat} ZChat
     */
    ZChat.fromObject = function fromObject(object) {
        if (object instanceof $root.ZChat)
            return object;
        let message = new $root.ZChat();
        if (object.messageData != null)
            if (typeof object.messageData === "string")
                $util.base64.decode(object.messageData, message.messageData = $util.newBuffer($util.base64.length(object.messageData)), 0);
            else if (object.messageData.length >= 0)
                message.messageData = object.messageData;
        if (object.clock != null) {
            if (typeof object.clock !== "object")
                throw TypeError(".ZChat.clock: object expected");
            message.clock = $root.ClockInfo.fromObject(object.clock);
        }
        return message;
    };

    /**
     * Creates a plain object from a ZChat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ZChat
     * @static
     * @param {ZChat} message ZChat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ZChat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.messageData = "";
            else {
                object.messageData = [];
                if (options.bytes !== Array)
                    object.messageData = $util.newBuffer(object.messageData);
            }
            object.clock = null;
        }
        if (message.messageData != null && message.hasOwnProperty("messageData"))
            object.messageData = options.bytes === String ? $util.base64.encode(message.messageData, 0, message.messageData.length) : options.bytes === Array ? Array.prototype.slice.call(message.messageData) : message.messageData;
        if (message.clock != null && message.hasOwnProperty("clock"))
            object.clock = $root.ClockInfo.toObject(message.clock, options);
        return object;
    };

    /**
     * Converts this ZChat to JSON.
     * @function toJSON
     * @memberof ZChat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ZChat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ZChat
     * @function getTypeUrl
     * @memberof ZChat
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ZChat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ZChat";
    };

    return ZChat;
})();

export { $root as default };
