# Deployment Samples

The CCS+ Master Extension Set provides a comprehensive framework for Carbon Capture and Storage (CCS) monitoring, reporting, and verification (MRV) using Microsoft's Environmental Credit Service and the Digital MRV Framework. The main projects for the CCS+ Master Extension Set are:

- [Ccs.Plus.MasterExtensionSet](../src/Ccs.Plus.MasterExtensionSet/): This project contains the core master extension set templates, including the masters for entity extensions, variable templates, formula templates, and message pairs required for CCS projects. The master extension set's templates are installed once into an ECS instance and can be reused across multiple and projects, but deploying an ExtensionSet from the master then customizing it.  All master templates have fixed identifiers (GUID/UUID), except for Variables which have a composite identifier `Id` which is a `string` and `Version` which is also a string, so that they can be referenced consistently, but deployed ExtensionSets do not have fixed identifiers so that multiple versions can be installed for different supply chains.

## Understanding Templates

Each Master Extension Set Template type has a Master JSON definition file, where each definition has a fixed identifier (GUID/UUID) so that definitions remain constant across implementations and projects.

All template definitions are wrappers for custom data types that can vary based on the implementation. Similar to an envelop and a letter, where the envelop is the template and the letter is the custom data type. Custom data types can be defined as simple JSON schemas, primitive data types like int or boolean, or [protocol buffers](https://protobuf.dev), the CCS+ Master Extension Set uses protocol buffers to support native cross platform serialization and object models. Regardless of the implementation of the custom data types, the template's DataSchemaOrType property is where the information about the custom type, i.e., a namespace to a class or path to a schema, and the DataExample property is a sample of the type serialized to a string/text. An instance of a template has a corresponding DataSchemaOrType -> DataType and DataExample -> Data.

- [Master Entity Extension Templates](../src/Ccs.Plus.ExtensionSet/MasterEntityExtensionTemplates.json): these are the most generic extension that can be defined, it allows for any ECS entity to have a data extension and they have fixed identifiers. When installing the templates, Entity Extensions should be installed first.

```json
    {
      "id": "1a00284e-6cd1-486f-8630-91b58efae4c4",
      "name": "VM0049 Options",
      "version": "1.0.0",
      "description": "This extension records the VM0049 options that will apply to all formula and variables for the module that are specific to each option.",
      "documentation": "",
      "extensionContext": "ExtensionSet",
      "dataSchemaOrType": "ccs.extensionSet.verra.VM0049Options",
      "dataExample": "{ \"cO2MeasurementOption\": \"MassFlow\"}",
      "modules": [
        "VM0049"
      ]
    }
```

- [Master Variable Templates](../src/Ccs.Plus.ExtensionSet/VariableTemplates.json): Variable templates are used to define the methodology module parameters that are required for reporting and formula calculations. These have fixed identifiers and should be installed second. VariableTemplates represent the variables or parameters that are required for monitoring and reporting in a methodology module and are the most frequently used template type. They are use in defining ClaimSources, CheckpointTemplates and CheckpointRoutingTables, thus a naming convention that is easily understood by project proponents is recommended. The Id is a composite key that includes the `Id` and the `Version` so that multiple versions of a variable template can be defined if the parameter definition changes over time. It is recommended that the `Id` be a string, minus special characters like commas or spaces, that represents the parameter name used in the methodology documentation and that the `Version` include the `ModuleName` followed by a `:` and the version number, e.g., `VM0049:1.0`. If a variable template is updated, a new version should be created with the same `Id` but a different `Version`. When a ClaimSource, CheckpointTemplate or FormulaTemplate references a VariableTemplate, it should reference the specific version required. Below is an example of a VariableTemplate definition for the `FRmass,x` parameter used in the `VM0049` module.

```json
    {
      "id": "Frmassx",
      "name": "FRmass,x",
      "description": "Total mass flow measured by mass flow meter x during the monitoring period. This maps to the Verra TotalMassFlow parameter.",
      "documentation": "inherited",
      "alias": "",
      "version": "VM0049:1.0",
      "dataSchemaOrType": "ccs.extensionSet.DoubleValue",
      "dataExample": "{ \"value\": 0.0, \"uOM\": \"tonnes\" }",
      "suggestedUnit": "tonnes",
      "requiredAtValidation": false,
      "requiredAtMonitoring": true,
      "entityExtensions": [
        {
          "templateId": "6001624e-64de-4d7f-88d8-ecbe61613618",
          "dataType": "ccs.extensionSet.verra.VariableTemplateOptions",
          "data": "{ \"appliesForCo2MeasurementType\": \"MASS_FLOW\", \"appliesForFossilFuelUse\": false, \"transportDirectMonitoring\": false, \"storageIntentionalDischargeMeasurementApproach\": \"MEASUREMENT_OF_VENTING\", \"storageSurfaceIntentionalDischargeMeasurement\": \"VOLUMETRIC_FLOW\", \"storageSubsurfaceIntentionalDischargeMeasurement\": \"MASS_FLOW\", \"storageUnintentionalSurfaceDischargeEmissionSource\": \"DOESNT_APPLY\", \"beccsBiomassCultivationLeakageCalculation\": \"NOT_USED\", \"vt0013AllocateProjectAndLeakageEmissions\": \"DOES_NOT_APPLY\" }",
          "extensionContext": "VariableTemplate"
        }
      ]
    }
```

- [Master Formula Templates](../src/Ccs.Plus.ExtensionSet/MasterFormulaTemplates.json): Formula templates are used to define the methodology module equations that have references to the variable templates that are required for calculation. These have fixed identifiers and are installed third.

```json
{
      "id": "7c90069b-911a-4604-9b80-0a907c8d8c84",
      "name": "VM0049 Measurement based on Total Mass Flow. Equation 1, option 1 - Equation 2",
      "description": "To determine the quantity of CO2 using total mass flow measurements, the project proponent must multiply the total mass flow by the concentration of CO2 in that flow.",
      "documentation": "inherited",
      "version": "1.0",
      "dataSchemaOrType": "ccs.extensionSet.QuantityOfCo2InjectedFormula",
      "dataExample": "{}",
      "formula": "QCO2,x = FRmass,x × %CO2mass,x",
      "variableTemplates": [
        {"id": "Frmassx", "version": "VM0049:1.0"},
        {"id": "pCO2massx", "version": "VM0049:1.0"}
      ],
      "modules": [
        "VM0049", "VMD0058"
      ]
    }
```

- [Master Message Pairs](../src/Ccs.Plus.ExtensionSet/MasterMessagePairs.json): Message pairs allow for any request/response message pair to be defined to customize business workflow between parties. These have fixed identifiers and are installed last.

```json
{
      "id": "a47e91c3-9435-485d-b5af-0bf544d17e59",
      "name": "Calibrate Instrument Message Pair",
      "version": "1.0.0",
      "description": "This message pair provides the request/response messages for calibrating an instrument used in monitoring. Because there are different monitoring types, the CalibrateInstrument response includes a CalibrationResult object that can have different calibration data for different types of instruments. Receiving an CalibrationResult will require inspecting via reflection the data type in the CalibrationData object to properly deserialize.",
      "documentation": "",
      "requestMessageDefinition": {
        "dataSchemaOrType": "ccs.extensionSet.CalibrateInstrumentRequest",
        "definition": "{\n          \"@type\": \"type.googleapis.com/ccs.extensionSet.CalibrateInstrumentRequest\",\n          \"claimId\": \"\",\n          \"checkpointId\": \"\",\n          \"claimSourceId\": \"\"\n        }"
      },
      "responseMessageDefinition": {
        "dataSchemaOrType": "ccs.extensionSet.CalibrateInstrumentResponse",
        "definition": "{\n          \"@type\": \"type.googleapis.com/ccs.extensionSet.CalibrateInstrumentResponse\",\n          \"claimId\": \"\",\n          \"checkpointId\": \"\",\n          \"claimSourceId\": \"\"\n        }"
      },
      "modules": [
        "VM0049"
      ]
    }
```

## Understanding Master Extension Set and Master Extension Set Modules

Master Extension Sets are used to organize the templates that are used in the origination process. Templates that are valid for a specific module should be placed in the Master Extension Set Module.

Extension Sets, are created from an installed Master Extension Set and *do not* have fixed identifiers as multiple versions of the extension set can be installed for different supply chains.
When installed, the ExtensionSet and Modules are assigned an identifier.

Formula, Variable, Entity Extension and Message Pair templates are only installed to a Master Extension Set Module and not directly to an Extension Set root or parent.

The CCS+ Master Extension Set structure:

- VM0049 - VM0049 Module
- VMD0056 - VMD0056 Module
- VMD0057 - VMD0057 Module
- VMD0058 - VMD0058 Module
- VMD0059 - VMD0059 Module
- VMD0062 - VMD0062 Module
- VT0012 - VT0012 Tool
- VT0013 - VT0013 Tool

```json
{
  "name": "Verra's VM0049 CCS+ Master Extension Set Template",
  "description": "Extension set for carbon capture and storage (CCS) projects",
  "version": "1.0",
  "documentation": "https://verra.org/methodologies/vm0049-carbon-capture-and-storage/",
  "masterExtensionSetModules": [
    {
      "name": "VM0049",
      "description": "Carbon Capture and Storage (CCS) module",
      "version": "1.0",
      "documentation": "https://verra.org/methodologies/vm0049-carbon-capture-and-storage/"
    },
    {
      "name": "VMD0056",
      "description": "Direct Air Capture (DAC) module",
      "version": "1.0",
      "documentation": "https://verra.org/methodologies/vmd0056-co2-capture-from-air-direct-air-capture-v1-0/"
    },
    {
      "name": "VMD0057",
      "description": "CO2 Transport for CCS Projects module",
      "version": "1.0",
      "documentation": "https://verra.org/methodologies/vmd0057-co2-transport-for-ccs-projects-v1-0/"
    },
    {
      "name": "VMD0058",
      "description": "VMD0058 CO2 Storage in Saline Aquifers and Depleted Hydrocarbon Reservoirs",
      "version": "1.0",
      "documentation": "https://verra.org/methodologies/vmd0058-co2-storage-in-saline-aquifers-and-depleted-hydrocarbon-reservoirs-v1-0/"
    },
    {
      "name": "VMD0059",
      "description": "VMD0059 CO2 Capture FROM Bioenergy (BECCS)",
      "version": "1.0",
      "documentation": "https://verra.org/wp-content/uploads/2025/04/VMD0059-CO2-Capture-from-Bioenergy-final-publication.pdf"
    },
    {
      "name": "VMD0062",
      "description": "VMD0062 CO2 Capture FROM Natural Gas Processing",
      "version": "1.0",
      "documentation": "https://verra.org/wp-content/uploads/2025/12/VMD0062-CO2-Capture-from-Natural-Gas-Processing-v1.0.pdf"
    },
    {
      "name": "VT0012",
      "description": "VT0012 Accounting Non-VCS CO2 in CCS Projects",
      "version": "1.0",
      "documentation": "https://verra.org/wp-content/uploads/2025/04/VT0012-Non-VCS-CO2-in-CCS-Projects-final-publication.pdf"
    },
    {
      "name": "VT0013",
      "description": "VT0013 Differentiating Reductions and Removals in CCS Projects, v1.0",
      "version": "1.0",
      "documentation": "https://verra.org/wp-content/uploads/2025/04/VT0013-Differentiating-Reductions-and-Removals-in-CCS-Projects-final-publication.pdf"
    }
  ]
}
```

## Understanding ClaimSources

A Claim Source is a registration of an information or evidence source like a sensor, reference library, application or document. Each Claim Source will have one or more VariableTemplates for each Variable it is capable of reporting/submitting a value for. So there is a dependency between a ClaimSource and VariableTemplates, that essentially creates a variable route for reporting.

ECS, or other implementation, (may) provides a `Claim Source Routing Table` for each Claim Source and a `Checkpoint Routing Table` that provides a supplier role a path for reporting values for each variable being monitored.

Claim Sources are registered under an `ActivityImpactModule` and can be installed and configured using something like a [ClaimSources-sample.json](../src/DeploymentSamples/ClaimSources-sample.json). Each claim source has one or more VariableTemplates associated with it, meaning the claim source is capable of reporting values for each of those variables, where each VariableTemplate as a `VariableTemplateId`, `VariableVersion` and `SourceIdentifier`.  The `SourceIdentifier` is a project specific alias or name known to the implementation so that the system can correctly map the reported values to the corresponding variables within the project using a routing table.

For common libraries like the Project Design Document (PDD) or Emission Factor library, a single Claim Source can be used to report multiple VariableTemplates across multiple modules. The `SourceIdentifier` property can be used to identify the specific source of the variable value in the external system. Naming conventions for the `SourceIdentifier` should be coordinated with the external system that is providing the evidence data, in the example we use a prefix of `PDD:` for the Project Design Document followed by an identifier that is known to the external system.

```json
{
  "name": "Project Design Document",
  "description": "This claim source represents the project design document (PDD) that contains the project parameters required for monitoring and reporting.",
  "documentation": "",
  "variableTemplates": [
    {
      "variableTemplateId": "tAlpha10",
      "reportingModule": "VM0049:1.0",
      "sourceIdentifier": "PDD:tAlpha10"
    },
    {
      "variableTemplateId": "tAlpha66",
      "reportingModule": "VM0049:1.0",
      "sourceIdentifier": "PDD:tAlpha66"
    }
  ]
}
```

## Understanding ImpactClaim and Checkpoint Templates

Impact Claims have one or more formulas that are used to calculate the formulas required, each formula also includes the variables required for the calculation. Formulas and their variables at the impact claim and processed claim level are used to document which formulas will be performed for the impact claim and the formula variables can contain sum values of the underlying checkpoint variables. Meaning, the impact claim formulas can aggregate data from multiple checkpoints to derive the required values.

An `Impact Claim` template will have a list of Formula Templates that should be used to create the Impact Claim's formulas.

Checkpoints have one or more variables that are used to record the checkpoint summary value for the variable being reported, any more granular variable data required for reporting is contained within the Checkpoint Data Package.

Variables will have a reporting frequency, where some variable values are fixed or only reported once during a claim period, these are called `monthly` where others are reported `daily`.

A `Checkpoint` template can be used to define all the `monthly` variables and `daily` variables or any other reporting frequency or variable contents contained within the checkpoint. Another example could be a `invoices` checkpoint that has a Data Package that includes the project's invoices for upstream power or water consumption for the month, easily segregating and summarizing the data as required.

Using templates provides an efficient way to create claims and checkpoint having the required formula and variables included. You can always add a formula or variable to an Impact Claim or Checkpoint after it has been created.

Below is an example of a Checkpoint Template that includes three variable templates, each variableTemplate requires the `VariableTemplateId`, `VariableTemplateVersion` and a `SourceIdentifier`, which is used to identify the specific source of the variable value in the external system and is used to create the Checkpoint Routing Table for the checkpoint when it is created.

```json
{
    "checkpointTemplates": [
        {
            "name": "Daily Checkpoint Template",
            "description": "A default template for checkpoints.",
            "cadence": "Daily",
            "variableTemplates": [              
                {
                    "variableTemplateId": "Vm",
                    "variableTemplateVersion": "VMD0056:1.0",
                    "sourceIdentifier": "sensor: x104-vm"
                },
                {
                    "variableTemplateId": "QCO2nonVCSinjectediy",
                    "variableTemplateVersion": "VM0049:1.0",
                    "sourceIdentifier": "flowMeter: dac202"
                },
                {
                    "variableTemplateId": "FRmassx",
                    "variableTemplateVersion": "VM0049:1.0",
                    "sourceIdentifier": "flowMeter: dac202:param19"
                }
            ]
        }
    ]
}
```

## Understanding Checkpoint Routing Tables

A Checkpoint Routing Table is created for each Checkpoint that is created. The Checkpoint Routing Table provides the supplier role a path for reporting values for each variable being monitored in the checkpoint. A routing path includes the Claim Source that is reporting the variable value, the Variable Template for the variable being reported. The route can be selected by the `SourceIdentifier` which can represents external identifiers used by the evidence source that are known to the external system.

## Understanding AIM Fixed Variables

Some fixed variables make sense to define AIM wide, like a GHG value. These can be added to the AIM instead of submitted in the claims process. The report generator that creates the appropriate report for the issuing registry can pull the value for the variable from the AIM instead of looking for it in a checkpoint.

## Installation

Installing the Master Extension Set is based on the implementation you are deploying to.  For Environmental Credit Service, the API supports the installation of any master extension set and also creating an instance of an Extension Set from a master extension set.

The first step after installing the Master Extension Set is creating an instance of an Extension Set from it for your project. Once this is done, you can then configure your project and extension set based on your specific requirements.

For example, once the Extension Set instance is created for your project, you can then assign it to your Origination Process Agreement so that all participants in the agreement all use the same extension set configuration.

Claim Sources for your Activity Impact Module use Variable Templates to define the specific variables they report. Each Claim Source is associated with one or more Variable Templates, ensuring that the reported values are consistent and adhere to the predefined structure. This allows for accurate and standardized data collection across all checkpoints and activities within the module.

Impact Claim Templates also use the Extension Set by identifying which formulas should be included in a new Impact Claim for your project.

Checkpoint Templates similarly use the Extension Set by specifying which variables and routing rules should be included in a new Checkpoint for your project. This ensures that all checkpoints adhere to the standardized structure defined in the Extension Set, facilitating consistent data collection and reporting across your project.

## ECS Example code for installing and configuring the Master Extension Set and its instances

The following are `C#` examples for installing and configuring the Master Extension Set and its instances.

### Creating an Instance Extension Set from a Master

```csharp
var masterExtensionSetClient = new MasterExtensionSetClient(endpoint, extensionsAccount, _httpClientFactory);
        
var masterExtensionSet = await masterExtensionSetClient.GetAsync(masterExtensionSetId);

var extensionSetOptions = new MasterToExtensionSetRequest
{
    NewExtensionSetName = "1PointFive Stratos Extension Set",
    MasterExtensionSetId = masterExtensionSetId,
};

//load modules to exclude
var modulesToExclude =  ExtensionSetModulesToExclude.FromJson(
    await File.ReadAllTextAsync(Path.Combine(assemblyPath!, "ExtensionSetModulesToExclude.json")));

foreach (var module in masterExtensionSet.MasterExtensionSetModules)
{
    //skip unused modules
    if (modulesToExclude.ModulesToExclude.Contains(module.Name))
        continue;
    var moduleName = module.Name;
    var moduleExtensions = extensionSetModuleExtensions.Modules.FirstOrDefault(m => m.Name == moduleName);
    var extensionSetModuleOptions = new ExtensionSetModuleTemplate
    {
        MasterExtensionSetModuleId = module.Id
    };
    if (moduleExtensions != null)
        foreach (var entityExtension in moduleExtensions.EntityExtensions)
        {
            extensionSetModuleOptions.ListOfEntityExtensionsToInclude.Add(entityExtension);
        }

    extensionSetOptions.ListOfModulesToInclude.Add(extensionSetModuleOptions);
}
var newExtensionSet = await masterExtensionSetClient.CreateExtensionSetFromMasterTemplateAsync(extensionSetOptions);
```

### Installing and Configuring Claim Sources

Installing the Claim Sources:

```csharp
var extensionSetClient = new ExtensionSetClient(endpoint, ecsAccount, _httpClientFactory);
var extensionSet = await extensionSetClient.GetAsync(extensionSetId);
//get the moduleIds and module name to load variableTemplates from
var moduleIds = extensionSet.ExtensionSetModules.Select(module => (module.Id, module.Name)).ToList();

var primaryExtensionSetModule = extensionSet.ExtensionSetModules.FirstOrDefault(m => m.Name.StartsWith(defaultMasterExtensionSetModuleName));

var claimSourcesInit =
    ClaimSourcesInit.FromJson(await File.ReadAllTextAsync(Path.Combine(assemblyPath!, "ClaimSources.json")));

var claimSourcesClient = new ClaimSourceClient(endpoint, ecsAccount, _httpClientFactory, new ETags());

var existingClaimSources = await claimSourcesClient.GetAllAsync(aimId);

foreach (var source in claimSourcesInit.ClaimSources)
{
    //create the claim source request
    var claimSourceRequest = new ClaimSourceRequest
    {
        Name = source.Name,
        Description = source.Description,
        ClaimSourceType = source.SourceType,
        UnitOfMeasure = source.UnitOfMeasure,
        ReportingFrequency = source.ReportingFrequency,
        AuthenticatedClaimSourceAccountId = source.AuthenticatedClaimSourceAccountId
    };
    try
    {
        claimSource = await claimSourcesClient.CreateAsync(aimId, claimSourceRequest);

        if (claimSource == null)
        {
            throw new Exception($"Unable to create the claim source {source.Name}");
        }

        Console.WriteLine($"Claim source {claimSource.Id} created");
    }
    catch (Exception ex)
    {
        Console.WriteLine(
            $"Error creating claim source {source.Name}: {ex.Message}, probably already exists, moving to next template.");
    }

    await AddClaimSourceVariableTemplates(source);

```

Then installing the Variable Templates, following the last line from the previous code sample:

```csharp
private async Task AddClaimSourceVariableTemplates(ClaimSource source)
{
    var variableTemplateClient = new VariableTemplateClient(endpoint, ecsAccount, _httpClientFactory);
    var variableTemplates = new List<VariableTemplateResponse>();
    foreach (var moduleId in moduleIds)
    {
        var moduleTemplates = await variableTemplateClient.GetAllAsync(moduleId.Id);
        variableTemplates.AddRange(moduleTemplates);
    }

    foreach (var variableTemplate in source.VariableTemplates)
    {
        //find the variable template by name and module
        var moduleId = moduleIds.FirstOrDefault(m => variableTemplate.VariableTemplateVersion.StartsWith(m.Name)).Id;
        var variableTemplateResponse =
            variableTemplates.FirstOrDefault(v => v.Id == variableTemplate.VariableTemplateId
                                                    && v.Version == variableTemplate.VariableTemplateVersion
                                                    && v.ExtensionSetModuleId == moduleId);

        if (variableTemplateResponse == null)
        {
            Console.WriteLine(
                $"Unable to find the variable template id: {variableTemplate.VariableTemplateId} version: {variableTemplate.VariableTemplateVersion} extensionSetModuleId: {moduleId} for claim source {source.Name}");
            continue;
        }

        //add the variable template to the claim source
        await claimSourcesClient.AddVariableTemplateAsync(aimId, claimSource!.Id,
            variableTemplateResponse.Id, variableTemplate.VariableTemplateVersion, variableTemplateResponse.ExtensionSetModuleId, 
            variableTemplate.SourceIdentifier);
    }
}
```

### Add Impact Claim Templates

```csharp
var impactClaimTemplatesInit =
            ImpactClaimTemplatesInit.FromJson(
                await File.ReadAllTextAsync(Path.Combine(assemblyPath!, "ImpactClaimTemplates.json")));
        
var impactClaimTemplateClient = new ImpactClaimTemplateClient(endpoint, ecsAccount, _httpClientFactory);

foreach (var impactClaimTemplate in impactClaimTemplatesInit.ImpactClaimTemplates)
{
    //check if the impact claim template already exists
    var existingTemplate = await impactClaimTemplateClient.GetAsync(impactClaimTemplate.Id);
    if (existingTemplate.Id == Guid.Empty)
    {
        var impactClaimTemplateRequest = new ImpactClaimTemplateRequest
        {
            AimId = aimId,
            Name = impactClaimTemplate.Name,
            Description = impactClaimTemplate.Description
        };
        foreach(var mftId in impactClaimTemplate.MasterFormulaTemplates)
        {
            impactClaimTemplateRequest.MasterFormulaTemplateIds.Add(mftId);
        }

        try
        {
            var impactClaimTemplateResponse =
                await impactClaimTemplateClient.CreateAsync(impactClaimTemplateRequest);
            if (impactClaimTemplateResponse == null)
            {
                Console.WriteLine("Unable to create the Impact Claim template");
            }

            Console.WriteLine("Impact Claim Template created with Id: {0}", impactClaimTemplateResponse.Id);
        }
        catch
        {
            Console.WriteLine(
                "Unable to create the Impact Claim template, probably already exists, moving to next template.");
        }
    }
    else
    {
        Console.WriteLine("Impact Claim template {0} already exists, skipping.", existingTemplate.Name);
    }
}
```

### Adding Checkpoint Templates

```csharp
var checkpointTemplatesInit =
            CheckpointTemplatesInit.FromJson(
                await File.ReadAllTextAsync(Path.Combine(assemblyPath!, "CheckpointTemplates.json")));
        
var extensionSetClient = new ExtensionSetClient(endpoint, ecsAccount, _httpClientFactory);
var extensionSet = await extensionSetClient.GetAsync(extensionSetId);
var moduleIds = extensionSet.ExtensionSetModules.Select(module => (module.Id, module.Name)).ToList();

//get all the variable templates
var variableTemplateClient = new VariableTemplateClient(endpoint, ecsAccount, _httpClientFactory);
var variableTemplates = new List<VariableTemplateResponse>();
foreach (var moduleId in moduleIds)
{
    var moduleTemplates = await variableTemplateClient.GetAllAsync(moduleId.Id);
    variableTemplates.AddRange(moduleTemplates);
}

var checkpointTemplateClient = new CheckpointTemplateClient(endpoint, ecsAccount, _httpClientFactory);
foreach (var checkpointTemplate in checkpointTemplatesInit.CheckpointTemplates)
{
    //check if the checkpoint template already exists
    var existingTemplate = await checkpointTemplateClient.GetAsync(checkpointTemplate.Id);
    if (existingTemplate.Id == Guid.Empty)
    {

        var checkpointTemplateRequest = new CheckpointTemplateRequest
        {
            AimId = aimId,
            Name = checkpointTemplate.Name,
            Description = checkpointTemplate.Description,
            Cadence = checkpointTemplate.Cadence
        };
        foreach (var variableTemplate in checkpointTemplate.VariableTemplates)
        {
            //find the variable template in the right module
            var moduleId = moduleIds.FirstOrDefault(m => variableTemplate.VariableTemplateVersion.StartsWith(m.Name)).Id;
            var variableTemplateRequest = new ClaimSourceVariableTemplateRequest
            {
                VariableTemplateId = variableTemplate.VariableTemplateId,
                SourceIdentifier = variableTemplate.SourceIdentifier,
                VariableTemplateVersion = variableTemplate.VariableTemplateVersion,
                ExtensionSetModuleId = moduleId
            };
            checkpointTemplateRequest.VariableTemplates.Add(variableTemplateRequest);
        }

        try
        {
            var checkpointTemplateResponse =
                await checkpointTemplateClient.CreateAsync(checkpointTemplateRequest);
            if (checkpointTemplateResponse == null)
            {
                Console.WriteLine("Unable to create the Checkpoint template");
            }

            Console.WriteLine("Checkpoint Template created with Id: {0}", checkpointTemplateResponse.Id);
            checkpointTemplatesAdded++;
        }
        catch
        {
            Console.WriteLine(
                "Unable to create the Checkpoint template, probably already exists, moving to next template.");
        }
    }
    else
    {
        Console.WriteLine("Checkpoint template {0} already exists, updating.", existingTemplate.Name);
    }
}
```

## Support

For additional support and examples, refer to:

- [Digital MRV Framework Specification](https://interworkalliance.github.io/TokenTaxonomyFramework/dmrv/spec/v4/index.html)
- [Verra CCS+ Methodology](https://verra.org/methodologies/methodology-for-carbon-capture-and-storage/)
