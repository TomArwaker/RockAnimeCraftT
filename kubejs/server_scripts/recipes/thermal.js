ServerEvents.recipes(event => {
    // Список всех материалов для шестерёнок из Thermal Expansion
    const gearMaterials = [
        'iron', 'gold', 'copper', 'tin', 'lead', 'silver', 'nickel',
        'bronze', 'electrum', 'invar', 'constantan', 'signalum',
        'lumium', 'enderium', 'steel'
    ];

    gearMaterials.forEach(material => {
        const output = `thermal:${material}_gear`;
        
        // Удаляем оригинальные рецепты
        event.remove({ output: output });
        
        // Создаём новый рецепт со сталью в центре
        event.shaped(
            Item.of(output),
            [
                ' B ',
                'BAB',
                ' B '
            ],
            {
                A: '#forge:ingots/steel',    // Центральный элемент - сталь
                B: `#forge:ingots/${material}` // Боковые элементы - материал шестерёнки
            }
        );
    });
});