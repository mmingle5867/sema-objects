/** Portable contracts. Persistence, UI, and application workflows remain outside Foundation. */
export type FoundationVisibility = 'PRIVATE' | 'WORKSPACE' | 'COMPANY' | 'SEMA_WIDE';
export type AssetKind = 'SOURCE' | 'WORKING' | 'RENDER' | 'VECTOR' | 'DOCUMENT' | 'OTHER';

export interface FoundationRecord {
  /** Permanent SEMA KeyID issued by SEMA Core. */
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OwnedRecord extends FoundationRecord {
  ownerId: string | null;
  workspaceId: string | null;
  visibility: FoundationVisibility;
}

export interface Organization extends FoundationRecord { name: string; }
export interface User extends FoundationRecord { displayName: string; organizationId: string | null; }
export interface Workspace extends FoundationRecord { name: string; organizationId: string | null; }

/** The durable business subject. Application-specific records extend this rather than replace it. */
export interface Item extends OwnedRecord { title: string; description: string | null; status: string; }
export interface Artwork extends OwnedRecord { itemId: string; title: string; status: string; }

export interface StorageLocation extends OwnedRecord {
  name: string;
  rootLocator: string;
  storageKind: 'LOCAL' | 'NETWORK' | 'CLOUD_SYNCED' | 'REMOTE';
}

export interface Asset extends OwnedRecord {
  itemId: string | null;
  artworkId: string | null;
  kind: AssetKind;
  mediaType: string;
  displayName: string;
  currentVersionId: string | null;
}

export interface AssetVersion extends FoundationRecord {
  assetId: string;
  versionNumber: number;
  locationId: string;
  locator: string;
  createdById: string | null;
  metadata: Record<string, unknown>;
}

export interface Category extends OwnedRecord {
  name: string;
  parentId: string | null;
  sortOrder: number;
}

export interface Document extends OwnedRecord {
  title: string;
  documentType: string;
  currentVersionId: string | null;
}
