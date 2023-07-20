const users = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45,
                parent: {
                    "ivanov-c": {}
                }
            },
            "ivanov-b": {
                age: 44,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            "lionenko": {}
                        }
                    }
                }
            }
        }
    },
    "kostenko": {
        age: 56,
        parent: {
            "ignatenko": {},
            "sniezko": {
                age: 45
            }
        }
    }
}

function UserParentRecursion(obj){
    if (obj.parent !== undefined){
        for (let key in obj.parent){
            console.log(key)
            UserParentRecursion(obj.parent[key])
        }
    }
}

for (let key in users){
    UserParentRecursion(users[key])
}