// this creates the db which doesn't exist until it's populated, no need to set up a db in terminal with mongodb.
use bucket_list_bucket;
// this will clear the db each time so we're starting fresh when we run the seeds.
db.dropDatabase();

// delcare collection name and populate it in one go.
db.bucket_list.insertMany([
  {
    title: "Travel By Hot Air Balloon",
    description: "Travel from Capadocia to Kathmandu via hot air balloon.",
    location: "Capadocia",
    deadline: "Before age 65",
    image: "https://r.hswstatic.com/w_907/gif/podcasts/stuffyoushouldknow-podcasts-wp-content-uploads-sites-16-2015-08-hotairballoons600x350.jpg",
    status: "pending"
  },
  {
    title: "Swim with the Sharks!",
    description: "Go to the bahamas and swim with the sharks on a cruise.",
    location: "Bahamas",
    deadline: 2019,
    status: "pending"
  },
  {
    title: "Read Moby Dick",
    description: "Read Moby Dick and see what all the fuss is about.",
    image: "https://cdn.shopify.com/s/files/1/0036/2812/products/Moby_blue.jpg",
    status: "pending"
  }
]);
