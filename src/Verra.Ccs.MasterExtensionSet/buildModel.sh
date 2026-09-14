#!/bin/bash
#requires protoc be installed and in your path. ex. export PATH=$PATH:~/.nuget/packages/google.protobuf.tools/3.27.1/tools/macosx_x64
#requires protoc-gen-web be installed - https://github.com/grpc/grpc-web/releases 
#For Go, install the go plugin: https://github.com/golang/protobuf
#For ts, install the ts plugin: https://github.com/improbable-eng/ts-protoc-gen
PROTO_PATH="${PROTO_PATH:-../../../../.nuget/packages/google.protobuf.tools/3.36.1/tools}"
PROTOC_GEN_TS_PATH="../../../../node_modules/ts-protoc-gen/bin/protoc-gen-ts"
JS_OUT_DIR="../models/ts"
echo "paths:"
echo "$PROTO_PATH"
echo "$PROTOC_GEN_TS_PATH"
echo "js out dir: $JS_OUT_DIR"

#you will need to adjust the relative path to the protoc and grpc tools.

protoc --csharp_out=. --proto_path=./Protos --proto_path="$PROTO_PATH" \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_OUT_DIR}" \
    --ts_out="${JS_OUT_DIR}" ./Protos/verraCcsExtensionSet.proto 
protoc --csharp_out=./Modules/VM0049 --proto_path=./Protos --proto_path="$PROTO_PATH" \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_OUT_DIR}" \
    --ts_out="${JS_OUT_DIR}" ./Protos/vm0049.proto 
protoc --csharp_out=./Modules/VMD0056 --proto_path=./Protos --proto_path="$PROTO_PATH" \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_OUT_DIR}" \
    --ts_out="${JS_OUT_DIR}" ./Protos/vmd0056.proto 
protoc --csharp_out=./Modules/VMD0058 --proto_path=./Protos --proto_path="$PROTO_PATH" \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_OUT_DIR}" \
    --ts_out="${JS_OUT_DIR}" ./Protos/vmd0058.proto 
protoc --csharp_out=./Modules/VMD0057 --proto_path=./Protos --proto_path="$PROTO_PATH" \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_OUT_DIR}" \
    --ts_out="${JS_OUT_DIR}" ./Protos/vmd0057.proto 
