import React, { useState } from 'react';
import styles from './SearchModal.module.css'; // CSS Module

function SearchModal({ onClose }) {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  

  const dummyData = {
      'blue_sky': '정하늘',
      'taeyeon_ss': '김태연',
      'dntlrdl': '정우식',
      '_jeongjaehyun': '정재현',
      'i_icaruswalks' : '이청아',
      'sw_Lim59': '임소원',
      'seo_hee77' : '박서희',
      'johnnyjsuh' : '서영호',
      'postmalone' : '포스트 말론'
    };
    
  

  // 여기에서 query를 사용하여 실제로 검색을 수행하고 결과를 setSearchResults로 설정.
    const handleSearch = (query) => {
    if (!query) {
      // 검색어가 없는 경우 결과 초기화
      setSearchResults([]);
      return;
    }
    // let dummyResults = [];
    // for (let key in dummyData) {
    //     if (key.includes(query)) {
    //         dummyResults.push(dummyData[key]);
    //     }
    // }
    
    const results = Object.keys(dummyData).filter(key =>  key.includes(query));
    

    // 검색 결과를 상태 변수에 설정 setSearchResults([...검색 결과 배열]);
    setSearchResults(results);

  };


  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.searchContainer}>
          <input 
            className={styles.searchInput} 
            placeholder='검색' 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
              // 입력값이 변경될 때마다 handleSearch 호출
            }} 
            />

           <button 
           className={styles.searchButton} 
           onClick={() => handleSearch(searchQuery)}
            >버튼</button>
        </div>

          {/* 검색 결과(추천 검색어) 표시 */}
          {searchQuery && (
             < div className={styles.searchresults}>
                {searchResults.map((result, index) => (
                   <div key={index}>{result}</div>
                ))}
        </div>
        )}
        <div>
        {/* {searchQuery && (
             < div className={styles.results}>
                {searchResults.map((result, index) => (
                   <textarea className={styles.textarea} key={index}value={result} readOnly />
                ))}
              </div>
        )} */}
      
      <button className={styles.closeButton} onClick={onClose}>
        <img src="img/close.png" alt="Close" className={styles.closeImage} />
      </button>

    </div>
    </div>
    </div>
  );
}

export default SearchModal;