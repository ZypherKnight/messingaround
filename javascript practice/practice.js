let users = [{
    username: `John`,
    email: `johnalfonso.trinidad@gmail.com`,
    password: `test2311`,
    subscriptionStatus: `Free`,
    discordId: `fzfzfz#1010`,
    lessonsCompleted: [0, 1, 3]
},
{
    username: `Emman`,
    email: `emmanuel.martiniii@gmail.com`,
    password: `test5221`,
    subscriptionStatus: `Free`,
    discordId: `yeetyeethooray#1010`,
    lessonsCompleted: [1, 4]
},
{
    username: `Julez`,
    email: `julez@gmail.com`,
    password: `te1111st5221`,
    subscriptionStatus: `Free`,
    discordId: `sadadaeethooray#1010`,
    lessonsCompleted: [6, 3]
}

];

// function login(email, password){
//     for(let i = 0; i < users.length; ++i){
//         console.log(`this ran`)
//         if (users[i].email === email){
//             console.log(users[i]);
//             if (users[i].password === password){
//                 console.log('log user in');
//             }
//             else {
//                 console.log(`incorrect password, try again`)
//             }
//         }
//         return;
//     }
//     console.log(`Email does not exist`)
// }


function register(user) {
    users.push(user);
}

register({

  username: `LavaPopxD`,
  email: `lavapopxd@gmail.com`,
  password: `lavapopxd1223`,
  subscriptionStatus: `free`,
  discordId: `LavaPopxD#1231`,
  lessonsCompleted: [1, 2, 3]
 }
);

console.log(users);


