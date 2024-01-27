"use client";

import React, { useEffect, useState } from "react";
import { Modal } from "../custom/modal";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}
const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  loading,
  onClose,
  onConfirm,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  /*
    purpose of this is to avoid hydration
    this will be added to the root layouts file which is a server component
    and this is a client component
    */
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone."
      isOpen={isOpen}
      onClose={onClose}
    ></Modal>
  );
};

export default AlertModal;
