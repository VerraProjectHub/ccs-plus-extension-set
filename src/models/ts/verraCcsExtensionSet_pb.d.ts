// package: verra.ccs.extensionSet
// file: verraCcsExtensionSet.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DeviceMetadata extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  getManufacturer(): string;
  setManufacturer(value: string): void;

  getSerialNumber(): string;
  setSerialNumber(value: string): void;

  getFirmwareVersion(): string;
  setFirmwareVersion(value: string): void;

  getInstallationDate(): string;
  setInstallationDate(value: string): void;

  getCalibrationDate(): string;
  setCalibrationDate(value: string): void;

  getCalibrationExpirationDate(): string;
  setCalibrationExpirationDate(value: string): void;

  getCalibrationFrequencyInMonths(): number;
  setCalibrationFrequencyInMonths(value: number): void;

  getCalibrationStandard(): string;
  setCalibrationStandard(value: string): void;

  getAccuracy(): string;
  setAccuracy(value: string): void;

  clearCalibrationResultsList(): void;
  getCalibrationResultsList(): Array<CalibrationResult>;
  setCalibrationResultsList(value: Array<CalibrationResult>): void;
  addCalibrationResults(value?: CalibrationResult, index?: number): CalibrationResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetadata): DeviceMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetadata;
  static deserializeBinaryFromReader(message: DeviceMetadata, reader: jspb.BinaryReader): DeviceMetadata;
}

export namespace DeviceMetadata {
  export type AsObject = {
    model: string,
    manufacturer: string,
    serialNumber: string,
    firmwareVersion: string,
    installationDate: string,
    calibrationDate: string,
    calibrationExpirationDate: string,
    calibrationFrequencyInMonths: number,
    calibrationStandard: string,
    accuracy: string,
    calibrationResultsList: Array<CalibrationResult.AsObject>,
  }
}

export class FlowRateByMassVariable extends jspb.Message {
  getClaimSourceId(): string;
  setClaimSourceId(value: string): void;

  clearMeasurementsList(): void;
  getMeasurementsList(): Array<Measurement>;
  setMeasurementsList(value: Array<Measurement>): void;
  addMeasurements(value?: Measurement, index?: number): Measurement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlowRateByMassVariable.AsObject;
  static toObject(includeInstance: boolean, msg: FlowRateByMassVariable): FlowRateByMassVariable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlowRateByMassVariable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlowRateByMassVariable;
  static deserializeBinaryFromReader(message: FlowRateByMassVariable, reader: jspb.BinaryReader): FlowRateByMassVariable;
}

export namespace FlowRateByMassVariable {
  export type AsObject = {
    claimSourceId: string,
    measurementsList: Array<Measurement.AsObject>,
  }
}

export class Measurements extends jspb.Message {
  clearMeasurementList(): void;
  getMeasurementList(): Array<Measurement>;
  setMeasurementList(value: Array<Measurement>): void;
  addMeasurement(value?: Measurement, index?: number): Measurement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Measurements.AsObject;
  static toObject(includeInstance: boolean, msg: Measurements): Measurements.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Measurements, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Measurements;
  static deserializeBinaryFromReader(message: Measurements, reader: jspb.BinaryReader): Measurements;
}

export namespace Measurements {
  export type AsObject = {
    measurementList: Array<Measurement.AsObject>,
  }
}

export class Measurement extends jspb.Message {
  hasMeasureTime(): boolean;
  clearMeasureTime(): void;
  getMeasureTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMeasureTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTagId(): string;
  setTagId(value: string): void;

  getFacilityName(): string;
  setFacilityName(value: string): void;

  getMeasureValue(): number;
  setMeasureValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Measurement.AsObject;
  static toObject(includeInstance: boolean, msg: Measurement): Measurement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Measurement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Measurement;
  static deserializeBinaryFromReader(message: Measurement, reader: jspb.BinaryReader): Measurement;
}

export namespace Measurement {
  export type AsObject = {
    measureTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tagId: string,
    facilityName: string,
    measureValue: number,
    uOM: string,
  }
}

export class DoubleValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleValue.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleValue): DoubleValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoubleValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleValue;
  static deserializeBinaryFromReader(message: DoubleValue, reader: jspb.BinaryReader): DoubleValue;
}

export namespace DoubleValue {
  export type AsObject = {
    value: number,
    uOM: string,
  }
}

export class IntegerValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegerValue.AsObject;
  static toObject(includeInstance: boolean, msg: IntegerValue): IntegerValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegerValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegerValue;
  static deserializeBinaryFromReader(message: IntegerValue, reader: jspb.BinaryReader): IntegerValue;
}

export namespace IntegerValue {
  export type AsObject = {
    value: number,
    uOM: string,
  }
}

