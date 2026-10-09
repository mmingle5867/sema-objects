import assert from 'node:assert/strict';
import { buildCategoryTree, canReparentCategory, getObjectsDocumentation, type Category } from '../src/index.js';

const at = new Date();
const category = (id: string, parentId: string | null, name = id): Category => ({ id, parentId, name, sortOrder: 0, ownerId: null, workspaceId: null, visibility: 'PRIVATE', createdAt: at, updatedAt: at });
const all = [category('3-A', null), category('3-B', '3-A'), category('3-C', '3-B')];
assert.equal(buildCategoryTree(all)[0]?.children[0]?.id, '3-B');
assert.equal(canReparentCategory(all, '3-A', '3-C'), false);
assert.equal(getObjectsDocumentation().documentationCapability.capabilityKey, 'sema.documentation.objects');
console.log('SEMA Objects tests passed.');
