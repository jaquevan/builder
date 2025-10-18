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
            text: ` ▘
 ▌▀▌▛▌▌▌█▌▌▌▀▌▛▌  ▛▘▛▌▛▛▌
 ▌█▌▙▌▙▌▙▖▚▘█▌▌▌▗ ▙▖▙▌▌▌▌
▙▌   ▌                   `,
            isCommand: false,
            isAsciiArt: true
        },
        { text: "Welcome to my terminal! Type 'help' for a list of commands.", isCommand: false },
    ]);

    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const commands: { [key: string]: () => string | { text: string; isAsciiArt?: boolean } } = {
        help: () =>
            "Available commands:\n" +
            "  help       - display this help message\n" +
            "  education  - view my relevant coursework\n" +
            "  activities - view my extracurricular activities\n" +
            "  music      - learn about my passion for drumming\n" +
            "  location   - learn about where I'm based\n" +
            "  interests  - what I enjoy beyond coding\n" +
            "  skills     - show my technical skills\n" +
            "  contact    - get in touch with me\n" +
            "  cat        - meet my friend\n" +
            "  wave       - say hello!\n" +
            "  clear      - clear the terminal\n" +
            "  about      - learn more about this terminal\n",

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
            "   - Clear terminal\n",

        skills: () =>
            " Technologies & Tools:\n\n" +
            "   [Languages]\n" +
            "   JavaScript    TypeScript    Python    Java    C\n\n" +
            "   [Frontend]\n" +
            "   React         Next.js       Tailwind  MUI\n" +
            "   HTML/CSS      Three.js      Vite\n\n" +
            "   [Backend & Database]\n" +
            "   Node.js       Express       Flask\n" +
            "   MongoDB       PostgreSQL    Firebase\n\n" +
            "   [Tools & Design]\n" +
            "   Git           Docker        Podman    AWS\n" +
            "   Figma         Adobe         Jest      Slack\n" +
            "   Linux         Ubuntu        Vercel\n",

        music: () =>
            " Music & Drumming:\n\n" +
            " Being part of the BU Drumline has been one of my favorite\n" +
            " experiences at college. I started on bass drum and moved to\n" +
            " snare drum - both require precision, timing, and teamwork.\n\n" +
            " The discipline from drumming actually translates well to\n" +
            " programming: both require practice, attention to detail,\n" +
            " and the ability to work in sync with others.\n\n" +
            " Fun fact: The rhythm of debugging code and playing rhythms\n" +
            " on a snare drum are surprisingly similar!\n",

        interests: () =>
            " Beyond Code:\n\n" +
            " Film & Philosophy:\n" +
            "   Member of the Film Lovers and Philosophers Club.\n" +
            "   I love dissecting movies and discussing big ideas.\n\n" +
            " Food:\n" +
            "   Always on the hunt for the best spots in Boston.\n" +
            "   If you have recommendations, let me know!\n\n" +
            " Music:\n" +
            "   Drumline, marching band, and discovering new artists.\n\n" +
            " These interests keep me creative and give me perspective\n" +
            " that I bring back to my technical work.\n",

        contact: () =>
            " Let's Connect:\n\n" +
            " I'm always interested in connecting with people who are\n" +
            " passionate about technology, design, or just want to chat!\n\n" +
            " Find me on:\n" +
            "   GitHub: github.com/jaquevan\n" +
            "   LinkedIn: Check the footer of this site\n" +
            "   Email: Available on my GitHub profile\n\n" +
            " Feel free to reach out about projects, opportunities,\n" +
            " or just to say hello!\n",

        cat: () => ({
            text: `
      (\\_/)
     (='.'=)
    (\")--(\")

    *meow*`,
            isAsciiArt: true
        }),

        wave: () => ({
            text: `
      o
     /|\\    Hello there!
     / \\

     ___________________
    < Nice to meet you! >
     -------------------
          \\   ^__^
           \\  (oo)\\_______
              (__)\\       )\\/\\
                  ||----w |
                  ||     ||

    Thanks for stopping by!`,
            isAsciiArt: true
        })
    };

    const handleContainerClick = () => {
        setHasInteracted(true);
        inputRef.current?.focus();
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (input.trim() === "") return;

        const commandName = input.trim().toLowerCase().split(" ")[0];

        // Handle clear command specially
        if (commandName === "clear") {
            setHistory([]);
            setCommandHistory([input, ...commandHistory]);
            setHistoryIndex(-1);
            setInput("");
            return;
        }

        const newHistory = [...history, { text: input, isCommand: true }];

        if (commands[commandName]) {
            const result = commands[commandName]();
            if (result) {
                if (typeof result === 'string') {
                    newHistory.push({ text: result });
                } else {
                    newHistory.push({ text: result.text, isAsciiArt: result.isAsciiArt });
                }
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
        if (hasInteracted) {
            inputRef.current?.focus();
        }
        if (terminalRef.current) {
            terminalRef.current.scrollTo(0, terminalRef.current.scrollHeight);
        }
    }, [history, hasInteracted]);

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
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </InputLine>
                </TerminalLine>
            </TerminalContent>
        </TerminalContainer>
    );
}