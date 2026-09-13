import type { Category } from './types.js';

export interface CategoryNode extends Category { children: CategoryNode[]; }

/** Builds a stable tree without changing categories or their permanent IDs. */
export function buildCategoryTree(categories: Category[]): CategoryNode[] {
  const nodes = new Map(categories.map((category) => [category.id, { ...category, children: [] as CategoryNode[] }]));
  const roots: CategoryNode[] = [];
  for (const node of nodes.values()) {
    const parent = node.parentId ? nodes.get(node.parentId) : undefined;
    if (parent && parent.id !== node.id) parent.children.push(node);
    else roots.push(node);
  }
  const sort = (items: CategoryNode[]) => {
    items.sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name));
    items.forEach((item) => sort(item.children));
  };
  sort(roots);
  return roots;
}

/** Rejects a parent change that would put a category below itself or one of its descendants. */
export function canReparentCategory(categories: Category[], categoryId: string, parentId: string | null) {
  if (parentId === categoryId) return false;
  const byId = new Map(categories.map((category) => [category.id, category]));
  let current = parentId ? byId.get(parentId) : undefined;
  while (current) {
    if (current.id === categoryId) return false;
    current = current.parentId ? byId.get(current.parentId) : undefined;
  }
  return true;
}
