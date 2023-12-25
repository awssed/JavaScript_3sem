function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    var copy = Array.isArray(obj) ? [] : {};
  
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  
    return { ...copy };
}
let  user = {
  name: 'Masha',
  age: 21
};
let numbers = [1, 2, 3];
let user1 = {
  name: 'Masha',
  age: 23,
  location: {
      city: 'Minsk',
      country: 'Belarus'
  }
};
let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};
const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]
let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};
let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10
        },
        exams: [
            { maths: true, mark: 8},
            { programming: true, mark: 4}
        ]
    }
};

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Ivanov ',
		    degree: 'PhD'
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		}
	     },
        ]
    }
};
let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Petrov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Ivanov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
        ]
    }
};
let store={
    state:{//первый уровень
        profilePage://второй уровень
        {
            posts://третий уровень
            [
                {id:1, message:'Hi', likesCount:12},
                {id:2, message:'By', likesCount:1},
            ],
            newPostText:'About me',
        },
        dialogsPage:
        {
            dialogs:
            [
                {id:1, name:'Valera'},
                {id:2, name:'Andrey'},
                {id:3, name:'Sasha'},
                {id:4, name:'Victord'},
            ],
            message:
            [
                {id:1, message:'hi'},
                {id:2, message:'hi hi'},
                {id:3, message:'hi hi hi'},
            ],
        },
        sidebar:[],
    },
}
copyUser=deepCopy(user)
copyNumber=deepCopy(numbers)
copyUser1=deepCopy(user1)
copyUser2=deepCopy(user2)
copyArray=deepCopy(array)
copyUser4=deepCopy(user4)
copyUser5=deepCopy(user5)
copyUser6=deepCopy(user6)
copyUser7=deepCopy(user7)
copystore=deepCopy(store)
//2.	Обратитесь к копии объекта user5 и измените значение свойства group на 12, а оценку по программированию измените на 10.
copyUser5.studies.department.group=12;
copyUser5.studies.exams[1].mark=10;
//3.	Обратитесь к копии объекта user6 и измените имя преподавателя.
copyUser6.name="Dmitriy";
//4.	Обратитесь к копии объекта user7 и измените количество страниц на 3 для статьи “About CSS” преподавателя Petr Ivanov.
copyUser7.studies.exams[1].professor.articles[1].pagesNumber=3
console.log(user7)
console.log(copyUser7)
//5.	 Замените все сообщения в объекте store на “Hello”.
let posts = store.state.profilePage.posts;
for (let i = 0; i < posts.length; i++) {
    posts[i].message = 'Hello';
  }