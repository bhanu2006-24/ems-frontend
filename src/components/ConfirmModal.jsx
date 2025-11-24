import React from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, confirmText = "Delete", cancelText = "Cancel" }) => {
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.2s ease'
                }}
                onClick={onClose}
            >
                {/* Modal */}
                <div
                    style={{
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-default)',
                        borderRadius: '6px',
                        padding: '24px',
                        maxWidth: '450px',
                        width: '90%',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                        animation: 'slideUp 0.2s ease'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Modal Header */}
                    <h3 style={{
                        margin: '0 0 16px 0',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: 'var(--text-primary)'
                    }}>
                        {title}
                    </h3>

                    {/* Modal Body */}
                    <p style={{
                        margin: '0 0 24px 0',
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                    }}>
                        {message}
                    </p>

                    {/* Modal Actions */}
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        justifyContent: 'flex-end'
                    }}>
                        <button
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            {cancelText}
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                        >
                            {confirmText}
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
};

export default ConfirmModal;
