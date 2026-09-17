// package: verra.ccs.extensionSet.modules.vm0049
// file: vm0049.proto

import * as jspb from "google-protobuf";
import * as verraCcsExtensionSet_pb from "./verraCcsExtensionSet_pb";

export class Formula3PercentCo2Mass extends jspb.Message {
  hasPercentCo2Mass(): boolean;
  clearPercentCo2Mass(): void;
  getPercentCo2Mass(): verraCcsExtensionSet_pb.DoubleValue | undefined;
  setPercentCo2Mass(value?: verraCcsExtensionSet_pb.DoubleValue): void;

  clearMCO2ReadingsList(): void;
  getMCO2ReadingsList(): Array<VariableReading>;
  setMCO2ReadingsList(value: Array<VariableReading>): void;
  addMCO2Readings(value?: VariableReading, index?: number): VariableReading;

  clearXCO2ReadingsList(): void;
  getXCO2ReadingsList(): Array<VariableReading>;
  setXCO2ReadingsList(value: Array<VariableReading>): void;
  addXCO2Readings(value?: VariableReading, index?: number): VariableReading;

  clearMKReadingsList(): void;
  getMKReadingsList(): Array<VariableReading>;
  setMKReadingsList(value: Array<VariableReading>): void;
  addMKReadings(value?: VariableReading, index?: number): VariableReading;

  clearXKReadingsList(): void;
  getXKReadingsList(): Array<VariableReading>;
  setXKReadingsList(value: Array<VariableReading>): void;
  addXKReadings(value?: VariableReading, index?: number): VariableReading;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Formula3PercentCo2Mass.AsObject;
  static toObject(includeInstance: boolean, msg: Formula3PercentCo2Mass): Formula3PercentCo2Mass.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Formula3PercentCo2Mass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Formula3PercentCo2Mass;
  static deserializeBinaryFromReader(message: Formula3PercentCo2Mass, reader: jspb.BinaryReader): Formula3PercentCo2Mass;
}

export namespace Formula3PercentCo2Mass {
  export type AsObject = {
    percentCo2Mass?: verraCcsExtensionSet_pb.DoubleValue.AsObject,
    mCO2ReadingsList: Array<VariableReading.AsObject>,
    xCO2ReadingsList: Array<VariableReading.AsObject>,
    mKReadingsList: Array<VariableReading.AsObject>,
    xKReadingsList: Array<VariableReading.AsObject>,
  }
}

export class VariableReading extends jspb.Message {
  getCheckpointId(): string;
  setCheckpointId(value: string): void;

  getCheckpointVariableId(): string;
  setCheckpointVariableId(value: string): void;

  getVariableTemplateId(): string;
  setVariableTemplateId(value: string): void;

  getVariableTemplateVersion(): string;
  setVariableTemplateVersion(value: string): void;

  hasVariableValue(): boolean;
  clearVariableValue(): void;
  getVariableValue(): verraCcsExtensionSet_pb.DoubleValue | undefined;
  setVariableValue(value?: verraCcsExtensionSet_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableReading.AsObject;
  static toObject(includeInstance: boolean, msg: VariableReading): VariableReading.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VariableReading, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableReading;
  static deserializeBinaryFromReader(message: VariableReading, reader: jspb.BinaryReader): VariableReading;
}

export namespace VariableReading {
  export type AsObject = {
    checkpointId: string,
    checkpointVariableId: string,
    variableTemplateId: string,
    variableTemplateVersion: string,
    variableValue?: verraCcsExtensionSet_pb.DoubleValue.AsObject,
  }
}

