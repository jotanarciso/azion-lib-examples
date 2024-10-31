const postPurge = async (client, type, urls) => {
  try {
    let result;
    const urlList = urls ? urls.split('\n').filter(url => url.trim() !== '') : [];
    
    if (urlList.length === 0) {
      throw new Error('No valid URL provided');
    }

    switch (type) {
      case 'url':
        result = await client.purge.purgeURL(urlList);
        break;
      case 'cacheKey':
        result = await client.purge.purgeCacheKey(urlList);
        break;
      case 'wildcard':
        result = await client.purge.purgeWildCard(urlList);
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