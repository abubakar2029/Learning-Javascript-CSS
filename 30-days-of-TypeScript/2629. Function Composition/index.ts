type F = (x: number) => number;

function compose(functions: F[]): F {

    return function (x) {
        let reverseFn = functions.reverse()
        for (const fn of reverseFn) {
            x = fn(x)
        }
        return x; // without returning x, it is giving error
    }
};
compose([x => x + 1, x => x * x, x => 2 * x])
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
// type F = (x: number) => number;

// function compose(functions: F[]): F {

//     return function (x): number {
//         return functions.reverse().reduce((acc, oneFunction) => oneFunction(acc), x);
//     }
// };

// const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
// console.log(fn(4)); // Output: 18
