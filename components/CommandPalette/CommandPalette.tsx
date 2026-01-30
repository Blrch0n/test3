"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Hash, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCommandPalette } from "./useCommandPalette";
import { useJoinModal } from "../JoinModalProvider";
import { NAV_ITEMS, EXTERNAL_LINKS } from "@/lib/siteNav";

interface CommandItem {
  id: string;
  label: string;
  type: "route" | "external" | "action";
  href?: string;
  description?: string;
}

const buildCommands = (): CommandItem[] => {
  const routeCommands: CommandItem[] = NAV_ITEMS.map((item) => ({
    id: item.id,
    label: item.label,
    type: "route" as const,
    href: item.path,
    description: getRouteDescription(item.id),
  }));

  const externalCommands: CommandItem[] = EXTERNAL_LINKS.map((link) => ({
    id: link.id,
    label: link.label,
    type: "external" as const,
    href: link.href,
    description: link.description,
  }));

  const actionCommands: CommandItem[] = [
    {
      id: "join",
      label: "Join Sys&CoTech",
      type: "action",
      description: "Apply for membership",
    },
  ];

  return [...actionCommands, ...routeCommands, ...externalCommands];
};

function getRouteDescription(id: string): string {
  const descriptions: Record<string, string> = {
    home: "Hero section",
    about: "Who we are",
    core: "Six pillars",
    training: "Programs",
    showcase: "Member projects",
    events: "Activities",
    faq: "Questions",
    contact: "Get in touch",
  };
  return descriptions[id] || "";
}

export default function CommandPalette() {
  const { isOpen, closePalette, openCount } = useCommandPalette();
  const { openModal } = useJoinModal();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo(() => buildCommands(), []);

  const filteredCommands = useMemo(() => {
    if (!search.trim()) return commands;
    const query = search.toLowerCase();
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(query) ||
        cmd.description?.toLowerCase().includes(query),
    );
  }, [search, commands]);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleSelectCommand = useCallback(
    (cmd: CommandItem) => {
      closePalette();

      if (cmd.type === "action") {
        if (cmd.id === "join") {
          setTimeout(() => openModal(), 100);
        }
      } else if (cmd.type === "route") {
        setTimeout(() => {
          router.push(cmd.href!);
        }, 100);
      } else {
        window.open(cmd.href, "_blank", "noopener,noreferrer");
      }
    },
    [closePalette, openModal, router],
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (filteredCommands.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) =>
            (prev - 1 + filteredCommands.length) % filteredCommands.length,
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleSelectCommand(filteredCommands[selectedIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, handleSelectCommand]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key={openCount}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-200 flex items-start justify-center pt-[15vh] px-4"
        onClick={closePalette}
      >
        {}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

        {}
        <motion.div
          initial={{ scale: 0.96, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.96, y: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-[var(--border-line)]" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-[var(--border-line)]" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-[var(--border-line)]" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-[var(--border-line)]" />

          <div className="bg-[var(--bg-base)]/95 backdrop-blur-2xl border border-[var(--border-line)] rounded-xl shadow-2xl overflow-hidden">
            {}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-[var(--border-line)]">
              <Search className="w-5 h-5 text-[var(--text-muted)]" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search commands..."
                className="flex-1 bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none text-sm"
              />
              <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                ESC
              </span>
            </div>

            {}
            <div className="max-h-100 overflow-y-auto">
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-8 text-center text-[var(--text-muted)] text-sm">
                  No results found
                </div>
              ) : (
                <div className="py-2">
                  {filteredCommands.map((cmd, index) => (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelectCommand(cmd)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                        index === selectedIndex
                          ? "bg-[var(--bg-surface-active)] border-l-2 border-(--accent-blue)"
                          : "hover:bg-[var(--bg-surface-hover)]"
                      }`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)]">
                        {cmd.type === "route" ? (
                          <Hash className="w-4 h-4 text-(--accent-cyan)" />
                        ) : cmd.type === "action" ? (
                          <UserPlus className="w-4 h-4 text-(--accent-blue)" />
                        ) : (
                          <ExternalLink className="w-4 h-4 text-(--accent-pink)" />
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-sm font-medium text-[var(--text-primary)]">
                          {cmd.label}
                        </div>
                        {cmd.description && (
                          <div className="text-xs text-[var(--text-muted)]">
                            {cmd.description}
                          </div>
                        )}
                      </div>
                      {cmd.type === "route" && (
                        <span className="text-[9px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
                          GO
                        </span>
                      )}
                      {cmd.type === "action" && (
                        <span className="text-[9px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
                          ACTION
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-[var(--border-line)] bg-[var(--bg-surface)]">
              <div className="flex items-center gap-4 text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-line)]">
                    ↑↓
                  </kbd>
                  NAVIGATE
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-line)]">
                    ↵
                  </kbd>
                  SELECT
                </span>
              </div>
              <span className="text-[9px] font-mono text-[var(--text-mono)] tracking-wider">
                COMMAND PALETTE
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