export class QuantityOfNonVcsCo2Injected extends jspb.Message {
  getInjectionPoint(): string;
  setInjectionPoint(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuantityOfNonVcsCo2Injected.AsObject;
  static toObject(includeInstance: boolean, msg: QuantityOfNonVcsCo2Injected): QuantityOfNonVcsCo2Injected.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuantityOfNonVcsCo2Injected, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuantityOfNonVcsCo2Injected;
  static deserializeBinaryFromReader(message: QuantityOfNonVcsCo2Injected, reader: jspb.BinaryReader): QuantityOfNonVcsCo2Injected;
}

export namespace QuantityOfNonVcsCo2Injected {
  export type AsObject = {
    injectionPoint: string,
    value: number,
    uOM: string,
  }
}

export class QuantityOfCaptureMaterial extends jspb.Message {
  getCaptureMaterial(): FuelTypeMap[keyof FuelTypeMap];
  setCaptureMaterial(value: FuelTypeMap[keyof FuelTypeMap]): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuantityOfCaptureMaterial.AsObject;
  static toObject(includeInstance: boolean, msg: QuantityOfCaptureMaterial): QuantityOfCaptureMaterial.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuantityOfCaptureMaterial, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuantityOfCaptureMaterial;
  static deserializeBinaryFromReader(message: QuantityOfCaptureMaterial, reader: jspb.BinaryReader): QuantityOfCaptureMaterial;
}

export namespace QuantityOfCaptureMaterial {
  export type AsObject = {
    captureMaterial: FuelTypeMap[keyof FuelTypeMap],
    value: number,
    uOM: string,
  }
}

export class FlowMeterReading extends jspb.Message {
  getFlowMeter(): string;
  setFlowMeter(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlowMeterReading.AsObject;
  static toObject(includeInstance: boolean, msg: FlowMeterReading): FlowMeterReading.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlowMeterReading, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlowMeterReading;
  static deserializeBinaryFromReader(message: FlowMeterReading, reader: jspb.BinaryReader): FlowMeterReading;
}

export namespace FlowMeterReading {
  export type AsObject = {
    flowMeter: string,
    value: number,
    uOM: string,
  }
}

export class ComponentMass extends jspb.Message {
  getComponent(): string;
  setComponent(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentMass.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentMass): ComponentMass.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComponentMass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentMass;
  static deserializeBinaryFromReader(message: ComponentMass, reader: jspb.BinaryReader): ComponentMass;
}

export namespace ComponentMass {
  export type AsObject = {
    component: string,
    value: number,
    uOM: string,
  }
}

export class ComponentMoleFraction extends jspb.Message {
  getComponent(): string;
  setComponent(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  getFlowMeter(): string;
  setFlowMeter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentMoleFraction.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentMoleFraction): ComponentMoleFraction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComponentMoleFraction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentMoleFraction;
  static deserializeBinaryFromReader(message: ComponentMoleFraction, reader: jspb.BinaryReader): ComponentMoleFraction;
}

export namespace ComponentMoleFraction {
  export type AsObject = {
    component: string,
    value: number,
    uOM: string,
    flowMeter: string,
  }
}

export class TransportFuelLeakage extends jspb.Message {
  getTransportLeg(): string;
  setTransportLeg(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransportFuelLeakage.AsObject;
  static toObject(includeInstance: boolean, msg: TransportFuelLeakage): TransportFuelLeakage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransportFuelLeakage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransportFuelLeakage;
  static deserializeBinaryFromReader(message: TransportFuelLeakage, reader: jspb.BinaryReader): TransportFuelLeakage;
}

export namespace TransportFuelLeakage {
  export type AsObject = {
    transportLeg: string,
    value: number,
    uOM: string,
  }
}

export class TransportStorageFuelLeakage extends jspb.Message {
  getStorage(): string;
  setStorage(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransportStorageFuelLeakage.AsObject;
  static toObject(includeInstance: boolean, msg: TransportStorageFuelLeakage): TransportStorageFuelLeakage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransportStorageFuelLeakage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransportStorageFuelLeakage;
  static deserializeBinaryFromReader(message: TransportStorageFuelLeakage, reader: jspb.BinaryReader): TransportStorageFuelLeakage;
}

export namespace TransportStorageFuelLeakage {
  export type AsObject = {
    storage: string,
    value: number,
    uOM: string,
  }
}

export class TransportStorageElectricityLeakage extends jspb.Message {
  getStorage(): string;
  setStorage(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransportStorageElectricityLeakage.AsObject;
  static toObject(includeInstance: boolean, msg: TransportStorageElectricityLeakage): TransportStorageElectricityLeakage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransportStorageElectricityLeakage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransportStorageElectricityLeakage;
  static deserializeBinaryFromReader(message: TransportStorageElectricityLeakage, reader: jspb.BinaryReader): TransportStorageElectricityLeakage;
}

export namespace TransportStorageElectricityLeakage {
  export type AsObject = {
    storage: string,
    value: number,
    uOM: string,
  }
}

export class TransportElectricityLeakage extends jspb.Message {
  getTransportLeg(): string;
  setTransportLeg(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransportElectricityLeakage.AsObject;
  static toObject(includeInstance: boolean, msg: TransportElectricityLeakage): TransportElectricityLeakage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransportElectricityLeakage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransportElectricityLeakage;
  static deserializeBinaryFromReader(message: TransportElectricityLeakage, reader: jspb.BinaryReader): TransportElectricityLeakage;
}

export namespace TransportElectricityLeakage {
  export type AsObject = {
    transportLeg: string,
    value: number,
    uOM: string,
  }
}

export class StorageLeakage extends jspb.Message {
  getStorage(): string;
  setStorage(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageLeakage.AsObject;
  static toObject(includeInstance: boolean, msg: StorageLeakage): StorageLeakage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageLeakage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageLeakage;
  static deserializeBinaryFromReader(message: StorageLeakage, reader: jspb.BinaryReader): StorageLeakage;
}

export namespace StorageLeakage {
  export type AsObject = {
    storage: string,
    value: number,
    uOM: string,
  }
}

export class LeakEvent extends jspb.Message {
  getEventName(): string;
  setEventName(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeakEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LeakEvent): LeakEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeakEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeakEvent;
  static deserializeBinaryFromReader(message: LeakEvent, reader: jspb.BinaryReader): LeakEvent;
}

export namespace LeakEvent {
  export type AsObject = {
    eventName: string,
    value: number,
    uOM: string,
  }
}

export class VentingEvent extends jspb.Message {
  getEventName(): string;
  setEventName(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VentingEvent.AsObject;
  static toObject(includeInstance: boolean, msg: VentingEvent): VentingEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VentingEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VentingEvent;
  static deserializeBinaryFromReader(message: VentingEvent, reader: jspb.BinaryReader): VentingEvent;
}

export namespace VentingEvent {
  export type AsObject = {
    eventName: string,
    value: number,
    uOM: string,
  }
}

export class PressurizedTimeComponent extends jspb.Message {
  getComponent(): string;
  setComponent(value: string): void;

  getDurationInHours(): number;
  setDurationInHours(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PressurizedTimeComponent.AsObject;
  static toObject(includeInstance: boolean, msg: PressurizedTimeComponent): PressurizedTimeComponent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PressurizedTimeComponent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PressurizedTimeComponent;
  static deserializeBinaryFromReader(message: PressurizedTimeComponent, reader: jspb.BinaryReader): PressurizedTimeComponent;
}

export namespace PressurizedTimeComponent {
  export type AsObject = {
    component: string,
    durationInHours: number,
    uOM: string,
  }
}

export class PressurizedPipelineTime extends jspb.Message {
  getPipeline(): string;
  setPipeline(value: string): void;

