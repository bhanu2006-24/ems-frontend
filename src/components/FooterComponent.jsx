import React from 'react';

const FooterComponent = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-default)',
            padding: '8px 0',
            marginTop: '48px',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '12px'
        }}>
            <div className="container" style={{ padding: '0 24px' }}>
                © {new Date().getFullYear()} Employee Management System
            </div>
        </footer>
    );
};

export default FooterComponent;