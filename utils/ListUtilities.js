export const sectionListForm = data => {
    const sortedAndKeyedByInital = data
        .map((item, index) => ({ ...item, key: `${index}` }))
        .sort((x, y) => (x.Nafn < y.Nafn ? -1 : 1))
        .reduce((acc, obj) => {
            const initial = obj.Nafn.charAt(0);
            if (!acc[initial]) {
                acc[initial] = [];
            }
            acc[initial].push(obj);
            return acc;
        }, {});

    // Turn the result into a form that the sections prop of
    // SectionList demands.
    return Object.keys(sortedAndKeyedByInital).map(
        obj =>
            (x = {
                title: obj,
                data: sortedAndKeyedByInital[obj]
            })
    );
};

export const flatListForm = data => {
    return data
        .map((item, index) => ({ ...item, key: `${index}` }))
        .sort((x, y) => (x.Nafn < y.Nafn ? -1 : 1));
};
