export interface ObjectsDocumentationManifest {
    packageName: '@selo/sema-objects';
    version: string;
    summary: string;
    objectContracts: string[];
    documentationCapability: {
        capabilityKey: string;
        operations: string[];
    };
}
/** Machine-readable package documentation for SeloDoc and developer tooling. */
export declare function getObjectsDocumentation(): ObjectsDocumentationManifest;
//# sourceMappingURL=documentation.d.ts.map