  getDurationInHours(): number;
  setDurationInHours(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PressurizedPipelineTime.AsObject;
  static toObject(includeInstance: boolean, msg: PressurizedPipelineTime): PressurizedPipelineTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PressurizedPipelineTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PressurizedPipelineTime;
  static deserializeBinaryFromReader(message: PressurizedPipelineTime, reader: jspb.BinaryReader): PressurizedPipelineTime;
}

export namespace PressurizedPipelineTime {
  export type AsObject = {
    pipeline: string,
    durationInHours: number,
    uOM: string,
  }
}

export class DischargeEvent extends jspb.Message {
  getDischargeName(): string;
  setDischargeName(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DischargeEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DischargeEvent): DischargeEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DischargeEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DischargeEvent;
  static deserializeBinaryFromReader(message: DischargeEvent, reader: jspb.BinaryReader): DischargeEvent;
}

export namespace DischargeEvent {
  export type AsObject = {
    dischargeName: string,
    value: number,
    uOM: string,
  }
}

export class StpValue extends jspb.Message {
  hasTemperature(): boolean;
  clearTemperature(): void;
  getTemperature(): DoubleValue | undefined;
  setTemperature(value?: DoubleValue): void;

  hasPressure(): boolean;
  clearPressure(): void;
  getPressure(): DoubleValue | undefined;
  setPressure(value?: DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StpValue.AsObject;
  static toObject(includeInstance: boolean, msg: StpValue): StpValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StpValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StpValue;
  static deserializeBinaryFromReader(message: StpValue, reader: jspb.BinaryReader): StpValue;
}

export namespace StpValue {
  export type AsObject = {
    temperature?: DoubleValue.AsObject,
    pressure?: DoubleValue.AsObject,
  }
}

export class FuelTypeValue extends jspb.Message {
  getFuelType(): FuelTypeMap[keyof FuelTypeMap];
  setFuelType(value: FuelTypeMap[keyof FuelTypeMap]): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  getTransportOrStorageName(): string;
  setTransportOrStorageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FuelTypeValue.AsObject;
  static toObject(includeInstance: boolean, msg: FuelTypeValue): FuelTypeValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FuelTypeValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FuelTypeValue;
  static deserializeBinaryFromReader(message: FuelTypeValue, reader: jspb.BinaryReader): FuelTypeValue;
}

export namespace FuelTypeValue {
  export type AsObject = {
    fuelType: FuelTypeMap[keyof FuelTypeMap],
    value: number,
    uOM: string,
    transportOrStorageName: string,
  }
}

export class QuantityOfFuelVariable extends jspb.Message {
  getTagId(): string;
  setTagId(value: string): void;

  getFuelType(): FuelTypeMap[keyof FuelTypeMap];
  setFuelType(value: FuelTypeMap[keyof FuelTypeMap]): void;

  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): Invoice | undefined;
  setInvoice(value?: Invoice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuantityOfFuelVariable.AsObject;
  static toObject(includeInstance: boolean, msg: QuantityOfFuelVariable): QuantityOfFuelVariable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuantityOfFuelVariable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuantityOfFuelVariable;
  static deserializeBinaryFromReader(message: QuantityOfFuelVariable, reader: jspb.BinaryReader): QuantityOfFuelVariable;
}

export namespace QuantityOfFuelVariable {
  export type AsObject = {
    tagId: string,
    fuelType: FuelTypeMap[keyof FuelTypeMap],
    invoice?: Invoice.AsObject,
  }
}

export class QFuel extends jspb.Message {
  getFuelType(): FuelTypeMap[keyof FuelTypeMap];
  setFuelType(value: FuelTypeMap[keyof FuelTypeMap]): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  getTransportOrStorageName(): string;
  setTransportOrStorageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QFuel.AsObject;
  static toObject(includeInstance: boolean, msg: QFuel): QFuel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QFuel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QFuel;
  static deserializeBinaryFromReader(message: QFuel, reader: jspb.BinaryReader): QFuel;
}

export namespace QFuel {
  export type AsObject = {
    fuelType: FuelTypeMap[keyof FuelTypeMap],
    quantity: number,
    uOM: string,
    transportOrStorageName: string,
  }
}

export class NHeatOrElec extends jspb.Message {
  getFuelType(): FuelTypeMap[keyof FuelTypeMap];
  setFuelType(value: FuelTypeMap[keyof FuelTypeMap]): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  getTransportOrStorageName(): string;
  setTransportOrStorageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NHeatOrElec.AsObject;
  static toObject(includeInstance: boolean, msg: NHeatOrElec): NHeatOrElec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NHeatOrElec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NHeatOrElec;
  static deserializeBinaryFromReader(message: NHeatOrElec, reader: jspb.BinaryReader): NHeatOrElec;
}

export namespace NHeatOrElec {
  export type AsObject = {
    fuelType: FuelTypeMap[keyof FuelTypeMap],
    value: number,
    uOM: string,
    transportOrStorageName: string,
  }
}

export class QElectricity extends jspb.Message {
  getFuelType(): FuelTypeMap[keyof FuelTypeMap];
  setFuelType(value: FuelTypeMap[keyof FuelTypeMap]): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  getTransportOrStorageName(): string;
  setTransportOrStorageName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QElectricity.AsObject;
  static toObject(includeInstance: boolean, msg: QElectricity): QElectricity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QElectricity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QElectricity;
  static deserializeBinaryFromReader(message: QElectricity, reader: jspb.BinaryReader): QElectricity;
}

export namespace QElectricity {
  export type AsObject = {
    fuelType: FuelTypeMap[keyof FuelTypeMap],
    value: number,
    uOM: string,
    transportOrStorageName: string,
  }
}

export class ComponentTime extends jspb.Message {
  getComponent(): string;
  setComponent(value: string): void;

  getDurationInHours(): number;
  setDurationInHours(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentTime.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentTime): ComponentTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComponentTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentTime;
  static deserializeBinaryFromReader(message: ComponentTime, reader: jspb.BinaryReader): ComponentTime;
}

export namespace ComponentTime {
  export type AsObject = {
    component: string,
    durationInHours: number,
  }
}

export class ComponentEvent extends jspb.Message {
  getComponent(): string;
  setComponent(value: string): void;

  getEventName(): string;
  setEventName(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentEvent): ComponentEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComponentEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentEvent;
  static deserializeBinaryFromReader(message: ComponentEvent, reader: jspb.BinaryReader): ComponentEvent;
}

export namespace ComponentEvent {
  export type AsObject = {
    component: string,
    eventName: string,
    value: number,
    uOM: string,
  }
}

export class Invoice extends jspb.Message {
  getTagId(): string;
  setTagId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getFromDate(): string;
  setFromDate(value: string): void;

  getToDate(): string;
  setToDate(value: string): void;

  hasMeasurement(): boolean;
  clearMeasurement(): void;
  getMeasurement(): MonthlyMeasurement | undefined;
  setMeasurement(value?: MonthlyMeasurement): void;

