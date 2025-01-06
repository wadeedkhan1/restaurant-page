const createContactpage = () => {

    const content = document.querySelector("#content")
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content');

    const heading = document.createElement("h1")
    heading.textContent = "Contact Us"
    pageContent.appendChild(heading)

    const contacts = document.createElement('div')

    //contact 1
    const contact1 = document.createElement('div');
    contact1.classList.add('contact');
    const contact1Name = document.createElement('h4');
    contact1Name.textContent = "Name: John Doe";
    const contact1Email = document.createElement('p');
    contact1Email.textContent = "Email: john.doe@example.com";
    const contact1Phone = document.createElement('p');
    contact1Phone.textContent = "Phone: (123) 456-7890";

    contact1.appendChild(contact1Name);
    contact1.appendChild(contact1Email);
    contact1.appendChild(contact1Phone);
    contacts.appendChild(contact1);


    //contact 2
    const contact2 = document.createElement('div');
    contact2.classList.add('contact');
    const contact2Name = document.createElement('h4');
    contact2Name.textContent = "Name: Jane Smith";
    const contact2Email = document.createElement('p');
    contact2Email.textContent = "Email: jane.smith@example.com";
    const contact2Phone = document.createElement('p');
    contact2Phone.textContent = "Phone: (987) 654-3210";

    contact2.appendChild(contact2Name);
    contact2.appendChild(contact2Email);
    contact2.appendChild(contact2Phone);
    contacts.appendChild(contact2);

    //contact 3
    const contact3 = document.createElement('div');
    contact3.classList.add('contact');
    const contact3Name = document.createElement('h4');
    contact3Name.textContent = "Name: Alice Brown";
    const contact3Email = document.createElement('p');
    contact3Email.textContent = "Email: alice.brown@example.com";
    const contact3Phone = document.createElement('p');
    contact3Phone.textContent = "Phone: (555) 123-4567";

    contact3.appendChild(contact3Name);
    contact3.appendChild(contact3Email);
    contact3.appendChild(contact3Phone);
    contacts.appendChild(contact3);

    pageContent.appendChild(contacts)
    content.appendChild(pageContent)
}

export default createContactpage;