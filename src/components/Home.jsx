import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import Search from './Search';

    function Home({ tenders, loading }) {
      const [searchTerm, setSearchTerm] = useState('');

      const filteredTenders = tenders.filter(tender => 
        tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tender.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (loading) return <div className="loading">Loading tenders...</div>;

      return (
        <div className="home">
          <h1>UK Government Procurement Tenders</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          
          <div className="tenders-list">
            {filteredTenders.map(tender => (
              <div key={tender.id} className="tender-card">
                <h2>{tender.title}</h2>
                <p>{tender.description.substring(0, 200)}...</p>
                <p><strong>Published:</strong> {new Date(tender.publishedDate).toLocaleDateString()}</p>
                <Link to={`/tender/${tender.id}`} className="details-link">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Home;
