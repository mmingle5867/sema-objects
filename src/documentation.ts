export interface FoundationDocumentationManifest {
  packageName: '@selo/sema-foundation';
  version: string;
  summary: string;
  objectContracts: string[];
  documentationCapability: { capabilityKey: string; operations: string[] };
}

/** Machine-readable package documentation for SeloDoc and developer tooling. */
export function getFoundationDocumentation(): FoundationDocumentationManifest {
  return {
    packageName: '@selo/sema-foundation', version: '0.1.0',
    summary: 'Portable shared business-object contracts; it does not own application workflows or persistence.',
    objectContracts: ['Organization', 'User', 'Workspace', 'Item', 'Artwork', 'Asset', 'AssetVersion', 'StorageLocation', 'Category', 'Document'],
    documentationCapability: { capabilityKey: 'sema.documentation.foundation', operations: ['describe-package', 'list-object-contracts'] },
  };
}
