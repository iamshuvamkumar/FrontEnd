var arr = [
    {
        name: 'test1'
    },
    {
        name:'test2'
    },
    {
        name:'test3'
    },
    {
        name:'test4'
    }
];
console.log(arr.length);

arr.forEach((a,b)=>{
    console.log(`item ${a.name}, postinon ${b}`);
})