function maxMultiple(divisor, bound) {
    return bound - bound % divisor;
}

maxMultiple(3, 10);