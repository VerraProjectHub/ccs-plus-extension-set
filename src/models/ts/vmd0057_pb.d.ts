// package: ccs.extensionSet.modules.vmd0057
// file: vmd0057.proto

import * as jspb from "google-protobuf";

export class TransportProfile extends jspb.Message {
  getTransportType(): TransportTypeMap[keyof TransportTypeMap];
  setTransportType(value: TransportTypeMap[keyof TransportTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransportProfile.AsObject;
  static toObject(includeInstance: boolean, msg: TransportProfile): TransportProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransportProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransportProfile;
  static deserializeBinaryFromReader(message: TransportProfile, reader: jspb.BinaryReader): TransportProfile;
}

export namespace TransportProfile {
  export type AsObject = {
    transportType: TransportTypeMap[keyof TransportTypeMap],
  }
}

export interface TransportTypeMap {
  ROAD: 0;
  RAIL: 1;
  PIPELINE: 2;
  SHIP: 3;
  MIXED: 4;
}

export const TransportType: TransportTypeMap;

