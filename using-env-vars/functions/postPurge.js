import { purgeURL, purgeCacheKey, purgeWildCard } from 'azion/purge';

const postPurge = async (type, urls) => {
  try {
    const urlList = urls ? urls.split('\n').filter(url => url.trim() !== '') : [];
    
    if (urlList.length === 0) {
      throw new Error('No valid URL provided');
    }

    let result;
    switch (type) {
      case 'url':
        result = await purgeURL(urlList);
        break;
      case 'cacheKey':
        result = await purgeCacheKey(urlList);
        break;
      case 'wildcard':
        result = await purgeWildCard(urlList);
        break;
      default:
        throw new Error('Invalid purge type');
    }
    return result;
  } catch (error) {
    console.error('Error executing purge:', error);
    return { error: error.message };
  }
};

export default postPurge;