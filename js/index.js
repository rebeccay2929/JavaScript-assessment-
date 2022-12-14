
import { dates } from "./data.js";


const container = document.querySelector(".timeline");

const header = document.createElement("h1");
header.innerHTML = "MAYME'S BAKERY TIMELINE";
// container.appendChild(header);
document.body.appendChild(header);

// const h1 = document.createElement("H1");
// const textNode = document.createTextNode("Hello World");
// h1.appendChild(textNode);
// document.body.appendChild(h1);

for (let counter =0; counter < dates.length; counter++){


    if (counter % 2 == 0) {
        const div3 = document.createElement("div");
        div3.className = "timeline-item";

        // date box
        const emptyBox =  document.createElement("span");
        emptyBox.className= "empty-box-space";
        container.appendChild(emptyBox);

        const span =  document.createElement("span");
        span.className= "timeline-item-date";
        span.innerHTML = dates[counter].date;
        div3.appendChild(span);

        // line in the middle
        const div2 = document.createElement("div");
        div2.className = "timeline__middle";
        container.appendChild(div2);


        // box with content
        

        const title = document.createElement("h2");
        title.className = "timeline-item-title";
        title.innerHTML = dates[counter].title;
        div3.appendChild(title);

        const summaryText = document.createElement("p");
        summaryText.className = "timeline-item-summary";
        summaryText.innerHTML = dates[counter].summary;
        div3.appendChild(summaryText);

        const infoButton = document.createElement("button");
        infoButton.className = "timeline-item-more-info";
        infoButton.innerHTML = "More info";
        div3.appendChild(infoButton);
        container.appendChild(div3);

        //modal

        const modalId = document.createElement("div");
        modalId.setAttribute('id','modal-container');
        modalId.style.display = 'none';
        container.appendChild(modalId);
  
        const timeId = document.createElement("modal-date");
        timeId.setAttribute('id','modal-date');
        timeId.innerHTML = dates[counter].date;
        modalId.appendChild(timeId);

        const titleId = document.createElement("modal-title");
        titleId.setAttribute('id','modal-title');
        titleId.innerHTML = dates[counter].title;
        modalId.appendChild(titleId);
  
        const imageId = document.createElement("img");
        imageId.setAttribute('id','modal-image');
        imageId.src = dates[counter].image;
        modalId.appendChild(imageId);
  
        const description = document.createElement("p");
        description.setAttribute('id','modal-full-description');
        description.innerHTML = dates[counter].fullDescription
        modalId.appendChild(description);


       const close = document.createElement("span");
       close.setAttribute('id','modal-close-button')
       close.className = "close";
       close.innerHTML = "&times;"
       modalId.appendChild(close);
       container.appendChild(modalId);


      infoButton.addEventListener("click", openModal);
      close.addEventListener("click", closeModal);

      function closeModal()
      {modalId.style.display = 'none';}

      function openModal() 
     { modalId.style.display = 'block';}


       

    } else {

        // box with content

        
        const div3 = document.createElement("div");
        div3.className = "timeline-item";


        const span =  document.createElement("span");
        span.className= "timeline-item-date";
        span.innerHTML = dates[counter].date;
        div3.appendChild(span);


        const title = document.createElement("h2");
        title.className = "timeline-item-title";
        title.innerHTML = dates[counter].title;
        div3.appendChild(title);

        const summaryText = document.createElement("p");
        summaryText.className = "timeline-item-summary";
        summaryText.innerHTML = dates[counter].summary;
        div3.appendChild(summaryText);

        const infoButton = document.createElement("button");
        infoButton.className = "timeline-item-more-info";
        infoButton.innerHTML = "More info";
        div3.appendChild(infoButton);
        container.appendChild(div3);

        // line in the middle
        const div2 = document.createElement("div");
        div2.className = "timeline__middle";
        container.appendChild(div2);


        // date box
        const emptyBox =  document.createElement("span");
        emptyBox.className= "empty-box-space";
        container.appendChild(emptyBox);

        //modal

      const modalId = document.createElement("div");
      modalId.setAttribute('id','modal-container');
      modalId.style.display = 'none';
      container.appendChild(modalId);
  
      const timeId = document.createElement("modal-date");
      timeId.setAttribute('id','modal-date');
      timeId.innerHTML = dates[counter].date;
      modalId.appendChild(timeId);

      const titleId = document.createElement("modal-title");
      titleId.setAttribute('id','modal-title');
      titleId.innerHTML = dates[counter].title;
      modalId.appendChild(titleId);
  
      const imageId = document.createElement("img");
      imageId.setAttribute('id','modal-image');
      imageId.src = dates[counter].image;
      modalId.appendChild(imageId);
  
      const description = document.createElement("p");
      description.setAttribute('id','modal-full-description');
      description.innerHTML = dates[counter].fullDescription
      modalId.appendChild(description);


      const close = document.createElement("span");
      close.setAttribute('id','modal-close-button')
      close.className = "close";
      close.innerHTML = "&times;"
      modalId.appendChild(close);
      container.appendChild(modalId);



     infoButton.addEventListener("click", openModal);
     close.addEventListener("click", closeModal);

     function closeModal()
     {modalId.style.display = 'none';}

     function openModal() 
     { modalId.style.display = 'block';}


};
  
};

