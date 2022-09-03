const key = `${process.env.REACT_APP_API_KEY}`;

/* 

MOVIE
Action          28
Adventure       12
Animation       16
Comedy          35
Crime           80
Documentary     99
Drama           18
Family          10751
Fantasy         14
History         36
Horror          27
Music           10402
Mystery         9648
Romance         10749
Science Fiction 878
TV Movie        10770
Thriller        53
War             10752
Western         37

*/

const CategoryList = [
  {
    title: "Trending",
    url: `?category=top_rated`,
  },
  {
    title: "Popular",
    url: `?category=popular`,
  },
  {
    title: "Action",
    url: `?category=action&genreId=28`,
    genreId: 28,
  },

  {
    title: "Comedy",
    url: `?category=comedy&genreId=35`,
    genreId: 35,
  },
  {
    title: "Crime",
    url: `?category=crime&genreId=80`,
    genreId: 80,
  },
  {
    title: "Horror",
    url: `?category=horror&genreId=27`,
    genreId: 27,
  },
  {
    title: "Fantasy",
    url: `?category=fantasy&genreId=14`,
    genreId: 14,
  },
  {
    title: "Family",
    url: `?category=family&genreId=10751`,
    genreId: 10751,
  },
  {
    title: "Music",
    url: `?category=music&genreId=10402`,
    genreId: 10402,
  },
];

export default CategoryList;
