// source: verraCcsExtensionSet.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.verra.ccs.extensionSet.AllocateProjectAndLeakageEmissionOptions', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CO2MeasurementOption', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CalculateFailErrorsRequest', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CalculateFailErrorsResponse', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CalculatingLeakageFromBiomassCultivationOptions', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CalibrateInstrumentRequest', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CalibrateInstrumentResponse', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CalibrationResult', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CheckpointNonConformanceException', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.ComponentEvent', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.ComponentMass', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.ComponentMoleFraction', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.ComponentTime', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.DeviceMetadata', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.DischargeEvent', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.DoubleValue', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.EmissionFactor', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.EmissionSourceForUnintentionalSurfaceDischarge', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.EmissionType', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.FlowMeterReading', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.FlowRateByMassVariable', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.FuelType', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.FuelTypeValue', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.IntegerValue', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.IntentionalDischargeMeasurementApproach', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.Invoice', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.LeakEvent', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.Measurement', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.Measurements', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.MonthlyMeasurement', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.NHeatOrElec', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.PressurizedPipelineTime', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.PressurizedTimeComponent', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.ProjectLocation', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.QElectricity', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.QFuel', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.QuantityOfFuelVariable', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.StorageLeakage', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.StpValue', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.TransportElectricityLeakage', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.TransportFuelLeakage', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.TransportStorageFuelLeakage', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VM0049Options', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VMD0056Options', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VMD0057Options', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VMD0058Options', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VMD0059Options', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VT0013Options', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VariableAdjusted', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VariableTemplateOptions', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VentingEvent', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VerificationExceptionType', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VerificationReportInitializedRequest', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VerificationReportInitializedResponse', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VerraProject', null, global);
goog.exportSymbol('proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.DeviceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.verra.ccs.extensionSet.DeviceMetadata.repeatedFields_, null);
};
goog.inherits(proto.verra.ccs.extensionSet.DeviceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.DeviceMetadata.displayName = 'proto.verra.ccs.extensionSet.DeviceMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.verra.ccs.extensionSet.FlowRateByMassVariable.repeatedFields_, null);
};
goog.inherits(proto.verra.ccs.extensionSet.FlowRateByMassVariable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.FlowRateByMassVariable.displayName = 'proto.verra.ccs.extensionSet.FlowRateByMassVariable';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.Measurements = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.verra.ccs.extensionSet.Measurements.repeatedFields_, null);
};
goog.inherits(proto.verra.ccs.extensionSet.Measurements, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.Measurements.displayName = 'proto.verra.ccs.extensionSet.Measurements';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.Measurement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.Measurement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.Measurement.displayName = 'proto.verra.ccs.extensionSet.Measurement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.DoubleValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.DoubleValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.DoubleValue.displayName = 'proto.verra.ccs.extensionSet.DoubleValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.IntegerValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.IntegerValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.IntegerValue.displayName = 'proto.verra.ccs.extensionSet.IntegerValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.displayName = 'proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.displayName = 'proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.FlowMeterReading = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.FlowMeterReading, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.FlowMeterReading.displayName = 'proto.verra.ccs.extensionSet.FlowMeterReading';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.ComponentMass = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.ComponentMass, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.ComponentMass.displayName = 'proto.verra.ccs.extensionSet.ComponentMass';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.ComponentMoleFraction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.ComponentMoleFraction.displayName = 'proto.verra.ccs.extensionSet.ComponentMoleFraction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.TransportFuelLeakage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.TransportFuelLeakage.displayName = 'proto.verra.ccs.extensionSet.TransportFuelLeakage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.TransportStorageFuelLeakage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.displayName = 'proto.verra.ccs.extensionSet.TransportStorageFuelLeakage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.displayName = 'proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.TransportElectricityLeakage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.TransportElectricityLeakage.displayName = 'proto.verra.ccs.extensionSet.TransportElectricityLeakage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.StorageLeakage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.StorageLeakage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.StorageLeakage.displayName = 'proto.verra.ccs.extensionSet.StorageLeakage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.LeakEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.LeakEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.LeakEvent.displayName = 'proto.verra.ccs.extensionSet.LeakEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VentingEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VentingEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VentingEvent.displayName = 'proto.verra.ccs.extensionSet.VentingEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.PressurizedTimeComponent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.PressurizedTimeComponent.displayName = 'proto.verra.ccs.extensionSet.PressurizedTimeComponent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.PressurizedPipelineTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.PressurizedPipelineTime.displayName = 'proto.verra.ccs.extensionSet.PressurizedPipelineTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.DischargeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.DischargeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.DischargeEvent.displayName = 'proto.verra.ccs.extensionSet.DischargeEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.StpValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.StpValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.StpValue.displayName = 'proto.verra.ccs.extensionSet.StpValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.FuelTypeValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.FuelTypeValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.FuelTypeValue.displayName = 'proto.verra.ccs.extensionSet.FuelTypeValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.QuantityOfFuelVariable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.QuantityOfFuelVariable.displayName = 'proto.verra.ccs.extensionSet.QuantityOfFuelVariable';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.QFuel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.QFuel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.QFuel.displayName = 'proto.verra.ccs.extensionSet.QFuel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.NHeatOrElec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.NHeatOrElec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.NHeatOrElec.displayName = 'proto.verra.ccs.extensionSet.NHeatOrElec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.QElectricity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.QElectricity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.QElectricity.displayName = 'proto.verra.ccs.extensionSet.QElectricity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.ComponentTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.ComponentTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.ComponentTime.displayName = 'proto.verra.ccs.extensionSet.ComponentTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.ComponentEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.ComponentEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.ComponentEvent.displayName = 'proto.verra.ccs.extensionSet.ComponentEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.Invoice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.Invoice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.Invoice.displayName = 'proto.verra.ccs.extensionSet.Invoice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.MonthlyMeasurement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.MonthlyMeasurement.displayName = 'proto.verra.ccs.extensionSet.MonthlyMeasurement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.EmissionFactor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.EmissionFactor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.EmissionFactor.displayName = 'proto.verra.ccs.extensionSet.EmissionFactor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CalibrateInstrumentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.displayName = 'proto.verra.ccs.extensionSet.CalibrateInstrumentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CalibrateInstrumentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.displayName = 'proto.verra.ccs.extensionSet.CalibrateInstrumentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CalibrationResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CalibrationResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CalibrationResult.displayName = 'proto.verra.ccs.extensionSet.CalibrationResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.displayName = 'proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CheckpointNonConformanceException, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CheckpointNonConformanceException.displayName = 'proto.verra.ccs.extensionSet.CheckpointNonConformanceException';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.displayName = 'proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.repeatedFields_, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.displayName = 'proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.repeatedFields_, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.displayName = 'proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CalculateFailErrorsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.displayName = 'proto.verra.ccs.extensionSet.CalculateFailErrorsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.repeatedFields_, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CalculateFailErrorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.displayName = 'proto.verra.ccs.extensionSet.CalculateFailErrorsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VariableAdjusted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VariableAdjusted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VariableAdjusted.displayName = 'proto.verra.ccs.extensionSet.VariableAdjusted';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.displayName = 'proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.repeatedFields_, null);
};
goog.inherits(proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.displayName = 'proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VerificationReportInitializedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.displayName = 'proto.verra.ccs.extensionSet.VerificationReportInitializedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VerificationReportInitializedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.displayName = 'proto.verra.ccs.extensionSet.VerificationReportInitializedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VM0049Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VM0049Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VM0049Options.displayName = 'proto.verra.ccs.extensionSet.VM0049Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VMD0056Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VMD0056Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VMD0056Options.displayName = 'proto.verra.ccs.extensionSet.VMD0056Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VMD0057Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VMD0057Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VMD0057Options.displayName = 'proto.verra.ccs.extensionSet.VMD0057Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VMD0058Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VMD0058Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VMD0058Options.displayName = 'proto.verra.ccs.extensionSet.VMD0058Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VMD0059Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VMD0059Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VMD0059Options.displayName = 'proto.verra.ccs.extensionSet.VMD0059Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VT0013Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VT0013Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VT0013Options.displayName = 'proto.verra.ccs.extensionSet.VT0013Options';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VariableTemplateOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VariableTemplateOptions.displayName = 'proto.verra.ccs.extensionSet.VariableTemplateOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VerraProject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.verra.ccs.extensionSet.VerraProject.repeatedFields_, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VerraProject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VerraProject.displayName = 'proto.verra.ccs.extensionSet.VerraProject';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.ProjectLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.ProjectLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.ProjectLocation.displayName = 'proto.verra.ccs.extensionSet.ProjectLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.displayName = 'proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.verra.ccs.extensionSet.DeviceMetadata.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.DeviceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.DeviceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.DeviceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
model: jspb.Message.getFieldWithDefault(msg, 1, ""),
manufacturer: jspb.Message.getFieldWithDefault(msg, 2, ""),
serialNumber: jspb.Message.getFieldWithDefault(msg, 3, ""),
firmwareVersion: jspb.Message.getFieldWithDefault(msg, 4, ""),
installationDate: jspb.Message.getFieldWithDefault(msg, 5, ""),
calibrationDate: jspb.Message.getFieldWithDefault(msg, 6, ""),
calibrationExpirationDate: jspb.Message.getFieldWithDefault(msg, 7, ""),
calibrationFrequencyInMonths: jspb.Message.getFieldWithDefault(msg, 8, 0),
calibrationStandard: jspb.Message.getFieldWithDefault(msg, 9, ""),
accuracy: jspb.Message.getFieldWithDefault(msg, 10, ""),
calibrationResultsList: jspb.Message.toObjectList(msg.getCalibrationResultsList(),
    proto.verra.ccs.extensionSet.CalibrationResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.DeviceMetadata;
  return proto.verra.ccs.extensionSet.DeviceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.DeviceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setManufacturer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerialNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirmwareVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstallationDate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCalibrationDate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCalibrationExpirationDate(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCalibrationFrequencyInMonths(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCalibrationStandard(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccuracy(value);
      break;
    case 11:
      var value = new proto.verra.ccs.extensionSet.CalibrationResult;
      reader.readMessage(value,proto.verra.ccs.extensionSet.CalibrationResult.deserializeBinaryFromReader);
      msg.addCalibrationResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.DeviceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.DeviceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.DeviceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getManufacturer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSerialNumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFirmwareVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInstallationDate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCalibrationDate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCalibrationExpirationDate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCalibrationFrequencyInMonths();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getCalibrationStandard();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getAccuracy();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCalibrationResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.verra.ccs.extensionSet.CalibrationResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string model = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string manufacturer = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.getManufacturer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.setManufacturer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string serial_number = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.getSerialNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.setSerialNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string firmware_version = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.getFirmwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.setFirmwareVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string installation_date = 5;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.getInstallationDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.setInstallationDate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string calibration_date = 6;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.getCalibrationDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.setCalibrationDate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string calibration_expiration_date = 7;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.getCalibrationExpirationDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.setCalibrationExpirationDate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 calibration_frequency_in_months = 8;
 * @return {number}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.getCalibrationFrequencyInMonths = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.setCalibrationFrequencyInMonths = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string calibration_standard = 9;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.getCalibrationStandard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.setCalibrationStandard = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string accuracy = 10;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.getAccuracy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.setAccuracy = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated CalibrationResult calibration_results = 11;
 * @return {!Array<!proto.verra.ccs.extensionSet.CalibrationResult>}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.getCalibrationResultsList = function() {
  return /** @type{!Array<!proto.verra.ccs.extensionSet.CalibrationResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.verra.ccs.extensionSet.CalibrationResult, 11));
};


/**
 * @param {!Array<!proto.verra.ccs.extensionSet.CalibrationResult>} value
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
*/
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.setCalibrationResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.verra.ccs.extensionSet.CalibrationResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.verra.ccs.extensionSet.CalibrationResult}
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.addCalibrationResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.verra.ccs.extensionSet.CalibrationResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.verra.ccs.extensionSet.DeviceMetadata} returns this
 */
proto.verra.ccs.extensionSet.DeviceMetadata.prototype.clearCalibrationResultsList = function() {
  return this.setCalibrationResultsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.FlowRateByMassVariable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.FlowRateByMassVariable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.toObject = function(includeInstance, msg) {
  var f, obj = {
claimSourceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
measurementsList: jspb.Message.toObjectList(msg.getMeasurementsList(),
    proto.verra.ccs.extensionSet.Measurement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.FlowRateByMassVariable}
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.FlowRateByMassVariable;
  return proto.verra.ccs.extensionSet.FlowRateByMassVariable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.FlowRateByMassVariable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.FlowRateByMassVariable}
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClaimSourceId(value);
      break;
    case 3:
      var value = new proto.verra.ccs.extensionSet.Measurement;
      reader.readMessage(value,proto.verra.ccs.extensionSet.Measurement.deserializeBinaryFromReader);
      msg.addMeasurements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.FlowRateByMassVariable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.FlowRateByMassVariable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClaimSourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMeasurementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.verra.ccs.extensionSet.Measurement.serializeBinaryToWriter
    );
  }
};


/**
 * optional string claim_source_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.prototype.getClaimSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.FlowRateByMassVariable} returns this
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.prototype.setClaimSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Measurement measurements = 3;
 * @return {!Array<!proto.verra.ccs.extensionSet.Measurement>}
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.prototype.getMeasurementsList = function() {
  return /** @type{!Array<!proto.verra.ccs.extensionSet.Measurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.verra.ccs.extensionSet.Measurement, 3));
};


/**
 * @param {!Array<!proto.verra.ccs.extensionSet.Measurement>} value
 * @return {!proto.verra.ccs.extensionSet.FlowRateByMassVariable} returns this
*/
proto.verra.ccs.extensionSet.FlowRateByMassVariable.prototype.setMeasurementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.verra.ccs.extensionSet.Measurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.verra.ccs.extensionSet.Measurement}
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.prototype.addMeasurements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.verra.ccs.extensionSet.Measurement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.verra.ccs.extensionSet.FlowRateByMassVariable} returns this
 */
proto.verra.ccs.extensionSet.FlowRateByMassVariable.prototype.clearMeasurementsList = function() {
  return this.setMeasurementsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.verra.ccs.extensionSet.Measurements.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.Measurements.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.Measurements.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.Measurements} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.Measurements.toObject = function(includeInstance, msg) {
  var f, obj = {
measurementList: jspb.Message.toObjectList(msg.getMeasurementList(),
    proto.verra.ccs.extensionSet.Measurement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.Measurements}
 */
proto.verra.ccs.extensionSet.Measurements.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.Measurements;
  return proto.verra.ccs.extensionSet.Measurements.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.Measurements} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.Measurements}
 */
proto.verra.ccs.extensionSet.Measurements.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.verra.ccs.extensionSet.Measurement;
      reader.readMessage(value,proto.verra.ccs.extensionSet.Measurement.deserializeBinaryFromReader);
      msg.addMeasurement(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.Measurements.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.Measurements.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.Measurements} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.Measurements.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeasurementList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.verra.ccs.extensionSet.Measurement.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Measurement measurement = 1;
 * @return {!Array<!proto.verra.ccs.extensionSet.Measurement>}
 */
proto.verra.ccs.extensionSet.Measurements.prototype.getMeasurementList = function() {
  return /** @type{!Array<!proto.verra.ccs.extensionSet.Measurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.verra.ccs.extensionSet.Measurement, 1));
};


/**
 * @param {!Array<!proto.verra.ccs.extensionSet.Measurement>} value
 * @return {!proto.verra.ccs.extensionSet.Measurements} returns this
*/
proto.verra.ccs.extensionSet.Measurements.prototype.setMeasurementList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.verra.ccs.extensionSet.Measurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.verra.ccs.extensionSet.Measurement}
 */
proto.verra.ccs.extensionSet.Measurements.prototype.addMeasurement = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.verra.ccs.extensionSet.Measurement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.verra.ccs.extensionSet.Measurements} returns this
 */
