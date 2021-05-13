let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/travelt", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const peopleSeed = [
    {
        
        img: "https://www.cbs17.com/wp-content/uploads/sites/29/2017/12/brent-thicksten_36817793_ver1.0.jpg?w=650",
        username: "John Jacobs",
        password: "",
        age: 28,
        gender: "male",
        countries: ["Spain", "Portugal", "Morrocco"],
        bio: "Love that chicken from popies!"

    },
    {
        img: "https://cdn.britannica.com/35/187135-050-6C7A046A/Martha-Washington-lithograph-1876.jpg",
        username: "Martha Washington",
        password: "",
        age: 245,
        gender: "femal",
        countries: ["Canada"],
        bio: "My fingers got blisters on'em!"

    },
    {
        img: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRsG0MtoA_muZCmCbTBdnUowl37TrpJx4CqlQ3SFRPB1gHH2AZY3txY3sLMusHm",
        username: "Neils Bohr",
        password: "",
        age: 78,
        gender: "male",
        countries: ["Norway", "Finland","Sweden"],
        bio: "The only model that everyone knows, and I'll be damned if Hydrogen isn't a resonable strating point!"

    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Max_Planck_1933.jpg/1200px-Max_Planck_1933.jpg",
        username: "Max Planck",
        password: "",
        age: 145,
        gender: "male",
        countries: ["Isreal"],
        bio: "Without me everyone else is fundementally, immesurable!"

    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ernest_Rutherford_LOC.jpg/1200px-Ernest_Rutherford_LOC.jpg",
        username: "Earnest Rutherford",
        password: "",
        age: 150,
        gender: "male",
        countries: ["Australia"],
        bio: "Some might call me the gold standard."

    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/1200px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
        username: "Albert Einstien",
        password: "",
        age: 142,
        gender: "male",
        countries: ["Switzerland"],
        bio: "There is nothing special about general relativity.  Unless your standing too close to your fat mama!"

    },
    {
        img: "https://www.cbs17.com/wp-content/uploads/sites/29/2017/12/brent-thicksten_36817793_ver1.0.jpg?w=650",
        username: "John Jacobs",
        password: "",
        age: 28,
        gender: "male",
        countries: ["Spain", "Portugal", "Morrocco"],
        bio: "Love that chicken from popies!"

    },
    {
        img: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRzYYo2wHtPDeN9RtviG3Zl6z07q1y1UWr_LqrgM15zWBFP_7p4pMhNoM304u43",
        username: "James Maxwell",
        password: "",
        age: 180,
        gender: "male",
        countries: ["Turkey"],
        bio: "There is a spark between us certainly.  Dont Resist the current flow of our attraction, we will be Volting into some great travles."

    },
    {
        img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTesePmFDRKADhLEaLs7pOTfI1Y3DgWXlgF7efaGawpsSL9Q4pDaljHw-kpcYq9",
        username: "Marie Curie",
        password: "",
        age: 100,
        gender: "female",
        countries: ["China"],
        bio: "I wouldn't want to let our time for our trip decay, we must make haste!"

    },
    {
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSe5Pd5NexfTTergztcHz5j-bcTNQIX7YnefrlkDRTjOw2JRf5qbThRpgQDEZ6R",
        username: "Rosalind Franklin",
        password: "",
        age: 78,
        gender: "female",
        countries: ["Thialand"],
        bio: "Fuck Watson!"

    },
    {
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTTfAP-a6o7isqKQjh8yBZQfX3oavCInu_5zxV222Qb4QDrC7PfgDim760SRsh5",
        username: "Lise Meitner",
        password: "",
        age: 118,
        gender: "female",
        countries: ["Argentina"],
        bio: "I am a real heavy hitter when it comes to metal!"

    },
    {
        img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRlKMt4_ecbEyUp6IHQhvHnSAw7Ho18HpSLrLYtK2DXFHntUTwDqvhN5AaSF98d",
        username: "J. Robert Oppenheimer",
        password: "",
        age: 80,
        gender: "male",
        countries: ["Japan"],
        bio: "I look forward to being life.  I am the see'er of worlds!  Take a fun ride with me! "

    },
    {
        img: "https://cdn.britannica.com/56/21456-050-E0F6BDA6/Chien-Shiung-Wu-1957.jpg",
        username: "Chien-Shiung Wu",
        password: "",
        age: 109,
        gender: "female",
        countries: ["Zimbabwe"],
        bio: "Simply put, dont stand too close, im not infusive but maybe diffusive."

    },
    {
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKl9jxBUro2ci3_PtL5Boy_6hc7rAPXGDAt817ePhfb9GFVNa2",
        username: "Mae Jemison",
        password: "",
        age: 75,
        gender: "female",
        countries: ["ISS"],
        bio: "Im damn near out of this world!"

    },
    {
        img: "https://www.successacademies.org/app/uploads/2019/05/Shirley-Ann-Jackson.jpg",
        username: "Shirley Ann Jackson",
        password: "",
        age: 74,
        gender: "female",
        countries: ["AnyWhere but here!"],
        bio: "Imagine, 5 years at MIT!? Get me out of this place!"

    },
    {
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSDSha4a5ytcx3xXNAjJhhcxUOeVYv-NY-fl3QuE5Z9ioR-9H2K6vN3YkmEYOhs",
        username: "Nina Simone",
        password: "",
        age: 89,
        gender: "female",
        countries: ["Uragua"],
        bio: "Don't trust the CIA!"

    },
    {
        img: "https://media.newyorker.com/photos/597611914867016af4a67cb2/1:1/w_2757,h_2757,c_limit/Aguirre-Octavia-Butler_01.jpg",
        username: "Octavia Butler",
        password: "",
        age: 74,
        gender: "female",
        countries: ["Kenya"],
        bio: "Lets get wild with these parables!"

    },
    {
        img: "https://dazedimg-dazedgroup.netdna-ssl.com/1582/azure/dazed-prod/1230/8/1238519.jpg",
        username: "Maya Angelou",
        password: "",
        age: 97,
        gender: "female",
        countries: ["India"],
        bio: "This cage bird don't sing, I'm free and traveling!"

    },
    {
        img: "https://i.ytimg.com/vi/tjo0dWtPa2c/maxresdefault.jpg",
        username: "Neil Degrass Tyson",
        password: "",
        age: 62,
        gender: "male",
        countries: ["Europa"],
        bio: "I can ruin any sci-fi movie!"

    },
    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Percy_Lavon_Julian.jpg/220px-Percy_Lavon_Julian.jpg",
        username: "Percy Lavon Julian",
        password: "",
        age: 122,
        gender: "male",
        countries: ["Russia"],
        bio: "Im a great adventure buddy!  Extraction is the name of my game!"

    },
    {
        img: "https://uncyclopedia.ca/w/images/thumb/4/4f/Mendeleev2.gif/240px-Mendeleev2.gif",
        username: "Dmitri Medvedev",
        password: "",
        age: 196,
        gender: "male",
        countries: ["Poland, Turkey"],
        bio: "The basic building blocks of fun starts with you!"

    },
    {
        img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSIa5HD9IWh4JSrUgRtI1tD_KZBD0Uf5gFFTXj6hG4XgRAza7UZhPFgHgSXD5b0",
        username: "katherine Johnson",
        password: "",
        age: 103,
        gender: "female",
        countries: ["Cuba, Venezuala"],
        bio: "Not everything that goes up must come down!"

    },
    {
        img: "https://www.sciencehistory.org/sites/default/files/styles/rte_full_width/public/rte/marie_maynard_daly_lab.jpg?itok=9_1J8myN",
        username: "Marie Maynard Daly",
        password: "",
        age: 100,
        gender: "female",
        countries: ["Tonga"],
        bio: "A pipette a day keeps the Dr. away!"

    },
    {
        img: "https://i.guim.co.uk/img/media/3f223270fcae8698a3ebaf6a75916bff3df94f6e/0_225_1642_985/master/1642.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=321f81918a9318f355e62163ad0425d1",
        username: "W.E.B Du Bois",
        password: "",
        age: 153,
        gender: "male",
        countries: ["Indonesia"],
        bio: "I know a thing or two about souls."

    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYhaUr6WaEKW8p0qDBmlpftBpwUOgIMYxzWyBAvla_156FUky",
        username: "James Baldwin",
        password: "",
        age: 97,
        gender: "male",
        countries: ["France"],
        bio: "Not everything that is faced can be changed, but nothing can be changed until it is faced."

    },
    {
        img: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRB0mPY9LIP-FBzz__c5FnXqGeYlpSs86DMbB9jnmuevgXu8YQFppY8xCe0xuBQ",
        username: "Steve Yzerman",
        password: "",
        age: 56,
        gender: "male",
        countries: ["Spain", "Portugal", "Morrocco"],
        bio: "'You make all the dates you plan for that you want to go to a place to be there for!'  -Wayne Gretzkey"

    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Carl_Sagan_Planetary_Society_cropped.png",
        username: "Carl Sagan",
        password: "",
        age: 87,
        gender: "male",
        countries: ["Spain", "Portugal", "Morrocco"],
        bio: "There is nothing more to say."

    },
    {
        img: "https://api.time.com/wp-content/uploads/2018/09/bert-ernie-sesame-street.jpg",
        username: "Bert and Ernie",
        password: "",
        age: 80,
        gender: "non",
        countries: [],
        bio: "We would prefer to stay on our couch, thank you"

    },
    {
        img: "https://www.usmagazine.com/wp-content/uploads/1334063981_christina-aguilera-2002-zoom.jpg?quality=86&strip=all",
        username: "Christina Aguilera",
        password: "",
        age: 28,
        gender: "female",
        countries: ["Spain", "Portugal", "Morrocco"],
        bio: "This doesnt make any sense."

    }
]

db.Users.deleteMany({})
  .then(() => db.Test.collection.insertMany(peopleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });