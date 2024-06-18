function filter() {
    const physicsCheckbox = document.getElementById('Physics');
    const chemistryCheckbox = document.getElementById('Chemistry');
    const mathsCheckbox = document.getElementById('Maths');

    const handleCheckboxChange = () => {
        const selectedSubjects = [];
        if (physicsCheckbox.checked) {
            selectedSubjects.push('Physics');
        }
        if (chemistryCheckbox.checked) {
            selectedSubjects.push('Chemistry');
        }
        if (mathsCheckbox.checked) {
            selectedSubjects.push('Maths');
        }
        displayBooks(selectedSubjects);
    };

    if (physicsCheckbox) {
        physicsCheckbox.addEventListener('change', handleCheckboxChange);
    }
    if (chemistryCheckbox) {
        chemistryCheckbox.addEventListener('change', handleCheckboxChange);
    }
    if (mathsCheckbox) {
        mathsCheckbox.addEventListener('change', handleCheckboxChange);
    }

}

function displayBooks(selectedSubjects) {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = '';

    books.forEach((book) => {
        if (selectedSubjects.includes(book.subject)) {
            createBookWidget(book);
        }
    });
}

function createBookWidget(book) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-widget';
    bookDiv.onclick = () => {
        window.location.href = book.link;
    };

    const bookImg = document.createElement('img');
    bookImg.src = book.image;
    bookImg.alt = book.name;
    bookDiv.appendChild(bookImg);

    const bookName = document.createElement('h3');
    bookName.textContent = book.name;
    bookName.style.fontFamily = "Cinzel, serif";
    bookDiv.appendChild(bookName);

    const bookAuthor = document.createElement('div');
    bookAuthor.className = 'author';
    bookAuthor.style.fontFamily = "Cinzel, serif";
    bookAuthor.textContent = 'Author: ' + book.author;
    bookDiv.appendChild(bookAuthor);

    document.getElementById('book-container').appendChild(bookDiv);
}

// Sample books array
const books = [
    {
        name: 'The Physics Book: Big Ideas Simply Explained',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjM3iRGy1S1rvblYr0PLholYqVMWmnYxYH_SxNAOb8yxPO4ztv',
        author: 'Jim Al-Khalili',
        subject: 'Physics',
        link: "https://www.amazon.in/Physics-Book-Ideas-Simply-Explained/dp/0241412722"
    },
    {
        name: 'A Brief History of Time',
        image: 'https://m.media-amazon.com/images/I/71X3vjoclxL._AC_UF1000,1000_QL80_.jpg',
        author: 'Stephen Hawking',
        subject: 'Physics',
        link: "https://www.amazon.in/Brief-History-Time-Black-Holes/dp/0553175211/ref=asc_df_0553175211/?tag=googleshopdes-21&linkCode=df0&hvadid=397006573861&hvpos=&hvnetw=g&hvrand=8976285181220252840&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9300526&hvtargid=pla-364195445484&psc=1&mcid=0f8a27f49d0b3975a78455a6d9c4c104&ext_vrnc=hi"
    },
    {
        name: 'Physics for degree Students',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1o_g_ZQBi6ZnzOxnYaG6bZyZ1DBg5NMSF-Q&s',
        author: 'C L Arora',
        subject: 'Physics',
        link: "https://www.amazon.in/Physics-Degree-Students-B-Sc-First/dp/9352837282"
    },
    {
        name: 'The Golden book of Chemistry Experiments',
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1326615072i/2478325.jpg',
        author: 'Robert Brent',
        subject: 'Chemistry',
        link: "https://www.amazon.in/Golden-Book-Chemistry-Experiments-Laboratory/dp/1447862236"
    },
    {
        name: 'Organic Chemistry',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/343883124/ST/DB/VV/121408955/organic-chemistry-7e-paperback-book.jpg',
        author: 'Robert Thornton',
        subject: 'Chemistry',
        link: 'https://www.amazon.in/Organic-Chemistry-Morrison-Boyd-Bhattacharjee/dp/8131704815'
    },
    {
        name: 'General Chemistry',
        image: 'https://m.media-amazon.com/images/I/71X3vjoclxL._AC_UF1000,1000_QL80_.jpg',
        author: 'Linus Pauling',
        subject: 'Chemistry',
        link: 'https://www.amazon.in/General-Chemistry-Dover-Books/dp/0486656225'
    },
    {
        name: 'The Maths Book: Big Ideas Simply Explained',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjM3iRGy1S1rvblYr0PLholYqVMWmnYxYH_SxNAOb8yxPO4ztv',
        author: 'Jim Al-Khalili',
        subject: 'Maths',
        link: 'https://www.amazon.in/Math-Book-Big-Ideas/dp/1465480242'
    },
    {
        name: 'Integral Calculus',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhjwx_mUT-oBgH0y-f4bJkKbjzw7Bby7kAA&s',
        author: 'H B Philips',
        subject: 'Maths',
        link: 'https://www.amazon.in/Calculus-Phillips-H-Mathematics/s?rh=n%3A4149722031%2Cp_27%3APhillips-H'
    },
    {
        name: 'Higher Algebra',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqTeE65IjumLDR_K6VFXO2Fv6iI05JdWfVg&s',
        author: 'Hall & Knight',
        subject: 'Maths',
        link: "https://www.amazon.in/HIGHER-ALGEBRA-Hall/dp/935176253X"
    },
];

filter();
