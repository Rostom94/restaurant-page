import pic1 from "./assets/picture1.jpg";

export function Home() {
  const pic = new Image();
  pic.src = pic1;
  const img_container = document.createElement("div");
  img_container.classList.add("img-container");
  img_container.append(pic);

  const content_container = document.createElement("div");
  content_container.classList.add("content-container");

  const p1 = document.createElement("p");
  const descripition =
    "This casual restaurant is a favorite for guests of all ages. Down a walkway framed with greenery, housed in the Family Entertainment Center, The Italian Restaurant serves family supper, offering authentic antipasti, salads, pastas, brick-oven pizzas, seafood and other classics­—both indoors and out.";
  p1.innerHTML = descripition;

  const h1 = document.createElement("h3");
  const hours_details = "Hours & Details";
  h1.innerHTML = hours_details;

  const p2 = document.createElement("p");
  const details = "Wednesday thru Sunday 5:30 PM – 9 PM";
  p2.innerHTML = details;

  const h2 = document.createElement("h3");
  const private_Heading = "Private Dining";
  h2.innerHTML = private_Heading;

  const p3 = document.createElement("p");
  const call =
    " To explore options for your next event, simply call 1(833) 253-5295.";
  p3.innerHTML = call;

  content_container.appendChild(p1);
  content_container.appendChild(h1);
  content_container.appendChild(p2);
  content_container.appendChild(h2);
  content_container.appendChild(p3);

  document.querySelector("#content").appendChild(img_container);
  document.querySelector("#content").appendChild(content_container);
}
