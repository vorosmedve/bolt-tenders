import React, { useState, useEffect } from 'react';
    import { Routes, Route } from 'react-router-dom';
    import axios from 'axios';
    import Home from './components/Home';
    import TenderDetails from './components/TenderDetails';
    import localTenders from './data/tenders.json';
    import './App.css';

    function App() {
      const [tenders, setTenders] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const fetchTenders = async () => {
          try {
            // Attempt to fetch from API
            const response = await axios.get(
              'https://api.contractsfinder.service.gov.uk/contracts',
              {
                headers: {
                  'Accept': 'application/json',
                  'X-Requested-With': 'XMLHttpRequest'
                }
              }
            );
            
            // If API fails, use local data
            if (response.data) {
              setTenders(response.data);
            } else {
              setTenders(localTenders);
            }
          } catch (error) {
            console.error('Error fetching tenders, using local data:', error);
            setTenders(localTenders);
          } finally {
            setLoading(false);
          }
        };

        fetchTenders();
      }, []);

      return (
        <div className="app">
          <Routes>
            <Route path="/" element={<Home tenders={tenders} loading={loading} />} />
            <Route path="/tender/:id" element={<TenderDetails tenders={tenders} />} />
          </Routes>
        </div>
      );
    }

    export default App;