proto.verra.ccs.extensionSet.Measurements.prototype.clearMeasurementList = function() {
  return this.setMeasurementList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.Measurement.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.Measurement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.Measurement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.Measurement.toObject = function(includeInstance, msg) {
  var f, obj = {
measureTime: (f = msg.getMeasureTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
tagId: jspb.Message.getFieldWithDefault(msg, 2, ""),
facilityName: jspb.Message.getFieldWithDefault(msg, 3, ""),
measureValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.Measurement}
 */
proto.verra.ccs.extensionSet.Measurement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.Measurement;
  return proto.verra.ccs.extensionSet.Measurement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.Measurement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.Measurement}
 */
proto.verra.ccs.extensionSet.Measurement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMeasureTime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFacilityName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMeasureValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.Measurement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.Measurement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.Measurement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.Measurement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeasureTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTagId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFacilityName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMeasureValue();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp measure_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.verra.ccs.extensionSet.Measurement.prototype.getMeasureTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.verra.ccs.extensionSet.Measurement} returns this
*/
proto.verra.ccs.extensionSet.Measurement.prototype.setMeasureTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.verra.ccs.extensionSet.Measurement} returns this
 */
proto.verra.ccs.extensionSet.Measurement.prototype.clearMeasureTime = function() {
  return this.setMeasureTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.Measurement.prototype.hasMeasureTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tag_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.Measurement.prototype.getTagId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.Measurement} returns this
 */
proto.verra.ccs.extensionSet.Measurement.prototype.setTagId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string facility_name = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.Measurement.prototype.getFacilityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.Measurement} returns this
 */
proto.verra.ccs.extensionSet.Measurement.prototype.setFacilityName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double measure_value = 4;
 * @return {number}
 */
proto.verra.ccs.extensionSet.Measurement.prototype.getMeasureValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.Measurement} returns this
 */
proto.verra.ccs.extensionSet.Measurement.prototype.setMeasureValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string u_o_m = 5;
 * @return {string}
 */
proto.verra.ccs.extensionSet.Measurement.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.Measurement} returns this
 */
proto.verra.ccs.extensionSet.Measurement.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.DoubleValue.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.DoubleValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.DoubleValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.DoubleValue.toObject = function(includeInstance, msg) {
  var f, obj = {
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.DoubleValue}
 */
proto.verra.ccs.extensionSet.DoubleValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.DoubleValue;
  return proto.verra.ccs.extensionSet.DoubleValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.DoubleValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.DoubleValue}
 */
proto.verra.ccs.extensionSet.DoubleValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.DoubleValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.DoubleValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.DoubleValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.DoubleValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional double value = 1;
 * @return {number}
 */
proto.verra.ccs.extensionSet.DoubleValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.DoubleValue} returns this
 */
proto.verra.ccs.extensionSet.DoubleValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string u_o_m = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DoubleValue.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DoubleValue} returns this
 */
proto.verra.ccs.extensionSet.DoubleValue.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.IntegerValue.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.IntegerValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.IntegerValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.IntegerValue.toObject = function(includeInstance, msg) {
  var f, obj = {
value: jspb.Message.getFieldWithDefault(msg, 1, 0),
uOM: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.IntegerValue}
 */
proto.verra.ccs.extensionSet.IntegerValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.IntegerValue;
  return proto.verra.ccs.extensionSet.IntegerValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.IntegerValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.IntegerValue}
 */
proto.verra.ccs.extensionSet.IntegerValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.IntegerValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.IntegerValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.IntegerValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.IntegerValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 value = 1;
 * @return {number}
 */
proto.verra.ccs.extensionSet.IntegerValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.IntegerValue} returns this
 */
proto.verra.ccs.extensionSet.IntegerValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string u_o_m = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.IntegerValue.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.IntegerValue} returns this
 */
proto.verra.ccs.extensionSet.IntegerValue.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.toObject = function(includeInstance, msg) {
  var f, obj = {
injectionPoint: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected}
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected;
  return proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected}
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInjectionPoint(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInjectionPoint();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string injection_point = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.prototype.getInjectionPoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected} returns this
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.prototype.setInjectionPoint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected} returns this
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected} returns this
 */
proto.verra.ccs.extensionSet.QuantityOfNonVcsCo2Injected.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.toObject = function(includeInstance, msg) {
  var f, obj = {
captureMaterial: jspb.Message.getFieldWithDefault(msg, 1, 0),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial}
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial;
  return proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial}
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (reader.readEnum());
      msg.setCaptureMaterial(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCaptureMaterial();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional FuelType capture_material = 1;
 * @return {!proto.verra.ccs.extensionSet.FuelType}
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.prototype.getCaptureMaterial = function() {
  return /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.FuelType} value
 * @return {!proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial} returns this
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.prototype.setCaptureMaterial = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial} returns this
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial} returns this
 */
proto.verra.ccs.extensionSet.QuantityOfCaptureMaterial.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.FlowMeterReading.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.FlowMeterReading.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.FlowMeterReading} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.FlowMeterReading.toObject = function(includeInstance, msg) {
  var f, obj = {
flowMeter: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.FlowMeterReading}
 */
proto.verra.ccs.extensionSet.FlowMeterReading.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.FlowMeterReading;
  return proto.verra.ccs.extensionSet.FlowMeterReading.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.FlowMeterReading} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.FlowMeterReading}
 */
proto.verra.ccs.extensionSet.FlowMeterReading.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlowMeter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.FlowMeterReading.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.FlowMeterReading.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.FlowMeterReading} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.FlowMeterReading.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlowMeter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string flow_meter = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.FlowMeterReading.prototype.getFlowMeter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.FlowMeterReading} returns this
 */
proto.verra.ccs.extensionSet.FlowMeterReading.prototype.setFlowMeter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.FlowMeterReading.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.FlowMeterReading} returns this
 */
proto.verra.ccs.extensionSet.FlowMeterReading.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.FlowMeterReading.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.FlowMeterReading} returns this
 */
proto.verra.ccs.extensionSet.FlowMeterReading.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.ComponentMass.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.ComponentMass.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.ComponentMass} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.ComponentMass.toObject = function(includeInstance, msg) {
  var f, obj = {
component: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.ComponentMass}
 */
proto.verra.ccs.extensionSet.ComponentMass.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.ComponentMass;
  return proto.verra.ccs.extensionSet.ComponentMass.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.ComponentMass} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.ComponentMass}
 */
proto.verra.ccs.extensionSet.ComponentMass.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.ComponentMass.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.ComponentMass.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.ComponentMass} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.ComponentMass.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string component = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ComponentMass.prototype.getComponent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ComponentMass} returns this
 */
proto.verra.ccs.extensionSet.ComponentMass.prototype.setComponent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.ComponentMass.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.ComponentMass} returns this
 */
proto.verra.ccs.extensionSet.ComponentMass.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ComponentMass.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ComponentMass} returns this
 */
proto.verra.ccs.extensionSet.ComponentMass.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.ComponentMoleFraction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.ComponentMoleFraction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.toObject = function(includeInstance, msg) {
  var f, obj = {
component: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, ""),
flowMeter: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.ComponentMoleFraction}
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.ComponentMoleFraction;
  return proto.verra.ccs.extensionSet.ComponentMoleFraction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.ComponentMoleFraction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.ComponentMoleFraction}
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlowMeter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.ComponentMoleFraction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.ComponentMoleFraction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFlowMeter();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string component = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.prototype.getComponent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ComponentMoleFraction} returns this
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.prototype.setComponent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.ComponentMoleFraction} returns this
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ComponentMoleFraction} returns this
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string flow_meter = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.prototype.getFlowMeter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ComponentMoleFraction} returns this
 */
proto.verra.ccs.extensionSet.ComponentMoleFraction.prototype.setFlowMeter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.TransportFuelLeakage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.TransportFuelLeakage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.toObject = function(includeInstance, msg) {
  var f, obj = {
transportLeg: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.TransportFuelLeakage}
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.TransportFuelLeakage;
  return proto.verra.ccs.extensionSet.TransportFuelLeakage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.TransportFuelLeakage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.TransportFuelLeakage}
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransportLeg(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.TransportFuelLeakage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.TransportFuelLeakage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransportLeg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string transport_leg = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.prototype.getTransportLeg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.TransportFuelLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.prototype.setTransportLeg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.TransportFuelLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.TransportFuelLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportFuelLeakage.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.TransportStorageFuelLeakage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.toObject = function(includeInstance, msg) {
  var f, obj = {
storage: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.TransportStorageFuelLeakage}
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.TransportStorageFuelLeakage;
  return proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.TransportStorageFuelLeakage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.TransportStorageFuelLeakage}
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.TransportStorageFuelLeakage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string storage = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.prototype.getStorage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.TransportStorageFuelLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.prototype.setStorage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.TransportStorageFuelLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.TransportStorageFuelLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportStorageFuelLeakage.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.toObject = function(includeInstance, msg) {
  var f, obj = {
storage: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage}
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage;
  return proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage}
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string storage = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.prototype.getStorage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.prototype.setStorage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportStorageElectricityLeakage.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.TransportElectricityLeakage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.TransportElectricityLeakage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.toObject = function(includeInstance, msg) {
  var f, obj = {
transportLeg: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.TransportElectricityLeakage}
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.TransportElectricityLeakage;
  return proto.verra.ccs.extensionSet.TransportElectricityLeakage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.TransportElectricityLeakage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.TransportElectricityLeakage}
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransportLeg(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.TransportElectricityLeakage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.TransportElectricityLeakage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransportLeg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string transport_leg = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.prototype.getTransportLeg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.TransportElectricityLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.prototype.setTransportLeg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.TransportElectricityLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.TransportElectricityLeakage} returns this
 */
proto.verra.ccs.extensionSet.TransportElectricityLeakage.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.StorageLeakage.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.StorageLeakage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.StorageLeakage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.StorageLeakage.toObject = function(includeInstance, msg) {
  var f, obj = {
storage: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.StorageLeakage}
 */
proto.verra.ccs.extensionSet.StorageLeakage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.StorageLeakage;
  return proto.verra.ccs.extensionSet.StorageLeakage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.StorageLeakage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.StorageLeakage}
 */
proto.verra.ccs.extensionSet.StorageLeakage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.StorageLeakage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.StorageLeakage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.StorageLeakage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.StorageLeakage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string storage = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.StorageLeakage.prototype.getStorage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.StorageLeakage} returns this
 */
