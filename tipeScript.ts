type ObjectType = {
    name: string;
    surname: string
    age: number;
}

const ivan: ObjectType = {
    name: "Andre",
    age: 52,
    surname: "Sosiska",

}
ivan.age
const a: Pick<ObjectType, "age"> = {
    age: 21

}
const Family = (value: unknown) => {
    if (typeof value === "string"){
        value
    }
}
