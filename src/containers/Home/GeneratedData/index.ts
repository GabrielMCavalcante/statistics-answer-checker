class Format {
    static formatComparison(a: number, b: number, c: number) {
        return (
            (parseFloat(a.toFixed(2)) <= parseFloat(b.toFixed(2)))
            &&
            (parseFloat(b.toFixed(2)) < parseFloat(c.toFixed(2)))
        );
    }

    static formatEquality(a: number, b: number) {
        return (a.toFixed(2) === b.toFixed(2));
    }
}

export default class {
    table: number[]
    unique_values: Set<number>
    sturges_k: number
    class_interval: number
    intervals: number[][]
    medium_value: number[]
    interval_freq: number[]
    accumulated_freq: number[]
    absolute_freq: number[]
    total_values: number
    relative_freq: number[]
    accumulated_relative_freq: number[]
    total_amplitude: number
    amostral_amplitude: number
    variance: number
    standard_deviation: number
    variation_coefficient: number
    lines: number
    columns: number
    average: number
    fashion: number[]
    median: number

    constructor(table: number[]) {
        this.table = table
        this.unique_values = new Set()
        this.sturges_k = 0
        this.class_interval = 0
        this.intervals = []
        this.medium_value = []
        this.interval_freq = []
        this.accumulated_freq = []
        this.absolute_freq = []
        this.total_values = 0
        this.relative_freq = []
        this.accumulated_relative_freq = []
        this.total_amplitude = 0
        this.amostral_amplitude = 0
        this.variance = 0
        this.standard_deviation = 0
        this.variation_coefficient = 0
        this.lines = 0
        this.columns = 0
        this.average = 0
        this.fashion = []
        this.median = 0
        this.build_table()
    }

    private build_table() {
        this.create_rol()
        this.get_median()
        this.get_abs_freq()
        this.get_average()
        this.get_variance()
        this.get_standard_deviation()
        this.get_variation_coefficient()
        this.get_table_scale()
        this.get_sturges_k()
        this.get_class_interval()
        this.get_intervals()
        this.get_class_medium_point()
        this.get_interval_freq()
        this.get_relative_freq()
        this.get_accumulated_freq()
        this.get_accumulated_relative_freq()
    }

    private get_average() {
        let totalSum = 0
        this.table.forEach(value => {
            totalSum += value
        })
        this.average = parseFloat(String((totalSum / this.total_values)))
    }

    private get_median() {
        const copyTable = [...this.table]

        while (copyTable.length > 2) {
            copyTable.splice(0, 1)
            copyTable.pop()
        }
        if (copyTable.length === 2)
            this.median = parseFloat(String(((copyTable[0] + copyTable[1]) / 2)))
        else this.median = parseFloat(String(copyTable[0]))

    }

    private get_variance() {
        let sum = 0
        this.table.forEach(value => {
            sum += Math.pow((value - this.average), 2)
        })
        this.variance = parseFloat(String(sum / (this.total_values)))
    }

    private get_standard_deviation() {
        this.standard_deviation = parseFloat(
            String(Math.sqrt(parseFloat(this.variance.toFixed(2))))
        )
    }

    private get_variation_coefficient() {
        this.variation_coefficient = parseFloat(
            String(100 * (this.standard_deviation / this.average))
        )
    }

    private get_table_scale() {
        let lines = 0
        let columns = 0

        let divisors: number[] = []
        let total = this.total_values
        while (true) {
            for (let i = 1; i < total + 1; i++) {
                if (total % i === 0) divisors.push(i)
            }
            if (divisors.length > 2) break
            else {
                total++
                divisors = []
            }
        }
        function removeFirstLastValue() {
            divisors.splice(0, 1)
            divisors.pop()
        }

        function setLinesColumns(index1: number, index2: number) {
            lines = divisors[index1]
            columns = divisors[index2]
        }

        while (true) {
            if (divisors.length > 4) removeFirstLastValue()
            else if (divisors.length === 4) {
                removeFirstLastValue()
                setLinesColumns(0, 1)
                break
            }
            else if (divisors.length < 4) {
                removeFirstLastValue()
                setLinesColumns(0, 0)
                break
            }
        }
        this.lines = lines
        this.columns = columns
    }

    private create_rol() {
        this.table.sort((a, b) => { return a - b })
    }

    private get_abs_freq() {
        this.unique_values = new Set(this.table)
        let total = 0
        let maxValue = 0
        this.unique_values.forEach((_, value) => {
            let count = 0
            for (const this_value of this.table) {
                if (this_value === value) count += 1
            }
            if (total === 0) {
                maxValue = count
                this.fashion.push(value)
            }
            else {
                if (count > maxValue) {
                    maxValue = count
                    this.fashion = []
                    this.fashion.push(value)
                }
                else if (count === maxValue) this.fashion.push(value)
            }
            this.absolute_freq.push(count)
            total += count
        })

        this.total_values = total
    }

    private get_sturges_k() {
        const bySturges = 1 + 3.3 * Math.log10(this.total_values)
        const bySqrt = Math.sqrt(this.total_values)

        const result = bySturges < bySqrt ? Math.round(bySturges) : Math.round(bySqrt)

        this.sturges_k = result % 2 === 0 ? result : result - 1

        if (this.sturges_k <= 4) this.sturges_k = 5
    }

    private get_class_interval() {
        this.amostral_amplitude = this.table[this.table.length - 1] - this.table[0]

        this.class_interval = parseFloat(String(this.amostral_amplitude / this.sturges_k))
    }

    private get_intervals() {
        let val_interval = this.table[0]
        for (let i = 0; i < this.sturges_k; i++) {
            this.intervals.push([val_interval, val_interval + this.class_interval])
            val_interval += this.class_interval
        }
        this.total_amplitude = this.intervals[this.sturges_k - 1][1] - this.intervals[0][0]
    }

    private get_class_medium_point() {
        for (const interval of this.intervals) {
            const sum = interval.reduce((a, b) => { return a + b }, 0)
            this.medium_value.push(parseFloat(String(sum / 2)))
        }
    }

    private get_interval_freq() {
        for (let interval of this.intervals) {
            let f_count = 0
            for (const value of this.table) {
                if (Format.formatComparison(interval[0], value, interval[1]))
                    f_count++
            }

            if (Format.formatEquality(interval[1], this.table[this.total_values - 1]))
                f_count++

            this.interval_freq.push(f_count)
        }
    }

    private get_relative_freq() {
        for (const freq of this.interval_freq) {
            const value = freq / this.total_values
            this.relative_freq.push((100 * parseFloat(String(value))))
        }
    }

    private get_accumulated_freq() {
        let f_count = 0
        for (const interval of this.intervals) {
            for (const value of this.table) {
                if (Format.formatComparison(interval[0], value, interval[1]))
                    f_count++
            }

            if (Format.formatEquality(interval[1], this.table[this.total_values - 1]))
                f_count++

            this.accumulated_freq.push(f_count)
        }
    }

    private get_accumulated_relative_freq() {
        for (const freq of this.accumulated_freq)
            this.accumulated_relative_freq.push((100 * parseFloat(String(freq / this.total_values))))
    }
}