/** Task3 */

var infoList = [
    {
        id: 1,
        name: 'Манчестер Юнайтед',
        yearFoundation: 1878,
        championsLeague: [1968, 1999, 2008],
        europaLeague: [2017],
        url: '../images/footbal/manchester.png'
    },
    {
        id: 2,
        name: 'Барселона',
        yearFoundation: 1899,
        championsLeague: [1992, 2006, 2009, 2011, 2015],
        europaLeague: [],
        url: '../images/footbal/barcelona.png'
    },
    {
        id: 3,
        name: 'ПСЖ',
        yearFoundation: 1970,
        championsLeague: [],
        europaLeague: [],
        url: '../images/footbal/psg.png'
    },
    {
        id: 4,
        name: 'Ювентус',
        yearFoundation: 1897,
        championsLeague: [1985, 1996],
        europaLeague: [],
        url: '../images/footbal/juventus.png'
    },
    {
        id: 5,
        name: 'Бавария',
        yearFoundation: 1900,
        championsLeague: [1974, 1975, 1976, 2001, 2013, 2020],
        europaLeague: [],
        url: '../images/footbal/bayern.png'
    }
]

console.log(infoList[1].europaLeague);


/**Task5 */

var searchList = [
    'Мишка',
    'Осьминожка',
    'Акула',
    'Авокадо',
    'Моль Молли',
    'Альпака',
    'Пингвиненок',
    'Моль',
    'Пачакун',
    'Ленивец'
]

//////////////  Task 1

var list = document.querySelector('#task-list1');

list.addEventListener('click', function(event){
    if(event.target.tagName === 'I'){
        var ul = event.target.parentElement.parentElement.parentElement;
        event.target.parentElement.parentElement.remove();
    }
    if(ul.childElementCount === 0){
        //alert('Empty to-do');
        var li = document.createElement('li');
            li.appendChild(document.createTextNode('Empty to-do'));
            ul.appendChild(li);
    }
    
})

////// Task 2

var colorContainer = document.querySelector('.container1');

colorContainer.addEventListener('click', function(e){
    if(e.target.textContent === 'red'){
        e.target.style.backgroundColor = 'red';
    }
    if(e.target.textContent === 'blue'){
        e.target.style.backgroundColor = 'blue';
    }
})

///// Task 3

var chooseTeam = document.querySelector('.browser-default');
var image = document.querySelector('.club-image img');
var infoTeam = document.querySelector('.club-info');

function getTeamInfo(){
    for(var i = 0; i < infoList.length; i++){
        if(infoList[i].name === chooseTeam.options[chooseTeam.selectedIndex].text){
            image.setAttribute('src', infoList[i].url.replace('..', '.'));
            infoTeam.children[0].innerHTML = infoList[i].yearFoundation;
            if(infoList[i].championsLeague.length !== 0){
                infoTeam.children[1].innerHTML = infoList[i].championsLeague;  
            } else {
                infoTeam.children[1].innerHTML = 'На данный момент кубков нет'; 
            }
            if(infoList[i].europaLeague.length !== 0){
                infoTeam.children[2].innerHTML = infoList[i].europaLeague;
            } else {
                infoTeam.children[2].innerHTML = 'На данный момент кубков нет';
            }
        }
    }
}

chooseTeam.addEventListener('change', getTeamInfo);

////// Task 4

var btnSortAge = document.querySelector('#btn-sort');

var listPeople = document.querySelector('#grid').children[1];

function sortAge(){
    var elements = [].slice.call(listPeople.children);
    elements.sort((a,b) => {
        if(Number(a.firstElementChild.innerHTML) < Number(b.firstElementChild.innerHTML)) { 
            return -1; 
        }
        if(Number(a.firstElementChild.innerHTML) > Number(b.firstElementChild.innerHTML)) { 
            return 1; 
        }
        return 0;
    });
    while(listPeople.children.length){
        listPeople.removeChild(listPeople.children[0])
    }
    elements.forEach(function(item){
        listPeople.appendChild(item);
    }); 
}

btnSortAge.addEventListener('click', sortAge);

///// Task 5

var inputNameToy = document.querySelector('#search-toy');

var listToys = document.querySelector('#list');

function searchToy(){
    for (let toy of listToys.children){
        if(toy.textContent.toLocaleLowerCase().startsWith(inputNameToy.value.toLocaleLowerCase())) {
            toy.style.display = 'block';
        } else {
            toy.style.display = 'none';
        }
    } 
}

inputNameToy.addEventListener('input', searchToy);

