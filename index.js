function divisors (n) {
    if (isNaN(n)) {
        return []
    }

    if (n < 0) {
        return []
    }

    if (n % 1 > 0) {
        return []
    }

    let result = []
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            result.push(i)
            if (i !== n / i) {
                result.push(n / i)
            }
        }
    }
    return result.sort((a, b) => a - b)
}

module.exports = divisors