proto.verra.ccs.extensionSet.StorageLeakage.prototype.setStorage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.StorageLeakage.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.StorageLeakage} returns this
 */
proto.verra.ccs.extensionSet.StorageLeakage.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.StorageLeakage.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.StorageLeakage} returns this
 */
proto.verra.ccs.extensionSet.StorageLeakage.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.LeakEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.LeakEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.LeakEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.LeakEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
eventName: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.LeakEvent}
 */
proto.verra.ccs.extensionSet.LeakEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.LeakEvent;
  return proto.verra.ccs.extensionSet.LeakEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.LeakEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.LeakEvent}
 */
proto.verra.ccs.extensionSet.LeakEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.LeakEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.LeakEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.LeakEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.LeakEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string event_name = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.LeakEvent.prototype.getEventName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.LeakEvent} returns this
 */
proto.verra.ccs.extensionSet.LeakEvent.prototype.setEventName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.LeakEvent.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.LeakEvent} returns this
 */
proto.verra.ccs.extensionSet.LeakEvent.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.LeakEvent.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.LeakEvent} returns this
 */
proto.verra.ccs.extensionSet.LeakEvent.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VentingEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VentingEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VentingEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VentingEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
eventName: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VentingEvent}
 */
proto.verra.ccs.extensionSet.VentingEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VentingEvent;
  return proto.verra.ccs.extensionSet.VentingEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VentingEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VentingEvent}
 */
proto.verra.ccs.extensionSet.VentingEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VentingEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VentingEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VentingEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VentingEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string event_name = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VentingEvent.prototype.getEventName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VentingEvent} returns this
 */
proto.verra.ccs.extensionSet.VentingEvent.prototype.setEventName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.VentingEvent.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.VentingEvent} returns this
 */
proto.verra.ccs.extensionSet.VentingEvent.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VentingEvent.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VentingEvent} returns this
 */
proto.verra.ccs.extensionSet.VentingEvent.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.PressurizedTimeComponent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.PressurizedTimeComponent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.toObject = function(includeInstance, msg) {
  var f, obj = {
component: jspb.Message.getFieldWithDefault(msg, 1, ""),
durationInHours: jspb.Message.getFieldWithDefault(msg, 2, 0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.PressurizedTimeComponent}
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.PressurizedTimeComponent;
  return proto.verra.ccs.extensionSet.PressurizedTimeComponent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.PressurizedTimeComponent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.PressurizedTimeComponent}
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDurationInHours(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.PressurizedTimeComponent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.PressurizedTimeComponent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDurationInHours();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string component = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.prototype.getComponent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.PressurizedTimeComponent} returns this
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.prototype.setComponent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 duration_in_hours = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.prototype.getDurationInHours = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.PressurizedTimeComponent} returns this
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.prototype.setDurationInHours = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.PressurizedTimeComponent} returns this
 */
proto.verra.ccs.extensionSet.PressurizedTimeComponent.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.PressurizedPipelineTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.PressurizedPipelineTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.toObject = function(includeInstance, msg) {
  var f, obj = {
pipeline: jspb.Message.getFieldWithDefault(msg, 1, ""),
durationInHours: jspb.Message.getFieldWithDefault(msg, 2, 0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.PressurizedPipelineTime}
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.PressurizedPipelineTime;
  return proto.verra.ccs.extensionSet.PressurizedPipelineTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.PressurizedPipelineTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.PressurizedPipelineTime}
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPipeline(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDurationInHours(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.PressurizedPipelineTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.PressurizedPipelineTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPipeline();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDurationInHours();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string pipeline = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.prototype.getPipeline = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.PressurizedPipelineTime} returns this
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.prototype.setPipeline = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 duration_in_hours = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.prototype.getDurationInHours = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.PressurizedPipelineTime} returns this
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.prototype.setDurationInHours = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.PressurizedPipelineTime} returns this
 */
proto.verra.ccs.extensionSet.PressurizedPipelineTime.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.DischargeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.DischargeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.DischargeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.DischargeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
dischargeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.DischargeEvent}
 */
proto.verra.ccs.extensionSet.DischargeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.DischargeEvent;
  return proto.verra.ccs.extensionSet.DischargeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.DischargeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.DischargeEvent}
 */
proto.verra.ccs.extensionSet.DischargeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDischargeName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.DischargeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.DischargeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.DischargeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.DischargeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDischargeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string discharge_name = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DischargeEvent.prototype.getDischargeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DischargeEvent} returns this
 */
proto.verra.ccs.extensionSet.DischargeEvent.prototype.setDischargeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.DischargeEvent.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.DischargeEvent} returns this
 */
proto.verra.ccs.extensionSet.DischargeEvent.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.DischargeEvent.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.DischargeEvent} returns this
 */
proto.verra.ccs.extensionSet.DischargeEvent.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.StpValue.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.StpValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.StpValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.StpValue.toObject = function(includeInstance, msg) {
  var f, obj = {
temperature: (f = msg.getTemperature()) && proto.verra.ccs.extensionSet.DoubleValue.toObject(includeInstance, f),
pressure: (f = msg.getPressure()) && proto.verra.ccs.extensionSet.DoubleValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.StpValue}
 */
proto.verra.ccs.extensionSet.StpValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.StpValue;
  return proto.verra.ccs.extensionSet.StpValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.StpValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.StpValue}
 */
proto.verra.ccs.extensionSet.StpValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.verra.ccs.extensionSet.DoubleValue;
      reader.readMessage(value,proto.verra.ccs.extensionSet.DoubleValue.deserializeBinaryFromReader);
      msg.setTemperature(value);
      break;
    case 2:
      var value = new proto.verra.ccs.extensionSet.DoubleValue;
      reader.readMessage(value,proto.verra.ccs.extensionSet.DoubleValue.deserializeBinaryFromReader);
      msg.setPressure(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.StpValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.StpValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.StpValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.StpValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemperature();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.verra.ccs.extensionSet.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getPressure();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.verra.ccs.extensionSet.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional DoubleValue temperature = 1;
 * @return {?proto.verra.ccs.extensionSet.DoubleValue}
 */
proto.verra.ccs.extensionSet.StpValue.prototype.getTemperature = function() {
  return /** @type{?proto.verra.ccs.extensionSet.DoubleValue} */ (
    jspb.Message.getWrapperField(this, proto.verra.ccs.extensionSet.DoubleValue, 1));
};


/**
 * @param {?proto.verra.ccs.extensionSet.DoubleValue|undefined} value
 * @return {!proto.verra.ccs.extensionSet.StpValue} returns this
*/
proto.verra.ccs.extensionSet.StpValue.prototype.setTemperature = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.verra.ccs.extensionSet.StpValue} returns this
 */
proto.verra.ccs.extensionSet.StpValue.prototype.clearTemperature = function() {
  return this.setTemperature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.StpValue.prototype.hasTemperature = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DoubleValue pressure = 2;
 * @return {?proto.verra.ccs.extensionSet.DoubleValue}
 */
proto.verra.ccs.extensionSet.StpValue.prototype.getPressure = function() {
  return /** @type{?proto.verra.ccs.extensionSet.DoubleValue} */ (
    jspb.Message.getWrapperField(this, proto.verra.ccs.extensionSet.DoubleValue, 2));
};


/**
 * @param {?proto.verra.ccs.extensionSet.DoubleValue|undefined} value
 * @return {!proto.verra.ccs.extensionSet.StpValue} returns this
*/
proto.verra.ccs.extensionSet.StpValue.prototype.setPressure = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.verra.ccs.extensionSet.StpValue} returns this
 */
proto.verra.ccs.extensionSet.StpValue.prototype.clearPressure = function() {
  return this.setPressure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.StpValue.prototype.hasPressure = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.FuelTypeValue.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.FuelTypeValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.FuelTypeValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.FuelTypeValue.toObject = function(includeInstance, msg) {
  var f, obj = {
fuelType: jspb.Message.getFieldWithDefault(msg, 1, 0),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, ""),
transportOrStorageName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.FuelTypeValue}
 */
proto.verra.ccs.extensionSet.FuelTypeValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.FuelTypeValue;
  return proto.verra.ccs.extensionSet.FuelTypeValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.FuelTypeValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.FuelTypeValue}
 */
proto.verra.ccs.extensionSet.FuelTypeValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (reader.readEnum());
      msg.setFuelType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransportOrStorageName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.FuelTypeValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.FuelTypeValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.FuelTypeValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.FuelTypeValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFuelType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransportOrStorageName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional FuelType fuel_type = 1;
 * @return {!proto.verra.ccs.extensionSet.FuelType}
 */
proto.verra.ccs.extensionSet.FuelTypeValue.prototype.getFuelType = function() {
  return /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.FuelType} value
 * @return {!proto.verra.ccs.extensionSet.FuelTypeValue} returns this
 */
proto.verra.ccs.extensionSet.FuelTypeValue.prototype.setFuelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.FuelTypeValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.FuelTypeValue} returns this
 */
proto.verra.ccs.extensionSet.FuelTypeValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.FuelTypeValue.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.FuelTypeValue} returns this
 */
proto.verra.ccs.extensionSet.FuelTypeValue.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string transport_or_storage_name = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.FuelTypeValue.prototype.getTransportOrStorageName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.FuelTypeValue} returns this
 */
proto.verra.ccs.extensionSet.FuelTypeValue.prototype.setTransportOrStorageName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.QuantityOfFuelVariable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.QuantityOfFuelVariable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.toObject = function(includeInstance, msg) {
  var f, obj = {
tagId: jspb.Message.getFieldWithDefault(msg, 1, ""),
fuelType: jspb.Message.getFieldWithDefault(msg, 2, 0),
invoice: (f = msg.getInvoice()) && proto.verra.ccs.extensionSet.Invoice.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.QuantityOfFuelVariable}
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.QuantityOfFuelVariable;
  return proto.verra.ccs.extensionSet.QuantityOfFuelVariable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.QuantityOfFuelVariable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.QuantityOfFuelVariable}
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagId(value);
      break;
    case 2:
      var value = /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (reader.readEnum());
      msg.setFuelType(value);
      break;
    case 3:
      var value = new proto.verra.ccs.extensionSet.Invoice;
      reader.readMessage(value,proto.verra.ccs.extensionSet.Invoice.deserializeBinaryFromReader);
      msg.setInvoice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.QuantityOfFuelVariable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.QuantityOfFuelVariable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFuelType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getInvoice();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.verra.ccs.extensionSet.Invoice.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tag_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.prototype.getTagId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.QuantityOfFuelVariable} returns this
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.prototype.setTagId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional FuelType fuel_type = 2;
 * @return {!proto.verra.ccs.extensionSet.FuelType}
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.prototype.getFuelType = function() {
  return /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.FuelType} value
 * @return {!proto.verra.ccs.extensionSet.QuantityOfFuelVariable} returns this
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.prototype.setFuelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Invoice invoice = 3;
 * @return {?proto.verra.ccs.extensionSet.Invoice}
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.prototype.getInvoice = function() {
  return /** @type{?proto.verra.ccs.extensionSet.Invoice} */ (
    jspb.Message.getWrapperField(this, proto.verra.ccs.extensionSet.Invoice, 3));
};


