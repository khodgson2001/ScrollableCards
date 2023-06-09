function createCard(title, image) {
    var card = document.createElement("div");
    card.setAttribute("id", "card");

    var cardHeader = document.createElement("div");
    cardHeader.setAttribute("id", "card-header");

    var cardImage = document.createElement("img");
    cardImage.setAttribute("class", "card-img");
    cardImage.setAttribute("src", image);

    var cardSubtitle = document.createElement("div");
    cardSubtitle.setAttribute("id", "card-subtitle");

    var cardSubtitleText = document.createElement("p");
    cardSubtitleText.setAttribute("class", "card-subtitle");
    cardSubtitleText.innerHTML = title;

    var cardOpenButton = document.createElement("div");
    cardOpenButton.setAttribute("class", "openButton");


    cardHeader.appendChild(cardImage);
    cardSubtitle.appendChild(cardSubtitleText);
    card.appendChild(cardHeader);
    card.appendChild(cardSubtitle);
    card.appendChild(cardOpenButton);



    //handle mouseover and mouseout events
    card.addEventListener("mouseover", function () {
        this.classList.add("hover");

        //show the open button
        cardOpenButton.style.display = "block";

    }
    );
    card.addEventListener("mouseout", function () {
        this.classList.remove("hover");

        //hide the open button
        cardOpenButton.style.display = "none";
    }
    );

    return card;

}

//when document is ready
document.addEventListener("DOMContentLoaded", function (event) {
    var cards = document.getElementById("cards");
    var card;

    var cardNumber = 8;
    
    //create 8 cards initially
    for (var i = 0; i < cardNumber; i++) {
        card = createCard("Title", "Placeholder Image.png");
        cards.appendChild(card);
    }


    document.addEventListener("drag", function(event) {
            // if card is dragged to left, scroll left
            if (event.clientX < 100) {
                cards.scrollLeft -= 10;
            }

            // if card is dragged to right, scroll right
            else if (event.clientX > window.innerWidth - 100) {
                cards.scrollLeft += 10;
            }

            
            //if the scroll is at the end, add a new card
            if (cards.scrollLeft >= cards.scrollWidth - cards.offsetWidth) {
                card = createCard("Title", "Placeholder Image.png");
                cards.appendChild(card);
            }
    });


});
