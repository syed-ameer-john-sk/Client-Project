/**
 * Consultant sur Mesure - Dynamic Job Board
 * Fetches job postings from a public Google Sheet using JSONP.
 */

// Unique Callback Name to avoid collisions
const CALLBACK_NAME = 'csm_jobs_callback';
const BASE_URL = 'https://docs.google.com/spreadsheets/d/1cIDSBxpqz8AXTuMnuQ_A2iTFZCGHwdBbrVxPAiZw1Nc/gviz/tq';

document.addEventListener('DOMContentLoaded', () => {
    initJobLoader();
});

function initJobLoader() {
    const container = document.getElementById('jobs-container');
    if (!container) return;

    // Show loading state
    container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--gray-text);">
            <div class="spinner" style="margin-bottom: 16px;">Loading opportunities...</div>
        </div>
    `;

    // Define Global Callback
    window[CALLBACK_NAME] = function (data) {
        try {
            console.log('Use of Google Sheets API data received:', data);
            const jobs = parseGvizData(data);
            renderJobs(jobs, container);
        } catch (error) {
            console.error('Job Parsing Error:', error);
            showError('Data Error');
        }
    };

    // Create script tag with cache-busting
    const script = document.createElement('script');
    const timestamp = new Date().getTime();
    script.src = `${BASE_URL}?tqx=responseHandler:${CALLBACK_NAME}&tq=&_=${timestamp}`;

    script.onerror = (e) => {
        console.error('Job Script Load Error:', e);
        showError('Connection Failed');
    };

    document.body.appendChild(script);
}

function stopLoading() {
    const container = document.getElementById('jobs-container');
    if (container) container.innerHTML = '';
}

function showError(type) {
    const container = document.getElementById('jobs-container');
    if (!container) return;

    container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--gray-text);">
            <p>Unable to load jobs (${type}).</p>
            <p style="font-size: 0.8em; margin-top: 8px;">Please check your connection.</p>
            <a href="https://linkedin.com" target="_blank" class="btn btn-outline" style="margin-top: 16px;">Check our LinkedIn</a>
        </div>
    `;
}

function parseGvizData(data) {
    if (!data || !data.table || !data.table.rows) {
        throw new Error('Invalid Data Structure');
    }

    // Google Viz API structure: data.table.cols (headers), data.table.rows (data)
    // We assume fixed column order based on our template:
    // 0: Title, 1: Category, 2: Tags, 3: Location, 4: Type, 5: Link, 6: Status

    return data.table.rows.map(row => {
        const c = row.c;
        if (!c) return null;

        // Helper to safely get value (v = value, f = formatted)
        const getVal = (idx) => {
            if (!c[idx]) return '';
            return c[idx].v !== null ? String(c[idx].v).trim() : '';
        };

        return {
            Title: getVal(0),
            Category: getVal(1),
            Tags: getVal(2),
            Location: getVal(3),
            Type: getVal(4),
            Link: getVal(5),
            Status: getVal(6)
        };
    }).filter(job => job && job.Status && job.Status.toLowerCase() === 'active');
}

function renderJobs(jobs, container) {
    if (jobs.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 60px; color: var(--gray-text);">
                <h3>No open positions currently</h3>
                <p>Feel free to send us a spontaneous application.</p>
            </div>
        `;
        return;
    }

    // Insert into DOM
    container.innerHTML = jobs.map((job, index) => {
        // Determine Icon based on Category
        let iconPath = '';
        const cat = job.Category ? job.Category.toLowerCase() : '';

        if (cat.includes('clinical')) {
            iconPath = `<rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />`;
        } else if (cat.includes('data') || cat.includes('digital')) {
            iconPath = `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />`;
        } else if (cat.includes('regulatory') || cat.includes('quality')) {
            iconPath = `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />`;
        } else {
            iconPath = `<rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />`;
        }

        // Parse Tags
        const tagsHtml = job.Tags
            ? job.Tags.split(',').map(t => `<span class="job-tag">${t.trim()}</span>`).join('')
            : '';

        const delay = index * 0.1;

        return `
            <div class="job-card animate-in" style="transition-delay: ${delay}s">
                <div class="job-header">
                    <div class="job-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            ${iconPath}
                        </svg>
                    </div>
                    <div class="job-info-col">
                        <h3 class="job-title">${job.Title}</h3>
                        <div class="job-tags">
                            ${tagsHtml}
                        </div>
                    </div>
                </div>

                <div class="job-details">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        ${job.Location}
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                        ${job.Type}
                    </span>
                </div>
                <a href="${job.Link}" target="_blank" class="btn btn-outline" data-i18n="btn_apply">Apply Now →</a>
            </div>
        `;
    }).join('');

    // Trigger Animation (Force Visibility)
    setTimeout(() => {
        const newCards = container.querySelectorAll('.job-card');
        newCards.forEach(card => card.classList.add('visible'));
    }, 100);
}
