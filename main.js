function addContact() {
  let name = prompt("Enter your name");
  let surname = prompt("Enter your surname");
  let number = +prompt("Enter your number");

  let contact = {
    name: name,
    surname: surname,
    number: number,
  };
  fetch("http://localhost:8000/contacts", {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  alert("SUCCESS");
}

// read
async function readContacts() {
  let res = await fetch("http://localhost:8000/contacts");
  let data = await res.json();
  let list = document.querySelector("ul");
  console.log(list);
  list.innerHTML = "";
  data.forEach(item => {
    list.innerHTML += `
    <li style="border-bottom: 2px solid black; width:20%;">
    <p>ID: ${item.id}<p>
    <p>Name: ${item.name}<p>
    <p>Surname: ${item.surname}<p>
    <p>Number: ${item.number}<p>
    </li>
    `;
  });
}

// update
function updateContact() {
  let contactId = +prompt("Enter contact id");
  let newName = prompt("Enter new name");
  fetch(`http://localhost:8000/contacts/${contactId}`, {
    method: "PATCH",
    body: JSON.stringify({ name: newName }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  alert("OK");
  readContacts();
}

// delete
async function deleteContact() {
  let contactId = +prompt("Enter your contact ID");
  await fetch(` http://localhost:8000/contacts/${contactId}`, {
    method: "DELETE",
  });
  alert("OK");
  readContacts();
}

// search
// let searchInp = document.querySelector("#search-inp");
// searchInp.addEventListener("input", () => {
//   search = searchInp.value;
// });
// ? не получается, что-то не то
