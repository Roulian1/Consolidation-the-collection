const collection = [
    {
        title : "Doomed to be Cannon Fodder",
        author :"Whistling Night Rain",
        chapters : 293,
        status : "completed",
        picture : "https://cdn.novelupdates.com/images/2017/05/CmQUN1aCWceEWW0WAAAAAH_nNXg475175014.jpg",
        genre : ["Comedy","Fantasy", "Josei", "Romance", "Slice of Life", "Supernatural"],
        releaseYear : 2015,
    },
    {
        title : "A Will Eternal",
        author :"Er Gen",
        chapters : 1315,
        status : "completed",
        picture : "https://cdn.novelupdates.com/images/2016/06/betacover.jpg",
        genre : ["Action", "Adventure", "Comedy", "Harem", "Xianxia"],
        releaseYear : 2016,
    },
    {
        title : "The Rebirth of the Malicious Empress of Military Lineage",
        author :"Qian Shan Cha Ke",
        chapters : 235,
        status : "completed",
        picture : "https://cdn.novelupdates.com/images/2016/12/IMG_4707.jpg",
        genre : ["Fantasy", "Historical", "Josei", "Martial Arts", "Mature", "Romance"],
        releaseYear : 2016,
    },
    {
        title : "My Disciple Died Yet Again",
        author :"Yóu qián",
        chapters : 393,
        status : "completed",
        picture : "https://cdn.novelupdates.com/images/2015/10/t7_562994.jpg",
        genre : ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Josei", "Martial Arts", "Romance", "Xianxia"],
        releaseYear : 2014,
    },
    {
        title : "Rebirth of the Thief Who Roamed The World",
        author :"Mad Snail",
        chapters : 995,
        status : "completed",
        picture : "https://cdn.novelupdates.com/images/2015/08/chongshengzhi.jpg",
        genre : ["Action", "Adventure", "Fantasy", "Martial Arts", "Supernatural"],
        releaseYear : 2010,
    },
    {
        title : "Quickly Wear the Face of the Devil",
        author :"Feng Liu Shu Dai",
        chapters : 181,
        status : "completed",
        picture : "https://cdn.novelupdates.com/images/2021/12/Quickly-Wear-the-Face-of-the-Devil_1640588524.jpg",
        genre : ["Action", "Adult", "Adventure", "Comedy", "Drama", "Fantasy", "Romance", "School-Life", "Sci-fi", "Yaoi"],
        releaseYear : 2015,
    },
    {
        title : "The Rebirth of an Ill-Fated Consort",
        author :"Qian Shan Cha Ke",
        chapters : 259,
        status : "completed",
        picture : "https://cdn.novelupdates.com/images/2018/01/illfated2.jpg",
        genre : ["Drama", "Fantasy", "Mature", "Psychological", "Romance"],
        releaseYear : 2014,
    },
    {
        title : "Side Character Transmigrations: The Final Boss is No Joke",
        author :"Mo Ling",
        chapters : 2040,
        status : "completed",
        picture : "https://cdn.novelupdates.com/images/2018/06/Side-Character-Transmigrations-The-Final-Boss-is-No-Joke.png",
        genre : ["Action", "Adventure", "Comedy", "Fantasy", "Martial Arts", "Mature", "Mystery", "Romance", "Sci-fi", "Supernatural"],
        releaseYear : 2016,
    },
    {
        title : "Crossing to the Future, it’s Not Easy to Be a Man",
        author :"Madam Ru",
        chapters : 1501,
        status : "hiatus",
        picture : "https://cdn.novelupdates.com/images/2021/02/Crossing-to-the-Future-its-Not-Easy-to-Be-a-Man.jpg",
        genre : ["Action", "Adventure", "Comedy", "Josei", "Martial Arts", "Mecha", "Sci-fi"],
        releaseYear : 2013,
    },
    {
        title : "After Being Transported into a Book, I Adopted the Villain",
        author :"Sweet And Greasy Millet Porridge",
        chapters : 88,
        status : "completed",
        picture : "https://cdn.novelupdates.com/images/2019/07/0067qreMgy1g0zd9s93aij30b40fkwjs.jpg",
        genre : ["Drama", "Romance", "Yaoi"],
        releaseYear : 2019,
    },
];

const container = document.getElementById('container');

collection.forEach((result) => {

  // Construct card content
  const content = `
      <div class="card-body">

        <img class="cover" src="${result.picture}" alt="">
        <h3> Genre: ${result.genre}</h3>
        <h2>Tiltle: ${result.title}</h2>
        <p>Author: ${result.author}</p>
        <p>Year of release: ${result.releaseYear}</p>
        <p>Status: ${result.status}</p>
        <h4>Chapters: ${result.chapters}</h4>
        <hr size:"10">
        <a href="https://www.novelupdates.com/viewlist/3404/">
        <img class="footer" src="https://www.bing.com/th?id=ODLS.c406d731-c2a8-4480-8d55-5643ba57d57e&w=32&h=32&o=6&pid=13.1" alt="">
        </a>

      </div>
  `;

  // Append newyly created card element to the container
  container.innerHTML += content;
})