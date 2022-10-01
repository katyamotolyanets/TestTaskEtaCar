export const formatStringToDate = (tickItem: string) => (
    new Date(tickItem).toLocaleDateString()
)
export const formatStringToNumber = (str: string) => (
    Number(str).toFixed(2)
)