  getInvoicePdf(): Uint8Array | string;
  getInvoicePdf_asU8(): Uint8Array;
  getInvoicePdf_asB64(): string;
  setInvoicePdf(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
    tagId: string,
    description: string,
    fromDate: string,
    toDate: string,
    measurement?: MonthlyMeasurement.AsObject,
    invoicePdf: Uint8Array | string,
  }
}

export class MonthlyMeasurement extends jspb.Message {
  getMeasureTime(): string;
  setMeasureTime(value: string): void;

  getTagId(): string;
  setTagId(value: string): void;

  getFacilityName(): string;
  setFacilityName(value: string): void;

  getMeasureValue(): number;
  setMeasureValue(value: number): void;

  getUOM(): string;
  setUOM(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonthlyMeasurement.AsObject;
  static toObject(includeInstance: boolean, msg: MonthlyMeasurement): MonthlyMeasurement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonthlyMeasurement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonthlyMeasurement;
  static deserializeBinaryFromReader(message: MonthlyMeasurement, reader: jspb.BinaryReader): MonthlyMeasurement;
}

export namespace MonthlyMeasurement {
  export type AsObject = {
    measureTime: string,
    tagId: string,
    facilityName: string,
    measureValue: number,
    uOM: string,
  }
}

export class EmissionFactor extends jspb.Message {
  getEmissionType(): EmissionTypeMap[keyof EmissionTypeMap];
  setEmissionType(value: EmissionTypeMap[keyof EmissionTypeMap]): void;

  getFuelType(): FuelTypeMap[keyof FuelTypeMap];
  setFuelType(value: FuelTypeMap[keyof FuelTypeMap]): void;

  getVersion(): string;
  setVersion(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): DoubleValue | undefined;
  setValue(value?: DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmissionFactor.AsObject;
  static toObject(includeInstance: boolean, msg: EmissionFactor): EmissionFactor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmissionFactor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmissionFactor;
  static deserializeBinaryFromReader(message: EmissionFactor, reader: jspb.BinaryReader): EmissionFactor;
}

export namespace EmissionFactor {
  export type AsObject = {
    emissionType: EmissionTypeMap[keyof EmissionTypeMap],
    fuelType: FuelTypeMap[keyof FuelTypeMap],
    version: string,
    value?: DoubleValue.AsObject,
  }
}

export class CalibrateInstrumentRequest extends jspb.Message {
  getClaimId(): string;
  setClaimId(value: string): void;

  getCheckpointId(): string;
  setCheckpointId(value: string): void;

  getClaimSourceId(): string;
  setClaimSourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalibrateInstrumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CalibrateInstrumentRequest): CalibrateInstrumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalibrateInstrumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalibrateInstrumentRequest;
  static deserializeBinaryFromReader(message: CalibrateInstrumentRequest, reader: jspb.BinaryReader): CalibrateInstrumentRequest;
}

export namespace CalibrateInstrumentRequest {
  export type AsObject = {
    claimId: string,
    checkpointId: string,
    claimSourceId: string,
  }
}

export class CalibrateInstrumentResponse extends jspb.Message {
  getClaimId(): string;
  setClaimId(value: string): void;

  getCheckpointId(): string;
  setCheckpointId(value: string): void;

  getClaimSourceId(): string;
  setClaimSourceId(value: string): void;

  hasCalibrationData(): boolean;
  clearCalibrationData(): void;
  getCalibrationData(): CalibrationResult | undefined;
  setCalibrationData(value?: CalibrationResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalibrateInstrumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CalibrateInstrumentResponse): CalibrateInstrumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalibrateInstrumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalibrateInstrumentResponse;
  static deserializeBinaryFromReader(message: CalibrateInstrumentResponse, reader: jspb.BinaryReader): CalibrateInstrumentResponse;
}

export namespace CalibrateInstrumentResponse {
  export type AsObject = {
    claimId: string,
    checkpointId: string,
    claimSourceId: string,
    calibrationData?: CalibrationResult.AsObject,
  }
}

export class CalibrationResult extends jspb.Message {
  hasCalibrationTimestamp(): boolean;
  clearCalibrationTimestamp(): void;
  getCalibrationTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCalibrationTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPercentageAccuracy(): number;
  setPercentageAccuracy(value: number): void;

