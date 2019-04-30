/**
 * About:
 * -------
 * 
 * Course:      CSCI E-31 Spring 2019
 * Section:     Artie's Wednesday Night Section 
 * Topic:       Assignment #5: REST APIs
 * Author:      Arthur Barrett
 * Created:     April 2019
 * 
 * Description:
 * -------------
 * 
 * This is an example of client-side JS for testing my demo REST API. 
 * 
 * It is very similar to the example provided here:
 * 
 * https://github.com/Harvard-DCE-CSCIE3/cscie31-spring2019/blob/master/09.1-express-rest-api/public/js/api.js
 * 
 * The primary difference is that in my example app, there is no file upload, 
 * so there is no requirement to use FormData. We assume JSON for all requests.
 * 
 * Usage:
 * -------
 * 
 * (1) Include the javascript in the HTML test page (end of the body).
 * (2) Add a button with an id of runtests: <button id="runtests">Test REST API</button>
 * (3) Click the button to execute the tests. The results can be viewed in the developer console (see example below).
 * 
 * Example Console Output:
 * -----------------------
 * 
 * 13:07:30.627 testapi.js:55 run tests
 * 13:07:30.627 testapi.js:66 list
 * 13:07:30.628 testapi.js:106 api request http://localhost:3000/api/wiki {method: "GET", headers: {…}}
 * 13:07:30.699 testapi.js:110 api response 200 OK application/json; charset=utf-8
 * 13:07:30.700 testapi.js:116 api response data: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
 * 13:07:30.700 testapi.js:71 create
 * 13:07:30.700 testapi.js:106 api request http://localhost:3000/api/wiki {method: "POST", headers: {…}, body: "{"title":"Test Wiki Page","content":"Testing 1,2,3..."}"}
 * 13:07:30.765 testapi.js:110 api response 201 Created application/json; charset=utf-8
 * 13:07:30.766 testapi.js:116 api response data: {_id: "5caf7452a024d4165c2222b1", title: "Test Wiki Page", content: "Testing 1,2,3...", __v: 0}
 * 13:07:30.766 testapi.js:79 read
 * 13:07:30.767 testapi.js:106 api request http://localhost:3000/api/wiki/page/5caf7452a024d4165c2222b1 {method: "GET", headers: {…}}
 * 13:07:30.814 testapi.js:110 api response 200 OK application/json; charset=utf-8
 * 13:07:30.815 testapi.js:116 api response data: {_id: "5caf7452a024d4165c2222b1", title: "Test Wiki Page", content: "Testing 1,2,3...", __v: 0}
 * 13:07:30.816 testapi.js:84 update
 * 13:07:30.816 testapi.js:106 api request http://localhost:3000/api/wiki/page/5caf7452a024d4165c2222b1 {method: "PUT", headers: {…}, body: "{"title":"Test Wiki Page (UPDATED)","content":"Testing 1,2,3...( UPDATED)"}"}
 * 13:07:30.874 testapi.js:110 api response 200 OK application/json; charset=utf-8
 * 13:07:30.875 testapi.js:116 api response data: {_id: "5caf7452a024d4165c2222b1", title: "Test Wiki Page (UPDATED)", content: "Testing 1,2,3...( UPDATED)", __v: 0}
 * 13:07:30.876 testapi.js:93 delete
 * 13:07:30.876 testapi.js:106 api request http://localhost:3000/api/wiki/page/5caf7452a024d4165c2222b1 {method: "DELETE", headers: {…}}
 * 13:07:30.907 testapi.js:110 api response 204 No Content null
 * 13:07:30.907 testapi.js:61 Done!
 */
(function () {
    const BASE_URL = "http://localhost:3000";

    function runTests() {
        console.log("run tests");
        apiList()
            .then(objs => apiCreate())
            .then(obj => apiRead(obj._id))
            .then(obj => apiUpdate(obj))
            .then(obj => apiDelete(obj._id))
            .then(() => console.log("Done!"))
            .catch(err => console.error("Error: ", err));
    }

    function apiList() {
        console.log("list");
        return apiCall("GET", "api/rentalShop", null);
    }

    function apiCreate() {
        console.log("create");
        return apiCall("POST", "api/rentalShop/", {
            name: "TEL-mate",
            brand: "TECH",
            model: "TR-45667",
            serialNumber: "12345",
            price: "10.60",
            imageUrl: "/images/sound-system.jpg"
        });
    }

    function apiRead(id) {
        console.log("read")
        return apiCall("GET", "api/rentalShop/5ca7939ec6df8f091d77a81f" + id);
    }

    function apiUpdate(obj) {
        console.log("update");
        let id = obj._id;
        return apiCall("PUT", "api/rentalShop/5ca7939ec6df8f091d77a81f" + id, {
            title: obj.title + " (UPDATED)",
            content: obj.content + "( UPDATED)"
        });
    }

    function apiDelete(id) {
        console.log("delete");
        return apiCall("DELETE", "api/rentalShop/5ca7939ec6df8f091d77a81f" + id, null);
    }

    function apiCall(method, path, body) {
        let url = BASE_URL + path;
        let options = {};
        options.method = method;
        options.headers = {
            'Content-type': 'application/json'
        };
        if (body) {
            options.body = JSON.stringify(body);
        }

        console.log("api request", url, options);

        let fetchPromise = fetch(url, options).then(response => {
            const contentType = response.headers.get('Content-Type');
            console.log("api response", response.status, response.statusText, contentType);
            if (!response.ok) {
                throw new Error('api response error: ' + response.statusText);
            }
            if (contentType && contentType.indexOf("application/json") != -1) {
                return response.json().then((data) => {
                    console.log("api response data:", data);
                    return data;
                });
            }
            return response;
        });

        return fetchPromise;
    }

    document.getElementById("runtests").onclick = runTests;
})();