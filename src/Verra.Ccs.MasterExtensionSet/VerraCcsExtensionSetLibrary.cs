using System.Reflection;
using Google.Protobuf.Reflection;
using Type = System.Type;

namespace Verra.Ccs.MasterExtensionSet;

public class VerraCcsExtensionSetLibrary : IExtensionSetLibrary
{
    // Private constructor to prevent instantiation
    private VerraCcsExtensionSetLibrary()
    {
        TypeRegistry = TypeRegistryFactory.CreateTypeRegistry(Assembly.GetExecutingAssembly(), [.. Types]);
    }

    // Public static property to access the singleton instance
    public static VerraCcsExtensionSetLibrary Instance { get; } = new();

    public List<Type> Types { get; } = [];
    public TypeRegistry TypeRegistry { get; }
    
}