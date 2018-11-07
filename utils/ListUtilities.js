export const sectionListForm = (data, isOrderedByPopularity) => {
	const sortedAndKeyedByInital = data
		.map(item => ({
			key: item.Nafn,
			Nafn: item.Nafn,
			Fjoldi: parseInt(item.Fjoldi1, 10) + parseInt(item.Fjoldi2, 10)
		}))
		.sort((x, y) => {
			if (isOrderedByPopularity) {
				return y.Fjoldi - x.Fjoldi;
			} else {
				if (x.Nafn < y.Nafn) {
					return -1;
				} else {
					return 1;
				}
			}
		})
		.reduce((acc, obj) => {
			if (isOrderedByPopularity) {
				const fKey = obj.Fjoldi;
				if (!acc[fKey]) {
					acc[fKey] = [];
				}
				acc[fKey].push(obj);
			} else {
				const initial = obj.Nafn.charAt(0);
				if (!acc[initial]) {
					acc[initial] = [];
				}
				acc[initial].push(obj);
			}
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

// export const flatListForm = data => {
// 	return data
// 		.map((item, index) => ({ ...item, key: `${index}` }))
// 		.sort((x, y) => (x.Nafn < y.Nafn ? -1 : 1));
// };
