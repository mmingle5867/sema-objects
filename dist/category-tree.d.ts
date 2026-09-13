import type { Category } from './types.js';
export interface CategoryNode extends Category {
    children: CategoryNode[];
}
/** Builds a stable tree without changing categories or their permanent IDs. */
export declare function buildCategoryTree(categories: Category[]): CategoryNode[];
/** Rejects a parent change that would put a category below itself or one of its descendants. */
export declare function canReparentCategory(categories: Category[], categoryId: string, parentId: string | null): boolean;
//# sourceMappingURL=category-tree.d.ts.map