export function formatValue(value: number) {
    value = parseFloat(parseFloat(String(value)).toFixed(2))
    if (value % 1 === 0) return value.toString().padStart(2, '0')
    else return value.toFixed(2)
}