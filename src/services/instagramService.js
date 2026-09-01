/**
 * Instagram Service Layer for MAA MALA™
 * Official Meta / Instagram Graph API Data Fetching with Caching & Rate-limit Management.
 */

const CACHE_KEY = 'maa_mala_instagram_cache_v2';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 Minutes Cache TTL

/**
 * Default fallback media feed for @maa.mala (used when Instagram API credentials are not yet configured)
 */
const DEFAULT_INSTAGRAM_FEED = [
  {
    id: '179840294829104',
    caption: 'പാട്ടും കഥകളുമായി കക്കാടംപൊയിലിൽ കൂടിയാലോ? ⛺️🌲 Join Strangers Camp this Sep 05-06! #StrangersCamp #Kakkadampoyil #MAAMALA',
    media_type: 'VIDEO',
    media_url: '/images/strangers_camp.jpg',
    thumbnail_url: '/images/strangers_camp.jpg',
    permalink: 'https://www.instagram.com/maa.mala_/',
    timestamp: '2026-09-01T12:00:00Z',
    username: 'maa.mala_',
    category: 'Strangers Camp',
    likesCount: '142K',
  },
  {
    id: '179840294829105',
    caption: 'Walking through misty grasslands at Kakkadampoyil with the camper crew! ⛰️☁️ Fresh mountain air & campfire vibes with @maa.mala_.',
    media_type: 'VIDEO',
    media_url: '/images/misty_trek.jpg',
    thumbnail_url: '/images/misty_trek.jpg',
    permalink: 'https://www.instagram.com/maa.mala_/',
    timestamp: '2026-08-30T15:30:00Z',
    username: 'maa.mala_',
    category: 'Stream Hiking',
    likesCount: '124K',
  },
  {
    id: '179840294829106',
    caption: 'Hidden deep inside the lush green canopy 🍃 Wake up to mist & birdsong at MAA MALA forest treehouse stay.',
    media_type: 'CAROUSEL_ALBUM',
    media_url: '/images/treehouse.jpg',
    thumbnail_url: '/images/treehouse.jpg',
    permalink: 'https://www.instagram.com/maa.mala_/',
    timestamp: '2026-08-28T10:15:00Z',
    username: 'maa.mala_',
    category: 'Treehouse Stay',
    likesCount: '98K',
  },
  {
    id: '179840294829107',
    caption: 'When fog rolls over the clay tile roofs of Kakkadampoyil 🌧️☕️ Unplug from city noise and soak in peaceful mountain vibes.',
    media_type: 'IMAGE',
    media_url: '/images/misty_cottage.jpg',
    thumbnail_url: '/images/misty_cottage.jpg',
    permalink: 'https://www.instagram.com/maa.mala_/',
    timestamp: '2026-08-25T18:45:00Z',
    username: 'maa.mala_',
    category: 'Misty Retreat',
    likesCount: '115K',
  },
  {
    id: '179840294829108',
    caption: 'Gathering around the night campfire, singing songs and sharing stories under the stars ✨🔥 #Campfire #NightOutdoors',
    media_type: 'VIDEO',
    media_url: '/images/camping1.png',
    thumbnail_url: '/images/camping1.png',
    permalink: 'https://www.instagram.com/maa.mala_/',
    timestamp: '2026-08-22T21:00:00Z',
    username: 'maa.mala_',
    category: 'Campfire Jam',
    likesCount: '78K',
  },
];

/**
 * Get cached Instagram feed from Session Storage if valid
 */
function getCachedInstagramData() {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const { timestamp, data } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL_MS) {
      return data;
    }
  } catch (err) {
    console.warn('Instagram Cache Read Error:', err);
  }
  return null;
}

/**
 * Save Instagram feed to Session Storage
 */
function setCachedInstagramData(data) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        data,
      })
    );
  } catch (err) {
    console.warn('Instagram Cache Write Error:', err);
  }
}

/**
 * Fetch live Instagram posts from official Meta Graph API or Basic Display API
 */
export async function fetchLiveInstagramFeed() {
  const cachedData = getCachedInstagramData();
  if (cachedData) {
    return { data: cachedData, source: 'cache', isLive: true };
  }

  // Retrieve environment credentials securely
  const accessToken =
    import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN ||
    import.meta.env.INSTAGRAM_ACCESS_TOKEN;
  const userId =
    import.meta.env.VITE_INSTAGRAM_USER_ID ||
    import.meta.env.INSTAGRAM_USER_ID ||
    'me';

  if (!accessToken) {
    console.info(
      '[MAA MALA Instagram Service] No Meta/Instagram Access Token provided. Using official fallback feed for @maa.mala.'
    );
    return {
      data: DEFAULT_INSTAGRAM_FEED,
      source: 'fallback',
      isLive: false,
      setupRequired: true,
    };
  }

  try {
    const url = `https://graph.instagram.com/v12.0/${userId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${accessToken}&limit=12`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Instagram API Error: Status ${response.status}`);
    }

    const json = await response.json();
    if (!json.data || !Array.isArray(json.data)) {
      throw new Error('Invalid Instagram API Response structure');
    }

    const formattedData = json.data.map((item) => ({
      id: item.id,
      caption: item.caption || 'Live update from @maa.mala_',
      media_type: item.media_type,
      media_url: item.media_url || item.thumbnail_url,
      thumbnail_url: item.thumbnail_url || item.media_url,
      permalink: item.permalink || `https://www.instagram.com/maa.mala_/`,
      timestamp: item.timestamp,
      username: item.username || 'maa.mala_',
      category: item.media_type === 'VIDEO' ? 'Reels & Video' : 'Camp Moments',
    }));

    setCachedInstagramData(formattedData);
    return { data: formattedData, source: 'api', isLive: true };
  } catch (error) {
    console.error('Failed to fetch live Instagram feed:', error);
    return {
      data: DEFAULT_INSTAGRAM_FEED,
      source: 'error_fallback',
      isLive: false,
      error: error.message,
    };
  }
}
