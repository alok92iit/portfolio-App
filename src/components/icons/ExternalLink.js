import React from 'react'
import "./icons.css"
const ExternalLink = () => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        role="img" 
        viewBox="0 0 32 32" 
        fill="none" 
        stroke='var(--slate)' 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        height="34px" width="34px" 
        class="feather feather-external-link externalLink">
            <title>External Link</title>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3">
        </line>
    </svg>
  )
}

export default ExternalLink