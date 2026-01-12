import React from 'react';
// This assumes you have a data/citations.json file.
// You might need to adjust the import path based on your Docusaurus setup.
// @ts-ignore
import citationsData from '@site/static/data/citations.json';

function CitationList() {
  if (!citationsData || citationsData.length === 0) {
    return <p>No citations found.</p>;
  }

  return (
    <div>
      <h2>References</h2>
      <ul>
        {citationsData.map((citation: any, index: number) => (
          <li key={citation.id || index}>
            [{index + 1}] {citation.author && `${citation.author[0].family}, ${citation.author[0].given}`} et al.
            <i>{citation.title}</i>. {citation.publisher}, {citation['issued']['date-parts'][0][0]}.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitationList;
