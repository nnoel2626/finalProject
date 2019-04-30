// wrap in IIFE to control scope
(function () {

    const baseURL = 'http://localhost:8080';

    function testAPIs() {
        // test list first
        var testId = '';
        var testJSON = {};

        // list
        callAPI('GET', '/api/rentalShop', null, null)
            .then((list) => {
                console.log('\n\n***************************\nlist results:');
                console.log(list);
                testId = list[0]._id;

                // create
                let formData = new FormData(document.getElementById('formId'))
                //let input = document.querySelector('input[type="file"]')
                //let data = new FormData()
                // data.append('image', input.files[0]);
                // data.append('title', 'My API Test Title');
                // data.append('description', 'This is an AJAX API test');
                callAPI('POST', '/api/rentalShop', null, formData)
                    .then((equipment) => {
                        equipmentId = equipment._id;
                        savedEquipment = equipment; // keep a handle to the created photo object
                        console.log('\n\n***************************\ncreate results:');
                        console.log(equipment);

                        // find
                        callAPI('GET', '/api/rentalShop/' + equipmentId, null, null)
                            .then((equipment) => {
                                console.log('\n\n***************************\nfind results:');
                                console.log(equipment);

                                // update
                                testJSON.description += ' appended by the AJAX API ';
                                callAPI('PUT', '/api/rentalShop/' + equipmentId, null, savedEquipment)
                                    .then((equipment) => {
                                        console.log('\n\n***************************\nupdate results:');
                                        console.log(equipment);

                                        //delete
                                        callAPI('DELETE', '/api/rentalShop/' + equipmentId, null, null)
                                            .then((result) => {
                                                console.log('\n\n***************************\ndelete result:');
                                                console.log(result);
                                            })
                                    });
                            });
                    });
            })
            .catch((err) => {
                console.error(err);
            });
    }


    async function callAPI(method, uri, params, body) {
        jsonMimeType = {
            'Content-type': 'application/json'
        }
        try {
            /*  Set up our fetch.
             *   'body' to be included only when method is POST
             *   If 'PUT', we need to be sure the mimetype is set to json
             *      (so bodyparser.json() will deal with it) and the body
             *      will need to be stringified.
             *   '...' syntax is the ES6 spread operator.
             *      It assigns new properties to an object, and in this case
             *      lets us use a conditional to create, or not create, a property
             *      on the object. (an empty 'body' property will cause an error
             *      on a GET request!)
             */
            var response = await fetch(baseURL + uri, {
                method: method, // GET, POST, PUT, DELETE, etc.
                ...(method == 'POST' ? {
                    body: body
                } : {}),
                ...(method == 'PUT' ? {
                    headers: jsonMimeType,
                    body: JSON.stringify(body)
                } : {})
            });
            return response.json(); // parses response to JSON
        } catch (err) {
            console.error(err);
            return "{'status':'error'}";
        }
    }

    // Calls our test function when we click the button
    //  afer validating that there's a file selected.
    document.querySelector('#testme').addEventListener("click", () => {
        var formdata = document.getElementById(formId);
        let input = document.getElementById('name')
        if (input.value) {
            testAPIs();
        } else {
            alert("please select an image file first");
        }
    });
})();