
type Validator<T> = {
    kind: "validator",
    exec: (data: T) => E.Either<string, T>
    "&&": <U>(other: Validator<U>) => Validator<T | U>
}
