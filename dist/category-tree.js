/** Builds a stable tree without changing categories or their permanent IDs. */
export function buildCategoryTree(categories) {
    const nodes = new Map(categories.map((category) => [category.id, { ...category, children: [] }]));
    const roots = [];
    for (const node of nodes.values()) {
        const parent = node.parentId ? nodes.get(node.parentId) : undefined;
        if (parent && parent.id !== node.id)
            parent.children.push(node);
        else
            roots.push(node);
    }
    const sort = (items) => {
        items.sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name));
        items.forEach((item) => sort(item.children));
    };
    sort(roots);
    return roots;
}
/** Rejects a parent change that would put a category below itself or one of its descendants. */
export function canReparentCategory(categories, categoryId, parentId) {
    if (parentId === categoryId)
        return false;
    const byId = new Map(categories.map((category) => [category.id, category]));
    let current = parentId ? byId.get(parentId) : undefined;
    while (current) {
        if (current.id === categoryId)
            return false;
        current = current.parentId ? byId.get(current.parentId) : undefined;
    }
    return true;
}
//# sourceMappingURL=category-tree.js.map