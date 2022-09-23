const users = [
  {
    id:1,
    name:"js 1",
    isActive:true,
    age:40
  },
  {
    id:1,
    name:"js 2",
    isActive:true,
    age:30
  },
  {
    id:1,
    name:"js 3",
    isActive:false,
    age:20
  }
]
console.log(users)





let names = users.sort( (a,b) => (a.age<b.age ? -1 : 1))
.filter( (user) => user.isActive )
.map( (user) =>  user.age )




console.log(names)