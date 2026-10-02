import React from 'react';

export const Toast = ({ toasts }) => {
  return (
    <div className="toast-container" id="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
