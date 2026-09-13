export interface FoundationDocumentationManifest {
    packageName: '@selo/sema-foundation';
    version: string;
    summary: string;
    objectContracts: string[];
    documentationCapability: {
        capabilityKey: string;
        operations: string[];
    };
}
/** Machine-readable package documentation for SeloDoc and developer tooling. */
export declare function getFoundationDocumentation(): FoundationDocumentationManifest;
//# sourceMappingURL=documentation.d.ts.map