  hasCalibrationData(): boolean;
  clearCalibrationData(): void;
  getCalibrationData(): google_protobuf_any_pb.Any | undefined;
  setCalibrationData(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalibrationResult.AsObject;
  static toObject(includeInstance: boolean, msg: CalibrationResult): CalibrationResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalibrationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalibrationResult;
  static deserializeBinaryFromReader(message: CalibrationResult, reader: jspb.BinaryReader): CalibrationResult;
}

export namespace CalibrationResult {
  export type AsObject = {
    calibrationTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    percentageAccuracy: number,
    calibrationData?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class CoriolisMeterCalibrationData extends jspb.Message {
  getZeroFlowOffset(): number;
  setZeroFlowOffset(value: number): void;

  getSpan(): number;
  setSpan(value: number): void;

  getZeroFlowOffsetUOM(): number;
  setZeroFlowOffsetUOM(value: number): void;

  getSpanUOM(): number;
  setSpanUOM(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoriolisMeterCalibrationData.AsObject;
  static toObject(includeInstance: boolean, msg: CoriolisMeterCalibrationData): CoriolisMeterCalibrationData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CoriolisMeterCalibrationData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoriolisMeterCalibrationData;
  static deserializeBinaryFromReader(message: CoriolisMeterCalibrationData, reader: jspb.BinaryReader): CoriolisMeterCalibrationData;
}

export namespace CoriolisMeterCalibrationData {
  export type AsObject = {
    zeroFlowOffset: number,
    span: number,
    zeroFlowOffsetUOM: number,
    spanUOM: number,
  }
}

export class CheckpointNonConformanceException extends jspb.Message {
  getExceptionType(): VerificationExceptionTypeMap[keyof VerificationExceptionTypeMap];
  setExceptionType(value: VerificationExceptionTypeMap[keyof VerificationExceptionTypeMap]): void;

  getVariableId(): string;
  setVariableId(value: string): void;

  getClaimSourceId(): string;
  setClaimSourceId(value: string): void;

  getProposedVerifiedValue(): string;
  setProposedVerifiedValue(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckpointNonConformanceException.AsObject;
  static toObject(includeInstance: boolean, msg: CheckpointNonConformanceException): CheckpointNonConformanceException.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckpointNonConformanceException, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckpointNonConformanceException;
  static deserializeBinaryFromReader(message: CheckpointNonConformanceException, reader: jspb.BinaryReader): CheckpointNonConformanceException;
}

export namespace CheckpointNonConformanceException {
  export type AsObject = {
    exceptionType: VerificationExceptionTypeMap[keyof VerificationExceptionTypeMap],
    variableId: string,
    claimSourceId: string,
    proposedVerifiedValue: string,
    description: string,
  }
}

export class CheckpointNonConformanceExceptionMitigation extends jspb.Message {
  getVariableId(): string;
  setVariableId(value: string): void;

  getClaimSourceId(): string;
  setClaimSourceId(value: string): void;

  getAdjustedValue(): string;
  setAdjustedValue(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckpointNonConformanceExceptionMitigation.AsObject;
  static toObject(includeInstance: boolean, msg: CheckpointNonConformanceExceptionMitigation): CheckpointNonConformanceExceptionMitigation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckpointNonConformanceExceptionMitigation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckpointNonConformanceExceptionMitigation;
  static deserializeBinaryFromReader(message: CheckpointNonConformanceExceptionMitigation, reader: jspb.BinaryReader): CheckpointNonConformanceExceptionMitigation;
}

export namespace CheckpointNonConformanceExceptionMitigation {
  export type AsObject = {
    variableId: string,
    claimSourceId: string,
    adjustedValue: string,
    description: string,
  }
}

export class CheckpointNonConformanceRequest extends jspb.Message {
  getCheckpointId(): string;
  setCheckpointId(value: string): void;

  clearExceptionsList(): void;
  getExceptionsList(): Array<CheckpointNonConformanceException>;
  setExceptionsList(value: Array<CheckpointNonConformanceException>): void;
  addExceptions(value?: CheckpointNonConformanceException, index?: number): CheckpointNonConformanceException;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckpointNonConformanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckpointNonConformanceRequest): CheckpointNonConformanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckpointNonConformanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckpointNonConformanceRequest;
  static deserializeBinaryFromReader(message: CheckpointNonConformanceRequest, reader: jspb.BinaryReader): CheckpointNonConformanceRequest;
}

export namespace CheckpointNonConformanceRequest {
  export type AsObject = {
    checkpointId: string,
    exceptionsList: Array<CheckpointNonConformanceException.AsObject>,
  }
}

export class CheckpointNonConformanceMitigationResponse extends jspb.Message {
  getCheckpointId(): string;
  setCheckpointId(value: string): void;

  clearMitigationsList(): void;
  getMitigationsList(): Array<CheckpointNonConformanceExceptionMitigation>;
  setMitigationsList(value: Array<CheckpointNonConformanceExceptionMitigation>): void;
  addMitigations(value?: CheckpointNonConformanceExceptionMitigation, index?: number): CheckpointNonConformanceExceptionMitigation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckpointNonConformanceMitigationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckpointNonConformanceMitigationResponse): CheckpointNonConformanceMitigationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckpointNonConformanceMitigationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckpointNonConformanceMitigationResponse;
  static deserializeBinaryFromReader(message: CheckpointNonConformanceMitigationResponse, reader: jspb.BinaryReader): CheckpointNonConformanceMitigationResponse;
}

export namespace CheckpointNonConformanceMitigationResponse {
  export type AsObject = {
    checkpointId: string,
    mitigationsList: Array<CheckpointNonConformanceExceptionMitigation.AsObject>,
  }
}

export class CalculateFailErrorsRequest extends jspb.Message {
  getProcessedClaimId(): string;
  setProcessedClaimId(value: string): void;

  getMonitoringReportId(): string;
  setMonitoringReportId(value: string): void;

  getDataType(): string;
  setDataType(value: string): void;

  getJsonData(): string;
  setJsonData(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateFailErrorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateFailErrorsRequest): CalculateFailErrorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculateFailErrorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateFailErrorsRequest;
  static deserializeBinaryFromReader(message: CalculateFailErrorsRequest, reader: jspb.BinaryReader): CalculateFailErrorsRequest;
}

export namespace CalculateFailErrorsRequest {
  export type AsObject = {
    processedClaimId: string,
    monitoringReportId: string,
    dataType: string,
    jsonData: string,
    comment: string,
  }
}

export class CalculateFailErrorsResponse extends jspb.Message {
  getProcessedClaimId(): string;
  setProcessedClaimId(value: string): void;

  getMonitoringReportId(): string;
  setMonitoringReportId(value: string): void;

  clearVariablesAdjustedList(): void;
  getVariablesAdjustedList(): Array<VariableAdjusted>;
  setVariablesAdjustedList(value: Array<VariableAdjusted>): void;
  addVariablesAdjusted(value?: VariableAdjusted, index?: number): VariableAdjusted;

  getComment(): string;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateFailErrorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateFailErrorsResponse): CalculateFailErrorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculateFailErrorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateFailErrorsResponse;
  static deserializeBinaryFromReader(message: CalculateFailErrorsResponse, reader: jspb.BinaryReader): CalculateFailErrorsResponse;
}

export namespace CalculateFailErrorsResponse {
  export type AsObject = {
    processedClaimId: string,
    monitoringReportId: string,
    variablesAdjustedList: Array<VariableAdjusted.AsObject>,
    comment: string,
  }
}

export class VariableAdjusted extends jspb.Message {
  getCheckpointVariableId(): string;
  setCheckpointVariableId(value: string): void;

  getTemplateId(): string;
  setTemplateId(value: string): void;

  getTemplateVersion(): string;
  setTemplateVersion(value: string): void;

  getUpdatedValue(): string;
  setUpdatedValue(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableAdjusted.AsObject;
  static toObject(includeInstance: boolean, msg: VariableAdjusted): VariableAdjusted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VariableAdjusted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableAdjusted;
  static deserializeBinaryFromReader(message: VariableAdjusted, reader: jspb.BinaryReader): VariableAdjusted;
}

export namespace VariableAdjusted {
  export type AsObject = {
    checkpointVariableId: string,
    templateId: string,
    templateVersion: string,
    updatedValue: string,
    comment: string,
  }
}

export class CalculationSucceedAdjustmentRequest extends jspb.Message {
  getProcessedClaimId(): string;
  setProcessedClaimId(value: string): void;

  getMonitoringReportId(): string;
  setMonitoringReportId(value: string): void;

  getSupplierCalculatedQuantity(): number;
  setSupplierCalculatedQuantity(value: number): void;

  getRegistryCalculatedQuantity(): number;
  setRegistryCalculatedQuantity(value: number): void;

  getPercentMarginOfErrorSetting(): number;
  setPercentMarginOfErrorSetting(value: number): void;

  getComment(): string;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculationSucceedAdjustmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CalculationSucceedAdjustmentRequest): CalculationSucceedAdjustmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculationSucceedAdjustmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculationSucceedAdjustmentRequest;
  static deserializeBinaryFromReader(message: CalculationSucceedAdjustmentRequest, reader: jspb.BinaryReader): CalculationSucceedAdjustmentRequest;
}

export namespace CalculationSucceedAdjustmentRequest {
  export type AsObject = {
    processedClaimId: string,
    monitoringReportId: string,
    supplierCalculatedQuantity: number,
    registryCalculatedQuantity: number,
    percentMarginOfErrorSetting: number,
    comment: string,
  }
}

export class CalculationSucceedAdjustmentResponse extends jspb.Message {
  getProcessedClaimId(): string;
  setProcessedClaimId(value: string): void;

  getMonitoringReportId(): string;
  setMonitoringReportId(value: string): void;

  clearVariablesAdjustedList(): void;
  getVariablesAdjustedList(): Array<VariableAdjusted>;
  setVariablesAdjustedList(value: Array<VariableAdjusted>): void;
  addVariablesAdjusted(value?: VariableAdjusted, index?: number): VariableAdjusted;

  getComment(): string;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculationSucceedAdjustmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CalculationSucceedAdjustmentResponse): CalculationSucceedAdjustmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculationSucceedAdjustmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculationSucceedAdjustmentResponse;
  static deserializeBinaryFromReader(message: CalculationSucceedAdjustmentResponse, reader: jspb.BinaryReader): CalculationSucceedAdjustmentResponse;
}

export namespace CalculationSucceedAdjustmentResponse {
  export type AsObject = {
    processedClaimId: string,
    monitoringReportId: string,
    variablesAdjustedList: Array<VariableAdjusted.AsObject>,
    comment: string,
  }
}

export class VerificationReportInitializedRequest extends jspb.Message {
  getProcessedClaimId(): string;
  setProcessedClaimId(value: string): void;

