// fetch('http://localhost:9000/graphql', {
//         method: "POST",
//         credentials: "include", // send cookies
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             //'Content-Type': 'application/json'
//             "Content-Type": "application/json" // otherwise $_POST is empty
//         },
//         body: JSON.stringify( {
//                     query: "mutation doSignUp($input:SignUpInput) {\n   signUp(input:$input)\n}\n",
//                     variables: {
//                         "id": "S1001",
//                         "color_variable": "RED",
//                         "input": {
//                             "email": "abc@abc",
//                             "firstName": "kannan",//                             "password": "pass@1234"
//                         }
//                     },
//                     operationName: "doSignUp"
//                 } )
//     })
//     .then(function(response) {
//         return response.json(); // .text();
//     })
//     .then(function(myJson) {
//         console.log(myJson);
//     });

//     // curl -X POST -H "Content-Type: application/json" -d "{ \"query\" : \" { greeting } \" }" http://localhost:9000/graphql
//     // curl -X POST -H "Content-Type: application/json" -d "{\"query\":\"mutation doSignUp($input:SignUpInput) {\\n   signUp(input:$input)\\n}\\n\",\"variables\":{\"id\":\"S1001\",\"color_variable\":\"RED\",\"input\":{\"email\":\"abc@abc\",\"firstName\":\"kannan\",\"password\":\"pass@1234\"}},\"operationName\":\"doSignUp\"}" http://localhost:9000/graphql