/**
 * @param {?proto.verra.ccs.extensionSet.Invoice|undefined} value
 * @return {!proto.verra.ccs.extensionSet.QuantityOfFuelVariable} returns this
*/
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.prototype.setInvoice = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.verra.ccs.extensionSet.QuantityOfFuelVariable} returns this
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.prototype.clearInvoice = function() {
  return this.setInvoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.QuantityOfFuelVariable.prototype.hasInvoice = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.QFuel.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.QFuel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.QFuel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.QFuel.toObject = function(includeInstance, msg) {
  var f, obj = {
fuelType: jspb.Message.getFieldWithDefault(msg, 1, 0),
quantity: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, ""),
transportOrStorageName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.QFuel}
 */
proto.verra.ccs.extensionSet.QFuel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.QFuel;
  return proto.verra.ccs.extensionSet.QFuel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.QFuel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.QFuel}
 */
proto.verra.ccs.extensionSet.QFuel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (reader.readEnum());
      msg.setFuelType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuantity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransportOrStorageName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.QFuel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.QFuel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.QFuel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.QFuel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFuelType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransportOrStorageName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional FuelType fuel_type = 1;
 * @return {!proto.verra.ccs.extensionSet.FuelType}
 */
proto.verra.ccs.extensionSet.QFuel.prototype.getFuelType = function() {
  return /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.FuelType} value
 * @return {!proto.verra.ccs.extensionSet.QFuel} returns this
 */
proto.verra.ccs.extensionSet.QFuel.prototype.setFuelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double quantity = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.QFuel.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.QFuel} returns this
 */
proto.verra.ccs.extensionSet.QFuel.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.QFuel.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.QFuel} returns this
 */
proto.verra.ccs.extensionSet.QFuel.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string transport_or_storage_name = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.QFuel.prototype.getTransportOrStorageName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.QFuel} returns this
 */
proto.verra.ccs.extensionSet.QFuel.prototype.setTransportOrStorageName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.NHeatOrElec.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.NHeatOrElec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.NHeatOrElec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.NHeatOrElec.toObject = function(includeInstance, msg) {
  var f, obj = {
fuelType: jspb.Message.getFieldWithDefault(msg, 1, 0),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, ""),
transportOrStorageName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.NHeatOrElec}
 */
proto.verra.ccs.extensionSet.NHeatOrElec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.NHeatOrElec;
  return proto.verra.ccs.extensionSet.NHeatOrElec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.NHeatOrElec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.NHeatOrElec}
 */
proto.verra.ccs.extensionSet.NHeatOrElec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (reader.readEnum());
      msg.setFuelType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransportOrStorageName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.NHeatOrElec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.NHeatOrElec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.NHeatOrElec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.NHeatOrElec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFuelType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransportOrStorageName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional FuelType fuel_type = 1;
 * @return {!proto.verra.ccs.extensionSet.FuelType}
 */
proto.verra.ccs.extensionSet.NHeatOrElec.prototype.getFuelType = function() {
  return /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.FuelType} value
 * @return {!proto.verra.ccs.extensionSet.NHeatOrElec} returns this
 */
proto.verra.ccs.extensionSet.NHeatOrElec.prototype.setFuelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.NHeatOrElec.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.NHeatOrElec} returns this
 */
proto.verra.ccs.extensionSet.NHeatOrElec.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.NHeatOrElec.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.NHeatOrElec} returns this
 */
proto.verra.ccs.extensionSet.NHeatOrElec.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string transport_or_storage_name = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.NHeatOrElec.prototype.getTransportOrStorageName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.NHeatOrElec} returns this
 */
proto.verra.ccs.extensionSet.NHeatOrElec.prototype.setTransportOrStorageName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.QElectricity.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.QElectricity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.QElectricity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.QElectricity.toObject = function(includeInstance, msg) {
  var f, obj = {
fuelType: jspb.Message.getFieldWithDefault(msg, 1, 0),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 3, ""),
transportOrStorageName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.QElectricity}
 */
proto.verra.ccs.extensionSet.QElectricity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.QElectricity;
  return proto.verra.ccs.extensionSet.QElectricity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.QElectricity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.QElectricity}
 */
proto.verra.ccs.extensionSet.QElectricity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (reader.readEnum());
      msg.setFuelType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransportOrStorageName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.QElectricity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.QElectricity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.QElectricity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.QElectricity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFuelType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransportOrStorageName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional FuelType fuel_type = 1;
 * @return {!proto.verra.ccs.extensionSet.FuelType}
 */
proto.verra.ccs.extensionSet.QElectricity.prototype.getFuelType = function() {
  return /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.FuelType} value
 * @return {!proto.verra.ccs.extensionSet.QElectricity} returns this
 */
proto.verra.ccs.extensionSet.QElectricity.prototype.setFuelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.QElectricity.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.QElectricity} returns this
 */
proto.verra.ccs.extensionSet.QElectricity.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string u_o_m = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.QElectricity.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.QElectricity} returns this
 */
proto.verra.ccs.extensionSet.QElectricity.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string transport_or_storage_name = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.QElectricity.prototype.getTransportOrStorageName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.QElectricity} returns this
 */
proto.verra.ccs.extensionSet.QElectricity.prototype.setTransportOrStorageName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.ComponentTime.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.ComponentTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.ComponentTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.ComponentTime.toObject = function(includeInstance, msg) {
  var f, obj = {
component: jspb.Message.getFieldWithDefault(msg, 1, ""),
durationInHours: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.ComponentTime}
 */
proto.verra.ccs.extensionSet.ComponentTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.ComponentTime;
  return proto.verra.ccs.extensionSet.ComponentTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.ComponentTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.ComponentTime}
 */
proto.verra.ccs.extensionSet.ComponentTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDurationInHours(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.ComponentTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.ComponentTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.ComponentTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.ComponentTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDurationInHours();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string component = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ComponentTime.prototype.getComponent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ComponentTime} returns this
 */
proto.verra.ccs.extensionSet.ComponentTime.prototype.setComponent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 duration_in_hours = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.ComponentTime.prototype.getDurationInHours = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.ComponentTime} returns this
 */
proto.verra.ccs.extensionSet.ComponentTime.prototype.setDurationInHours = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.ComponentEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.ComponentEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.ComponentEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.ComponentEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
component: jspb.Message.getFieldWithDefault(msg, 1, ""),
eventName: jspb.Message.getFieldWithDefault(msg, 2, ""),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.ComponentEvent}
 */
proto.verra.ccs.extensionSet.ComponentEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.ComponentEvent;
  return proto.verra.ccs.extensionSet.ComponentEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.ComponentEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.ComponentEvent}
 */
proto.verra.ccs.extensionSet.ComponentEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.ComponentEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.ComponentEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.ComponentEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.ComponentEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string component = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ComponentEvent.prototype.getComponent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ComponentEvent} returns this
 */
proto.verra.ccs.extensionSet.ComponentEvent.prototype.setComponent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string event_name = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ComponentEvent.prototype.getEventName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ComponentEvent} returns this
 */
proto.verra.ccs.extensionSet.ComponentEvent.prototype.setEventName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double value = 3;
 * @return {number}
 */
proto.verra.ccs.extensionSet.ComponentEvent.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.ComponentEvent} returns this
 */
proto.verra.ccs.extensionSet.ComponentEvent.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string u_o_m = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ComponentEvent.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ComponentEvent} returns this
 */
proto.verra.ccs.extensionSet.ComponentEvent.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.Invoice.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.Invoice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.Invoice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.Invoice.toObject = function(includeInstance, msg) {
  var f, obj = {
tagId: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
fromDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
toDate: jspb.Message.getFieldWithDefault(msg, 4, ""),
measurement: (f = msg.getMeasurement()) && proto.verra.ccs.extensionSet.MonthlyMeasurement.toObject(includeInstance, f),
invoicePdf: msg.getInvoicePdf_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.Invoice}
 */
proto.verra.ccs.extensionSet.Invoice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.Invoice;
  return proto.verra.ccs.extensionSet.Invoice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.Invoice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.Invoice}
 */
proto.verra.ccs.extensionSet.Invoice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToDate(value);
      break;
    case 5:
      var value = new proto.verra.ccs.extensionSet.MonthlyMeasurement;
      reader.readMessage(value,proto.verra.ccs.extensionSet.MonthlyMeasurement.deserializeBinaryFromReader);
      msg.setMeasurement(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInvoicePdf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.Invoice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.Invoice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.Invoice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.Invoice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFromDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToDate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMeasurement();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.verra.ccs.extensionSet.MonthlyMeasurement.serializeBinaryToWriter
    );
  }
  f = message.getInvoicePdf_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional string tag_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.Invoice.prototype.getTagId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.Invoice} returns this
 */
proto.verra.ccs.extensionSet.Invoice.prototype.setTagId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.Invoice.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.Invoice} returns this
 */
proto.verra.ccs.extensionSet.Invoice.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string from_date = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.Invoice.prototype.getFromDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.Invoice} returns this
 */
proto.verra.ccs.extensionSet.Invoice.prototype.setFromDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string to_date = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.Invoice.prototype.getToDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.Invoice} returns this
 */
proto.verra.ccs.extensionSet.Invoice.prototype.setToDate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional MonthlyMeasurement measurement = 5;
 * @return {?proto.verra.ccs.extensionSet.MonthlyMeasurement}
 */
proto.verra.ccs.extensionSet.Invoice.prototype.getMeasurement = function() {
  return /** @type{?proto.verra.ccs.extensionSet.MonthlyMeasurement} */ (
    jspb.Message.getWrapperField(this, proto.verra.ccs.extensionSet.MonthlyMeasurement, 5));
};


/**
 * @param {?proto.verra.ccs.extensionSet.MonthlyMeasurement|undefined} value
 * @return {!proto.verra.ccs.extensionSet.Invoice} returns this
*/
proto.verra.ccs.extensionSet.Invoice.prototype.setMeasurement = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.verra.ccs.extensionSet.Invoice} returns this
 */
proto.verra.ccs.extensionSet.Invoice.prototype.clearMeasurement = function() {
  return this.setMeasurement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.Invoice.prototype.hasMeasurement = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes invoice_pdf = 6;
 * @return {!(string|Uint8Array)}
 */
proto.verra.ccs.extensionSet.Invoice.prototype.getInvoicePdf = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes invoice_pdf = 6;
 * This is a type-conversion wrapper around `getInvoicePdf()`
 * @return {string}
 */
proto.verra.ccs.extensionSet.Invoice.prototype.getInvoicePdf_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInvoicePdf()));
};


/**
 * optional bytes invoice_pdf = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInvoicePdf()`
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.Invoice.prototype.getInvoicePdf_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInvoicePdf()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.verra.ccs.extensionSet.Invoice} returns this
 */
proto.verra.ccs.extensionSet.Invoice.prototype.setInvoicePdf = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.MonthlyMeasurement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.MonthlyMeasurement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.toObject = function(includeInstance, msg) {
  var f, obj = {
measureTime: jspb.Message.getFieldWithDefault(msg, 1, ""),
tagId: jspb.Message.getFieldWithDefault(msg, 2, ""),
facilityName: jspb.Message.getFieldWithDefault(msg, 3, ""),
measureValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
uOM: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.MonthlyMeasurement}
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.MonthlyMeasurement;
  return proto.verra.ccs.extensionSet.MonthlyMeasurement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.MonthlyMeasurement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.MonthlyMeasurement}
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeasureTime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFacilityName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMeasureValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.MonthlyMeasurement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.MonthlyMeasurement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeasureTime();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTagId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFacilityName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMeasureValue();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getUOM();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string measure_time = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.getMeasureTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.MonthlyMeasurement} returns this
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.setMeasureTime = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.getTagId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.MonthlyMeasurement} returns this
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.setTagId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string facility_name = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.getFacilityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.MonthlyMeasurement} returns this
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.setFacilityName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double measure_value = 4;
 * @return {number}
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.getMeasureValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.MonthlyMeasurement} returns this
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.setMeasureValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string u_o_m = 5;
 * @return {string}
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.getUOM = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.MonthlyMeasurement} returns this
 */
proto.verra.ccs.extensionSet.MonthlyMeasurement.prototype.setUOM = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.EmissionFactor.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.EmissionFactor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.EmissionFactor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.EmissionFactor.toObject = function(includeInstance, msg) {
  var f, obj = {
emissionType: jspb.Message.getFieldWithDefault(msg, 1, 0),
fuelType: jspb.Message.getFieldWithDefault(msg, 2, 0),
version: jspb.Message.getFieldWithDefault(msg, 3, ""),
value: (f = msg.getValue()) && proto.verra.ccs.extensionSet.DoubleValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.EmissionFactor}
 */
proto.verra.ccs.extensionSet.EmissionFactor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.EmissionFactor;
  return proto.verra.ccs.extensionSet.EmissionFactor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.EmissionFactor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.EmissionFactor}
 */
