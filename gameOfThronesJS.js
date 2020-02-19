let listHouses = [];
var charArr = []
// let i = 0;

for (var p=1; p<=51;p++){
fetch(`https://anapioficeandfire.com/api/houses?page=${p}&pageSize=50`)
.then((response)=>{
    return response.json();
})
.then((houses)=>{
    listHouses = [...listHouses,...houses];
    console.log(listHouses);
    let newArray = houses.map((f)=>{
        return `<li><a href="${f.url}" data-toggle='modal' data-target='#exampleModalCenter'>${f.name}.</a></li>`
    })
    
    $('ul').append(newArray);
    
})
let div = document.querySelector('div');
div.addEventListener("click", (e)=>{

    e.preventDefault();

    $.get(e.target.href)
    .done((charObj)=>{
        let $modalBody = $('#modalBody');
        let $modalTitle = $(".modal-title");
        $modalTitle.html(charObj.name);
        $modalBody.html("");

        

        if(charObj.swornMembers.length > 0){
            charObj.swornMembers.forEach((charUrl)=>{

                $.get(charUrl)
                .done((charOb)=>{
                    
                    $modalBody.html(`${$modalBody.html()}<br>${charOb.name}`)
                })
            })
        }
        $('#exampleModalCenter').modal('show');
    })

})


}

