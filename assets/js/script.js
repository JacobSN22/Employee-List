//load gør at det bliver læst ind når siden bliver læst ind
addEventListener('load', fetchUserData);
    
function fetchUserData(){
    fetch('https://reqres.in/api/users/')
        .then(response => response.json())
        .then(users => {
            console.log(users.data);
            let output = '<h2>Lists of Users</h2>';
            output += '<section>';
            users.data.forEach(function(data) {
                const {id, email, first_name, last_name, avatar} = data
                output += `
                    <div>
                        <img src="${avatar}"></img> <br>
                        <h3>${first_name} ${last_name}</h3>
                        <a>${email}</a><br></br>
                                               
                    </div>
                `;
            });
            output += '</ul>'
            document.getElementById("response").innerHTML = output;
        });
}