proto.verra.ccs.extensionSet.EmissionFactor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.EmissionType} */ (reader.readEnum());
      msg.setEmissionType(value);
      break;
    case 2:
      var value = /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (reader.readEnum());
      msg.setFuelType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = new proto.verra.ccs.extensionSet.DoubleValue;
      reader.readMessage(value,proto.verra.ccs.extensionSet.DoubleValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.EmissionFactor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.EmissionFactor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.EmissionFactor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.EmissionFactor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmissionType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFuelType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.verra.ccs.extensionSet.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional EmissionType emission_type = 1;
 * @return {!proto.verra.ccs.extensionSet.EmissionType}
 */
proto.verra.ccs.extensionSet.EmissionFactor.prototype.getEmissionType = function() {
  return /** @type {!proto.verra.ccs.extensionSet.EmissionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.EmissionType} value
 * @return {!proto.verra.ccs.extensionSet.EmissionFactor} returns this
 */
proto.verra.ccs.extensionSet.EmissionFactor.prototype.setEmissionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional FuelType fuel_type = 2;
 * @return {!proto.verra.ccs.extensionSet.FuelType}
 */
proto.verra.ccs.extensionSet.EmissionFactor.prototype.getFuelType = function() {
  return /** @type {!proto.verra.ccs.extensionSet.FuelType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.FuelType} value
 * @return {!proto.verra.ccs.extensionSet.EmissionFactor} returns this
 */
proto.verra.ccs.extensionSet.EmissionFactor.prototype.setFuelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.EmissionFactor.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.EmissionFactor} returns this
 */
proto.verra.ccs.extensionSet.EmissionFactor.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional DoubleValue value = 4;
 * @return {?proto.verra.ccs.extensionSet.DoubleValue}
 */
proto.verra.ccs.extensionSet.EmissionFactor.prototype.getValue = function() {
  return /** @type{?proto.verra.ccs.extensionSet.DoubleValue} */ (
    jspb.Message.getWrapperField(this, proto.verra.ccs.extensionSet.DoubleValue, 4));
};


/**
 * @param {?proto.verra.ccs.extensionSet.DoubleValue|undefined} value
 * @return {!proto.verra.ccs.extensionSet.EmissionFactor} returns this
*/
proto.verra.ccs.extensionSet.EmissionFactor.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.verra.ccs.extensionSet.EmissionFactor} returns this
 */
proto.verra.ccs.extensionSet.EmissionFactor.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.EmissionFactor.prototype.hasValue = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CalibrateInstrumentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
claimId: jspb.Message.getFieldWithDefault(msg, 1, ""),
checkpointId: jspb.Message.getFieldWithDefault(msg, 2, ""),
claimSourceId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentRequest}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CalibrateInstrumentRequest;
  return proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CalibrateInstrumentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentRequest}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClaimId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCheckpointId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClaimSourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CalibrateInstrumentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClaimId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCheckpointId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClaimSourceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string claim_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.prototype.getClaimId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentRequest} returns this
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.prototype.setClaimId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string checkpoint_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.prototype.getCheckpointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentRequest} returns this
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.prototype.setCheckpointId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string claim_source_id = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.prototype.getClaimSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentRequest} returns this
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentRequest.prototype.setClaimSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CalibrateInstrumentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
claimId: jspb.Message.getFieldWithDefault(msg, 1, ""),
checkpointId: jspb.Message.getFieldWithDefault(msg, 2, ""),
claimSourceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
calibrationData: (f = msg.getCalibrationData()) && proto.verra.ccs.extensionSet.CalibrationResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentResponse}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CalibrateInstrumentResponse;
  return proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CalibrateInstrumentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentResponse}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClaimId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCheckpointId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClaimSourceId(value);
      break;
    case 4:
      var value = new proto.verra.ccs.extensionSet.CalibrationResult;
      reader.readMessage(value,proto.verra.ccs.extensionSet.CalibrationResult.deserializeBinaryFromReader);
      msg.setCalibrationData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CalibrateInstrumentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClaimId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCheckpointId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClaimSourceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCalibrationData();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.verra.ccs.extensionSet.CalibrationResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string claim_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.getClaimId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentResponse} returns this
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.setClaimId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string checkpoint_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.getCheckpointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentResponse} returns this
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.setCheckpointId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string claim_source_id = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.getClaimSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentResponse} returns this
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.setClaimSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CalibrationResult calibration_data = 4;
 * @return {?proto.verra.ccs.extensionSet.CalibrationResult}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.getCalibrationData = function() {
  return /** @type{?proto.verra.ccs.extensionSet.CalibrationResult} */ (
    jspb.Message.getWrapperField(this, proto.verra.ccs.extensionSet.CalibrationResult, 4));
};


/**
 * @param {?proto.verra.ccs.extensionSet.CalibrationResult|undefined} value
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentResponse} returns this
*/
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.setCalibrationData = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.verra.ccs.extensionSet.CalibrateInstrumentResponse} returns this
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.clearCalibrationData = function() {
  return this.setCalibrationData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.CalibrateInstrumentResponse.prototype.hasCalibrationData = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CalibrationResult.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CalibrationResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CalibrationResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalibrationResult.toObject = function(includeInstance, msg) {
  var f, obj = {
calibrationTimestamp: (f = msg.getCalibrationTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
percentageAccuracy: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
calibrationData: (f = msg.getCalibrationData()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CalibrationResult}
 */
proto.verra.ccs.extensionSet.CalibrationResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CalibrationResult;
  return proto.verra.ccs.extensionSet.CalibrationResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CalibrationResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CalibrationResult}
 */
proto.verra.ccs.extensionSet.CalibrationResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCalibrationTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPercentageAccuracy(value);
      break;
    case 3:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setCalibrationData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CalibrationResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CalibrationResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CalibrationResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalibrationResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCalibrationTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPercentageAccuracy();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getCalibrationData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp calibration_timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.verra.ccs.extensionSet.CalibrationResult.prototype.getCalibrationTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.verra.ccs.extensionSet.CalibrationResult} returns this
*/
proto.verra.ccs.extensionSet.CalibrationResult.prototype.setCalibrationTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.verra.ccs.extensionSet.CalibrationResult} returns this
 */
proto.verra.ccs.extensionSet.CalibrationResult.prototype.clearCalibrationTimestamp = function() {
  return this.setCalibrationTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.CalibrationResult.prototype.hasCalibrationTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double percentage_accuracy = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.CalibrationResult.prototype.getPercentageAccuracy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.CalibrationResult} returns this
 */
proto.verra.ccs.extensionSet.CalibrationResult.prototype.setPercentageAccuracy = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional google.protobuf.Any calibration_data = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.verra.ccs.extensionSet.CalibrationResult.prototype.getCalibrationData = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.verra.ccs.extensionSet.CalibrationResult} returns this
*/
proto.verra.ccs.extensionSet.CalibrationResult.prototype.setCalibrationData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.verra.ccs.extensionSet.CalibrationResult} returns this
 */
proto.verra.ccs.extensionSet.CalibrationResult.prototype.clearCalibrationData = function() {
  return this.setCalibrationData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.CalibrationResult.prototype.hasCalibrationData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.toObject = function(includeInstance, msg) {
  var f, obj = {
zeroFlowOffset: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
span: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
zeroFlowOffsetUOM: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
spanUOM: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData}
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData;
  return proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData}
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZeroFlowOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpan(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZeroFlowOffsetUOM(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpanUOM(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZeroFlowOffset();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getSpan();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZeroFlowOffsetUOM();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSpanUOM();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double zero_flow_offset = 1;
 * @return {number}
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.prototype.getZeroFlowOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData} returns this
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.prototype.setZeroFlowOffset = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double span = 2;
 * @return {number}
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.prototype.getSpan = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData} returns this
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.prototype.setSpan = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double zero_flow_offset_u_o_m = 3;
 * @return {number}
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.prototype.getZeroFlowOffsetUOM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData} returns this
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.prototype.setZeroFlowOffsetUOM = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double span_u_o_m = 4;
 * @return {number}
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.prototype.getSpanUOM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData} returns this
 */
proto.verra.ccs.extensionSet.CoriolisMeterCalibrationData.prototype.setSpanUOM = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CheckpointNonConformanceException.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.toObject = function(includeInstance, msg) {
  var f, obj = {
exceptionType: jspb.Message.getFieldWithDefault(msg, 1, 0),
variableId: jspb.Message.getFieldWithDefault(msg, 2, ""),
claimSourceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
proposedVerifiedValue: jspb.Message.getFieldWithDefault(msg, 4, ""),
description: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CheckpointNonConformanceException;
  return proto.verra.ccs.extensionSet.CheckpointNonConformanceException.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.VerificationExceptionType} */ (reader.readEnum());
      msg.setExceptionType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClaimSourceId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposedVerifiedValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CheckpointNonConformanceException.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExceptionType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getVariableId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClaimSourceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProposedVerifiedValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional VerificationExceptionType exception_type = 1;
 * @return {!proto.verra.ccs.extensionSet.VerificationExceptionType}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.getExceptionType = function() {
  return /** @type {!proto.verra.ccs.extensionSet.VerificationExceptionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.VerificationExceptionType} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.setExceptionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string variable_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.getVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.setVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string claim_source_id = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.getClaimSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.setClaimSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string proposed_verified_value = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.getProposedVerifiedValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.setProposedVerifiedValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceException.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.toObject = function(includeInstance, msg) {
  var f, obj = {
variableId: jspb.Message.getFieldWithDefault(msg, 1, ""),
claimSourceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
adjustedValue: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation;
  return proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClaimSourceId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdjustedValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClaimSourceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAdjustedValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string variable_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.prototype.getVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.prototype.setVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string claim_source_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.prototype.getClaimSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.prototype.setClaimSourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string adjusted_value = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.prototype.getAdjustedValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.prototype.setAdjustedValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
checkpointId: jspb.Message.getFieldWithDefault(msg, 1, ""),
exceptionsList: jspb.Message.toObjectList(msg.getExceptionsList(),
    proto.verra.ccs.extensionSet.CheckpointNonConformanceException.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest;
  return proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCheckpointId(value);
      break;
    case 2:
      var value = new proto.verra.ccs.extensionSet.CheckpointNonConformanceException;
      reader.readMessage(value,proto.verra.ccs.extensionSet.CheckpointNonConformanceException.deserializeBinaryFromReader);
      msg.addExceptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCheckpointId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExceptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.verra.ccs.extensionSet.CheckpointNonConformanceException.serializeBinaryToWriter
    );
  }
};


/**
 * optional string checkpoint_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.prototype.getCheckpointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.prototype.setCheckpointId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CheckpointNonConformanceException exceptions = 2;
 * @return {!Array<!proto.verra.ccs.extensionSet.CheckpointNonConformanceException>}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.prototype.getExceptionsList = function() {
  return /** @type{!Array<!proto.verra.ccs.extensionSet.CheckpointNonConformanceException>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.verra.ccs.extensionSet.CheckpointNonConformanceException, 2));
};


/**
 * @param {!Array<!proto.verra.ccs.extensionSet.CheckpointNonConformanceException>} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest} returns this
*/
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.prototype.setExceptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException=} opt_value
 * @param {number=} opt_index
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceException}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.prototype.addExceptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.verra.ccs.extensionSet.CheckpointNonConformanceException, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceRequest.prototype.clearExceptionsList = function() {
  return this.setExceptionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
checkpointId: jspb.Message.getFieldWithDefault(msg, 1, ""),
mitigationsList: jspb.Message.toObjectList(msg.getMitigationsList(),
    proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse;
  return proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCheckpointId(value);
      break;
    case 2:
      var value = new proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation;
      reader.readMessage(value,proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.deserializeBinaryFromReader);
      msg.addMitigations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCheckpointId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMitigationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string checkpoint_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.prototype.getCheckpointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.prototype.setCheckpointId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CheckpointNonConformanceExceptionMitigation mitigations = 2;
 * @return {!Array<!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation>}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.prototype.getMitigationsList = function() {
  return /** @type{!Array<!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation, 2));
};


/**
 * @param {!Array<!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation>} value
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse} returns this
*/
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.prototype.setMitigationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation}
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.prototype.addMitigations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.verra.ccs.extensionSet.CheckpointNonConformanceExceptionMitigation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse} returns this
 */
proto.verra.ccs.extensionSet.CheckpointNonConformanceMitigationResponse.prototype.clearMitigationsList = function() {
  return this.setMitigationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CalculateFailErrorsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
processedClaimId: jspb.Message.getFieldWithDefault(msg, 1, ""),
monitoringReportId: jspb.Message.getFieldWithDefault(msg, 2, ""),
dataType: jspb.Message.getFieldWithDefault(msg, 3, ""),
jsonData: jspb.Message.getFieldWithDefault(msg, 4, ""),
comment: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsRequest}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CalculateFailErrorsRequest;
  return proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CalculateFailErrorsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsRequest}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessedClaimId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonitoringReportId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setJsonData(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CalculateFailErrorsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessedClaimId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMonitoringReportId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDataType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getJsonData();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string processed_claim_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.getProcessedClaimId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsRequest} returns this
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.setProcessedClaimId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string monitoring_report_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.getMonitoringReportId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsRequest} returns this
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.setMonitoringReportId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string data_type = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.getDataType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsRequest} returns this
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.setDataType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string json_data = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.getJsonData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsRequest} returns this
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.setJsonData = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string comment = 5;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsRequest} returns this
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CalculateFailErrorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
processedClaimId: jspb.Message.getFieldWithDefault(msg, 1, ""),
monitoringReportId: jspb.Message.getFieldWithDefault(msg, 2, ""),
variablesAdjustedList: jspb.Message.toObjectList(msg.getVariablesAdjustedList(),
    proto.verra.ccs.extensionSet.VariableAdjusted.toObject, includeInstance),
