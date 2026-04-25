import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { servicesCategories } from '../../data/servicesData';
import './Services.css';

function Services() {
    const { theme } = useContext(ThemeContext);
    const [activeTab, setActiveTab] = useState(0);

    const activeCategory = servicesCategories[activeTab];

    return (
        <div className="services" id="services" style={{ backgroundColor: theme.secondary }}>

            {/* Header */}
            <div className="services-header">
                <h1 style={{ color: theme.primary }}>Services</h1>
            </div>

            <div className="services-body">
                <p style={{ color: theme.tertiary80 }}>
                    Reach out to me if I can help you with any of these services!
                </p>

                {/* Category Tabs */}
                <div className="services--tabs">
                    {servicesCategories.map((cat, index) => (
                        <button
                            key={cat.id}
                            className={`services--tab ${activeTab === index ? 'services--tab-active' : ''}`}
                            style={{
                                borderColor: activeTab === index ? theme.primary : `${theme.primary}30`,
                                color: activeTab === index ? theme.secondary : theme.primary,
                                backgroundColor: activeTab === index ? theme.primary : 'transparent',
                                boxShadow: activeTab === index ? `0 0 12px ${theme.primary}60` : 'none',
                            }}
                            onClick={() => setActiveTab(index)}
                        >
                            <span className="services--tab-icon">{cat.icon}</span>
                            {cat.category}
                        </button>
                    ))}
                </div>

                {/* Category Description */}
                <p className="services--desc" style={{ color: theme.tertiary80 }}>
                    {activeCategory.description}
                </p>

                {/* Services Grid */}
                <div className="services-bodycontainer services--grid">
                    {activeCategory.services.map((service) => (
                        <div
                            key={service.id}
                            className="single-service"
                            style={{
                                backgroundColor: '#0d0d0d',
                                border: `1px solid ${theme.primary}20`,
                                boxShadow: `0 0 15px ${theme.primary}10`,
                            }}
                        >
                            <div className="service-content" style={{ color: theme.primary }}>
                                <i className="service-icon">{service.icon}</i>
                                <h4 style={{ color: theme.tertiary }}>{service.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;