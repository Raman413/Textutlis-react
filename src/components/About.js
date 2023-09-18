import React from 'react';
import download from './download.jpg'
export default function About() {
  return (
  <>
  <h3 className="my-3">About us</h3>
<div className="card mb-3" rows = "10">
  <img src={download} alt="Textbot AI" className='banner'/>
  <div className="card-body">
    <h5 className="card-title">Textbot AI</h5>
    <p className="card-text">Text analysis is the process of using computer systems to read and understand human-written text for business insights. Text analysis software can independently classify, sort, and extract information from text to identify patterns, relationships, sentiments, and other actionable knowledge. You can use text analysis to efficiently and accurately process multiple text-based sources such as emails, documents, social media content, and product reviews, like a human would.</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
  </div>
</>
  )
}
