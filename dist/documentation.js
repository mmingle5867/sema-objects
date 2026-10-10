/** Machine-readable package documentation for SeloDoc and developer tooling. */
export function getObjectsDocumentation() {
    return {
        packageName: '@selo/sema-objects', version: '0.2.0',
        summary: 'Portable shared business-object contracts; it does not own application workflows or persistence.',
        objectContracts: ['Organization', 'User', 'Workspace', 'Item', 'Artwork', 'Asset', 'AssetVersion', 'StorageLocation', 'Category', 'Document'],
        documentationCapability: { capabilityKey: 'sema.documentation.objects', operations: ['describe-package', 'list-object-contracts'] },
    };
}
//# sourceMappingURL=documentation.js.map