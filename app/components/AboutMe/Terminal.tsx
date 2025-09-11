"use client";

import React, { useState, useEffect, useRef } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import {
    TerminalContainer,
    TerminalContent,
    TerminalLine,
    PromptSpan,
    OutputText,
    FullscreenButton,
    TerminalHeader,
    InputField,
    InputLine,
    AsciiArt
} from './Terminal.styles';

type CommandResult = {
    text: string;
    isCommand?: boolean;
    isAsciiArt?: boolean;
    isError?: boolean;
};

export default function Terminal() {
    const [input, setInput] = useState<string>("");
    const [history, setHistory] = useState<CommandResult[]>([
        {
            text: `    ______                         __
   / ____/   ______ _____         / /___ _____ ___  _____  ____
  / __/ | | / / __ \`/ __ \\   __  / / __ \`/ __ \`/ / / / _ \\/_  /
 / /___ | |/ / /_/ / / / /  / /_/ / /_/ / /_/ / /_/ /  __/ / /_
/_____/ |___/\\__,_/_/ /_/   \\____/\\__,_/\\__, /\\__,_/\\___/ /___/
                                          /_/
`,
            isCommand: false,
            isAsciiArt: true
        },
        { text: "Welcome to my interactive terminal! Type 'help' for a list of commands.", isCommand: false },
    ]);

    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const commands: { [key: string]: () => string } = {
        help: () =>
            "Available commands:\n" +
            "  help      - display this help message\n" +
            "  education - view my relevant coursework and education\n" +
            "  activities - view my extracurricular activities\n" +
            "  location - learn about where im based\n" +
            "  clear     - clear the terminal\n" +
            "  about     - learn more about this terminal\n",

        education: () =>
            " Boston University\n" +
            "   - Bachelor's in Computer Science & Economics\n" +
            "   - Minor in Data Science\n" +
            " Relevant Coursework: \n" +
            "   - CS391 - Web and App Development\n" +
            "   - CS411 - Software Engineering\n" +
            "   - CS330 - Intro to Advanced Algorithms \n" +
            "   - DS291 - Spark! Software Engineering Career Prep Practicum \n" +
            "   - DS488/688 - UX Design Practicum",

        activities: () =>
            " BU Drumline & Marching Band\n" +
            "   - Bass Drum: Fall 2023 - Fall 2024\n" +
            "   - Snare Drum: Spring 2024 - Present\n" +
            " Film Lovers and Philosophers Club\n" +
            "   - Member since Fall 2023",

        location: () =>
            " Boston, MA\n" +
            "   - Student at BU Jan 2023- May 2026\n" +
            " Danbury, CT\n",

        clear: () => {
            setHistory([]);
            return "";
        },

        about: () =>
            " This terminal was built with React and styled-components.\n" +
            " Features:\n" +
            "   - Command history navigation (up/down arrows)\n" +
            "   - Copy to clipboard\n" +
            "   - Clear terminal\n"
    };

    const handleContainerClick = () => {
        inputRef.current?.focus();
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (input.trim() === "") return;

        const newHistory = [...history, { text: input, isCommand: true }];
        const commandName = input.trim().toLowerCase().split(" ")[0];

        if (commands[commandName]) {
            const result = commands[commandName]();
            if (result) {
                newHistory.push({ text: result });
            }
        } else {
            newHistory.push({
                text: `Command not found: ${commandName}. Type 'help' for available commands.`,
                isError: true
            });
        }

        setHistory(newHistory);
        setCommandHistory([input, ...commandHistory]);
        setHistoryIndex(-1);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                setHistoryIndex(historyIndex + 1);
                setInput(commandHistory[historyIndex + 1]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                setHistoryIndex(historyIndex - 1);
                setInput(commandHistory[historyIndex - 1]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        } else if (e.key === "Enter") {
            handleSubmit(e);
        } else if (e.key === "Tab") {
            e.preventDefault();
            const currentInput = input.trim().toLowerCase();

            // Simple tab completion
            if (currentInput) {
                const matchingCommands = Object.keys(commands).filter(cmd =>
                    cmd.startsWith(currentInput)
                );

                if (matchingCommands.length === 1) {
                    setInput(matchingCommands[0]);
                }
            }
        }
    };
    const clearTerminal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setHistory([]);
    };

    const copyToClipboard = (e: React.MouseEvent) => {
        e.stopPropagation();

        const terminalContent = history
            .map(item => {
                if (item.isCommand) {
                    return `travler@evanjaquez:~$ ${item.text}`;
                }
                return item.text;
            })
            .join('\n');

        navigator.clipboard.writeText(terminalContent).then(() => {
            setShowCopiedMessage(true);
            setTimeout(() => setShowCopiedMessage(false), 2000);
        });
    };

    useEffect(() => {
        inputRef.current?.focus();
        terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
    }, [history]);

    return (
        <TerminalContainer onClick={handleContainerClick}>
            <TerminalHeader>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{
                        fontFamily: 'monospace',
                        color: '#f8f8f2',
                        opacity: 0.7,
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }}>
                        terminal@evanjaquez
                    </span>
                    {showCopiedMessage && (
                        <span style={{
                            color: '#50fa7b',
                            fontSize: '12px',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            Copied to clipboard!
                        </span>
                    )}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <FullscreenButton onClick={copyToClipboard} title="Copy to clipboard">
                        <ContentCopyIcon fontSize="small" />
                    </FullscreenButton>
                    <FullscreenButton onClick={clearTerminal} title="Clear terminal">
                        <ClearIcon fontSize="small" />
                    </FullscreenButton>
                </div>
            </TerminalHeader>
            <TerminalContent ref={terminalRef}>
                {history.map((item, index) => (
                    <TerminalLine key={index}>
                        {item.isAsciiArt && <AsciiArt>{item.text}</AsciiArt>}
                        {!item.isAsciiArt && item.isCommand && (
                            <>
                                <PromptSpan>travler@evanjaquez:~$ </PromptSpan>
                                <OutputText>{item.text}</OutputText>
                            </>
                        )}
                        {!item.isAsciiArt && !item.isCommand && (
                            <OutputText isError={item.isError}>{item.text}</OutputText>
                        )}
                    </TerminalLine>
                ))}
                <TerminalLine>
                    <InputLine>
                        <PromptSpan>travler@evanjaquez:~$ </PromptSpan>
                        <InputField
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={handleInput}
                            onKeyDown={handleKeyDown}
                            autoFocus
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </InputLine>
                </TerminalLine>
            </TerminalContent>
        </TerminalContainer>
    );
}