comment: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsResponse}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CalculateFailErrorsResponse;
  return proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CalculateFailErrorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsResponse}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessedClaimId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonitoringReportId(value);
      break;
    case 3:
      var value = new proto.verra.ccs.extensionSet.VariableAdjusted;
      reader.readMessage(value,proto.verra.ccs.extensionSet.VariableAdjusted.deserializeBinaryFromReader);
      msg.addVariablesAdjusted(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CalculateFailErrorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessedClaimId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMonitoringReportId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVariablesAdjustedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.verra.ccs.extensionSet.VariableAdjusted.serializeBinaryToWriter
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string processed_claim_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.getProcessedClaimId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsResponse} returns this
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.setProcessedClaimId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string monitoring_report_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.getMonitoringReportId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsResponse} returns this
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.setMonitoringReportId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated VariableAdjusted variables_adjusted = 3;
 * @return {!Array<!proto.verra.ccs.extensionSet.VariableAdjusted>}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.getVariablesAdjustedList = function() {
  return /** @type{!Array<!proto.verra.ccs.extensionSet.VariableAdjusted>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.verra.ccs.extensionSet.VariableAdjusted, 3));
};


/**
 * @param {!Array<!proto.verra.ccs.extensionSet.VariableAdjusted>} value
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsResponse} returns this
*/
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.setVariablesAdjustedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.verra.ccs.extensionSet.VariableAdjusted=} opt_value
 * @param {number=} opt_index
 * @return {!proto.verra.ccs.extensionSet.VariableAdjusted}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.addVariablesAdjusted = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.verra.ccs.extensionSet.VariableAdjusted, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsResponse} returns this
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.clearVariablesAdjustedList = function() {
  return this.setVariablesAdjustedList([]);
};


/**
 * optional string comment = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculateFailErrorsResponse} returns this
 */
proto.verra.ccs.extensionSet.CalculateFailErrorsResponse.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VariableAdjusted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VariableAdjusted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VariableAdjusted.toObject = function(includeInstance, msg) {
  var f, obj = {
checkpointVariableId: jspb.Message.getFieldWithDefault(msg, 1, ""),
templateId: jspb.Message.getFieldWithDefault(msg, 2, ""),
templateVersion: jspb.Message.getFieldWithDefault(msg, 3, ""),
updatedValue: jspb.Message.getFieldWithDefault(msg, 4, ""),
comment: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VariableAdjusted}
 */
proto.verra.ccs.extensionSet.VariableAdjusted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VariableAdjusted;
  return proto.verra.ccs.extensionSet.VariableAdjusted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VariableAdjusted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VariableAdjusted}
 */
proto.verra.ccs.extensionSet.VariableAdjusted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCheckpointVariableId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VariableAdjusted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VariableAdjusted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VariableAdjusted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCheckpointVariableId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTemplateId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTemplateVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpdatedValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string checkpoint_variable_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.getCheckpointVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VariableAdjusted} returns this
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.setCheckpointVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string template_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.getTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VariableAdjusted} returns this
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.setTemplateId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string template_version = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.getTemplateVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VariableAdjusted} returns this
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.setTemplateVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string updated_value = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.getUpdatedValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VariableAdjusted} returns this
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.setUpdatedValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string comment = 5;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VariableAdjusted} returns this
 */
proto.verra.ccs.extensionSet.VariableAdjusted.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
processedClaimId: jspb.Message.getFieldWithDefault(msg, 1, ""),
monitoringReportId: jspb.Message.getFieldWithDefault(msg, 2, ""),
supplierCalculatedQuantity: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
registryCalculatedQuantity: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
percentMarginOfErrorSetting: jspb.Message.getFieldWithDefault(msg, 5, 0),
comment: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest;
  return proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessedClaimId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonitoringReportId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSupplierCalculatedQuantity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRegistryCalculatedQuantity(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPercentMarginOfErrorSetting(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessedClaimId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMonitoringReportId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSupplierCalculatedQuantity();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getRegistryCalculatedQuantity();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getPercentMarginOfErrorSetting();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string processed_claim_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.getProcessedClaimId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest} returns this
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.setProcessedClaimId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string monitoring_report_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.getMonitoringReportId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest} returns this
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.setMonitoringReportId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double supplier_calculated_quantity = 3;
 * @return {number}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.getSupplierCalculatedQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest} returns this
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.setSupplierCalculatedQuantity = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double registry_calculated_quantity = 4;
 * @return {number}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.getRegistryCalculatedQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest} returns this
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.setRegistryCalculatedQuantity = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 percent_margin_of_error_setting = 5;
 * @return {number}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.getPercentMarginOfErrorSetting = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest} returns this
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.setPercentMarginOfErrorSetting = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string comment = 6;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest} returns this
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
processedClaimId: jspb.Message.getFieldWithDefault(msg, 1, ""),
monitoringReportId: jspb.Message.getFieldWithDefault(msg, 2, ""),
variablesAdjustedList: jspb.Message.toObjectList(msg.getVariablesAdjustedList(),
    proto.verra.ccs.extensionSet.VariableAdjusted.toObject, includeInstance),
comment: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse;
  return proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessedClaimId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonitoringReportId(value);
      break;
    case 3:
      var value = new proto.verra.ccs.extensionSet.VariableAdjusted;
      reader.readMessage(value,proto.verra.ccs.extensionSet.VariableAdjusted.deserializeBinaryFromReader);
      msg.addVariablesAdjusted(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessedClaimId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMonitoringReportId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVariablesAdjustedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.verra.ccs.extensionSet.VariableAdjusted.serializeBinaryToWriter
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string processed_claim_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.getProcessedClaimId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse} returns this
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.setProcessedClaimId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string monitoring_report_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.getMonitoringReportId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse} returns this
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.setMonitoringReportId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated VariableAdjusted variables_adjusted = 3;
 * @return {!Array<!proto.verra.ccs.extensionSet.VariableAdjusted>}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.getVariablesAdjustedList = function() {
  return /** @type{!Array<!proto.verra.ccs.extensionSet.VariableAdjusted>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.verra.ccs.extensionSet.VariableAdjusted, 3));
};


/**
 * @param {!Array<!proto.verra.ccs.extensionSet.VariableAdjusted>} value
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse} returns this
*/
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.setVariablesAdjustedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.verra.ccs.extensionSet.VariableAdjusted=} opt_value
 * @param {number=} opt_index
 * @return {!proto.verra.ccs.extensionSet.VariableAdjusted}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.addVariablesAdjusted = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.verra.ccs.extensionSet.VariableAdjusted, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse} returns this
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.clearVariablesAdjustedList = function() {
  return this.setVariablesAdjustedList([]);
};


/**
 * optional string comment = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse} returns this
 */
proto.verra.ccs.extensionSet.CalculationSucceedAdjustmentResponse.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VerificationReportInitializedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
processedClaimId: jspb.Message.getFieldWithDefault(msg, 1, ""),
monitoringReportId: jspb.Message.getFieldWithDefault(msg, 2, ""),
comment: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VerificationReportInitializedRequest}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VerificationReportInitializedRequest;
  return proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VerificationReportInitializedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VerificationReportInitializedRequest}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessedClaimId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonitoringReportId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VerificationReportInitializedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessedClaimId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMonitoringReportId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string processed_claim_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.prototype.getProcessedClaimId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerificationReportInitializedRequest} returns this
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.prototype.setProcessedClaimId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string monitoring_Report_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.prototype.getMonitoringReportId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerificationReportInitializedRequest} returns this
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.prototype.setMonitoringReportId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerificationReportInitializedRequest} returns this
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VerificationReportInitializedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
processedClaimId: jspb.Message.getFieldWithDefault(msg, 1, ""),
monitoringReportId: jspb.Message.getFieldWithDefault(msg, 2, ""),
comment: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VerificationReportInitializedResponse}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VerificationReportInitializedResponse;
  return proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VerificationReportInitializedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VerificationReportInitializedResponse}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessedClaimId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonitoringReportId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VerificationReportInitializedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessedClaimId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMonitoringReportId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string processed_claim_id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.prototype.getProcessedClaimId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerificationReportInitializedResponse} returns this
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.prototype.setProcessedClaimId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string monitoring_Report_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.prototype.getMonitoringReportId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerificationReportInitializedResponse} returns this
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.prototype.setMonitoringReportId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerificationReportInitializedResponse} returns this
 */
proto.verra.ccs.extensionSet.VerificationReportInitializedResponse.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VM0049Options.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VM0049Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VM0049Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VM0049Options.toObject = function(includeInstance, msg) {
  var f, obj = {
co2MeasurementOption: jspb.Message.getFieldWithDefault(msg, 1, 0),
ismassfractionofco2available: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VM0049Options}
 */
proto.verra.ccs.extensionSet.VM0049Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VM0049Options;
  return proto.verra.ccs.extensionSet.VM0049Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VM0049Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VM0049Options}
 */
proto.verra.ccs.extensionSet.VM0049Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (reader.readEnum());
      msg.setCo2MeasurementOption(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsmassfractionofco2available(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VM0049Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VM0049Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VM0049Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VM0049Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCo2MeasurementOption();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIsmassfractionofco2available();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional CO2MeasurementOption co2_measurement_option = 1;
 * @return {!proto.verra.ccs.extensionSet.CO2MeasurementOption}
 */
proto.verra.ccs.extensionSet.VM0049Options.prototype.getCo2MeasurementOption = function() {
  return /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.CO2MeasurementOption} value
 * @return {!proto.verra.ccs.extensionSet.VM0049Options} returns this
 */
proto.verra.ccs.extensionSet.VM0049Options.prototype.setCo2MeasurementOption = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool IsMassFractionOfCo2Available = 2;
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.VM0049Options.prototype.getIsmassfractionofco2available = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.verra.ccs.extensionSet.VM0049Options} returns this
 */
proto.verra.ccs.extensionSet.VM0049Options.prototype.setIsmassfractionofco2available = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VMD0056Options.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VMD0056Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VMD0056Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VMD0056Options.toObject = function(includeInstance, msg) {
  var f, obj = {
usesFossilFuels: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VMD0056Options}
 */
proto.verra.ccs.extensionSet.VMD0056Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VMD0056Options;
  return proto.verra.ccs.extensionSet.VMD0056Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VMD0056Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VMD0056Options}
 */
proto.verra.ccs.extensionSet.VMD0056Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsesFossilFuels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VMD0056Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VMD0056Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VMD0056Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VMD0056Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsesFossilFuels();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool uses_fossil_fuels = 1;
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.VMD0056Options.prototype.getUsesFossilFuels = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.verra.ccs.extensionSet.VMD0056Options} returns this
 */
proto.verra.ccs.extensionSet.VMD0056Options.prototype.setUsesFossilFuels = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VMD0057Options.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VMD0057Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VMD0057Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VMD0057Options.toObject = function(includeInstance, msg) {
  var f, obj = {
usesFossilFuels: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
directMonitoring: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VMD0057Options}
 */
proto.verra.ccs.extensionSet.VMD0057Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VMD0057Options;
  return proto.verra.ccs.extensionSet.VMD0057Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VMD0057Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VMD0057Options}
 */
