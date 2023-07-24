function generatePortfolio(data){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Generator</title>
        <link rel="stylesheet" href="./assets/css/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Cousine&family=Josefin+Sans&family=Poppins&family=Urbanist&display=swap" rel="stylesheet">
    </head>

    <body>
        <div class="greeting">
            <h2>Hello, <span id="name">${data.name}</span> from <span id="location">${data.location}</span></h2>
        </div>
        <div class="bio">
            <h4>${data.bio}</h4>
        </div>
        <div class="information">
            <ul class="list-group">
                <li class="list-group-item">LinkedIn URL: <span id="linkedin">${data.linkedin}</span></li>
                <li class="list-group-item">GitHub URL: <span id="github">${data.github}</span></li>
            </ul>
        </div>
    </body>

    </html>
`
}

module.exports = generatePortfolio;