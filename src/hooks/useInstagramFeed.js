import { useState, useEffect } from 'react';
import { fetchLiveInstagramFeed } from '../services/instagramService';

export function useInstagramFeed() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLive, setIsLive] = useState(false);

  const loadFeed = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchLiveInstagramFeed();
      setFeed(result.data);
      setIsLive(result.isLive);
      if (result.error) {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message || 'Unable to load Instagram feed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeed();
  }, []);

  return {
    feed,
    loading,
    error,
    isLive,
    refetch: loadFeed,
  };
}
