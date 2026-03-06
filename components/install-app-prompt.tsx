"use client";

import { Download, Share, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

const DISMISS_KEY = "install-app-prompt-dismissed-at";
const DISMISS_FOR_MS = 1000 * 60 * 60 * 24 * 7;

// Capture the event at module level so it's never missed even if React
// hasn't hydrated yet when the browser dispatches beforeinstallprompt.
let savedPromptEvent: BeforeInstallPromptEvent | null = null;

if (typeof window !== "undefined") {
  window.addEventListener(
    "beforeinstallprompt",
    (e) => {
      e.preventDefault();
      savedPromptEvent = e as BeforeInstallPromptEvent;
    },
    { once: true },
  );
}

function wasRecentlyDismissed() {
  if (typeof window === "undefined") {
    return false;
  }

  const dismissedAt = window.localStorage.getItem(DISMISS_KEY);

  if (!dismissedAt) {
    return false;
  }

  return Date.now() - Number(dismissedAt) < DISMISS_FOR_MS;
}

function dismissPrompt() {
  window.localStorage.setItem(DISMISS_KEY, Date.now().toString());
}

function isStandaloneMode() {
  if (typeof window === "undefined") {
    return false;
  }

  const navigatorWithStandalone = window.navigator as Navigator & {
    standalone?: boolean;
  };

  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    Boolean(navigatorWithStandalone.standalone)
  );
}

function isIosDevice() {
  if (typeof window === "undefined") {
    return false;
  }

  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

export default function InstallAppPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showIosHint, setShowIosHint] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (isStandaloneMode() || wasRecentlyDismissed()) {
      return;
    }

    // In development, show the prompt UI unconditionally so it can be
    // styled and tested. The real beforeinstallprompt event only fires
    // over HTTPS (production) or on localhost in Chrome.
    if (process.env.NODE_ENV === "development") {
      setIsVisible(true);
      return;
    }

    if (savedPromptEvent) {
      setDeferredPrompt(savedPromptEvent);
      savedPromptEvent = null;
      setIsVisible(true);
      return;
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      const installEvent = event as BeforeInstallPromptEvent;

      installEvent.preventDefault();
      setDeferredPrompt(installEvent);
      setShowIosHint(false);
      setIsVisible(true);
    };

    const handleAppInstalled = () => {
      window.localStorage.removeItem(DISMISS_KEY);
      setDeferredPrompt(null);
      setShowIosHint(false);
      setIsVisible(false);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener,
    );
    window.addEventListener("appinstalled", handleAppInstalled);

    if (isIosDevice()) {
      setShowIosHint(true);
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener,
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  async function handleInstall() {
    if (!deferredPrompt) {
      return;
    }

    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;

    setDeferredPrompt(null);

    if (choice.outcome === "accepted") {
      window.localStorage.removeItem(DISMISS_KEY);
      setIsVisible(false);
      return;
    }

    dismissPrompt();
    setIsVisible(false);
  }

  function handleDismiss() {
    dismissPrompt();
    setIsVisible(false);
  }

  const isDev = process.env.NODE_ENV === "development";

  if (!isVisible || (!isDev && !deferredPrompt && !showIosHint)) {
    return null;
  }

  return (
    <Card className="fixed inset-x-4 bottom-4 z-100 mx-auto max-w-md bg-background/95 shadow-xl backdrop-blur">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Download className="size-4" />
          </div>
          <CardTitle className="text-sm">Install this app</CardTitle>
        </div>

        <CardAction>
          <Button
            variant="ghost"
            size="icon-sm"
            className="shrink-0"
            onClick={handleDismiss}
            aria-label="Dismiss install prompt"
          >
            <X className="size-4" />
          </Button>
        </CardAction>

        <CardDescription>
          {showIosHint && !deferredPrompt
            ? "On iPhone or iPad, open the Share menu and choose Add to Home Screen to install this site like an app."
            : "Save this portfolio to your home screen for faster access and a full-screen app experience."}
        </CardDescription>
      </CardHeader>

      {!deferredPrompt && showIosHint ? (
        <CardContent>
          <div className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">
            <Share className="size-3.5" />
            <span>Share</span>
            <span>/</span>
            <span>Add to Home Screen</span>
          </div>
        </CardContent>
      ) : null}

      <CardFooter className="gap-2">
        {deferredPrompt || isDev ? (
          <Button size="sm" onClick={handleInstall}>
            Install app
          </Button>
        ) : null}

        <Button variant="outline" size="sm" onClick={handleDismiss}>
          Maybe later
        </Button>
      </CardFooter>
    </Card>
  );
}
