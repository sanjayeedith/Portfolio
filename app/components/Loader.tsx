import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="socket">
        {[...Array(37)].map((_, i) => (
          <div key={i} className={`gel ${i === 0 ? 'center-gel' : `c${i} r${Math.ceil(i / 6)}`}`}>
            <div className="hex-brick h1" />
            <div className="hex-brick h2" />
            <div className="hex-brick h3" />
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .socket {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 50%;
    margin-top: -100px;
  }

  .hex-brick {
    background: #000000;
    width: 30px;
    height: 17px;
    position: absolute;
    top: 5px;
    animation: fade00 2s infinite;
  }

  .h2 {
    transform: rotate(60deg);
  }

  .h3 {
    transform: rotate(-60deg);
  }

  .gel {
    height: 30px;
    width: 30px;
    transition: all 0.3s;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .center-gel {
    margin-left: -15px;
    margin-top: -15px;
    animation: pulse00 2s infinite;
  }

  @keyframes fade00 {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
  }

  @keyframes pulse00 {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  ${[...Array(37)].map((_, i) => {
    if (i === 0) return '';
    const angle = (i * 10) % 360;
    const radius = Math.ceil(i / 6) * 30;
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    return `
      .c${i} {
        margin-left: ${x - 15}px;
        margin-top: ${y - 15}px;
        animation: pulse${i} 2s infinite;
        animation-delay: ${i * 0.1}s;
      }

      @keyframes pulse${i} {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
    `;
  }).join('\n')}
`;

export default Loader; 