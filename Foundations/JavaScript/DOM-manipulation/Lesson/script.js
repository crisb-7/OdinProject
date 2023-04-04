const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey, I'm red!";
redParagraph.style.color = "red";

const blueHeading3 = document.createElement("h3");
blueHeading3.textContent = "I'm a blue h3!";
blueHeading3.style.color = "blue"

const newDiv = document.createElement("div");
// newDiv.style.cssText = "border: solid black; background-color: pink;";
newDiv.setAttribute("style", "border: solid black; background-color: pink;")

const childH1 = document.createElement("h1");
childH1.textContent = "I'm in a div!";

const childParagraph = document.createElement("p");
childParagraph.textContent = "ME TOO!";

newDiv.appendChild(childH1);
newDiv.appendChild(childParagraph);

container.appendChild(content);
container.appendChild(redParagraph);
container.appendChild(blueHeading3);
container.appendChild(newDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!!");

const button = document.querySelector("#button");
button.addEventListener("click", function (e) {
    console.log(e.target);
    e.target.style.background = "blue";
})