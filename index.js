document.addEventListener('DOMContentLoaded', function() {
    // const btn = document.getElementById('createBtn');
    const form = document.querySelector('form');

    // btn.addEventListener('click', function() {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(form)

        const newDiv = document.createElement('div');
        const newH2 = document.createElement('h2');
        const newP = document.createElement('p');
        const newH4 = document.createElement('h4');
        for (const pair of formData.entries()) {

            if (pair[0] == 'user_title') {
                newH2.textContent = pair[1];

            } else if (pair[0] == 'user_content') {
                newP.textContent = pair[1];

            } else if (pair[0] == 'author_name') {
                const date = new Date();
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let currentDate = `${day}-${month}-${year}`;

                newH4.textContent = "Posted on " + currentDate + ' by ' + pair[1];
            }
        }
        newDiv.appendChild(newH2);
        newDiv.appendChild(newH4);
        newDiv.appendChild(newP);
    
        // Append the new div to the body
        // const formDiv = document.querySelector('form');
        // const parentDiv = formDiv.parentNode;
        // parentDiv.appendChild(newDiv, formDiv);

        // const blogDiv = document.getElementById("blogs");
        // blogDiv.appendChild(newDiv);
        document.getElementById("blogs").insertBefore(newDiv, document.getElementById('blogs').firstChild);
    })
});