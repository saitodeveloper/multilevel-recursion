const menus = [
    { name: 'Menu 1', items: [
        { name: 'Menu 1.1', items: [
            { name: 'Menu 1.1.1', items: [] },
            { name: 'Menu 1.1.2', items: [] }
        ] },
        { name: 'Menu 1.2', items: [
            { name: 'Menu 1.2.1', items: [] },
            { name: 'Menu 1.2.2', items: [] }
        ] }
    ] },
    { name: 'Menu 2', items: [
        { name: 'Menu 2.1', items: [
            { name: 'Menu 2.1.1', items: [] },
            { name: 'Menu 2.1.2', items: [] }
        ] }
    ]}
]

/* Primeira recursão resolve a lista */
function solveMenus(menus, name, index = 0) {
    if (menus[index] === undefined) {
        return
    }

    const menu = menus[index]
    const foundRecursiveMenu = findMenu(menu, name)
    const foundRecursiveMenus = solveMenus(menus, name, ++index)
    return foundRecursiveMenu ?? foundRecursiveMenus
}

/* Resolve os menus e seus filhos */
function findMenu(menu, name) {
    if (menu.name === name) {
        return menu.name
    }

    let found = undefined
    for (item of menu.items) {
        const menuRecursiveFound = findMenu(item, name)
        found = found ?? menuRecursiveFound
    }
    return found
}
