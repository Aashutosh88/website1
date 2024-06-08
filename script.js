body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 1rem;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

section {
    padding: 2rem 0;
    margin: 2rem 0;
    background: #fff;
}

#portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.portfolio-item {
    width: 30%;
    margin: 1rem 0;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background: #fff;
}

.portfolio-item img {
    max-width: 100%;
    height: auto;
}

form {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

form label {
    display: block;
    margin: 1rem 0 0.5rem;
}

form input, form textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
}

form button {
    display: inline-block;
    padding: 0.7rem 1.5rem;
    background: #333;
    color: #fff;
    border: none;
    cursor: pointer;
}

footer {
    text-align: center;
    padding: 1rem 0;
    background: #333;
    color: #fff;
}