proto.verra.ccs.extensionSet.VMD0057Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsesFossilFuels(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDirectMonitoring(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VMD0057Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VMD0057Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VMD0057Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VMD0057Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsesFossilFuels();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDirectMonitoring();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool uses_fossil_fuels = 1;
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.VMD0057Options.prototype.getUsesFossilFuels = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.verra.ccs.extensionSet.VMD0057Options} returns this
 */
proto.verra.ccs.extensionSet.VMD0057Options.prototype.setUsesFossilFuels = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool direct_monitoring = 2;
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.VMD0057Options.prototype.getDirectMonitoring = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.verra.ccs.extensionSet.VMD0057Options} returns this
 */
proto.verra.ccs.extensionSet.VMD0057Options.prototype.setDirectMonitoring = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VMD0058Options.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VMD0058Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VMD0058Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VMD0058Options.toObject = function(includeInstance, msg) {
  var f, obj = {
intentionalDischargeMeasurementApproach: jspb.Message.getFieldWithDefault(msg, 1, 0),
intentionalSurfaceDischargeMeasurementOption: jspb.Message.getFieldWithDefault(msg, 2, 0),
intentionalSubsurfaceDischargeMeasurementOption: jspb.Message.getFieldWithDefault(msg, 3, 0),
unintentionalSurfaceDischargeEmissionSource: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VMD0058Options}
 */
proto.verra.ccs.extensionSet.VMD0058Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VMD0058Options;
  return proto.verra.ccs.extensionSet.VMD0058Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VMD0058Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VMD0058Options}
 */
proto.verra.ccs.extensionSet.VMD0058Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.IntentionalDischargeMeasurementApproach} */ (reader.readEnum());
      msg.setIntentionalDischargeMeasurementApproach(value);
      break;
    case 2:
      var value = /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (reader.readEnum());
      msg.setIntentionalSurfaceDischargeMeasurementOption(value);
      break;
    case 3:
      var value = /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (reader.readEnum());
      msg.setIntentionalSubsurfaceDischargeMeasurementOption(value);
      break;
    case 4:
      var value = /** @type {!proto.verra.ccs.extensionSet.EmissionSourceForUnintentionalSurfaceDischarge} */ (reader.readEnum());
      msg.setUnintentionalSurfaceDischargeEmissionSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VMD0058Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VMD0058Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VMD0058Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VMD0058Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntentionalDischargeMeasurementApproach();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIntentionalSurfaceDischargeMeasurementOption();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getIntentionalSubsurfaceDischargeMeasurementOption();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getUnintentionalSurfaceDischargeEmissionSource();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional IntentionalDischargeMeasurementApproach intentional_discharge_measurement_approach = 1;
 * @return {!proto.verra.ccs.extensionSet.IntentionalDischargeMeasurementApproach}
 */
proto.verra.ccs.extensionSet.VMD0058Options.prototype.getIntentionalDischargeMeasurementApproach = function() {
  return /** @type {!proto.verra.ccs.extensionSet.IntentionalDischargeMeasurementApproach} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.IntentionalDischargeMeasurementApproach} value
 * @return {!proto.verra.ccs.extensionSet.VMD0058Options} returns this
 */
proto.verra.ccs.extensionSet.VMD0058Options.prototype.setIntentionalDischargeMeasurementApproach = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional CO2MeasurementOption intentional_surface_discharge_measurement_option = 2;
 * @return {!proto.verra.ccs.extensionSet.CO2MeasurementOption}
 */
proto.verra.ccs.extensionSet.VMD0058Options.prototype.getIntentionalSurfaceDischargeMeasurementOption = function() {
  return /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.CO2MeasurementOption} value
 * @return {!proto.verra.ccs.extensionSet.VMD0058Options} returns this
 */
proto.verra.ccs.extensionSet.VMD0058Options.prototype.setIntentionalSurfaceDischargeMeasurementOption = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional CO2MeasurementOption intentional_subsurface_discharge_measurement_option = 3;
 * @return {!proto.verra.ccs.extensionSet.CO2MeasurementOption}
 */
proto.verra.ccs.extensionSet.VMD0058Options.prototype.getIntentionalSubsurfaceDischargeMeasurementOption = function() {
  return /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.CO2MeasurementOption} value
 * @return {!proto.verra.ccs.extensionSet.VMD0058Options} returns this
 */
proto.verra.ccs.extensionSet.VMD0058Options.prototype.setIntentionalSubsurfaceDischargeMeasurementOption = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional EmissionSourceForUnintentionalSurfaceDischarge unintentional_surface_discharge_emission_source = 4;
 * @return {!proto.verra.ccs.extensionSet.EmissionSourceForUnintentionalSurfaceDischarge}
 */
proto.verra.ccs.extensionSet.VMD0058Options.prototype.getUnintentionalSurfaceDischargeEmissionSource = function() {
  return /** @type {!proto.verra.ccs.extensionSet.EmissionSourceForUnintentionalSurfaceDischarge} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.EmissionSourceForUnintentionalSurfaceDischarge} value
 * @return {!proto.verra.ccs.extensionSet.VMD0058Options} returns this
 */
proto.verra.ccs.extensionSet.VMD0058Options.prototype.setUnintentionalSurfaceDischargeEmissionSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VMD0059Options.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VMD0059Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VMD0059Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VMD0059Options.toObject = function(includeInstance, msg) {
  var f, obj = {
calculatingLeakageFromBiomassCultivationOptions: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VMD0059Options}
 */
proto.verra.ccs.extensionSet.VMD0059Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VMD0059Options;
  return proto.verra.ccs.extensionSet.VMD0059Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VMD0059Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VMD0059Options}
 */
proto.verra.ccs.extensionSet.VMD0059Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.CalculatingLeakageFromBiomassCultivationOptions} */ (reader.readEnum());
      msg.setCalculatingLeakageFromBiomassCultivationOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VMD0059Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VMD0059Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VMD0059Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VMD0059Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCalculatingLeakageFromBiomassCultivationOptions();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CalculatingLeakageFromBiomassCultivationOptions calculating_leakage_from_biomass_cultivation_options = 1;
 * @return {!proto.verra.ccs.extensionSet.CalculatingLeakageFromBiomassCultivationOptions}
 */
proto.verra.ccs.extensionSet.VMD0059Options.prototype.getCalculatingLeakageFromBiomassCultivationOptions = function() {
  return /** @type {!proto.verra.ccs.extensionSet.CalculatingLeakageFromBiomassCultivationOptions} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.CalculatingLeakageFromBiomassCultivationOptions} value
 * @return {!proto.verra.ccs.extensionSet.VMD0059Options} returns this
 */
proto.verra.ccs.extensionSet.VMD0059Options.prototype.setCalculatingLeakageFromBiomassCultivationOptions = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VT0013Options.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VT0013Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VT0013Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VT0013Options.toObject = function(includeInstance, msg) {
  var f, obj = {
allocateProjectAndLeakageEmissionOptions: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VT0013Options}
 */
proto.verra.ccs.extensionSet.VT0013Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VT0013Options;
  return proto.verra.ccs.extensionSet.VT0013Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VT0013Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VT0013Options}
 */
proto.verra.ccs.extensionSet.VT0013Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.AllocateProjectAndLeakageEmissionOptions} */ (reader.readEnum());
      msg.setAllocateProjectAndLeakageEmissionOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VT0013Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VT0013Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VT0013Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VT0013Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllocateProjectAndLeakageEmissionOptions();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional AllocateProjectAndLeakageEmissionOptions allocate_project_and_leakage_emission_options = 1;
 * @return {!proto.verra.ccs.extensionSet.AllocateProjectAndLeakageEmissionOptions}
 */
proto.verra.ccs.extensionSet.VT0013Options.prototype.getAllocateProjectAndLeakageEmissionOptions = function() {
  return /** @type {!proto.verra.ccs.extensionSet.AllocateProjectAndLeakageEmissionOptions} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.AllocateProjectAndLeakageEmissionOptions} value
 * @return {!proto.verra.ccs.extensionSet.VT0013Options} returns this
 */
proto.verra.ccs.extensionSet.VT0013Options.prototype.setAllocateProjectAndLeakageEmissionOptions = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VariableTemplateOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VariableTemplateOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
appliesForCo2MeasurementType: jspb.Message.getFieldWithDefault(msg, 1, 0),
appliesForFossilFuelUse: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
transportDirectMonitoring: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
storageIntentionalDischargeMeasurementApproach: jspb.Message.getFieldWithDefault(msg, 4, 0),
storageSurfaceIntentionalDischargeMeasurement: jspb.Message.getFieldWithDefault(msg, 5, 0),
storageSubsurfaceIntentionalDischargeMeasurement: jspb.Message.getFieldWithDefault(msg, 6, 0),
storageUnintentionalSurfaceDischargeEmissionSource: jspb.Message.getFieldWithDefault(msg, 7, 0),
beccsBiomassCultivationLeakageCalculation: jspb.Message.getFieldWithDefault(msg, 8, 0),
vt0013AllocateProjectAndLeakageEmissions: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VariableTemplateOptions}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VariableTemplateOptions;
  return proto.verra.ccs.extensionSet.VariableTemplateOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VariableTemplateOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VariableTemplateOptions}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (reader.readEnum());
      msg.setAppliesForCo2MeasurementType(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAppliesForFossilFuelUse(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTransportDirectMonitoring(value);
      break;
    case 4:
      var value = /** @type {!proto.verra.ccs.extensionSet.IntentionalDischargeMeasurementApproach} */ (reader.readEnum());
      msg.setStorageIntentionalDischargeMeasurementApproach(value);
      break;
    case 5:
      var value = /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (reader.readEnum());
      msg.setStorageSurfaceIntentionalDischargeMeasurement(value);
      break;
    case 6:
      var value = /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (reader.readEnum());
      msg.setStorageSubsurfaceIntentionalDischargeMeasurement(value);
      break;
    case 7:
      var value = /** @type {!proto.verra.ccs.extensionSet.EmissionSourceForUnintentionalSurfaceDischarge} */ (reader.readEnum());
      msg.setStorageUnintentionalSurfaceDischargeEmissionSource(value);
      break;
    case 8:
      var value = /** @type {!proto.verra.ccs.extensionSet.CalculatingLeakageFromBiomassCultivationOptions} */ (reader.readEnum());
      msg.setBeccsBiomassCultivationLeakageCalculation(value);
      break;
    case 9:
      var value = /** @type {!proto.verra.ccs.extensionSet.AllocateProjectAndLeakageEmissionOptions} */ (reader.readEnum());
      msg.setVt0013AllocateProjectAndLeakageEmissions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VariableTemplateOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VariableTemplateOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppliesForCo2MeasurementType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAppliesForFossilFuelUse();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTransportDirectMonitoring();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStorageIntentionalDischargeMeasurementApproach();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStorageSurfaceIntentionalDischargeMeasurement();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getStorageSubsurfaceIntentionalDischargeMeasurement();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getStorageUnintentionalSurfaceDischargeEmissionSource();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getBeccsBiomassCultivationLeakageCalculation();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getVt0013AllocateProjectAndLeakageEmissions();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional CO2MeasurementOption applies_for_co2_measurement_type = 1;
 * @return {!proto.verra.ccs.extensionSet.CO2MeasurementOption}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.getAppliesForCo2MeasurementType = function() {
  return /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.CO2MeasurementOption} value
 * @return {!proto.verra.ccs.extensionSet.VariableTemplateOptions} returns this
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.setAppliesForCo2MeasurementType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool applies_for_fossil_fuel_use = 2;
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.getAppliesForFossilFuelUse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.verra.ccs.extensionSet.VariableTemplateOptions} returns this
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.setAppliesForFossilFuelUse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool transport_direct_monitoring = 3;
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.getTransportDirectMonitoring = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.verra.ccs.extensionSet.VariableTemplateOptions} returns this
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.setTransportDirectMonitoring = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional IntentionalDischargeMeasurementApproach storage_intentional_discharge_measurement_approach = 4;
 * @return {!proto.verra.ccs.extensionSet.IntentionalDischargeMeasurementApproach}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.getStorageIntentionalDischargeMeasurementApproach = function() {
  return /** @type {!proto.verra.ccs.extensionSet.IntentionalDischargeMeasurementApproach} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.IntentionalDischargeMeasurementApproach} value
 * @return {!proto.verra.ccs.extensionSet.VariableTemplateOptions} returns this
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.setStorageIntentionalDischargeMeasurementApproach = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional CO2MeasurementOption storage_surface_intentional_discharge_measurement = 5;
 * @return {!proto.verra.ccs.extensionSet.CO2MeasurementOption}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.getStorageSurfaceIntentionalDischargeMeasurement = function() {
  return /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.CO2MeasurementOption} value
 * @return {!proto.verra.ccs.extensionSet.VariableTemplateOptions} returns this
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.setStorageSurfaceIntentionalDischargeMeasurement = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional CO2MeasurementOption storage_subsurface_intentional_discharge_measurement = 6;
 * @return {!proto.verra.ccs.extensionSet.CO2MeasurementOption}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.getStorageSubsurfaceIntentionalDischargeMeasurement = function() {
  return /** @type {!proto.verra.ccs.extensionSet.CO2MeasurementOption} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.CO2MeasurementOption} value
 * @return {!proto.verra.ccs.extensionSet.VariableTemplateOptions} returns this
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.setStorageSubsurfaceIntentionalDischargeMeasurement = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional EmissionSourceForUnintentionalSurfaceDischarge storage_unintentional_surface_discharge_emission_source = 7;
 * @return {!proto.verra.ccs.extensionSet.EmissionSourceForUnintentionalSurfaceDischarge}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.getStorageUnintentionalSurfaceDischargeEmissionSource = function() {
  return /** @type {!proto.verra.ccs.extensionSet.EmissionSourceForUnintentionalSurfaceDischarge} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.EmissionSourceForUnintentionalSurfaceDischarge} value
 * @return {!proto.verra.ccs.extensionSet.VariableTemplateOptions} returns this
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.setStorageUnintentionalSurfaceDischargeEmissionSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional CalculatingLeakageFromBiomassCultivationOptions beccs_biomass_cultivation_leakage_calculation = 8;
 * @return {!proto.verra.ccs.extensionSet.CalculatingLeakageFromBiomassCultivationOptions}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.getBeccsBiomassCultivationLeakageCalculation = function() {
  return /** @type {!proto.verra.ccs.extensionSet.CalculatingLeakageFromBiomassCultivationOptions} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.CalculatingLeakageFromBiomassCultivationOptions} value
 * @return {!proto.verra.ccs.extensionSet.VariableTemplateOptions} returns this
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.setBeccsBiomassCultivationLeakageCalculation = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional AllocateProjectAndLeakageEmissionOptions vt0013_allocate_project_and_leakage_emissions = 9;
 * @return {!proto.verra.ccs.extensionSet.AllocateProjectAndLeakageEmissionOptions}
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.getVt0013AllocateProjectAndLeakageEmissions = function() {
  return /** @type {!proto.verra.ccs.extensionSet.AllocateProjectAndLeakageEmissionOptions} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.verra.ccs.extensionSet.AllocateProjectAndLeakageEmissionOptions} value
 * @return {!proto.verra.ccs.extensionSet.VariableTemplateOptions} returns this
 */
proto.verra.ccs.extensionSet.VariableTemplateOptions.prototype.setVt0013AllocateProjectAndLeakageEmissions = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.verra.ccs.extensionSet.VerraProject.repeatedFields_ = [5,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VerraProject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VerraProject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VerraProject.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
projectNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 3, ""),
accountId: jspb.Message.getFieldWithDefault(msg, 4, ""),
projectProponentsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
standardTemplate: jspb.Message.getFieldWithDefault(msg, 6, ""),
standardTemplateName: jspb.Message.getFieldWithDefault(msg, 7, ""),
methodologyTemplateTitle: jspb.Message.getFieldWithDefault(msg, 8, ""),
methodologyTemplate: jspb.Message.getFieldWithDefault(msg, 9, ""),
monitoringReportName: jspb.Message.getFieldWithDefault(msg, 10, ""),
submissionStatus: jspb.Message.getFieldWithDefault(msg, 11, ""),
projectName: jspb.Message.getFieldWithDefault(msg, 12, ""),
fetchProjectBoundaryFromCalculationInput: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
estimatedProjectStartDate: jspb.Message.getFieldWithDefault(msg, 14, ""),
locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.verra.ccs.extensionSet.ProjectLocation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VerraProject}
 */
