let listHouses = [];
var charArr = []
let i = 0;
for (let p=1; p<=51;p++){
fetch(`https://anapioficeandfire.com/api/houses?page=${p}&pageSize=50`)
.then((response)=>{
    return response.json();
})
.then((houses)=>{
    console.log(houses);
    listHouses = [...listHouses,...houses];
    let newArray = houses.map((f)=>{
        return `<li><a class = 'link' href="${f.url}">${f.name}.</a></li>`
    })
    $('ul').append(newArray);
})

}

// //house.swornMembers.forEach{
//     something = e.split('/')
//     index = something.pop()
//     characters[index - 1].name
// }