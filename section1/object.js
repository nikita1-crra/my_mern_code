const user ={ name : "Chris rasfield",email:"chris12@gmail.com",pasword:"12234",};
console.log(user.email);
user.age = 35;
console.log(user);
user.name="nikita";
console.log(user);
console.log(user['name']);

movie_name="Shang Chii";
release_date=" 2Sept,2021";
actor=['simu liu','tony leung'];
let movie_details ={ movie_name,release_date,actor};
console.log(movie_details);

delete movie_details.release_date;
console.log(movie_details);
