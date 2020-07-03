class Link {
    constructor(title, url, author) {
        let absoluteUrl = url;
        if (!absoluteUrl.startsWith("http://") && !absoluteUrl.startsWith("http://")){
            absoluteUrl = `http://${absoluteUrl}`;
        }
        this.title = title;
        this.url = absoluteUrl;
        this.author = author;
    }
        describe() {
            return `${this.title} (${this.url}). Author: ${this.author}`;
        }
}

const linksCollection = []
linksCollection.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
linksCollection.push(new Link("Reddit", "https://reddit.com", "Thomas"));
linksCollection.push(new Link("Google", "google.com", "Daniel"));

const showLinks = () => {
    for (let i = 0; i < linksCollection.length; i++) {
        alert(`${i + 1}: ${linksCollection[i].describe()}`);
} 
}

let initialResponse;
while (initialResponse !== "0") {
    initialResponse = prompt(`Choose an option: \n 1 : Show links. \n 2 : Add a link. \n 3 : Remove a link. \n 0 : Quit.`); 
    switch (initialResponse){
        case "1" : {
            if (linksCollection.length > 0) {
            showLinks();
            } else {
                alert("The collection is empty so there are no links to show.");
            }
          break;
        }
        case "2" : {
            let title = prompt(`What is the title of the link?`);
            let url = prompt(`Enter the url of you link.`);
            let author = prompt(`What is your name? You're the author of this link.`);
            const newLink = new Link (title, url, author);
            linksCollection.push(newLink);
            showLinks();
          break;
        }
        case "3" : {
            if (linksCollection.length > 0) {
            let indexDelete = Number(prompt(`What is the index of the link you want to delete?\nThere are only ${linksCollection.length} links in the collection. \nPress 0 to go back.`));
                if (indexDelete == 0) {
                    initialResponse = prompt(`Choose an option: \n 1 : Show links. \n 2 : Add a link. \n 3 : Remove a link. \n 0 : Quit.`);
                }else if (indexDelete < 0 || indexDelete > linksCollection.length) {
                    alert(`Input a number between 1 and ${linksCollection.length}`);
                    indexDelete = Number(prompt(`What is the index of the link you want to delete?\nThere are only ${linksCollection.length} links in the collection. \nPress 0 to go back.`));
                }else {
                    linksCollection.splice(`${indexDelete - 1}`, 1); 
                    showLinks();
                }
            } else {
                alert("No links to remove");
            }
          break;
        } 
    }
}
alert("See you later!")
