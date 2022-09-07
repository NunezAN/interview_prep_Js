const stringifyId = (arr) => {
    let uniqueArray = [];
    for(let i=0;i<arr.length;i++){
        if(!uniqueArray.includes(arr[i].id))
        {
            uniqueArray.push(arr[i].id);
        }
    }
    return uniqueArray.join();
};

console.log(stringifyId([{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }]));