proto.verra.ccs.extensionSet.VerraProject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VerraProject;
  return proto.verra.ccs.extensionSet.VerraProject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VerraProject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VerraProject}
 */
proto.verra.ccs.extensionSet.VerraProject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addProjectProponents(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStandardTemplate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStandardTemplateName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodologyTemplateTitle(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodologyTemplate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonitoringReportName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubmissionStatus(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectName(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFetchProjectBoundaryFromCalculationInput(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setEstimatedProjectStartDate(value);
      break;
    case 15:
      var value = new proto.verra.ccs.extensionSet.ProjectLocation;
      reader.readMessage(value,proto.verra.ccs.extensionSet.ProjectLocation.deserializeBinaryFromReader);
      msg.addLocations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VerraProject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VerraProject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VerraProject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProjectProponentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getStandardTemplate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStandardTemplateName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMethodologyTemplateTitle();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMethodologyTemplate();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMonitoringReportName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSubmissionStatus();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getProjectName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getFetchProjectBoundaryFromCalculationInput();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getEstimatedProjectStartDate();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.verra.ccs.extensionSet.ProjectLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_number = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getProjectNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setProjectNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string project_id = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string account_id = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string project_proponents = 5;
 * @return {!Array<string>}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getProjectProponentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setProjectProponentsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.addProjectProponents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.clearProjectProponentsList = function() {
  return this.setProjectProponentsList([]);
};


/**
 * optional string standard_template = 6;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getStandardTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setStandardTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string standard_template_name = 7;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getStandardTemplateName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setStandardTemplateName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string methodology_template_title = 8;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getMethodologyTemplateTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setMethodologyTemplateTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string methodology_template = 9;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getMethodologyTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setMethodologyTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string monitoring_report_name = 10;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getMonitoringReportName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setMonitoringReportName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string submission_status = 11;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getSubmissionStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setSubmissionStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string project_name = 12;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bool fetch_project_boundary_from_calculation_input = 13;
 * @return {boolean}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getFetchProjectBoundaryFromCalculationInput = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setFetchProjectBoundaryFromCalculationInput = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional string estimated_project_start_date = 14;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getEstimatedProjectStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.setEstimatedProjectStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * repeated ProjectLocation locations = 15;
 * @return {!Array<!proto.verra.ccs.extensionSet.ProjectLocation>}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.verra.ccs.extensionSet.ProjectLocation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.verra.ccs.extensionSet.ProjectLocation, 15));
};


/**
 * @param {!Array<!proto.verra.ccs.extensionSet.ProjectLocation>} value
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
*/
proto.verra.ccs.extensionSet.VerraProject.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.verra.ccs.extensionSet.ProjectLocation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation}
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.verra.ccs.extensionSet.ProjectLocation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.verra.ccs.extensionSet.VerraProject} returns this
 */
proto.verra.ccs.extensionSet.VerraProject.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.ProjectLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.ProjectLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.ProjectLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
projectInstance: jspb.Message.getFieldWithDefault(msg, 1, ""),
country: jspb.Message.getFieldWithDefault(msg, 2, ""),
city: jspb.Message.getFieldWithDefault(msg, 3, ""),
stateProvince: jspb.Message.getFieldWithDefault(msg, 4, ""),
latitudeDD: jspb.Message.getFieldWithDefault(msg, 5, ""),
longitudeDD: jspb.Message.getFieldWithDefault(msg, 6, ""),
latitudeDMS: jspb.Message.getFieldWithDefault(msg, 7, ""),
longitudeDMS: jspb.Message.getFieldWithDefault(msg, 8, ""),
acresHectares: jspb.Message.getFieldWithDefault(msg, 9, ""),
areaUnit: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation}
 */
proto.verra.ccs.extensionSet.ProjectLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.ProjectLocation;
  return proto.verra.ccs.extensionSet.ProjectLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.ProjectLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation}
 */
proto.verra.ccs.extensionSet.ProjectLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStateProvince(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLatitudeDD(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongitudeDD(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLatitudeDMS(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongitudeDMS(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAcresHectares(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAreaUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.ProjectLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.ProjectLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.ProjectLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectInstance();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStateProvince();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLatitudeDD();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLongitudeDD();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLatitudeDMS();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLongitudeDMS();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAcresHectares();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getAreaUnit();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string project_instance = 1;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.getProjectInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation} returns this
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.setProjectInstance = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string country = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation} returns this
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string city = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation} returns this
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string state_province = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.getStateProvince = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation} returns this
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.setStateProvince = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string latitude_d_d = 5;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.getLatitudeDD = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation} returns this
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.setLatitudeDD = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string longitude_d_d = 6;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.getLongitudeDD = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation} returns this
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.setLongitudeDD = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string latitude_d_m_s = 7;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.getLatitudeDMS = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation} returns this
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.setLatitudeDMS = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string longitude_d_m_s = 8;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.getLongitudeDMS = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation} returns this
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.setLongitudeDMS = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string acres_hectares = 9;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.getAcresHectares = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation} returns this
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.setAcresHectares = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string area_unit = 10;
 * @return {string}
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.getAreaUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.ProjectLocation} returns this
 */
proto.verra.ccs.extensionSet.ProjectLocation.prototype.setAreaUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
thresholdForMarginOfDifference: jspb.Message.getFieldWithDefault(msg, 1, 0),
clientId: jspb.Message.getFieldWithDefault(msg, 2, ""),
scope: jspb.Message.getFieldWithDefault(msg, 3, ""),
callBackUrl: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration}
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration;
  return proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration}
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setThresholdForMarginOfDifference(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setScope(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallBackUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThresholdForMarginOfDifference();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScope();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCallBackUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 threshold_for_margin_of_difference = 1;
 * @return {number}
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.prototype.getThresholdForMarginOfDifference = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration} returns this
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.prototype.setThresholdForMarginOfDifference = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string client_id = 2;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration} returns this
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string scope = 3;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.prototype.getScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration} returns this
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.prototype.setScope = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string call_back_url = 4;
 * @return {string}
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.prototype.getCallBackUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration} returns this
 */
proto.verra.ccs.extensionSet.VerraRegistryAgentConfiguration.prototype.setCallBackUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.verra.ccs.extensionSet.FuelType = {
  UNKNOWN: 0,
  NATURAL_GAS: 1,
  DIESEL: 2,
  GASOLINE: 3,
  COAL: 4,
  BIOMASS: 5,
  BRINE_GAS: 6,
  ELECTRICITY: 7,
  KOH: 8,
  CACO3: 9,
  CAO: 10,
  OTHER: 50
};

/**
 * @enum {number}
 */
proto.verra.ccs.extensionSet.EmissionType = {
  EMISSION_TYPE_UNKNOWN: 0,
  CO2: 1,
  CH4: 2,
  N2O: 3
};

/**
 * @enum {number}
 */
proto.verra.ccs.extensionSet.VerificationExceptionType = {
  LEDGER_VARIABLE: 0,
  DATA_PACKAGE_VARIABLE: 1
};

/**
 * @enum {number}
 */
proto.verra.ccs.extensionSet.CO2MeasurementOption = {
  NOT_APPLICABLE: 0,
  MASS_FLOW: 1,
  VOLUMETRIC_FLOW: 2,
  BOTH_MASS_AND_VOLUMETRIC_FLOW: 3
};

/**
 * @enum {number}
 */
proto.verra.ccs.extensionSet.IntentionalDischargeMeasurementApproach = {
  IS_NOT_APPLICABLE: 0,
  MEASUREMENT_OF_VENTING: 1,
  ESTIMATION_OF_SURFACE_VENTING_FOR_ISOLATED_VOLUMES: 2,
  ESTIMATION_OF_SURFACE_VENTING_FOR_NON_ISOLATED_VOLUMES: 3
};

/**
 * @enum {number}
 */
proto.verra.ccs.extensionSet.EmissionSourceForUnintentionalSurfaceDischarge = {
  DOESNT_APPLY: 0,
  FUGITIVE_EMISSIONS: 1,
  RUPTURE_OR_LINE_BREAK: 2,
  BOTH: 3
};

/**
 * @enum {number}
 */
proto.verra.ccs.extensionSet.CalculatingLeakageFromBiomassCultivationOptions = {
  NOT_USED: 0,
  DEFAULT_VALUE: 1,
  EMBODIED_EMISSIONS_FACTOR: 2,
  CALCULATE_LEAKAGE_EMISSIONS: 3
};

/**
 * @enum {number}
 */
proto.verra.ccs.extensionSet.AllocateProjectAndLeakageEmissionOptions = {
  DOES_NOT_APPLY: 0,
  DIFFERENTIATION_METHOD: 1,
  MASS_BALANCE_METHOD: 2
};

goog.object.extend(exports, proto.verra.ccs.extensionSet);
