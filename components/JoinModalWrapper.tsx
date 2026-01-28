"use client";

import { useJoinModal } from "@/components/JoinModalProvider";
import JoinModal from "@/components/JoinModal";

export default function JoinModalWrapper() {
  const { isOpen, closeModal } = useJoinModal();
  return <JoinModal isOpen={isOpen} onClose={closeModal} />;
}
