using Google.Protobuf.Reflection;

namespace Verra.Ccs.MasterExtensionSet;

public interface IExtensionSetLibrary
{
    List<Type> Types { get; }
    
    TypeRegistry TypeRegistry { get; }
}