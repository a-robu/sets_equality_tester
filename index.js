const sets_equal = require('sets-equal')

module.exports = (first, second) => {
    let make_set_to_str = (set) => {
        return () => 'Set ' + JSON.stringify(Array.from(set))
    }
    if (first instanceof Set && second instanceof Set) {
        let are_equal = sets_equal(first, second)
        if (!are_equal) {
            first.toString = make_set_to_str(first)
            second.toString = make_set_to_str(second)
        }
        return are_equal
    }
}