  getMonitoringReportId(): string;
  setMonitoringReportId(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationReportInitializedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationReportInitializedRequest): VerificationReportInitializedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationReportInitializedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationReportInitializedRequest;
  static deserializeBinaryFromReader(message: VerificationReportInitializedRequest, reader: jspb.BinaryReader): VerificationReportInitializedRequest;
}

export namespace VerificationReportInitializedRequest {
  export type AsObject = {
    processedClaimId: string,
    monitoringReportId: string,
    comment: string,
  }
}

export class VerificationReportInitializedResponse extends jspb.Message {
  getProcessedClaimId(): string;
  setProcessedClaimId(value: string): void;

  getMonitoringReportId(): string;
  setMonitoringReportId(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationReportInitializedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationReportInitializedResponse): VerificationReportInitializedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationReportInitializedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationReportInitializedResponse;
  static deserializeBinaryFromReader(message: VerificationReportInitializedResponse, reader: jspb.BinaryReader): VerificationReportInitializedResponse;
}

export namespace VerificationReportInitializedResponse {
  export type AsObject = {
    processedClaimId: string,
    monitoringReportId: string,
    comment: string,
  }
}

export class VM0049Options extends jspb.Message {
  getCo2MeasurementOption(): CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap];
  setCo2MeasurementOption(value: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap]): void;

  getIsmassfractionofco2available(): boolean;
  setIsmassfractionofco2available(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VM0049Options.AsObject;
  static toObject(includeInstance: boolean, msg: VM0049Options): VM0049Options.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VM0049Options, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VM0049Options;
  static deserializeBinaryFromReader(message: VM0049Options, reader: jspb.BinaryReader): VM0049Options;
}

export namespace VM0049Options {
  export type AsObject = {
    co2MeasurementOption: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap],
    ismassfractionofco2available: boolean,
  }
}

export class VMD0056Options extends jspb.Message {
  getUsesFossilFuels(): boolean;
  setUsesFossilFuels(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMD0056Options.AsObject;
  static toObject(includeInstance: boolean, msg: VMD0056Options): VMD0056Options.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VMD0056Options, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMD0056Options;
  static deserializeBinaryFromReader(message: VMD0056Options, reader: jspb.BinaryReader): VMD0056Options;
}

export namespace VMD0056Options {
  export type AsObject = {
    usesFossilFuels: boolean,
  }
}

export class VMD0057Options extends jspb.Message {
  getUsesFossilFuels(): boolean;
  setUsesFossilFuels(value: boolean): void;

  getDirectMonitoring(): boolean;
  setDirectMonitoring(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMD0057Options.AsObject;
  static toObject(includeInstance: boolean, msg: VMD0057Options): VMD0057Options.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VMD0057Options, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMD0057Options;
  static deserializeBinaryFromReader(message: VMD0057Options, reader: jspb.BinaryReader): VMD0057Options;
}

export namespace VMD0057Options {
  export type AsObject = {
    usesFossilFuels: boolean,
    directMonitoring: boolean,
  }
}

export class VMD0058Options extends jspb.Message {
  getIntentionalDischargeMeasurementApproach(): IntentionalDischargeMeasurementApproachMap[keyof IntentionalDischargeMeasurementApproachMap];
  setIntentionalDischargeMeasurementApproach(value: IntentionalDischargeMeasurementApproachMap[keyof IntentionalDischargeMeasurementApproachMap]): void;

  getIntentionalSurfaceDischargeMeasurementOption(): CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap];
  setIntentionalSurfaceDischargeMeasurementOption(value: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap]): void;

  getIntentionalSubsurfaceDischargeMeasurementOption(): CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap];
  setIntentionalSubsurfaceDischargeMeasurementOption(value: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap]): void;

