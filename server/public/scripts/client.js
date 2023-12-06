function onReady() {
    console.log('Hello from client.js');

    axios({
        method: 'GET',
        url: '/artist'
    })
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response);
            renderToDOM(response.data);

            // quotesFromServer will be an Array of quotes
            let quotesFromServer = response.data;
            let contentDiv = document.querySelector('#artistTableBody');
            for (let artist of quotesFromServer) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
            }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            alert('Something bad happened! Check the console for more details.')
        });

    // TODO Add Axios request for /songs and display on DOM
    function renderToDOM(quotes) {
        // Select the output element
        let outputElement = document.getElementById('output');
        // Empty the output element
        outputElement.innerHTML = '';
      
        for (let quote of quotes) {
          // Create a <li> for each quote and add it to outputElement
          outputElement.innerHTML += `
            <li>
              ${quote.text} by <i>${quote.author}</i>
            </li>
          `;
        }
}}

onReady();
