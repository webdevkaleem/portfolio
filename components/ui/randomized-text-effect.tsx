"use client";

import {
  type ElementType,
  Fragment,
  useEffect,
  useMemo,
  useState,
} from "react";
import { cn } from "@/lib/utils";

const DEFAULT_STEP_DURATION_MS = 50;
const DEFAULT_REVEAL_DURATION_MS = 80;
const DEFAULT_INITIAL_RANDOM_DURATION_MS = 500;

type SupportedTag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type ContentToken =
  | { type: "word"; value: string }
  | { type: "space"; value: string }
  | { type: "break" };

export type RandomizedTextEffectProps<TTag extends SupportedTag = "p"> = {
  content: string;
  randomizedCharacters?: string;
  as?: TTag;
  className?: string;
  stepDurationMs?: number;
  revealDurationMs?: number;
  initialRandomDurationMs?: number;
} & Omit<React.ComponentPropsWithoutRef<TTag>, "as" | "children" | "className">;

function shuffleText(input: string) {
  const chars = input.split("");
  for (let i = chars.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
}

function isPermutationOfContent(content: string, candidate: string) {
  if (content.length !== candidate.length) return false;
  return (
    content.split("").sort().join("") === candidate.split("").sort().join("")
  );
}

function parseContentTokens(content: string) {
  const chunks = content.split(/(<br\s*\/?>)/gi);
  const tokens: ContentToken[] = [];

  for (const chunk of chunks) {
    if (!chunk) continue;
    if (/^<br\s*\/?>$/i.test(chunk)) {
      tokens.push({ type: "break" });
      continue;
    }

    const parts = chunk.split(/(\s+)/);
    for (const part of parts) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        tokens.push({ type: "space", value: part });
      } else {
        tokens.push({ type: "word", value: part });
      }
    }
  }

  return tokens;
}

function getRandomCharFromPool(pool: string, fallback: string) {
  if (!pool.length) return fallback;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function RandomizedTextEffect<TTag extends SupportedTag = "p">({
  content,
  randomizedCharacters,
  as,
  className,
  stepDurationMs = DEFAULT_STEP_DURATION_MS,
  revealDurationMs = DEFAULT_REVEAL_DURATION_MS,
  initialRandomDurationMs = DEFAULT_INITIAL_RANDOM_DURATION_MS,
  ...rest
}: RandomizedTextEffectProps<TTag>) {
  const Component = (as ?? "p") as ElementType;
  const tokens = useMemo(() => parseContentTokens(content), [content]);
  const words = useMemo(
    () =>
      tokens
        .filter(
          (token): token is Extract<ContentToken, { type: "word" }> =>
            token.type === "word",
        )
        .map((token) => token.value),
    [tokens],
  );
  const plainContent = useMemo(() => words.join(""), [words]);
  const [animatedWords, setAnimatedWords] = useState<string[]>(words);

  const randomPool = useMemo(() => {
    const normalizedRandomizedCharacters = randomizedCharacters
      ? randomizedCharacters.replace(/<br\s*\/?>/gi, "").replace(/\s+/g, "")
      : undefined;
    const basePool =
      normalizedRandomizedCharacters &&
      isPermutationOfContent(plainContent, normalizedRandomizedCharacters)
        ? normalizedRandomizedCharacters
        : shuffleText(plainContent);
    return basePool.length ? basePool : plainContent;
  }, [plainContent, randomizedCharacters]);

  useEffect(() => {
    let isCancelled = false;
    const wait = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const generateRandomizedWord = (word: string) =>
      word
        .split("")
        .map((char) => getRandomCharFromPool(randomPool, char))
        .join("");

    const generateRandomizedWords = () => words.map(generateRandomizedWord);

    const revealWordsAtProgress = (progress: number) =>
      words.map((word) => {
        const revealCount = Math.floor(progress * word.length);
        if (revealCount >= word.length) return word;

        const randomizedTail = word
          .slice(revealCount)
          .split("")
          .map((char) => getRandomCharFromPool(randomPool, char))
          .join("");
        return word.slice(0, revealCount) + randomizedTail;
      });

    const run = async () => {
      setAnimatedWords(generateRandomizedWords());

      const initialEndTime = Date.now() + initialRandomDurationMs;
      while (!isCancelled && Date.now() < initialEndTime) {
        await wait(stepDurationMs);
        if (isCancelled) return;
        setAnimatedWords(generateRandomizedWords());
      }

      if (revealDurationMs <= 0) {
        setAnimatedWords(words);
        return;
      }

      const revealStartTime = Date.now();
      while (!isCancelled) {
        const elapsed = Date.now() - revealStartTime;
        const progress = Math.min(1, elapsed / revealDurationMs);
        setAnimatedWords(revealWordsAtProgress(progress));

        if (progress >= 1) break;
        await wait(stepDurationMs);
      }

      setAnimatedWords(words);
    };

    run();

    return () => {
      isCancelled = true;
    };
  }, [
    words,
    randomPool,
    stepDurationMs,
    revealDurationMs,
    initialRandomDurationMs,
  ]);

  let wordIndex = 0;
  const renderedContent = tokens.map((token, tokenIndex) => {
    if (token.type === "break") {
      return <br key={`br-${tokenIndex}`} />;
    }

    if (token.type === "space") {
      return <Fragment key={`space-${tokenIndex}`}>{token.value}</Fragment>;
    }

    const value = animatedWords[wordIndex] ?? token.value;
    wordIndex += 1;
    return <Fragment key={`char-${tokenIndex}`}>{value}</Fragment>;
  });

  return (
    <Component className={cn("relative inline-block", className)} {...rest}>
      {renderedContent}
    </Component>
  );
}
