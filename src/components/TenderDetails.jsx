import React from 'react';
    import { useParams } from 'react-router-dom';

    function TenderDetails({ tenders }) {
      const { id } = useParams();
      const tender = tenders.find(t => t.id === id);

      if (!tender) return <div>Tender not found</div>;

      return (
        <div className="tender-details">
          <h1>{tender.title}</h1>
          <p>{tender.description}</p>
          <p><strong>Published:</strong> {new Date(tender.publishedDate).toLocaleDateString()}</p>
          <p><strong>Value:</strong> {tender.value?.amount} {tender.value?.currency}</p>
          <a href={tender.documents[0]?.url} target="_blank" rel="noopener noreferrer">
            View Tender Documents
          </a>
        </div>
      );
    }

    export default TenderDetails;