  getUnintentionalSurfaceDischargeEmissionSource(): EmissionSourceForUnintentionalSurfaceDischargeMap[keyof EmissionSourceForUnintentionalSurfaceDischargeMap];
  setUnintentionalSurfaceDischargeEmissionSource(value: EmissionSourceForUnintentionalSurfaceDischargeMap[keyof EmissionSourceForUnintentionalSurfaceDischargeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMD0058Options.AsObject;
  static toObject(includeInstance: boolean, msg: VMD0058Options): VMD0058Options.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VMD0058Options, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMD0058Options;
  static deserializeBinaryFromReader(message: VMD0058Options, reader: jspb.BinaryReader): VMD0058Options;
}

export namespace VMD0058Options {
  export type AsObject = {
    intentionalDischargeMeasurementApproach: IntentionalDischargeMeasurementApproachMap[keyof IntentionalDischargeMeasurementApproachMap],
    intentionalSurfaceDischargeMeasurementOption: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap],
    intentionalSubsurfaceDischargeMeasurementOption: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap],
    unintentionalSurfaceDischargeEmissionSource: EmissionSourceForUnintentionalSurfaceDischargeMap[keyof EmissionSourceForUnintentionalSurfaceDischargeMap],
  }
}

export class VMD0059Options extends jspb.Message {
  getCalculatingLeakageFromBiomassCultivationOptions(): CalculatingLeakageFromBiomassCultivationOptionsMap[keyof CalculatingLeakageFromBiomassCultivationOptionsMap];
  setCalculatingLeakageFromBiomassCultivationOptions(value: CalculatingLeakageFromBiomassCultivationOptionsMap[keyof CalculatingLeakageFromBiomassCultivationOptionsMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMD0059Options.AsObject;
  static toObject(includeInstance: boolean, msg: VMD0059Options): VMD0059Options.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VMD0059Options, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMD0059Options;
  static deserializeBinaryFromReader(message: VMD0059Options, reader: jspb.BinaryReader): VMD0059Options;
}

export namespace VMD0059Options {
  export type AsObject = {
    calculatingLeakageFromBiomassCultivationOptions: CalculatingLeakageFromBiomassCultivationOptionsMap[keyof CalculatingLeakageFromBiomassCultivationOptionsMap],
  }
}

export class VT0013Options extends jspb.Message {
  getAllocateProjectAndLeakageEmissionOptions(): AllocateProjectAndLeakageEmissionOptionsMap[keyof AllocateProjectAndLeakageEmissionOptionsMap];
  setAllocateProjectAndLeakageEmissionOptions(value: AllocateProjectAndLeakageEmissionOptionsMap[keyof AllocateProjectAndLeakageEmissionOptionsMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VT0013Options.AsObject;
  static toObject(includeInstance: boolean, msg: VT0013Options): VT0013Options.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VT0013Options, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VT0013Options;
  static deserializeBinaryFromReader(message: VT0013Options, reader: jspb.BinaryReader): VT0013Options;
}

export namespace VT0013Options {
  export type AsObject = {
    allocateProjectAndLeakageEmissionOptions: AllocateProjectAndLeakageEmissionOptionsMap[keyof AllocateProjectAndLeakageEmissionOptionsMap],
  }
}

export class VariableTemplateOptions extends jspb.Message {
  getAppliesForCo2MeasurementType(): CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap];
  setAppliesForCo2MeasurementType(value: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap]): void;

  getAppliesForFossilFuelUse(): boolean;
  setAppliesForFossilFuelUse(value: boolean): void;

  getTransportDirectMonitoring(): boolean;
  setTransportDirectMonitoring(value: boolean): void;

  getStorageIntentionalDischargeMeasurementApproach(): IntentionalDischargeMeasurementApproachMap[keyof IntentionalDischargeMeasurementApproachMap];
  setStorageIntentionalDischargeMeasurementApproach(value: IntentionalDischargeMeasurementApproachMap[keyof IntentionalDischargeMeasurementApproachMap]): void;

  getStorageSurfaceIntentionalDischargeMeasurement(): CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap];
  setStorageSurfaceIntentionalDischargeMeasurement(value: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap]): void;

  getStorageSubsurfaceIntentionalDischargeMeasurement(): CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap];
  setStorageSubsurfaceIntentionalDischargeMeasurement(value: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap]): void;

  getStorageUnintentionalSurfaceDischargeEmissionSource(): EmissionSourceForUnintentionalSurfaceDischargeMap[keyof EmissionSourceForUnintentionalSurfaceDischargeMap];
  setStorageUnintentionalSurfaceDischargeEmissionSource(value: EmissionSourceForUnintentionalSurfaceDischargeMap[keyof EmissionSourceForUnintentionalSurfaceDischargeMap]): void;

  getBeccsBiomassCultivationLeakageCalculation(): CalculatingLeakageFromBiomassCultivationOptionsMap[keyof CalculatingLeakageFromBiomassCultivationOptionsMap];
  setBeccsBiomassCultivationLeakageCalculation(value: CalculatingLeakageFromBiomassCultivationOptionsMap[keyof CalculatingLeakageFromBiomassCultivationOptionsMap]): void;

