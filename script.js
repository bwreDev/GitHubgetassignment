'use strict';

const baseURL = 'https://api.github.com/'


function displayResults(responseJson) {
    console.log(responseJson);
    $('#results-list').empty();

    for(let i = 0; i < responseJson.length; i++){
        $('#results-list').append(
            `<li><p>"${responseJson[i].name}"</p></li>
            <a href="${responseJson[i].html_url}">
            ${responseJson[i].html_url}</a>`
        )
    }
    
}

function getUsername(searchUser) {
    const url = baseURL + `users/${searchUser}/repos`;

    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log("Something went wrong!"))
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchUser = $('#js-search-user').val();
        getUsername(searchUser);
    });
}

$(watchForm);
console.log("App is running, waiting for input");