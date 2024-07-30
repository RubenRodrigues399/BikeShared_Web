export function removeNs2(data) {
    const removePrefix = (item) => {
        return Object.fromEntries(
            Object.entries(item).map(([key, value]) => [key.split(':').pop() || key, value])
        );
    };

    return data.map(removePrefix)
}