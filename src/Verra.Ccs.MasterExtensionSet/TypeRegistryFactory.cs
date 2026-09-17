using System.Reflection;
using Google.Protobuf;
using Google.Protobuf.Reflection;

namespace Verra.Ccs.MasterExtensionSet;

public static class TypeRegistryFactory
{

    /// <summary>
    /// Parses the type URL and returns the namespace and type name.
    /// </summary>
    /// <param name="typeUrl">The type URL to parse.</param>
    /// <returns>A tuple containing the namespace and type name.</returns>
    public static (string ns, string typeName) RegisteredMessageType(string typeUrl)
    {
        var typeNameP1 = typeUrl.Split('/');
        //if typeNameP1 only has one array slot, then there was no protobuf prefix and likely a .net typename
        var typeNameP2 = typeNameP1.Length > 1 ? typeNameP1[1].Split(".") : typeNameP1[0].Split(".");

        var prefix = string.Join(".", typeNameP2.SkipLast(1));
        return (prefix, typeNameP2.Last());
    }

    /// <summary>
    /// Creates a TypeRegistry by scanning the provided assembly and additional types.
    /// </summary>
    /// <param name="assembly">The assembly to scan for IMessage types.</param>
    /// <param name="typesToRegister">Additional types to register in the TypeRegistry.</param>
    /// <returns>A TypeRegistry containing the registered types.</returns>
    public static TypeRegistry CreateTypeRegistry(Assembly assembly, IEnumerable<Type>? typesToRegister)
    {
        typesToRegister ??= new List<Type>();
        //get all types in the assembly that implement the IMessage interface
        var types = assembly.GetTypes().Where(t => typeof(IMessage).IsAssignableFrom(t) && !t.IsAbstract).ToList();
        
        
        var addedTypes = typesToRegister.Where(t => typeof(IMessage).IsAssignableFrom(t) && !t.IsAbstract).ToList();
        types.AddRange(addedTypes);
        
        //get an IEnumerable of the MessageDescriptor for each type
        var descriptors = types.Select(t =>
        {
            try
            {
                //get the descriptor for the type
                if (t.GetProperty("Descriptor", BindingFlags.Public | BindingFlags.Static)?.GetValue(null) is MessageDescriptor descriptor) return descriptor;
                Console.Error.WriteLine("Could not get descriptor for type {0}", t.FullName);
                return null;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine("Could not get descriptor for type {0}: {1}", t.FullName, e);
                return null;
            }
        }).Where(d => d != null).ToList();
        
        //add the types to register to a registry
        var registry = TypeRegistry.FromMessages(descriptors);
        return registry;
    }
}