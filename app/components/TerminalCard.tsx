"use client";

import React, { useState, useRef, useCallback, memo } from 'react';
import styled from 'styled-components';

const TerminalCard = () => {
  const [output, setOutput] = useState<string[]>(['Welcome to Contact Terminal']);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    step: 'name'
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = useCallback(async (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    // Handle clear command from any step
    if (cmd === 'clear') {
      setFormData({ name: '', email: '', message: '', step: 'name' });
      setOutput(['Welcome to Contact Terminal']);
      setHistory([]);
      setHistoryIndex(-1);
      setInput('');
      return;
    }
    
    if (formData.step === 'name') {
      setFormData(prev => ({ ...prev, name: command, step: 'email' }));
      setOutput(prev => ['Welcome to Contact Terminal', 'Please enter your email:']);
    } else if (formData.step === 'email') {
      setFormData(prev => ({ ...prev, email: command, step: 'message' }));
      setOutput(prev => ['Welcome to Contact Terminal', 'Please enter your message:']);
    } else if (formData.step === 'message') {
      setFormData(prev => ({ ...prev, message: command, step: 'confirm' }));
      setOutput(prev => ['Welcome to Contact Terminal', 
        '\nPlease review your message:',
        `\nName: ${formData.name}`,
        `Email: ${formData.email}`,
        `Message: ${command}`,
        '\nType "send" to send or "clear" to start over:'
      ]);
    } else if (formData.step === 'confirm') {
      if (cmd === 'send') {
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            // Clear everything and show only success messages
            setOutput([]);
            
            setTimeout(() => {
              setOutput(['✔ Preflight checks.']);
              
              setTimeout(() => {
                setOutput(['✔ Preflight checks.', '✔ Checking registry.']);
                
                setTimeout(() => {
                  setOutput(['✔ Preflight checks.', '✔ Checking registry.', '✔ Message sent successfully!']);
                  
                  setTimeout(() => {
                    setFormData({ name: '', email: '', message: '', step: 'name' });
                    setOutput(['Welcome to Contact Terminal']);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          } else {
            setOutput(prev => ['Welcome to Contact Terminal', 'Failed to send message. Please try again.']);
          }
        } catch (error) {
          setOutput(prev => ['Welcome to Contact Terminal', 'Error sending message. Please try again.']);
        }
      } else if (cmd === 'clear') {
        setFormData({ name: '', email: '', message: '', step: 'name' });
        setOutput(['Welcome to Contact Terminal']);
        setHistory([]);
        setHistoryIndex(-1);
        setInput('');
      } else {
        setOutput(prev => ['Welcome to Contact Terminal', 'Invalid command. Type "send" to send or "clear" to start over:']);
      }
    }
    
    setHistory(prev => [...prev, command]);
    setHistoryIndex(-1);
    setInput('');
  }, [formData]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  }, [input, history, historyIndex, handleCommand]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const getPlaceholder = useCallback(() => {
    switch (formData.step) {
      case 'name':
        return 'Enter your name...';
      case 'email':
        return 'Enter your email...';
      case 'message':
        return 'Enter your message...';
      default:
        return 'Type "send" or "clear"...';
    }
  }, [formData.step]);

  return (
    <StyledWrapper>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">Contact Me</h2>
      <div className="container">
        <div className="terminal_toolbar">
          <div className="butt">
            <button className="btn btn-color" />
            <button className="btn" />
            <button className="btn" />
          </div>
          <p className="user">sanjay@admin: ~</p>
          <div className="add_tab">+</div>
        </div>
        <div className="terminal_body">
          <div className="terminal_prompt">
            <span className="terminal_user">sanjay@admin:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <span className="terminal_cursor" />
          </div>
          <div className="terminal_output">
            {output.map((line, index) => (
              <pre key={index} className={`output_text ${line.startsWith('✔') ? 'success' : ''}`}>{line}</pre>
            ))}
          </div>
          <div className="terminal_input">
            <input
              ref={inputRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={getPlaceholder()}
              className="input_text"
              type="text"
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .gradient-text {
    background: linear-gradient(45deg, #5B4DFB, #8F7BF7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(91, 77, 251, 0.3);
  }
  
  .container {
    width: 400px;
    height: 300px;
    background: transparent;
    font-family: Menlo, Consolas, monospace;
    font-size: 14px;
    color: #e6e6e6;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .terminal_toolbar {
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: transparent;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .butt {
    display: flex;
    align-items: center;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 5px;
    font-size: 8px;
    height: 12px;
    width: 12px;
    box-sizing: border-box;
    border: none;
    border-radius: 100%;
    background: linear-gradient(#7d7871 0%, #595953 100%);
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
  }

  .btn-color {
    background: #ee411a;
  }

  .btn:hover {
    cursor: pointer;
  }

  .btn:focus {
    outline: none;
  }

  .butt--exit {
    background: linear-gradient(#f37458 0%, #de4c12 100%);
  }

  .add_tab {
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.7);
    padding: 0 6px;
    border-radius: 4px 4px 0 0;
    border-bottom: none;
    cursor: pointer;
  }

  .user {
    color: rgba(213, 208, 206, 0.8);
    margin-left: 6px;
    font-size: 14px;
    line-height: 15px;
  }

  .terminal_body {
    background: transparent;
    height: calc(100% - 30px);
    padding-top: 2px;
    margin-top: -1px;
    font-size: 12px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  .terminal_prompt {
    display: flex;
    align-items: center;
    padding: 4px;
  }

  .terminal_prompt span {
    margin-left: 4px;
  }

  .terminal_user {
    color: #4878c0;
    text-shadow: 0 0 10px rgba(72, 120, 192, 0.3);
  }

  .terminal_location {
    color: #4878c0;
    text-shadow: 0 0 10px rgba(72, 120, 192, 0.3);
  }

  .terminal_bling {
    color: #4878c0;
    text-shadow: 0 0 10px rgba(72, 120, 192, 0.3);
  }

  .terminal_cursor {
    display: block;
    height: 14px;
    width: 5px;
    margin-left: 10px;
    animation: curbl 1200ms linear infinite;
  }

  .terminal_output {
    padding: 4px;
    flex-grow: 1;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }
  }

  .output_text {
    margin: 0;
    white-space: pre-wrap;
    color: #e6e6e6;
    
    &.success {
      color: #00ff00;
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    }
  }

  .terminal_input {
    padding: 4px;
  }

  .input_text {
    width: 100%;
    padding: 6px;
    background: transparent;
    border: none;
    color: #e6e6e6;
    caret-color: #1eff8e;
    font-family: inherit;
  }

  .input_text:focus {
    outline: none;
  }

  @keyframes curbl {
    0% {
      background: #ffffff;
    }

    49% {
      background: #ffffff;
    }

    60% {
      background: transparent;
    }

    99% {
      background: transparent;
    }

    100% {
      background: #ffffff;
    }
  }`;

export default memo(TerminalCard); 