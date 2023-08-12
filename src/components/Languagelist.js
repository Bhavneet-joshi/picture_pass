import React, { useEffect, useState } from 'react'
export default function LanguageList({ selectedLanguage, onSelectLanguage }) {
    const [languages, setLanguages] = useState([]);
  
    useEffect(() => {
      const fetchLanguages = async () => {
        try {
          const response = await fetch(
            'https://api.themoviedb.org/3/configuration/languages?api_key=6cb47492a1b8e813721571c6352d2ea2'
          );
  
          const data = await response.json();
          setLanguages(data);
        } catch (error) {
          console.error('Error fetching languages:', error);
        }
      };
  
      fetchLanguages();
    }, []);
  
    return (
      <select
        value={selectedLanguage}
        onChange={(e) => onSelectLanguage(e.target.value)}
        className='cursor-pointer rounded p-1 inline text-red-600'
      >
        <option value=''>Select a language</option>
        {languages.map((language) => (
          <option key={language.iso_639_1} value={language.iso_639_1}>
            {language.english_name}
          </option>
        ))}
      </select>
    );
  }
  