  getVt0013AllocateProjectAndLeakageEmissions(): AllocateProjectAndLeakageEmissionOptionsMap[keyof AllocateProjectAndLeakageEmissionOptionsMap];
  setVt0013AllocateProjectAndLeakageEmissions(value: AllocateProjectAndLeakageEmissionOptionsMap[keyof AllocateProjectAndLeakageEmissionOptionsMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableTemplateOptions.AsObject;
  static toObject(includeInstance: boolean, msg: VariableTemplateOptions): VariableTemplateOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VariableTemplateOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableTemplateOptions;
  static deserializeBinaryFromReader(message: VariableTemplateOptions, reader: jspb.BinaryReader): VariableTemplateOptions;
}

export namespace VariableTemplateOptions {
  export type AsObject = {
    appliesForCo2MeasurementType: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap],
    appliesForFossilFuelUse: boolean,
    transportDirectMonitoring: boolean,
    storageIntentionalDischargeMeasurementApproach: IntentionalDischargeMeasurementApproachMap[keyof IntentionalDischargeMeasurementApproachMap],
    storageSurfaceIntentionalDischargeMeasurement: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap],
    storageSubsurfaceIntentionalDischargeMeasurement: CO2MeasurementOptionMap[keyof CO2MeasurementOptionMap],
    storageUnintentionalSurfaceDischargeEmissionSource: EmissionSourceForUnintentionalSurfaceDischargeMap[keyof EmissionSourceForUnintentionalSurfaceDischargeMap],
    beccsBiomassCultivationLeakageCalculation: CalculatingLeakageFromBiomassCultivationOptionsMap[keyof CalculatingLeakageFromBiomassCultivationOptionsMap],
    vt0013AllocateProjectAndLeakageEmissions: AllocateProjectAndLeakageEmissionOptionsMap[keyof AllocateProjectAndLeakageEmissionOptionsMap],
  }
}

export class VerraProject extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProjectNumber(): string;
  setProjectNumber(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  clearProjectProponentsList(): void;
  getProjectProponentsList(): Array<string>;
  setProjectProponentsList(value: Array<string>): void;
  addProjectProponents(value: string, index?: number): string;

  getStandardTemplate(): string;
  setStandardTemplate(value: string): void;

  getStandardTemplateName(): string;
  setStandardTemplateName(value: string): void;

  getMethodologyTemplateTitle(): string;
  setMethodologyTemplateTitle(value: string): void;

  getMethodologyTemplate(): string;
  setMethodologyTemplate(value: string): void;

  getMonitoringReportName(): string;
  setMonitoringReportName(value: string): void;

  getSubmissionStatus(): string;
  setSubmissionStatus(value: string): void;

  getProjectName(): string;
  setProjectName(value: string): void;

  getFetchProjectBoundaryFromCalculationInput(): boolean;
  setFetchProjectBoundaryFromCalculationInput(value: boolean): void;

  getEstimatedProjectStartDate(): string;
  setEstimatedProjectStartDate(value: string): void;

  clearLocationsList(): void;
  getLocationsList(): Array<ProjectLocation>;
  setLocationsList(value: Array<ProjectLocation>): void;
  addLocations(value?: ProjectLocation, index?: number): ProjectLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerraProject.AsObject;
  static toObject(includeInstance: boolean, msg: VerraProject): VerraProject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerraProject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerraProject;
  static deserializeBinaryFromReader(message: VerraProject, reader: jspb.BinaryReader): VerraProject;
}

export namespace VerraProject {
  export type AsObject = {
    id: string,
    projectNumber: string,
    projectId: string,
    accountId: string,
    projectProponentsList: Array<string>,
    standardTemplate: string,
    standardTemplateName: string,
    methodologyTemplateTitle: string,
    methodologyTemplate: string,
    monitoringReportName: string,
    submissionStatus: string,
    projectName: string,
    fetchProjectBoundaryFromCalculationInput: boolean,
    estimatedProjectStartDate: string,
    locationsList: Array<ProjectLocation.AsObject>,
  }
}

export class ProjectLocation extends jspb.Message {
  getProjectInstance(): string;
  setProjectInstance(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getStateProvince(): string;
  setStateProvince(value: string): void;

  getLatitudeDD(): string;
  setLatitudeDD(value: string): void;

  getLongitudeDD(): string;
  setLongitudeDD(value: string): void;

  getLatitudeDMS(): string;
  setLatitudeDMS(value: string): void;

  getLongitudeDMS(): string;
  setLongitudeDMS(value: string): void;

  getAcresHectares(): string;
  setAcresHectares(value: string): void;

  getAreaUnit(): string;
  setAreaUnit(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectLocation): ProjectLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectLocation;
  static deserializeBinaryFromReader(message: ProjectLocation, reader: jspb.BinaryReader): ProjectLocation;
}

export namespace ProjectLocation {
  export type AsObject = {
    projectInstance: string,
    country: string,
    city: string,
    stateProvince: string,
    latitudeDD: string,
    longitudeDD: string,
    latitudeDMS: string,
    longitudeDMS: string,
    acresHectares: string,
    areaUnit: string,
  }
}

export class VerraRegistryAgentConfiguration extends jspb.Message {
  getThresholdForMarginOfDifference(): number;
  setThresholdForMarginOfDifference(value: number): void;

  getClientId(): string;
  setClientId(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  getCallBackUrl(): string;
  setCallBackUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerraRegistryAgentConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: VerraRegistryAgentConfiguration): VerraRegistryAgentConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerraRegistryAgentConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerraRegistryAgentConfiguration;
  static deserializeBinaryFromReader(message: VerraRegistryAgentConfiguration, reader: jspb.BinaryReader): VerraRegistryAgentConfiguration;
}

export namespace VerraRegistryAgentConfiguration {
  export type AsObject = {
    thresholdForMarginOfDifference: number,
    clientId: string,
    scope: string,
    callBackUrl: string,
  }
}

export interface FuelTypeMap {
  UNKNOWN: 0;
  NATURAL_GAS: 1;
  DIESEL: 2;
  GASOLINE: 3;
  COAL: 4;
  BIOMASS: 5;
  BRINE_GAS: 6;
  ELECTRICITY: 7;
  KOH: 8;
  CACO3: 9;
  CAO: 10;
  OTHER: 50;
}

export const FuelType: FuelTypeMap;

export interface EmissionTypeMap {
  EMISSION_TYPE_UNKNOWN: 0;
  CO2: 1;
  CH4: 2;
  N2O: 3;
}

export const EmissionType: EmissionTypeMap;

export interface VerificationExceptionTypeMap {
  LEDGER_VARIABLE: 0;
  DATA_PACKAGE_VARIABLE: 1;
}

export const VerificationExceptionType: VerificationExceptionTypeMap;

export interface CO2MeasurementOptionMap {
  NOT_APPLICABLE: 0;
  MASS_FLOW: 1;
  VOLUMETRIC_FLOW: 2;
  BOTH_MASS_AND_VOLUMETRIC_FLOW: 3;
}

export const CO2MeasurementOption: CO2MeasurementOptionMap;

export interface IntentionalDischargeMeasurementApproachMap {
  IS_NOT_APPLICABLE: 0;
  MEASUREMENT_OF_VENTING: 1;
  ESTIMATION_OF_SURFACE_VENTING_FOR_ISOLATED_VOLUMES: 2;
  ESTIMATION_OF_SURFACE_VENTING_FOR_NON_ISOLATED_VOLUMES: 3;
}

export const IntentionalDischargeMeasurementApproach: IntentionalDischargeMeasurementApproachMap;

export interface EmissionSourceForUnintentionalSurfaceDischargeMap {
  DOESNT_APPLY: 0;
  FUGITIVE_EMISSIONS: 1;
  RUPTURE_OR_LINE_BREAK: 2;
  BOTH: 3;
}

export const EmissionSourceForUnintentionalSurfaceDischarge: EmissionSourceForUnintentionalSurfaceDischargeMap;

export interface CalculatingLeakageFromBiomassCultivationOptionsMap {
  NOT_USED: 0;
  DEFAULT_VALUE: 1;
  EMBODIED_EMISSIONS_FACTOR: 2;
  CALCULATE_LEAKAGE_EMISSIONS: 3;
}

export const CalculatingLeakageFromBiomassCultivationOptions: CalculatingLeakageFromBiomassCultivationOptionsMap;

export interface AllocateProjectAndLeakageEmissionOptionsMap {
  DOES_NOT_APPLY: 0;
  DIFFERENTIATION_METHOD: 1;
  MASS_BALANCE_METHOD: 2;
}

export const AllocateProjectAndLeakageEmissionOptions: AllocateProjectAndLeakageEmissionOptionsMap;

