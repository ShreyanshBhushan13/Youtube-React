const GOOGLE_API_KEY="AIzaSyBNjGahxGvoSGYx-NNkHxRG_bByRCo98CE";

export const OFFSET_LIVE_ChAT=10;


export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const findPrime = (num) => {
    let i,
      primes = [2, 3],
      n = 5;
    const isPrime = (n) => {
      let i = 1,
        p = primes[i],
        limit = Math.ceil(Math.sqrt(n));
      while (p <= limit) {
        if (n % p === 0) {
          return false;
        }
        i += 1;
        p = primes[i];
      }
      return true;
    };
    for (i = 2; i <= num; i += 1) {
      while (!isPrime(n)) {
        n += 2;
      }
      primes.push(n);
      n += 2;
    }
    return primes[num - 1];
  };








