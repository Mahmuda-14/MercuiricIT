import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="max-w-lg mx-auto uppercase text-center italic">
        <div style={{ borderTop: '2px dashed blue',marginTop:'20px', padding:'5px' }}></div>
        <h2 className="text-3xl font-semibold">{heading}</h2>
        <h2 className="text-lg text-blue-600">{subheading}</h2>
        
        <div style={{ borderBottom: '2px dashed blue',marginBottom:'20px',padding:'5px' }}></div>
      </div>
    );
};

export default SectionTitle;